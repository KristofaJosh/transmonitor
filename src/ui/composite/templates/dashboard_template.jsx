import React from 'react';
import styled from "styled-components";
import TransCard from "../../components/molecules/transactionCard";
import Chart from "../../components/molecules/charts";
import SummaryCard from "../../components/molecules/summarycard";
import PaymentLogs from "../../components/organisms/payments";

const DashboardTemplate = ({forecast, payments, summary}) => {

    return (
        <Styling>
            <div className={'transactions'}>
                <span>
                    <TransCard title={"Daily Transaction Value"} number={forecast.daily.value} symbol={'₦'}/>
                </span>
                <span>
                    <TransCard title={"Daily Transaction Volume"} number={forecast.daily.volume}/>
                </span>
                <span>
                    <TransCard title={"Total Transaction Value"} number={forecast.total.value} symbol={'₦'}/>
                </span>
                <span>
                    <TransCard title={"Total Transaction Volume"} number={forecast.total.volume}/>
                </span>
            </div>
            <div className="overview">
                <div className={'chart'}>
                    <Chart/>
                </div>
                <div className={'summary'}>
                    {
                        summary.map((el, index) => (
                            <SummaryCard key={index} title={el.title} info={el.data}/>
                        ))
                    }
                </div>
            </div>
            <div>
                <PaymentLogs data={payments}/>
            </div>
        </Styling>
    );
};

const Styling = styled.div`
max-width: 1068px;
width: 100%;
margin: 0 auto;

.transactions {
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    overflow: auto;

    span {
        width: 100%;
        display: block;
    }
}

.summary {
    display: grid;
    grid-gap: 4px;
}

.overview {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: 
        "chart summary";
    margin-bottom: 30px;
}

@media screen and (max-width: 1000px){
    .overview {
        grid-template-columns: 1fr;
        grid-gap: 10px;
        grid-template-areas: 
            "chart chart"
            "summary summary";
            
        .chart {
            grid-area: chart;
        }
        .summary {
            grid-area: summary;
            div:first-child{
                margin-bottom: 10px;
            }

        }
    }
}

`;

export default DashboardTemplate;