import "./App.css";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddMember from "./pages/AddFamilyMember";
import MemberAccount from "./pages/MemberAccount";
import NotFound from "./pages/NotFound";
import FamilyList from "./components/FamilyList";
import { useState, useEffect } from "react";
import axios from "axios";
// import axios from "axios";

function App() {
  // const [member, setMember] = useState();
  // const [choreList, setChoreList] = useState([]);
  // const [selectedChore, setSelectedChore] = useState([]);
  // const [selectedReward, setSelectedReward] = useState([]);
  // const [familyList, setFamilyList] = useState([]);
  // const [rewardList, setRewardList] = useState([]);
  // const URL = "https://sweet-home-backend.herokuapp.com"

  const choreList = [
    {
      id: 1,
      title: "wash the dishes",
      points: 10,
      is_completed: false,
    },
    {
      id: 2,
      title: "walk the dog",
      points: 20,
      is_completed: false,
    },
    {
      id: 3,
      title: "clean your room",
      points: 30,
      is_completed: false,
    },
    {
      id: 1,
      title: "wash the dishes",
      points: 10,
      is_completed: false,
    },
    {
      id: 2,
      title: "walk the dog",
      points: 20,
      is_completed: false,
    },
    {
      id: 3,
      title: "clean your room",
      points: 30,
      is_completed: false,
    },
  ];

  const rewardList = [
    {
      id: 1,
      title: "movie theater",
      points: 10,
    },
    {
      id: 2,
      title: "$ 10 cash",
      points: 20,
    },
    {
      id: 3,
      title: "extra video game time",
      points: 30,
    },
  ];

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
  //     .get(`${URL}/rewards`)
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

  //  const getAllFamily = () => {
  //   axios
  //     .get(`${URL}/members`)
  //     .then((res) => {
  //       const memberData = res.data.map((member) => {
  //         return {
  //           ...member,
  //         };
  //       });
  //       setFamilyList(memberData);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // useEffect(getAllFamily, []);

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

  // const addMember= (newFamilyData) => {
  //     axios
  //       .post(`${URL}/members`, newFamilyData)
  //       .then(() => {
  //         getAllFamily();
  //       })
  //       .catch((error) => console.log(error));
  //   };

  // const selectMember=(memberId)=>{
  //   axios
  //   .get(`${URL}/members/${memberId}`)
  //   .then((res)=>{
  //     setMember(res.data)
  //     setSelectedChore(member.chores)
  //     setSelectedReward(member.rewards)
  //   })
  //   .catch((error) => console.log(error));
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
  //     .patch(`${URL}/${choreId}/${member.id}`)
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
  //     .patch(`${URL}/${rewardId}/${member.id}`)
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

  const markComplete = (choreToUpdate) => {
    // console.log("updateTask called");
    axios
    .patch(`${URL}/chores/${choreId}/markComplete`)
      .then(() => {
        const updateMarkComplete = choreList.map((chore) => {
          if (chore.id === choreToUpdate.id) {
            return choreToUpdate;
          }
          return chore;
        });
        setSelectedChore(updateMarkComplete);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/chores"
          element={
            <Home
              choreList={choreList}
              familyList={familyList}
              deleteChore={deleteChore}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/addMember" element={<AddFamilyMember addMember={addMember}/> }/>
        <Route
          path="/memberAccount"
          element={
            <MemberAccount
              rewardList={rewardList}
              deleteReward={deleteReward}
              selectChore={selectChore}
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
