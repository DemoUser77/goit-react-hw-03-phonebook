import PropTypes from 'prop-types';
import React from 'react';


export function  ContactList({ contacts, onDeleteContact }) {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <li key={id}>
                    <p>{name}:</p>
                    <p>{number}</p>
                    <button
                        type="button"
                        id={id}
                        onClick={() => onDeleteContact(id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func.isRequired,
};