import React from 'react';
import styled from "styled-components";
import Text from "../../atoms/typography";
import {Color} from "../../../constants/siteColors";

const SummaryCard = ({title, info}) => {
    const total = parseInt(info.first.value) + parseInt(info.second.value);
    return (
        <Styling>
            <Text capitalize medium>{title}</Text>
            <div className={'indicator'} data-progress={""}/>
            <Text medium capitalize>{info.first.text + ': '}
                <span style={{color: Color.green, fontWeight: "bold"}}>{info.first.value}</span>
            </Text>
            <Text medium capitalize>{info.second.text + ': '}
                <span style={{color: Color.hardYellow, fontWeight: "bold"}}>{info.second.value}</span>
            </Text>
            <Text medium capitalize>{'Total Payments: '}
                <span style={{color: Color.blue, fontWeight: "bold"}}>{total}</span>
            </Text>
        </Styling>
    );
};

const Styling = styled.div`
position: relative;
background: ${Color.white};
padding: 25px;


p {
    margin-bottom: 11px;
    &:first-child{
       font-weight: bolder;
    }
    &:last-child {
        margin-bottom: 0;
    }
}


.indicator {
    position: relative;
    display: block;
    height: 4px;
    width: 100%;
    background: ${Color.hardYellow};
    margin-bottom: 11px;
    
    &::before {
        content: attr(data-progress);
        display: block;
        width: 80%;
        position: absolute;
        top: 0;
        border: 2px solid ${Color.green};
        border-radius: 5px; 
        
    }
}

height: 163px;


`;

export default SummaryCard;