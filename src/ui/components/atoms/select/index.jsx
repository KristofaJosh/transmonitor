import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from "styled-components";

const Select = ({id, active, name, placeholder, options, onChange, onBlur, error, ...props}) => {
    return (
        <Styling error={Boolean(error)} {...props}>
            <select name={name} id={id} {...props} onChange={onChange} defaultValue={'default'}>
                {active ? <option value={''} disabled>{active || placeholder}</option> :
                    <option value={'default'} disabled>{placeholder || 'Select...'}</option>
                }
                {
                    options.map((el, index) => (
                        <option key={index} value={el.value}>{el.text}</option>
                    ))
                }
            </select>
        </Styling>
    );
};

const Styling = styled.div`

select {
    margin: 0;
    max-width: 100%;
    width: 150px;
    height: 35px;
    flex: 1 0 auto;
    outline: 0;
    text-align: left;
    line-height: 1.21428571em;
    padding: 8px 1rem;
    background: inherit;
    border: 1px solid rgba(34,36,38,.15);
    color: rgba(0,0,0,.87);
    border-radius: 2px;
    transition: box-shadow .1s ease, border-color .1s ease;
    box-shadow: none;
}

${props => props.short && css`
    select {
        width: 50px;
        padding: 0;
    }
`}
`;

Select.propTypes = {
    placeholder: PropTypes.string || PropTypes.number,
    options: PropTypes.array,
};

export default Select;