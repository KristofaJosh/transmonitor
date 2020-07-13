import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Text from "../../atoms/typography";
import Slip from "../slip";
import {Color} from "../../../constants/siteColors";

const Table = ({data}) => {

    return (
        <Styling>
            <div className={'table-header'}>
                <span><Text medium capitalize>item type</Text></span>
                <span><Text medium capitalize>price</Text></span>
                <span><Text medium capitalize>transaction no</Text></span>
                <span><Text medium capitalize>time</Text></span>
                <span><Text medium capitalize>status</Text></span>
            </div>
            {
                data && data.map((el, index) => (
                    <Slip
                        key={index}
                        price={el.price}
                        status={el.status}
                        time={el.time}
                        title={el.title}
                        transNo={el.trans_no}
                    />
                ))
            }
        </Styling>
    )

};

const Styling = styled.div`
min-height: 726px;
width: 100%;
.table-header {
    display: grid;
    padding: 12px 30px;
    grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
    background-color: ${Color.lightGrey};
    color: ${Color.darkerGrey};
}

@media screen and (max-width: 900px){
    min-height: 500px;
    .table-header {
        grid-template-columns: 1fr;
    }
}
`;

Table.propTypes = {data: PropTypes.array};

export default Table;