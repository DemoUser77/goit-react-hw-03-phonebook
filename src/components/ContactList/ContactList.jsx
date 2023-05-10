import PropTypes from 'prop-types';
import { List, Item, Button, Name } from './ContactList.styled';


export function ContactList({ contacts, onDeleteContact }) {
    return (
        <List>
        {contacts.map(({ id, name, number }) => (
                <Item key={id}>
                    <Name>{name}:</Name>
                    <Name>{number}</Name>
                    <Button
                        type="button"
                        id={id}
                        onClick={() => onDeleteContact(id)}>
                        Delete
                    </Button>
                </Item>
            ))
        }
        </List>
    )
}

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