import styled from '@emotion/styled';

import { useDispatch, useSelector } from "react-redux";
import { getVisibleFilter } from "../redux/selectors";
import { removeContact } from "../redux/contactSlice";


export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleFilter);

  const onRemoveContacts = (payload) => {
    dispatch(removeContact(payload));
  };


  return (
    <ContactListStyle>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <p>
            {name} : {number}
          </p>
          <Button type="button" onClick={() => onRemoveContacts(id)}>
            Delete
          </Button>
        </ContactItem>
      ))}
    </ContactListStyle>
  );
};



/////////////////////////////// STYLE /////////////////////////

const Button = styled.button`
  background: transparent;
  background-color: transparent;
  margin-left: 10px;
  border: 1px solid;
  border-radius: 10px;
  font-size: 10px;
`;

const ContactListStyle = styled.ul`
  list-style: none;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: baseline;
`;