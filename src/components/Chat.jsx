// src/components/Chat.jsx
import cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const Chat = ({ isAdmin, userId, recipientId }) => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const token = cookies.get('token');
    if (!token) {
      console.error('No authentication token found.');
      return;
    }

    const newSocket = io('http://localhost:4732', {
      auth: { token },
    });

    setSocket(newSocket);

    newSocket.on('connect', () => {
      console.log('Connected to Socket.IO server');
    });

    newSocket.on('receiveMessage', (data) => {
      setMessages((prev) => [...prev, data.message]);
    });

    newSocket.on('typing', () => {
      setIsTyping(true);
    });

    newSocket.on('stopTyping', () => {
      setIsTyping(false);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [recipientId]);

  const sendMessage = () => {
    if (input.trim() === '') return;
  
    socket.emit('sendMessage', {
      recipientId, // This should be the selected user's ID
      content: input,
      senderId: userId, // Pass the sender's ID (admin's ID)
    });
  
    // Update local messages state for the admin's view
    setMessages((prev) => [
      ...prev,
      { content: input, sender: userId, createdAt: new Date() },
    ]);
    setInput('');
    socket.emit('stopTyping', { recipientId });
  };

  const handleTyping = () => {
    if (socket) {
      socket.emit('typing', { recipientId });
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="chat-header bg-blue-500 text-white p-4 flex justify-between items-center">
        <h3 className="text-lg font-semibold">{isAdmin ? 'Chat with Users' : 'Chat with Admin'}</h3>
      </div>
      <div className="messages flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-4 flex ${msg.sender === recipientId ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-xs p-2 rounded-lg ${msg.sender === recipientId ? 'bg-white text-gray-800' : 'bg-blue-500 text-white'}`}>
              <p className="text-sm">{msg.content}</p>
              <span className="block text-xs text-right mt-1">{new Date(msg.createdAt).toLocaleTimeString()}</span>
            </div>
          </div>
        ))}
        {isTyping && <div className="mb-4 flex justify-start"><div className="max-w-xs p-2 rounded-lg bg-white text-gray-800">Admin is typing...</div></div>}
      </div>
      <div className="input-area p-4 bg-white flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            handleTyping();
          }}
          placeholder="Type a message..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 mr-2"
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
