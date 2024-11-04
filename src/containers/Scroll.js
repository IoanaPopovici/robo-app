import React from "react";

//here we make a function, which allow us to get the props. After with help of 'props.children' we acces the CardList.
const Scroll = (props) => {
    return (
        <div style={{overflow: 'scroll', height: '500px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;