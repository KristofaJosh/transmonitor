import React from 'react';
import styled from "styled-components";
import graph from "./graph.svg";
import {Color} from "../../../constants/siteColors";
import Text from "../../atoms/typography";
import {isMonth} from "../../../../helpers/isMonth";
import {ButtonControl} from "../../atoms/buttons";
import date from "./date.svg";

const Chart = () => {
    const months = ["jan", "feb", "mar", "apr", "may", "jun"];

    const today = new Date();
    const todayFormat = `${today.getDate()}, ${isMonth(today.getMonth())} ${today.getFullYear()}`;

    return (
        <Styling graph={graph}>
            <div className="controls">
                <span className={'today'}><Text capitalize>Today: {todayFormat}</Text></span>
                <div className={'filter-date'}>
                    <span>
                        <img src={date} alt="date"/>
                    </span>
                    <span className={'button-control'}><ButtonControl left/><ButtonControl right/></span>
                </div>
            </div>
            <div className="charts">
                <div className={'separators'}>
                    {months.map(el => (
                        <Text key={el} capitalize>{el}</Text>
                    ))}
                </div>
                <div className={'graph'}/>
            </div>
        </Styling>
    );
};

const Styling = styled.div`
background: ${Color.white};
position: relative;
max-width: 980px;
height: 330px;
overflow: hidden;

.controls {
    display: flex;
    padding: 26px 34px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
    .today {
        font-size: 18px;
        font-weight: bold;
        text-transform: capitalize;
        width: 100%;
    }
    
    .filter-date {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
    
    .button-control {
        display: flex;
        
        div:first-child {
            margin-right: 13px;
        }
    }
}

.charts {
    position: relative;
    overflow-x: hidden;
    
    .separators {
        position: absolute;
        display: flex;
        width: 980px;
        
        p {
            width: 162px;
            font-weight: bolder;
            text-align: center;
        }
    }
        
    .graph {
        background: url(${props => props.graph});
        background-size: cover;
        height: 330px;
    }
}

@media screen and (max-width: 600px) {
    .controls {
        flex-direction: column;
        .filter-date {
            justify-content: space-between;
        }
    }
}


`;

export default Chart;