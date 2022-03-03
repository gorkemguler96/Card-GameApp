import React, {useEffect, useState} from 'react';
import {Button, Modal} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {checkCard, removeSelectedItems, pointUp, pushItem, turnCard, allSee, shuffle, retryy, removeOkItems} from "../redux/cardSlice";

function Game(props) {

    const cards = useSelector((state) => state.card.items)
    const point = useSelector((state) => state.card.point)
    const selectedItems = useSelector((state) => state.card.selectedItems)
    const deneme = useSelector((state) => state.card.okeyItems)
    const dispatch = useDispatch()
    const falseCheck = "https://i2.milimaj.com/i/milliyet/75/0x0/5fe33fab5542821c70da8831.jpg"
    const [isModalVisible, setIsModalVisible] = useState(true);
    const theEnd = deneme.length < 18
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        dispatch(removeOkItems([]))
        dispatch(shuffle())
        dispatch(retryy())
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    useEffect(()=>{
        if(selectedItems.length === 2){
            let id1 = selectedItems[0].id
            let id2 = selectedItems[1].id
            if(selectedItems[0].title === selectedItems[1].title) {
                let okeyItem = selectedItems.map((item)=>item)
                dispatch(allSee([...okeyItem]))
                dispatch(removeSelectedItems([]))
                dispatch(pointUp(+50))
            }
            else{
                let a = cards.find(item => item.id === id1)
                let b = cards.find(item => item.id === id2)
                if(a || b ) {
                    setTimeout(()=>{
                        dispatch(checkCard({a,b}))
                        dispatch(pointUp(-10))
                    },500)
                    dispatch(removeSelectedItems([]))
                }
            }
        }
    },[selectedItems])


    const handleClick = (item) => {
        if([...deneme].map(item=>item[0].title) ==(item.title) ){
            //Hiç bir şey yapma
        }else{
            dispatch(pushItem(item))
        }

        setTimeout(()=>{
            dispatch(turnCard(item))
        },10)
    }

    return (
        <div>
            {theEnd ? (
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
            ):
                <div className={"modalCss"}>
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

                    <Modal showModal title="Oyun Sona Erdi" visible={isModalVisible} okText={"Retry"} onOk={handleOk} onCancel={handleCancel}>
                        <p>{`Puaniniz : ${point}`}</p>
                    </Modal>
                </div>
            }
        </div>
    );
}

export default Game;
