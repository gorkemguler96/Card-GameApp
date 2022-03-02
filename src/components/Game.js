import React, {useEffect, useState} from 'react';
import {Button, Card,Row,Col} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {checkCard, removeSelectedItems, pointUp, pushItem, turnCard} from "../redux/cardSlice";
import {isDisabled} from "@testing-library/user-event/dist/utils";

function Game(props) {

    const cards = useSelector((state) => state.card.items)
    const initialState = useSelector((state) => state.card)
    const selectedItems = useSelector((state) => state.card.selectedItems)
    const dispatch = useDispatch()
    const falseCheck = "https://i2.milimaj.com/i/milliyet/75/0x0/5fe33fab5542821c70da8831.jpg"


    const handleClick = (item) => {

        dispatch(pushItem(item))
        console.log(selectedItems)
        if(selectedItems.length === 2){
            console.log("iki item var")
            let id1 = selectedItems[0].id
            let id2 = selectedItems[1].id
            if(selectedItems[0].title === selectedItems[1].title) {
                dispatch(pointUp(+50))
                dispatch(removeSelectedItems([]))

            }else{
                let a = cards.find(item => item.id === id1)
                let b = cards.find(item => item.id === id2)
                if(a || b ) {
                    setTimeout(()=>{
                        dispatch(checkCard({a,b}))
                        dispatch(pointUp(-10))

                    },1000)
                    dispatch(removeSelectedItems([]))
                }
            }
        }else{
            dispatch(turnCard(item))

        }

    }

    return (
        <div>
        <div className={"flexGame"}>
            {cards.map((item)=>{
                return(
                    <div className={"lele"} style={{margin:1}} key={item.id}  >
                            <Button  onClick={()=>handleClick(item)} className={"Game"}>
                                <img height={90} width={100} alt="example" src={item.check===false ? falseCheck: item.image } />
                            </Button>

                    </div>
                )
            })}
        </div>
        </div>
    );
}

export default Game;
