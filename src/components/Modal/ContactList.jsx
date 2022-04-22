import React from 'react';

const ContactsList = ({ filteredContacts, handleClick }) => {
    return (
        <ul>
            {filteredContacts.map(({ id, name, number }) => (
                <li id={id} key={id}>
                    {name}:<span>{number}</span>
                    <button onClick={() => handleClick(id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ContactsList;
