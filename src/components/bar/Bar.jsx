import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
`
const Avatar = styled.img`
margin: 16px auto;
display: flex;
border-radius: 50%;
  
`
const Block = styled.div`
width: 292px;
margin: 10px 10px;
-webkit-box-shadow: 0px 0px 4px 1px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 4px 1px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 4px 1px rgba(34, 60, 80, 0.2);
`
const ContactInfo = styled.div`
  margin: 16px 16px;
`
export const Bar = ({contacts}) => {
    return (
        <Wrapper>
            {contacts && contacts.map(item => (
                    <Block key={item.login.md5}>
                        <div><Avatar src={item.picture.large} alt={item.name.first}/></div>
                        <ContactInfo>
                            <div>{`${item.name.title}  ${item.name.first} ${item.name.last}`}</div>
                            <div>{item.dob.date} </div>
                            <div>{item.email} </div>
                            <div>{item.cell} </div>
                            <div>{`/ ${item.location.country}/ ${item.location.street.number} ${item.location.street.name},
                    ${item.location.state}, ${item.location.postcode}`} </div>
                            <div>{item.location.country}</div>
                        </ContactInfo>
                    </Block>
                )
            )}
        </Wrapper>
    )
}