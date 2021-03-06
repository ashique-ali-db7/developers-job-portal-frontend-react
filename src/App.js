import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Signup from "./Pages/User/Signup";
import Signin from "./Pages/User/Signin";
import Home from "./Pages/User/Home";
import Addprofile from "./Pages/User/Addprofile";
import EmailOtp from "./Pages/User/EmailOtp";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; ///To acces state.
import { update_user } from "./Redux/user/userSlice"; ///importing action.
import AdminSignin from "./Pages/Admin/AdminSignin";
import Dashboard from "./Pages/Admin/Dashboard";
import DeveloperListPage from "./Pages/User/DeveloperListPage";
import {allUsers} from './Api/UserApi'
import Profile from "./Pages/User/Profile";

function App() {
  let navigation = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
  
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    dispatch(
      update_user({
        userDetails: user,
      })
    );

    if (user) {
    } else {
      navigation("/signin");
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/addprofile" element={<Addprofile />} />
        <Route path="/otp" element={<EmailOtp />} />
        <Route path="developers" element={<DeveloperListPage/>} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/admin" element={<AdminSignin />} />
         
        <Route path="/admin/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
