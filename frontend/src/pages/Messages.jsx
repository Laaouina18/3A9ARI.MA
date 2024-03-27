import React, { useState } from 'react';

function MessagesDashboard() {
    const [message, setMessage] = useState('');
    const [conversations, setConversations] = useState([
        {
            id: 1,
            owner: {
                name: "John Doe",
                avatar: "https://randomuser.me/api/portraits/men/1.jpg"
            },
            messages: [
                { user_id: 1, message: "Hello!" },
                { user_id: 2, message: "Hi there!" }
            ]
        },
        {
            id: 2,
            owner: {
                name: "Jane Smith",
                avatar: "https://randomuser.me/api/portraits/women/2.jpg"
            },
            messages: [
                { user_id: 1, message: "How are you?" },
                { user_id: 2, message: "I'm good, thanks!" }
            ]
        }
    ]);

    const handleSendMessage = (conversationId) => {
        // You can implement your send message logic here
        console.log(`Sending message in conversation ${conversationId}: ${message}`);
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/4 bg-gray-100 p-4">
                <h2 className="text-xl font-semibold mb-4">Conversations</h2>
                <div className="space-y-2">
                    {conversations.map((conversation, i) => (
                        <div
                            key={i}
                            onClick={() => console.log(`Clicked conversation ${conversation.id}`)}
                            className="flex items-center space-x-4 bg-white p-2 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
                        >
                            <img className="w-10 h-10 rounded-full" src={conversation.owner.avatar} alt={conversation.owner.name} />
                            <span className="font-medium">{conversation.owner.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-3/4 bg-gray-200 p-4">
                {conversations.map((conversation, i) => (
                    <div key={i} className="bg-white rounded-lg shadow-md p-4 mb-4">
                        <div className="flex items-center space-x-4 mb-4">
                            <img className="w-10 h-10 rounded-full" src={conversation.owner.avatar} alt={conversation.owner.name} />
                            <span className="font-semibold">{conversation.owner.name}</span>
                        </div>
                        <div className="h-64 overflow-y-auto">
                            {conversation.messages.map((conversationMessage, index) => (
                                <div key={index} className={`flex mb-2 ${conversationMessage.user_id === 1 ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`bg-gray-300 p-2 rounded-lg max-w-[60%] ${conversationMessage.user_id === 1 ? 'rounded-bl-none bg-indigo-500 text-white' : 'rounded-br-none'}`}>
                                        <p>{conversationMessage.message}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-grow border border-gray-300 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <button
                                    onClick={() => handleSendMessage(conversation.id)}
                                    className="bg-indigo-500 text-white rounded-r-lg px-4 py-2 hover:bg-indigo-600 transition-colors duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MessagesDashboard;