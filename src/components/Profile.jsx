
// import './Profile.css';
import { Link } from "react-router-dom";
const Profile = () => {
    return (
        <div className="profile-menu">
            <div className="profile-header">
                <img src="path/to/profile-pic.jpg" alt="Profile" className="profile-pic" />
                <h2 className="profile-name">User Name</h2>
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