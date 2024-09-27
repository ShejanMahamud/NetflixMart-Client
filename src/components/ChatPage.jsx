// src/pages/ChatPage.jsx
import cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode'; // Ensure you have jwt-decode installed
import React, { useEffect, useState } from 'react';
import AdminChatList from './AdminChatList';
import Chat from './Chat';

const ChatPage = ({ userId }) => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = cookies.get('token'); // Get token from cookies
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.email === 'dev.shejanmahamud@gmail.com') {
        setIsAdmin(true);
        // Fetch users connected to the admin
        fetchUsers(); // Function to fetch users
      }
    }
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users'); // Adjust this endpoint as necessary
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };

  return (
    <div className="flex h-screen">
      {isAdmin && <AdminChatList users={users} onSelectUser={setSelectedUserId} />}
      <Chat isAdmin={isAdmin} userId={userId} recipientId={selectedUserId || '66f08950855d4a0f640947eb'} />
    </div>
  );
};

export default ChatPage;
