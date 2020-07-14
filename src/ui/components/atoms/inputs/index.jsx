import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from "styled-components";
import {FiSearch} from "react-icons/fi";
import {Color} from "../../../constants/siteColors";


const Input = ({type, placeholder, onChange, ...props}) => {
    return (
        <Styling {...props}>
            <FiSearch color={Color.grey} className={'icon'}/>
            <input type={ type ||"text"} onChange={onChange} placeholder={placeholder}/>
        </Styling>
    );
};

const Styling = styled.div`
position: relative;
display: flex;
align-items: center;
width: 100%;

.icon {
    min-width: 15px;
}

input {
    outline: none;
    border: none;
    width: 100%;
    margin-left: 1rem;
    height: 30px;
}

${props=>props.clear && css`
input {
    background: inherit;
}
`}

${props=>props.decorate && css`
input {
    border-bottom: 0.5px solid #787878;
}
`}

@media screen and (max-width: 900px) {
    input {
        margin-left: 0.65rem;
    }
}


`;

Input.propTypes = {
    type: PropTypes.string,
};

export default Input;