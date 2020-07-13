import React from 'react';
import PropTypes from 'prop-types';
import {Color} from "../../../constants/siteColors";
import styled from "styled-components";
import Text from "../../atoms/typography";

const StatusState = ({type}) => {

    const indicators = {
        pending: Color.yellow,
        reconciled: Color.green,
        "un-reconciled": Color.grey,
        settled: Color.blue,
        unsettled: Color.grey,
    };

    return (
        <Styling type={type}>
            <span className="dot" style={{background: indicators[type]}}/>
            <Text small style={{color: indicators[type]}}>{type}</Text>
        </Styling>
    );
};


const Styling = styled.div`
    min-width: 7.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;   
    border: 1px solid #CCCFD4;
    border-radius: 1.875rem;
    padding: 9px 12px;
    
    
    .dot {
        border-radius: 50%;
        width: 9px;
        height: 9px;
        margin-right: 20px;
    } 
`;

StatusState.propTypes = {
    type: PropTypes.string
};

export default StatusState;