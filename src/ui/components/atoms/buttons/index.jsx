import React from 'react';
import styled, {css} from "styled-components";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import {Color} from "../../../constants/siteColors";
import Text from "../typography";

const Button = ({children, ...props}) => {
    return (
        <Styling {...props}>
            <Text small>{children}</Text>
        </Styling>
    );
};

export const ButtonControl = ({left, right}) => {

    return(
        <ButtonControlStyling>
            {left ?  <MdChevronLeft/> : null}
            {right ?  <MdChevronRight/> : null}
        </ButtonControlStyling>
    )
};

const Styling = styled.div`
background: ${Color.green};
color: ${Color.white};
padding: 0.625rem 1.5625rem;
text-align: center;
border-radius: 30px;
max-width: 190px;
width: 100%;
cursor: pointer;

${props=>props.capitalize && css`
    text-transform: capitalize;
`}
${props=>props.uppercase && css`
    text-transform: uppercase;
`}
`;

const ButtonControlStyling = styled.div`
cursor: pointer;
background: linear-gradient(0deg, #F2F4F7 0%, #FFFFFF 100%);
border: 1px;
border-radius: 4px;
min-width: 30px;
min-height: 23px;
display: flex;
justify-content: center;
align-items: center;
`;

export default Button;