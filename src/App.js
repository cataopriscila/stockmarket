import React, { useEffect, useState } from 'react';
import { createGlobalStyle} from 'styled-components';
import Menu from './Components/Commons/Menu';
import PageLayout from './Components/Commons/PageLayout';
import DashBoard from './Components/Pages/DashBoard';

require('dotenv').config();
const GlobalStyle = createGlobalStyle`
  html{
    font-size: 10px;    
  }

  @media(max-width: 768px){
      html {
       font-size: 8px; 
      }      
    }

  body{    
    min-height: 100vh;           
    margin: 0;
    color: black;    
    ${'' /* ${props => props.theme.fontColor}; */}    
    ${'' /* ${props => props.theme.textColor}; */}
    font-size: 1.6em;
    font-weight: 400;
    font-family: 'Raleway', sans-serif;

  }
`;

const API_TOKEN =`${process.env.REACT_APP_API_KEY}`;

function App() {

  const [logo, setLogo] = useState('Logo');
  const [company, setCompany] = useState('');
  const [companySymbol, setCompanySymbol] = useState('');
  const [companyName, setCompanyName] = useState('Name');

  const onSearchChange = (e) => {     
    setCompany(e.target.value);
    
  }

  const onButtonClick = (e) => {
    console.log(companySymbol, typeof company)
    fetch(`https://cloud.iexapis.com/stable/stock/${company}/logo?token=${API_TOKEN}`)
    .then(response => response.json())
    .then(data=> setLogo(data.url))
    .catch(err => console.log(err))
    ;

    fetch(`https://cloud.iexapis.com/stable/stock/${company}/company?token=${API_TOKEN}`)
  .then(response => response.json())
  .then(data=> {
    console.log(data)
    setCompanyName(data.companyName); 
    setCompanySymbol(data.symbol);   
    }).catch(err=> {
      console.log(err);
      setCompanySymbol('NOT FOUND');
      setCompanyName('(try a valid symbol)');
    }); 

     

  }

  useEffect( () => {
    
    
    


  }, []);
  

  return (
    <>
      <GlobalStyle />
        <PageLayout>
        <Menu/>
          <DashBoard 
          logo={logo}
          companySymbol={companySymbol}
          companyName={companyName}
          onSearchChange={onSearchChange} 
          onButtonClick={onButtonClick} 
          />    
        </PageLayout>      
    </>
  );
}

export default App;
