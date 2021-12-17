import React from 'react';
import Login from '../Components/Commons/Login';
import Loginside from '../Components/Commons/LoginSide';

const Access = ({setName}) => {
   
    return (
        <>
            <Login setName={setName} />
            <Loginside/>  
        </>
                    
               
    );
}

export default Access;
