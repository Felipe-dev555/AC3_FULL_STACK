import React, { useState, useEffect } from "react";


export default function Veiculos(){ 
    const [carros, setCarros] = useState([]);
    

    const getApiData = async () => {
        const res = await fetch("http://127.0.0.1:5000/api/tasks", 
        ).then((res) => res.json());



        setCarros(res)
    }

    useEffect(() => {
        getApiData();
    }, []);


    return (

        <div>{carros && carros.map((carro) => (

            <div>{carro.name}<br/>
            {carro.description}<br/>
            {carro.marca}</div>

        ))}</div>

    )    
}