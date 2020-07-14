import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Text from "../../atoms/typography";
import Input from "../../atoms/inputs";
import {Color} from "../../../constants/siteColors";
import Table from "../../molecules/tables";
import Select from "../../atoms/select";

const PaymentLogs = ({data: allData}) => {
    const [data, setData] = useState(allData);
    const [paginate, setPaginate] = useState({active: 0, recordsPerPage: 10, numberOfPages: 1, newView: 1});

    const filterOptions = [
        {text: 'all', value: 'all'},
        {text: 'reconcilled', value: 'reconciled'},
        {text: 'unreconcilled', value: 'un-reconciled'},
        {text: 'settled', value: 'settled'},
        {text: 'unsettled', value: 'unsettled'},
    ];

    const pagination = (flow = 1) => {
        const totalPages = Math.ceil(allData.length / paginate.recordsPerPage);

        if (paginate.active > 0) {
            let newView = paginate.recordsPerPage * 2 + 1;
            setData(allData.slice(newView, paginate.recordsPerPage + newView));
            setPaginate({...paginate, active: flow, newView: newView});
        } else {
            setData(allData.slice(0, 10));
            setPaginate({...paginate, active: 1, numberOfPages: totalPages})
        }
    };

    const getSelected = (event) => {
        const selected = event.target.value;
        if (selected === 'all') {
            setData(allData);
        } else {
            const filtered = allData.filter(el => el.status === selected);
            setData(filtered)
        }
    };

    const getSelectedNumber = (event) => {
        setData(allData.slice(0, parseInt(event.target.value)));
        setPaginate({
            ...paginate,
            recordsPerPage: parseInt(event.target.value),
            numberOfPages: Math.ceil(allData.length / parseInt(event.target.value))
        });
    };


    const gotoPage = (index) => {
        let newView = paginate.recordsPerPage * index + 1;
        setData(allData.slice(newView, paginate.recordsPerPage + newView));
        setPaginate({...paginate, active: Math.abs(index + 1), newView: ((index) * paginate.recordsPerPage) + 1})
    };

    const nextPage = () => {
        if (paginate.active !== paginate.numberOfPages) {
            gotoPage(paginate.active)
        }
    };

    const prevPage = () => {
        if (paginate.active !== 1) {
            gotoPage(0 - paginate.active);
        }
    };

    const searchPayment = (event) => {
        const term = event.target.value.toLowerCase();
        const filtered = allData.filter(el => el.title.toLowerCase().includes(term));
        setData(filtered);
    };

    useEffect(() => {
        pagination()
        // eslint-disable-next-line
    }, []);

    return (
        <Styling>
            <Text large>Payments</Text>
            <div className={'filter-section'}>
                <span style={{display: "flex"}} className={'filter'}>
                    <Text medium>showing</Text>
                    <span className="view">
                        <Select
                            short={"true"}
                            placeholder={data.length < 10 ? data.length : "10"}
                            options={[{text: "20", value: 20}, {text: "30", value: 30}, {
                                text: "40",
                                value: 40
                            }, {text: "50", value: 50},]}
                            onChange={getSelectedNumber}
                        />
                    </span>
                    <Text medium style={{minWidth: "140px"}}>out of {allData.length - 1} payments</Text>
                </span>
                <span className={'search'}>
                    <Input type={'search'} placeholder={'search payments...'} onKeyUp={searchPayment}
                           onChange={searchPayment} decorate clear/>
                </span>
                <span className={'select'}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Text medium>Show</Text>
                        <Select options={filterOptions} onChange={getSelected}/>
                    </div>
                </span>
            </div>
            <div className={'table'}>
                <Table data={data}/>
            </div>
            <div className={'pagination'}>
                <Text
                    medium>Showing {paginate.newView} to {paginate.newView + data.length - 1} of {allData.length - 1} entries</Text>
                <div>
                    <span className={'pagination-container'} onClick={() => prevPage()}>previous</span>
                    {
                        Array(paginate.numberOfPages).fill(null, 0, paginate.numberOfPages).map((el, index) => (
                            <span
                                key={index}
                                className={paginate.active === index + 1 ? 'pagination-container active' : 'pagination-container'}
                                onClick={() => gotoPage(index)}>
                                {index + 1}
                            </span>
                        ))
                    }
                    <span className={'pagination-container'} onClick={() => nextPage()}>Next</span>
                </div>
            </div>
        </Styling>
    );
};

const Styling = styled.div`

.filter-section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 
        "filter search select";
    grid-gap: 10px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    
    span {
        display: flex;
        align-items: center;
        &:first-child {
            display: flex;
            width: 100%;
            .view {margin: 0px 10px;};
        }
        &:last-child {
            display: flex;
            justify-content: space-around;
            div p {margin-right: 30px;}
        }
    }
    
}

.table {
    margin-bottom: 10px;
}

.pagination {
    display: flex;
    justify-content: space-between;
    .pagination-container {
        cursor: pointer;
        text-transform: capitalize;
        border: 1px solid #CED0DA;
        padding: 5px 10px;
        text-align: center;
    }
    .active {
        background-color: ${Color.blue};
        color: ${Color.white};
    }
}

@media screen and (max-width: 700px){
    .filter-section {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: 
            "filter filter filter"
            "search search select";
            
        .filter {
            grid-area: filter;
        }
        .search {
            grid-area: search;
        }
    }
}

@media screen and (max-width: 450px){
    .filter-section {
        grid-gap: 20px;
        grid-template-columns: 1fr;
        grid-template-areas: 
            "filter"
            "select"
            "search";
            
        .filter {
            grid-area: filter;
        }
        .search {
            grid-area: search;
        }
        .select {
            grid-area: select;
            justify-content: flex-start !important;
        }
    }
    .pagination {
        flex-direction: column;
        p {margin-bottom: 10px;}
    }
}


`;

export default PaymentLogs;