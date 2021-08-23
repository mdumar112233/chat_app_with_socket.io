import React from 'react';

const Chat = ({chat}) => {
    console.log(chat);
    return (
        <div>
            <h3>{chat.message}</h3>
        </div>
    );
};

export default Chat;