import styled from '@emotion/styled';
import Phonebook from './Phonebook';
import { ContactList } from './ContactList';
import Filter from './Filter';



export function App () {
        return (
          <Container>
            <Phonebook />
            <h2>Contacts </h2>
            <Filter />
            <ContactList />
          </Container>
        );
}

/////////////////////////////// STYLE /////////////////////////

const Container = styled.div`
  padding: 50px;
  border: 1px solid;
  width: 400px;
`;
