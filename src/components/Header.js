import React from 'react';
import {useSelector} from "react-redux";

function Header(props) {

    const point = useSelector((state) => state.card.point)


    return (
        <div className={"Header"}>
            <h1>Card Game</h1>
            <h2 className={point < 0 ? "redPoint" : "greenPoint" } >Point : {point}</h2>
        </div>
    );
}

export default Header;
