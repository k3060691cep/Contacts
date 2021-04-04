import React, {useEffect, useState} from 'react'
import styled from  'styled-components'

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;

`
const Block = styled.div`
width: 292px;
margin: 10px 10px;
-webkit-box-shadow: 0px 0px 8px 1px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 8px 1px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 8px 1px rgba(34, 60, 80, 0.2);

  
  
`
export const Bar = ({contacts}) => {
    console.log(contacts)
    return (
        <Wrapper>
            {contacts && contacts.map(item => (
                <Block key={item.login.md5}>
                    <div><img src={item.picture.large} alt={item.name.first}/></div>
                    <div>{`${item.name.title}  ${item.name.first} ${item.name.last}`}</div>
                    <div>{item.dob.date} </div>
                    <div>{item.email} </div>
                    <div>{item.cell} </div>
                    <div>{`/ ${item.location.country}/ ${item.location.street.number} ${item.location.street.name},
                    ${item.location.state}, ${item.location.postcode}`} </div>
                    <div>{item.location.country}</div>
                </Block>
                )
            )}
        </Wrapper>
    )
}