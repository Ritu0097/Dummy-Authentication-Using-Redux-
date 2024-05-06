import React, { useState, useEffect } from 'react';
import './Profile.css'; // Import the CSS file for profile page styling

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem('id');
    if (id) {
      fetch(`https://dummyjson.com/users/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch user profile');
          }
          return res.json();
        })
        .then((data) => {
          setUser(data); 
        })
        .catch((error) => {
          console.error('Error fetching user profile:', error);
        });
    }
  }, []);

  return (
    <div className="profile-card">
      <h1 className="profile-heading">Profile</h1>
      {user && (
        <div className="profile-info">
          <p><label>Id:</label> <span className="user-data">{user.id}</span></p>
          <p><label>Username:</label> <span className="user-data">{user.username}</span></p>
          <p><label>Email:</label> <span className="user-data">{user.email}</span></p>
          <p><label>First Name:</label> <span className="user-data">{user.firstName}</span></p>
          <p><label>Last Name:</label> <span className="user-data">{user.lastName}</span></p>
          <p><label>Gender:</label> <span className="user-data">{user.gender}</span></p>
          <img className="user-image" src={user.image} alt="User" />
        </div>
      )}
    </div>
  );
}

export default Profile;
