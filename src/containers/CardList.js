import React from "react";
import Card from "./Card";


const CardList = ({ robos}) => {
    return (
        <div>{
            robos.map((users, i) => {
                return (
                    <Card id={robos[i].id}
                        name={robos[i].name}
                        email={robos[i].email}
                        key={i}
                    />
                )
            })
        }
        </div>
    )
}

export default CardList;

