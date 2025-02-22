
// import './Profile.css';

const Profile = () => {
    return (
        <div className="profile-menu">
            <div className="profile-header">
                <img src="path/to/profile-pic.jpg" alt="Profile" className="profile-pic" />
                <h2 className="profile-name">User Name</h2>
            </div>
            <ul className="profile-options">
                <li><a href="/my-list">My List</a></li>
                <li><a href="/watch-history">Watch History</a></li>
                <li><a href="/settings">Settings</a></li>
                <li><a href="/logout">Logout</a></li>
            </ul>
        </div>
    );
};

export default Profile;