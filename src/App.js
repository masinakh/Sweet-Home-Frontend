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
  const [member, setMember] = useState();
  const [choreList, setChoreList] = useState([]);
  const [selectedChore, setSelectedChore] = useState([]);
  const [selectedReward, setSelectedReward] = useState([]);
  const [familyList, setFamilyList] = useState([]);
  const [familyId, setFamilyId] = useState();
  const [rewardList, setRewardList] = useState([]);
  // const URL = "https://sweet-home-backend.herokuapp.com"
  const URL = "http://127.0.0.1:5000";
  
  // const getAllChores = () => {
  //   axios
  //     .get(`${URL}/chores/${member.family_id}`)
  //     .then((res) => {
  //       const choreData = res.data.map((chore) => {
  //         return {
  //           ...chore,
  //         };
  //       });
  //       setChoreList(choreData);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // useEffect(getAllChores, []);

  // const getAllRewards = () => {
  //   axios
  //     .get(`${URL}/rewards/${member.family_id}`)
  //     .then((res) => {
  //       const rewardData = res.data.map((reward) => {
  //         return {
  //           ...reward,
  //         };
  //       });
  //       setRewardList(rewardData);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // useEffect(getAllRewards, []);

   const getAllFamily = () => {
    axios
      .get(`${URL}/members/${familyId}`)
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
  useEffect(getAllFamily, [familyId]);

  // const addChore= (newChoreData) => {
  //   axios
  //     .post(`${URL}/chores`, newChoreData)
  //     .then(() => {
  //       getAllChores();
  //     })
  //     .catch((error) => console.log(error));
  // };

  // const addReward= (newRewardData) => {
  //   axios
  //     .post(`${URL}/rewards`, newRewardData)
  //     .then(() => {
  //       getAllRewards();
  //     })
  //     .catch((error) => console.log(error));
  // };

  const addMember= (newFamilyData) => {
      axios
        .post(`${URL}/members`, newFamilyData)
        .then((res) => {
          console.log(res.data)
          getAllFamily();
        })
        .catch((error) => console.log(error));
    };

  const selectMember=(memberId)=>{
    axios
    .get(`${URL}/members/${memberId}`)
    .then((res)=>{
      setMember(res.data)
      console.log(member)
      setSelectedChore(member.chores)
      setSelectedReward(member.rewards)
    })
    .catch((error) => console.log(error));
  }

  // const deleteChore = (choreId) => {
  //   axios
  //     .delete(`${URL}/chores/${choreId}`)
  //     .then((res) => {
  //       const newChores = choreList.filter((chore) => chore.id !== choreId);
  //       setChoreList(newChores);
  //     })
  //     .catch((error) => console.log(error));
  // };

  // const deleteReward = (rewardId) => {
  //   axios
  //     .delete(`${URL}/rewards/${rewardId}`)
  //     .then((res) => {
  //       const newRewards = rewardList.filter(
  //         (reward) => reward.id !== rewardId
  //       );
  //       setRewardList(newRewards);
  //     })
  //     .catch((error) => console.log(error));
  // };

  // const selectChore = (choreId) => {
  //   axios
  //     .patch(`${URL}/chores/${choreId}/${member.id}`)
  //     .then(() => {
  //       const newSelectedChore = [...selectedChore];
  //       for (const chore of choreList) {
  //         if (chore.id === choreId) {
  //           newSelectedChore.push(chore);
  //         }
  //       }
  //       setSelectedChore(newSelectedChore);
  //     })
  //     .catch((error) => console.log(error));
  // };

  // const selectReward = (rewardId) => {
  //   axios
  //     .patch(`${URL}/rewards/${rewardId}/${member.id}`)
  //     .then(() => {
  //       const newSelectedReward = [...selectReward];
  //       for (const reward of rewardList) {
  //         if (reward.id === rewardId) {
  //           newSelectedReward.push(reward);
  //         }
  //       }
  //       setSelectedReward(newSelectedReward);
  //     })
  //     .catch((error) => console.log(error));
  // };

  // const markComplete = (choreToUpdate) => {
  //   // console.log("updateTask called");
  //   axios
  //   .patch(`${URL}/chores/${choreToUpdate.id}/markComplete`)
  //     .then(() => {
  //       const updateMarkComplete = choreList.map((chore) => {
  //         if (chore.id === choreToUpdate.id) {
  //           return choreToUpdate;
  //         }
  //         return chore;
  //       });
  //       setSelectedChore(updateMarkComplete);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const createNewFamily = () => {
    axios
      .post(`${URL}/family`)
      .then((res) => {
        setFamilyId(res.data.id)
        console.log("Response from family route:", res.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login createNewFamily={createNewFamily} />} />
        <Route
          path="/addMember"
          element={
            <AddFamilyMember
              familyId={familyId}
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
                
                // deleteChore={deleteChore}
            />
          }
        />
        <Route
          path="/memberAccount"
          element={
            <MemberAccount
              rewardList={rewardList}
              // deleteReward={deleteReward}
              // selectChore={selectChore}
              // selectReward={selectReward}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
