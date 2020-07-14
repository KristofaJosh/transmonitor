import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Color} from "../../constants/siteColors";
import axios from "axios";
import DashboardTemplate from "../templates/dashboard_template";
import {BarLoader} from "react-spinners";

const Dashboard = props => {
    const [data, setData] = useState({});

    useEffect(() => {
        axios({
            url: "./data/data.json",
            method: "GET",
        }).then((res) => {
            setData(res.data);
            // setTimeout(() => {
            // }, 2000)
        }).catch(err => {
            console.log(err) // to logger
        });

    }, []);


    return (
        <Styling>
            {
                !Object.entries(data).length ?
                    <div className="pageloader">
                        <BarLoader color={Color.blue}/>
                    </div>
                    :
                    <DashboardTemplate
                        forecast={data.transactions}
                        payments={data.payments}
                        summary={data.summary}
                    />
            }
        </Styling>
    );
};

const Styling = styled.div`
padding: 0.875rem;
background: ${Color.background};

margin-left: 17.25rem;

@media screen and (max-width: 900px){
    margin-left: 0px;
}


`;

export default Dashboard;