import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {Link} from "react-router-dom";
import Text from "../../atoms/typography";
import {FiBell} from "react-icons/fi";
import {Color} from "../../../constants/siteColors";
import ConstantContext from "../../../context";

const Profile = ({image, firstName, lastName, messages, options}) => {
    const {dispatch, store: {isProfileOpen}} = useContext(ConstantContext);

    return (
        <Styling image={image}>
            <div className={'options'}>
                {options.map((el, index) => (
                    <Link to={el.link} key={index}>
                        <Text medium grey>{el.text}</Text>
                    </Link>
                ))}
            </div>

            <div className={'notification'}>
                <span className={'span-notify'}>{messages.length}</span>
                <FiBell/>
            </div>

            <div className={'profile-name'}>
                <div className={'profile-name-content'}>
                    <Text small grey>Hello</Text>
                    <Text medium grey>{firstName + ' ' + lastName}</Text>
                </div>
                <div className={'profile-image'} onClick={() => dispatch({type: 'toggleProfile'})}/>
                {
                    isProfileOpen ?
                        <div className={'inMobile'}>
                            <div>
                                <Text medium grey>{firstName + ' ' + lastName}</Text>
                            </div>
                            <div>
                                <Text medium grey>{messages.length < 2 ? messages.length + ' Notification' :
                                    messages.length + ' Notifications'}</Text>
                            </div>
                            <div>
                                {options.map((el, index) => (
                                    <Link to={el.link} key={index} onClick={() => dispatch({type: 'toggleProfile'})}>
                                        <Text medium grey>{el.text}</Text>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        : null
                }
            </div>
        </Styling>
    );
};

const Styling = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

.options {
    display: flex;
    justify-content: space-between;
    width: 100px;
}

.notification {
    position: relative;
    color: ${Color.grey};
    font-size: 18px;
    .span-notify {
        position: absolute;
        background: ${Color.notify};
        border-radius: 50%;
        font-size: 0.625rem;
        color:${Color.white};
        width: 15px;
        height: 15x;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 35%;
        top: -20%;
    }
}

.profile-name {
    position: relative;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    
    
    .profile-name-content {
        margin-right: 10px;
        :first-child {
            text-align: end;
        }
    }


    .profile-image {
        background: url(${props => props.image});
        background-position: center;
        background-size: cover;
        border-radius: 50%;
        width: 36px;
        height: 36px;
    }
    
    .inMobile {
        width: 150px;
        background: ${Color.white};
        box-shadow: 0px 0px 4px 0px #0000006b;
        position: absolute;
        top: 37px;
        right: 0;
        padding: 1rem;
        div {
            margin-bottom: 10px;
        }
    }
}



@media screen and (max-width: 900px) {
    justify-content: center;
    .profile-image {
        cursor: pointer;
    }
    .options, .profile-name-content, .notification {
        display: none;
    }
}


`;

Profile.propTypes = {
    image: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    messages: PropTypes.arrayOf(PropTypes.object),
    options: PropTypes.arrayOf(PropTypes.object)
};

export default Profile;