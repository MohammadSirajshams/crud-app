import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react';
import Card from './Card';

const URL = "http://localhost:5000/cards";

const fetchHandler = async()=>{
   return await axios.get(URL).then((res)=>res.data)
}
const Cards = () => {

    const [cards, setCards] = useState()

    useEffect(() => {
      
    fetchHandler().then((data)=> setCards(data.cards))
     
    },[])
    console.log(cards)


  return (
    <div>
    <ul>
        {
            cards && cards.map((card,index)=>(
                <li key={index}>
                    <Card card={card}/>
                </li>
            ))
        }
    </ul>
    </div>
  )
}

export default Cards