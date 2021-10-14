
import fullstar from '../../Images/Icons/icon-fullstar.svg';
import Image from './Image';
import HeaderWrapper from './HeaderWrapper';
import SubTitle from './SubTitle';
import CompanyCard from './BoardCard';
import FontStyle from './FontStyle';
import styled from 'styled-components';



const DeleteMsg = styled(FontStyle)`
    border: 1px solid black;
    text-align: center;
    padding: 1rem;
    margin: 1.5rem 8rem;
    cursor: pointer;
    transition: all 2s ease-in-out;
    transform: scale(1.2);  

`;

const BoardList = ({subtitle, favourites, removeFavourites, isDeleted, closeMessage}) => {    
    
    return (
        <>
            <HeaderWrapper>
            <Image 
            src={fullstar} 
            alt='full-star'                
            />
            <SubTitle>{subtitle}</SubTitle>            
            </HeaderWrapper>
            {isDeleted && 
                <DeleteMsg onClick={closeMessage}
                >SUCCESSFUL DELETED! &nbsp; &#10006;
                </DeleteMsg>
            }           
            {favourites.length &&
            favourites.map((value, i) => {
                return (
                    <CompanyCard
                    companyName={favourites[i].companyName}
                    companySymbol={favourites[i].companySymbol}                    
                    changePercent={favourites[i].changePercent}
                    logo={favourites[i].logo}
                    key={i}
                    id={i}
                    removeFavourites={removeFavourites}                   
            />
                );
            })            
            }
                                   
        </>
    );
}

export default BoardList;
