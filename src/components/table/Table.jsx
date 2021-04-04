import React, {useEffect} from 'react'
import styled from  'styled-components'

const TableStyled = styled.table`
  margin-top: 16px;
  width: 1600px;
  -webkit-box-shadow: 0px 0px 8px 1px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 8px 1px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 8px 1px rgba(34, 60, 80, 0.2);
  padding: 16px 16px;
`
const Header = styled.tr`
  margin-bottom:  40px ;
    background-color: #c6c6c6;
    border: none;
    cursor: pointer;
`
const Wrapper =styled.div`

    
`
const Row = styled.tr`
  
`
const Avatar = styled.img`
  border-radius: 50%;
`



export const Table = ({contacts, sort}) => {

        const sortByName = () => {
            sort()
        }


    console.log(contacts)
    return (
        <TableStyled>
            <Header>
                <td>Avatar</td>
                <td onClick={sortByName}>Fullname</td>
                <td>Birthday </td>
                <td>Email </td>
                <td>Phone </td>
                <td>Location </td>
                <td>Nationality</td>
            </Header>
                {contacts && contacts.map((item) =>
                    <Row key={item.login.md5}>
                    <td><Avatar src={item.picture.thumbnail} alt={item.name.first}/></td>
                    <td>{`${item.name.title}  ${item.name.first} ${item.name.last}`}</td>
                    <td>{item.dob.date} </td>
                    <td>{item.email} </td>
                    <td>{item.cell} </td>
                    <td>{`/ ${item.location.country}/ ${item.location.street.number} ${item.location.street.name},
                    ${item.location.state}, ${item.location.postcode}`} </td>
                    <td>{item.location.country}</td>
                    </Row>
                )
                }
        </TableStyled>
    )
}