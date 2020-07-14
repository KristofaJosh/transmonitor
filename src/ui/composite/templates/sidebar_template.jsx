import React, {useContext} from 'react';
import styled from "styled-components";
import Text from "../../components/atoms/typography";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import {Color} from "../../constants/siteColors";
import Button from "../../components/atoms/buttons";
import ConstantContext from "../../context";

const SidebarTemplate = ({invoice, menus}) => {
    const {dispatch, store: {isSidBarOpen}} = useContext(ConstantContext);


    return (
        <Styling toggle={isSidBarOpen}>
            <div className={'inner-contents'}>

                <div style={{margin: "45px 0", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Button uppercase>generate invoice</Button>
                </div>

                <div>
                    {
                        menus.map(el => (
                            el.hasOwnProperty('head') ?
                                <div style={{marginBottom: "45px"}} key={el.head}>
                                    <div style={{padding: "0.5rem 2.25rem"}}>
                                        <Text small grey capitalize>{el.head}</Text>
                                    </div>
                                    {
                                        el.drop.map((el, index) => (
                                                <NavLink exact activeClassName={'active'} to={el.link} key={index}
                                                         onClick={() => dispatch({type: 'toggleSideBar'})}>
                                                    <div className={'menu-item'}>
                                                        <img src={el.icon} alt={el.name}/>
                                                        <Text small grey capitalize>{el.name}</Text>
                                                    </div>
                                                </NavLink>

                                            )
                                        )
                                    }
                                </div>
                                :
                                <div style={{marginBottom: "30px"}} key={el.head}>
                                    {
                                        el.hasOwnProperty('others') ?
                                            el.others.map((el, index) => (
                                                <NavLink activeClassName={'active'} to={el.link} key={index}>
                                                    <div className={'menu-item'}>
                                                        <img src={el.icon} alt={el.name}/>
                                                        <Text small capitalize grey>{el.name}</Text>
                                                    </div>
                                                </NavLink>
                                            )) : null

                                    }
                                </div>
                        ))
                    }
                </div>
            </div>
        </Styling>
    );
};

SidebarTemplate.propTypes = {
    invoice: PropTypes.element,
    menus: PropTypes.arrayOf(PropTypes.object),
};

const Styling = styled.div`
scrollbar-width: none;

.inner-contents {
    margin: 60px 0;
}

.active {
    display: block;
    background: ${Color.lightBlue};
    // border-left: 4px solid ${Color.blue};
}

.menu-item {
    display: flex;
    padding: 0.75rem 2.25rem;
    margin-bottom: 20px;
    
    img {
        margin-right: 0.875rem;
    }
    
    :hover {
        border-left: 4px solid ${Color.blue};
    }
}


z-index: 4;
display: flex;
flex-direction: column;

width: 17.25rem;
height: 100%;
background: ${Color.white};
position: fixed;
left: 0;
top: 0px;

overflow: auto;

@media screen and (max-width: 900px){
    transition: all 1s;
    transform: ${props => props.toggle ? "translateX(0)" : "translateX(-17.25rem)"};
}


`;

export default SidebarTemplate;