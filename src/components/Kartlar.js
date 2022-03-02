import React from 'react';
import '../style.css'
import { Card } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import {checkCard,turnCard } from '../redux/cardSlice'




function Kartlar(props) {

    const { Meta } = Card;
    const cards = useSelector((state) => state.card.items)
    const twoCards = useSelector((state) => state.card.twoCheckCard)
    const dispatch = useDispatch()
    const falseCheck = "https://i2.milimaj.com/i/milliyet/75/0x0/5fe33fab5542821c70da8831.jpg"
    let deneme = []



    const handleClick = (item) => {
        deneme.push(item)
        console.log(deneme)
        let point = 0
        if(deneme.length === 2){
            console.log("ss")
            let id1 = deneme[0].id
            let id2 = deneme[1].id
            if(deneme[0].title === deneme[1].title) {
                point += 10
            }else{
                let a = cards.find(item => item.id === id1)
                let b = cards.find(item => item.id === id2)
                if(a || b ) {
                    setTimeout(()=>{
                        dispatch(checkCard({a,b}))
                    },1000)
                    deneme = []
                }

            }


        }else{
            dispatch(turnCard(item))
        }
    }



    return (
        <div  className={"Cards"}>
            {cards.map((item)=>(

                <div className={"efekt"} onClick={()=>handleClick(item)} key={item.id}>
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
