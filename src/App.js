import "./App.css";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AddMember } from "./pages/AddMember";
import { MemberAccount } from "./pages/MemberAccount";
import { NotFound } from "./pages/NotFound";
import {useState , useEffect} from "react";

function App() {

const [member, setMember]= useState()
const [choreList, setChoreList]= useState([])
const [memberList, setMemberList]= useState([])
const[rewardList, setRewardList]= useState([])


  return (
    <div className="App">
      
      <Routes>
        <Route path="/chores" element={<Home choreList={choreList}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/addMember" element={<AddMember />} />
        <Route path="/memberAccount" element={<MemberAccount />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
  );
}

export default App;
