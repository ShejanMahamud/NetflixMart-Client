// src/components/AdminChatList.jsx
import React from 'react';

const AdminChatList = ({ users, onSelectUser }) => {
  return (
    <div className="admin-chat-list w-1/4 bg-gray-200 p-4 overflow-y-auto">
      <h3 className="text-lg font-semibold">Users</h3>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => onSelectUser(user.id)}
            className="cursor-pointer p-2 hover:bg-gray-300 rounded"
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminChatList;
