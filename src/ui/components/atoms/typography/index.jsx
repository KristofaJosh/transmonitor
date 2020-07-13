import React from 'react';
import styled, {css} from "styled-components";
import {Color} from "../../../constants/siteColors";
import PropTypes from "prop-types";

const Text = ({children, ...props}) => {
    return (
        <Styling {...props}>
            {children}
        </Styling>
    );
};

const Styling = styled.p`


${props => props.logo && css`
    color: ${Color.blue};
    font-size: 1.5rem;
    font-weight: 900;
    font-family: Roboto;
`}

${props => props.grey && css`
    color: ${Color.grey};
`}

${props => props.capitalize && css`
    text-transform: capitalize;
`}

${props => props.small && css`
    font-size: 0.8125rem;
`}

${props => props.medium && css`
    font-size: 0.875rem;
`}

${props => props.semi && css`
    font-size: 1.125rem;
`}

${props => props.large && css`
    font-size: 2.25rem;
`}
`;

Text.propTypes = {
    children: PropTypes.any
};

export default Text;