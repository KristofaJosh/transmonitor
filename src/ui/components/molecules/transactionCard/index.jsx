import React from 'react';
import PropTypes from 'prop-types';
import {thousandsSeparators} from "../../../../helpers/thousandsSeparators";
import styled from "styled-components";
import {Color} from "../../../constants/siteColors";
import Text from "../../atoms/typography";
import chart from "./chartsm.svg";


const TransCard = ({title, symbol, number}) => {


    return (
        <Styling>
            <div>
                <Text small grey>{title}</Text>
                <Text
                    semi>{symbol ? symbol + '' + thousandsSeparators(number || 0) : thousandsSeparators(number || 0)}</Text>
            </div>
            <div>
                <img src={chart} alt={"chart"}/>
            </div>
        </Styling>
    );
};

const Styling = styled.div`
display: flex;
background: ${Color.white};
width: 100%;
min-width: 262px;
max-width: 262px;
justify-content: space-between;
padding: 18px;
    
`;

TransCard.propTypes = {
    title: PropTypes.string,
    number: PropTypes.number,
    symbol: PropTypes.string
};

export default TransCard;