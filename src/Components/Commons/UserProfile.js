import React from 'react';
import styled from 'styled-components';
import avatar from '../../Images/Icons/icon-avatar.svg';
import chevrondown from '../../Images/Icons/icon-chevron-down.svg';
import FontStyle from './FontStyle';
import Image from './Image';

const UserProfileWrapper = styled.div`
    display: flex; 
    align-items: center;    
    width: 35.4rem;
    height: 4rem; 
    padding: .4rem; 
    margin-bottom: 3.2rem;  
    border: 1px solid rgba(0, 71, 187, 0.2);
    border-radius: 12rem;
    box-sizing: border-box;
    
    /*inside auto layout*/
    flex: none;
    order: 1;
    flex-grow: 0;
    

`;
const UserName = styled(FontStyle)`    
    width: 27.4rem;    
    height: 1.9rem;
    font-size: 1.6rem;
    color: #0047BB;
    font-weight: 600;
    text-align: center;    
`;

const UserProfile = () => {
    return (
        <>
        <UserProfileWrapper>
           <Image avatar src={avatar} alt=''/>
            <UserName>João da Silva Almeida Magalhães</UserName>
            <Image icon src={chevrondown}/> 
        </UserProfileWrapper>
        
        </>
    );
}

export default UserProfile;
