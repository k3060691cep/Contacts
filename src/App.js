import React, {useEffect, useState} from 'react'
import {Table, Bar} from "./components/index";
import styled from "styled-components";
import {getData} from "./services/network";

const Wrapper = styled.div`
  margin: 16px 180px;
`
const Header = styled.header`
  display: flex;
  justify-content: flex-end;
`
const Content = styled.div`
 display: flex;
 justify-content: center;
`
const Button = styled.button`
  cursor: pointer;
`
function App() {
    const [contacts, setContacts] = useState(null)
    const [viewTable, setViewTable] = useState(true)



    useEffect(() => {
       getData('https://randomuser.me/api/?results=10')
           .then(({results}) => setContacts(results))
     }, [])

    const handleChangeTable = () =>{
        setViewTable(true)
    }
    const handleChangeBar = () =>{
        setViewTable(false)
    }
    const getNewPersons = () => {
            getData('https://randomuser.me/api/?results=10')
                .then(({results}) => setContacts(results))


    }


    const sort = () => {
        let newContacts = contacts.sort((a, b) => a.name.first.localeCompare(b.name.first))
        setContacts(newContacts)
    }

  return (
    <Wrapper className="App">
        <Header>
            <Button onClick={getNewPersons}>getPerson</Button>
            <Button onClick={handleChangeTable}>Table</Button>
            <Button onClick={handleChangeBar}>Bar</Button>
        </Header>
        <Content>
            {viewTable ? <Table contacts={contacts} sort={sort}/> : <Bar contacts={contacts} />}
        </Content>

    </Wrapper>
  );
}

export default App;
