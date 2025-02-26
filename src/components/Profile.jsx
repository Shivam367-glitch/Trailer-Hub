
// import './Profile.css';
import { Link } from "react-router-dom"; 
import {auth} from "../utils/firebase";
const Profile = () => {
    return (
        <div className="profile-menu ">
            <div className="profile-header text-center">
                <img src={`${auth?.currentUser?.photoURL}`} alt="Profile" className="profile-pic w-50" />
                <h2 className="profile-name text-white">{auth?.currentUser?.displayName}</h2>
            </div>
            <ul className="profile-options">
                <li><Link to="/my-list">My List</Link></li>
                <li><Link to="/watch-history">Watch History</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </div>
    );
};

export default Profile;