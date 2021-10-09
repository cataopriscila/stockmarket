
import styled from 'styled-components';
import emptystar from '../../Images/Icons/icon-emptystar.svg';
import graphdown from '../../Images/Icons/icon-graph-down.svg';

const GraphWrapper = styled.div`
    width: 74.8rem;
    height: 38rem;
    border-radius: .8rem;
    position: relative;
    display: flex;    
    flex-direction: column;
    background: #FFFFFF;

    .favourite {
        position: absolute;        
        top: 3.4rem;
        left: 2rem;
    }

    .logo {
        position: absolute;        
        top: 1rem;
        left: 25rem;
        width: 7rem;
        height: 7rem;        
        border-radius: 50%;
    }

    .stockStatus {
        position: absolute;        
        top: 2.7rem;
        right: 8rem;
    }
`;

const GraphCompanyData = styled.div`
    display: flex; 
    justify-content: space-between;
    color: #14171A;

`;

const GraphCompanyName = styled.div`
    display: flex; 
    flex-direction: column;    
    width: 100%;  
    max-width: 20rem;  
    height: 4.1rem;
    margin-top: 3rem;
    margin-left: 5.3rem;        

    h4 {  
           
    line-height: 2rem;
    letter-spacing: -0.005em;
    padding: 0;
    margin: 0;
    }

    h4:first-child {
        font-size: 1.5rem;
    }
`;

const GraphCompanyStockValues = styled.div`
    display: flex;       
    flex-direction: column;
    align-items: flex-end;
    width: 10.5rem;
    height: 4.5rem;
    margin-top: 2.5rem;
    margin-right: 2rem;  
    color: #14171A;    

    h4 {
       
    font-size: 1.4rem; 
    line-height: 1.96rem;      
    padding: 0;
    margin: 0;
    }
    h4:last-child {
        font-weight: 600;
        line-height: 2.8rem;
        letter-spacing: -0.0075em; 
        color: #D64B45; 
        
    }
`;

const Graph = ({logo, company, companyName}) => {    

    return (
        <GraphWrapper>
            <img className='favourite' src={emptystar} alt='empty-star'/>
            <GraphCompanyData>
                <GraphCompanyName>
                    <h4>
                    {company}
                    </h4>
                    <h4>
                    {companyName? companyName : '(NOT FOUND)'}
                    </h4>
                </GraphCompanyName>
                <img className='logo' src={logo} alt=''/>
                <GraphCompanyStockValues>
                    <img className='stockStatus' src={graphdown} alt='graph-down'/>
                    <h4>
                    $265,42
                    </h4>
                    <h4>
                    $-0.09 (-0.03%)
                    </h4>
                </GraphCompanyStockValues>
            </GraphCompanyData>             
        </GraphWrapper>        
    );
}

export default Graph;
