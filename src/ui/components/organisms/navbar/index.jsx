import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import NavBarTemplate from "../../../composite/templates/navbar_template";
import Profile from "../../molecules/profile";
import axios from "axios";
import Search from "../../molecules/search";

const NavBar = () => {
    const [account, setAccount] = useState({});


    useEffect(() => {
        axios({
            url: "./data/account_data.json",
            method: "GET",
        }).then((res) => {
            setAccount(res.data.account)
        }).catch((err) => {
            console.log(err) // send to a logger
        });
    }, []);

    const otherLinks = [
        {text: "Support", link: "#"},
        {text: "FAQ", link: "#"},
    ];

    return (
        <NavBarTemplate
            logo={"TransMonitor"}
            search={<Search/>}
            account={
                <Profile
                    image={account.avatar}
                    firstName={account.first_name}
                    lastName={account.last_name}
                    messages={[{}, {}, {}, {}, {}]}
                    options={otherLinks}
                />
            }
        />
    );
};


NavBar.propTypes = {
    account: PropTypes.object
};

export default NavBar;