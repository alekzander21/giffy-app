import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import React from "react";
import Gif from "./Gif";
import './Estilos.css'


export default function ListOfGifs({params}){
const [loading,setLoading] = useState(false)
    const {keyword} = params
    const [gifs, setGifs] = useState([]);
    useEffect(function () {
        setLoading(true)
        getGifs({keyword})
        .then(gifs => {
            setGifs(gifs) 
            setLoading(false)
        })
    }, [keyword]);
    
    if(loading) return <h2>Cargando...</h2>
    
    return <div>
    {
        gifs.map(({id,title,url}) => 
            <Gif
            id={id}
            key={id}
            title={title}
            url={url}
            />
       )
    }
    </div>

}