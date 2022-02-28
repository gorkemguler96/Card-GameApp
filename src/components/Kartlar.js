import React from 'react';
import '../style.css'
import { Card } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import {checkCard } from '../redux/cardSlice'




function Kartlar(props) {

    const { Meta } = Card;
    const cards = useSelector((state) => state.card.items)
    const twoCards = useSelector((state) => state.card.twoCheckCard)
    const dispatch = useDispatch()
    const falseCheck = "https://i2.milimaj.com/i/milliyet/75/0x0/5fe33fab5542821c70da8831.jpg"

    return (
        <div  className={"Cards"}>
            {cards.map((item)=>(

                <div className={"efekt"} onClick={()=>dispatch(checkCard(item))} key={item.id}>
                    <Card
                        hoverable
                        style={{ width: 100,height:90 }}
                        cover={<img alt="example" src={item.check===false ? falseCheck: item.image} />}
                    >

                    </Card>
            </div>
            ))}
        </div>
    );
}

export default Kartlar;
