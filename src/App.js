import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { useSelector, useDispatch } from 'react-redux'
import {decrement, increment, shuffle } from './redux/cardSlice'
import Header from "./components/Header";
import Kartlar from "./components/Kartlar";
import Game from "./components/Game";
import {useEffect} from "react";

function App() {

    const allNoteTitle = useSelector((state)=>state.card.value)
    const dispatch = useDispatch()

    // useEffect(()=>{
    //    dispatch(shuffle())
    // },[])

  return (
    <div className="App">
        <div>
            <Header />
            {/*<Kartlar />*/}
            <Game />
        </div>
    </div>
  );
}

export default App;
