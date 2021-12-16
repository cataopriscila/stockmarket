import React from 'react';
import PageLayout from '../Components/Commons/PageLayout';
import Menu from '../Components/Commons/Menu';
import Login from '../Components/Commons/Login';
import Loginside from '../Components/Commons/LoginSide';


const Access = ({setName}) => {
    return (
        <PageLayout access>
        <Menu/>
        <Login setName={setName} />
        <Loginside/>            
        </PageLayout>        
    );
}

export default Access;
