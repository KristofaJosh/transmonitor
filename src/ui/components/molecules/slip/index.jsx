import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Text from "../../atoms/typography";
import {Color} from "../../../constants/siteColors";
import StatusState from "../status";
import {thousandsSeparators} from "../../../../helpers/thousandsSeparators";

const Slip = ({price, status, time, title, transNo}) => {

    const newTitle = title.split(' ');
    const initials = `${newTitle[0][0]}${newTitle[1][0]}`;


    return (
        <Styling>
            <div className={'title'}>
                <span><Text medium>{initials}</Text></span>
                <span><Text medium>{title}</Text></span>
            </div>
            <div className={'price'}>
                <Text medium>{'$' + thousandsSeparators(parseInt(price))}</Text>
            </div>
            <div className={'trans-no'}>
                <Text medium>{transNo}</Text>
            </div>
            <div className={'time'}>
                {time}
            </div>
            <div className={'status'}>
                <StatusState type={status}/>
            </div>
        </Styling>
    );
};

const Styling = styled.div`
display: grid;
grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
grid-gap: 10px;
grid-template-areas: 
    "title amount transNo time status";
    
align-items: center;
padding: 30px;
background: ${Color.white};
margin-bottom: 4px;

.title {
    display: flex;
    align-items: center; 
    
    span:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 26px;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        background: #7F8FA4;;
        padding: 10px;
        color: #FFF;
    }
}

.price , .trans-no, .time {
    color: ${Color.darkerGrey};
}


@media screen and (max-width: 900px){
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas: 
        "title title title title"
        "amount transNo time status";
    
    .title {
        grid-area: title;
    }
}

@media screen and (max-width: 410px){
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas: 
        "title title title title"
        "amount transNo time time"
        "status status status status";
    
    .title {
        grid-area: title;
    }
    .time {
        grid-area: time;
    }    
    .status {
        grid-area: status;
    }
}

`;

Slip.propTypes = {
    price: PropTypes.number,
    status: PropTypes.string,
    time: PropTypes.string,
    title: PropTypes.string,
    transNo: PropTypes.string
};

export default Slip;