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
-webkit-box-shadow: 2px 2px 12px -4px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 2px 2px 12px -4px rgba(34, 60, 80, 0.2);
box-shadow: 2px 2px 12px -4px rgba(34, 60, 80, 0.2);
`
const ContactInfo = styled.div`
  margin: 16px 16px;
`
const Span = styled.span`
  font-weight: bold;
`
export const Bar = ({contacts}) => {
    return (
        <Wrapper>
            {contacts && contacts.map(item => (
                    <Block key={item.login.md5}>
                        <div><Avatar src={item.picture.large} alt={item.name.first}/></div>
                        <ContactInfo>
                            <div><Span>Full name: </Span> {` ${item.name.title}  ${item.name.first} ${item.name.last}`}</div>
                            <div><Span>Birthday: </Span> {item.dob.date} </div>
                            <div><Span>Email: </Span> {item.email} </div>
                            <div><Span>Phone: </Span> {item.cell} </div>
                            <div><Span>Location: </Span> {`/ ${item.location.country}/ ${item.location.street.number} ${item.location.street.name},
                    ${item.location.state}, ${item.location.postcode}`} </div>
                            <div><Span>Nationality: </Span>N {item.location.country}</div>
                        </ContactInfo>
                    </Block>
                )
            )}
        </Wrapper>
    )
}