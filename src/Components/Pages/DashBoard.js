import React from 'react';
import styled from 'styled-components';
import Graph from '../Commons/Graph';
import Header from '../Commons/Header';
import Searchbar from '../Commons/SearchBar';


const DashBoardWrapper = styled.section`
    background-color: #F5F8FA;
    border-top-left-radius: 2.4rem;
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
`;

const DashBoard = ({logo, companySymbol, companyName, onSearchChange, onButtonClick}) => {

    return (
        <DashBoardWrapper>           
           <Header title="Dashboard"/>
           <Searchbar
           onSearchChange={onSearchChange} 
           onButtonClick={onButtonClick}/>
           <Graph
           logo={logo}
           company={companySymbol}
           companyName={companyName}    
           /> 
        </DashBoardWrapper>
        
    );
}

export default DashBoard;
