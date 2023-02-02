import "./App.css";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddMember from "./pages/AddMember";
import MemberAccount from "./pages/MemberAccount";
import NotFound from "./pages/NotFound";
import {useState , useEffect} from "react";
import axios from "axios";

function App() {

// const [member, setMember]= useState()
// const [choreList, setChoreList]= useState([])
// const [memberList, setMemberList]= useState([])
// const[rewardList, setRewardList]= useState([])
// const URL = "https://sweet-home-backend.herokuapp.com"

const choreList =[
  {
  id:1,
  title:'wash the dishes',
  points:10,
  is_completed:false
  },
  {
  id:2,
  title:'walk the dog',
  points:20,
  is_completed:false
  },
  {
  id:3,
  title:'clean your room',
  points:30,
  is_completed:false
  }
]


const rewardList =[
  {
  id:1,
  title:'movie theater',
  points:10,
  },
  {
  id:2,
  title:'$ 10 cash',
  points:20,
  },
  {
  id:3,
  title:'extra video game time',
  points:30,
  }
]


// const getAllChores = () =>{
//   axios.get(`${URL}/chores`)
//   .then((res) =>{
//     const choreData = res.data.map((chore) => {
//       return {
//         ...chore,
//       };
//     });
//     setChoreList(choreData);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// }
// useEffect(getAllChores, []);




  return (
    <div className="App">
      
      <Routes>
        <Route path="/chores" element={<Home choreList={choreList}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/addMember" element={<AddMember />} />
        <Route path="/memberAccount" element={<MemberAccount rewardList={rewardList}/>} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
  );
}

export default App;
