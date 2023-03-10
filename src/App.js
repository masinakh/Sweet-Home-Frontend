import "./App.css";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddFamilyMember from "./pages/AddFamilyMember";
import MemberAccount from "./pages/MemberAccount";
import NotFound from "./pages/NotFound";
// import FamilyList from "./components/FamilyList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [member, setMember] = useState({
    email: "",
    family_id: 0,
    id: 0,
    is_parent: true,
    name: "",
    points: 0,
    chores: [],
    rewards: [],
  });
  const [choreList, setChoreList] = useState([]);
  const [selectedChore, setSelectedChore] = useState([]);
  const [selectedReward, setSelectedReward] = useState([]);
  const [familyList, setFamilyList] = useState([]);
  // const [familyId, setFamilyId] = useState(0);
  const [rewardList, setRewardList] = useState([]);
  const URL = "https://sweet-home-backend.herokuapp.com";
  // const URL = "http://127.0.0.1:5000";

  const getAllChores = () => {
    // console.log("we are in get all chores", familyId);
    axios
      .get(`${URL}/chores/${member.family_id}`)
      .then((res) => {
        const choreData = res.data.map((chore) => {
          return {
            ...chore,
          };
        });
        setChoreList(choreData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // useEffect(getAllChores, []);

  const getAllRewards = () => {
    axios
      .get(`${URL}/rewards/${member.family_id}`)
      .then((res) => {
        const rewardData = res.data.map((reward) => {
          return {
            ...reward,
          };
        });
        setRewardList(rewardData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // useEffect(getAllRewards, []);

  const getAllFamily = (id = member.family_id) => {
    console.log("we are inside getAllFamily", URL, id);

    axios
      .get(`${URL}/members/${id}`)
      .then((res) => {
        const memberData = res.data.map((member) => {
          return {
            ...member,
          };
        });
        setFamilyList(memberData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // useEffect(getAllFamily, [familyId]);

  const addChore = (newChoreData) => {
    axios
      .post(`${URL}/chores`, newChoreData)
      .then(() => {
        getAllChores();
      })
      .catch((error) => console.log(error));
  };

  const addReward = (newRewardData) => {
    console.log(newRewardData);
    axios
      .post(`${URL}/rewards`, newRewardData)
      .then(() => {
        getAllRewards();
      })
      .catch((error) => console.log(error));
  };

  const addMember = (newFamilyData) => {
    console.log(newFamilyData);
    axios
      .post(`${URL}/members`, newFamilyData)
      .then((res) => {
        console.log(res.data);
        getAllFamily();
      })
      .catch((error) => console.log(error));
  };

  const selectMember = (memberId) => {
    console.log("my memberId is", memberId);
    axios
      .get(`${URL}/members/${memberId}/member`)
      .then((res) => {
        console.log("*******", res.data.member);
        setMember(res.data.member);
        // console.log("this is the member", member);
        console.log("inside select member");
        const unCompletedSelectedChores =res.data.member.chores.filter(chore => chore.is_completed === false) 
        setSelectedChore(unCompletedSelectedChores);
        setSelectedReward(res.data.member.rewards);
        getAllChores();
        getAllRewards();
      })
      .catch((error) => console.log(error));
  };

  const updateMember = (passwordIdData) => {
    console.log("passwordIdData Is ", passwordIdData);
    const parseIntPassword = parseInt(passwordIdData.password);

    console.log("This is updateMemberData:", parseIntPassword);
    setMember({ ...member, family_id: parseIntPassword });
    console.log("Member is", member);
    getAllFamily(parseIntPassword);
  };

  const deleteChore = (choreId) => {
    axios
      .delete(`${URL}/chores/${choreId}`)
      .then((res) => {
        const newChores = choreList.filter((chore) => chore.id !== choreId);
        setChoreList(newChores);
      })
      .catch((error) => console.log(error));
  };

  const deleteReward = (rewardId) => {
    axios
      .delete(`${URL}/rewards/${rewardId}`)
      .then((res) => {
        const newRewards = rewardList.filter(
          (reward) => reward.id !== rewardId
        );
        setRewardList(newRewards);
      })
      .catch((error) => console.log(error));
  };

  const selectChore = (choreId) => {
    axios
      .patch(`${URL}/chores/${choreId}/${member.id}`)
      .then(() => {
        const newSelectedChore = [...selectedChore];
        for (const chore of choreList) {
          if (chore.id === choreId) {
            newSelectedChore.push(chore);
          }
        }
        setSelectedChore(newSelectedChore);
        setChoreList(choreList.filter((chore) => chore.id !== choreId));
      })
      .catch((error) => console.log(error));
  };

  const selectReward = (rewardId) => {
    axios
      .patch(`${URL}/rewards/${rewardId}/${member.id}`)
      .then(() => {
        const newSelectedReward = [...selectedReward];
        for (const reward of rewardList) {
          if (reward.id === rewardId) {
            if (reward.points <= member.points) {
              newSelectedReward.push(reward);
              const updatedPoints = member.points - reward.points;
              setMember({
                ...member,
                points: updatedPoints,
              });
            } else {
              alert("Oops, your points is not enough. keep going!");
            }
          }
        }
        setSelectedReward(newSelectedReward);
      })
      .catch((error) => console.log(error));
  };

  const markComplete = (choreToUpdate) => {
    axios
      .patch(`${URL}/chores/${choreToUpdate.id}/mark_complete`)
      .then(() => {
        for (const chore of selectedChore){
          if (chore.id === choreToUpdate.id) {
                const updatedPoints = member.points + choreToUpdate.points;
                setMember({
                  ...member,
                  points: updatedPoints,
                });
        }}
        const updateMarkComplete = selectedChore.filter(chore => chore.id !==choreToUpdate.id )
        // const updateMarkComplete = selectedChore.map((chore) => {
        //   if (chore.id === choreToUpdate.id) {
        //     const updatedPoints = member.points + choreToUpdate.points;
        //     setMember({
        //       ...member,
        //       points: updatedPoints,
        //     });
        //     return choreToUpdate;
        //   }
        //   return chore;
        // });
        setSelectedChore(updateMarkComplete);
        console.log("updated chore list");
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const createNewFamily = () => {
    axios
      .post(`${URL}/family`)
      .then((res) => {
        setMember({
          ...member,
          family_id: res.data.id,
        });
        // console.log("Response from family route:", res.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Login
              createNewFamily={createNewFamily}
              updateMember={updateMember}
            />
          }
        />
        <Route
          path="/addMember"
          element={
            <AddFamilyMember
              familyId={member.family_id}
              addMember={addMember}
              familyList={familyList}
              selectMember={selectMember}
            />
          }
        />
        <Route
          path="/home"
          element={
            <Home
              choreList={choreList}
              addChore={addChore}
              member={member}
              deleteChore={deleteChore}
              selectChore={selectChore}
              markComplete={markComplete}
              selectedChore={selectedChore}
            />
          }
        />
        <Route
          path="/memberAccount"
          element={
            <MemberAccount
              selectedReward={selectedReward}
              member={member}
              addReward={addReward}
              rewardList={rewardList}
              deleteReward={deleteReward}
              selectReward={selectReward}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
