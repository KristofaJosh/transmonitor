import React, {useContext} from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
import Text from "../../components/atoms/typography";
import {Color} from "../../constants/siteColors";
import ConstantContext from "../../context";
import {GiHamburgerMenu} from "react-icons/gi";


const NavBarTemplate = ({logo, search, account}) => {
    const {dispatch} = useContext(ConstantContext);


    return (
        <Styling>
            <div className={'hamburger'} onClick={() => dispatch({type: 'toggleSideBar'})}>
                <GiHamburgerMenu/>
            </div>
            <div className={'logo'} style={{position: "relative"}}><Text logo>{logo}</Text></div>
            <div style={{position: "relative"}}>{search}</div>
            <div style={{position: "relative"}}>{account}</div>
        </Styling>
    );
};

const Styling = styled.div`
position: sticky;
top: 0;
z-index: 5;
height: 3.75rem;
padding: 15px 42px;
display: grid;
grid-gap: 10px;
grid-template-columns: 1fr 3fr max(344px);
grid-template-areas: 
    "logo search account";

align-items: center;

box-shadow: 0px 4px 10px rgba(79, 79, 79, 0.07);
   
background: ${Color.white};

.hamburger {
    display: none;
    cursor: pointer;
}

@media screen and (max-width: 900px){
    .hamburger {display: block;}
    padding: 15px 10px;
    grid-template-columns: 20px min(7rem) 1fr min(50px);
    
    .logo {
        p { font-size: 1.2rem;} 
    }
    
}

`;


NavBarTemplate.propTypes = {
    logo: PropTypes.string,
    search: PropTypes.element,
    account: PropTypes.element,
    hamburger: PropTypes.element,
};


export default NavBarTemplate;