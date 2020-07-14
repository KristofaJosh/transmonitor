import React from 'react';
import SidebarTemplate from "../../../composite/templates/sidebar_template";
import manual from "./icons/manual.svg";
import profile from "./icons/profile.svg";
import vector from "./icons/vector.svg";
import wallet1 from "./icons/wallet1.svg";
import wallet2 from "./icons/wallet2.svg";
import wallet3 from "./icons/wallet3.svg";
import all_orders from "./icons/all_orders.svg";
import pending_order from "./icons/pending_order.svg";
import reconciled_order from "./icons/reconciled_order.svg";


const SideBar = () => {

    const menus = [
        {
            head: "main", drop: [
                {name: 'overview', icon: vector, link: '/'}
            ]
        },
        {
            head: "payments", drop: [
                {name: 'all payments', link: '/all_pay', icon: wallet1},
                {name: 'reconciled', link: '/reconciled', icon: wallet2},
                {name: 'un-reconciled payments', link: '/unreconciled', icon: wallet3},
                {name: 'manual', link: '/manual', icon: manual},
            ]
        },
        {
            head: "orders", drop: [
                {name: 'all orders', link: '/all_orders', icon: all_orders},
                {name: 'pending orders', link: '/pending_orders', icon: pending_order},
                {name: 'reconciled orders', link: '/reconciled_orders', icon: reconciled_order},
            ]
        },
        {
            others: [
                {name: 'merchant profile', icon: profile, link: '/merchant_profile'},
            ]
        }
    ];


    return (
        <SidebarTemplate
            menus={menus}
        />
    );
};

export default SideBar;