import React from "react"
import {Permiso} from "./Permiso"

interface Props{
    nombre:string,
    apellido:string
    edad?:number
}

export const Perfil = (props:Props) => {
    return (
        <>
            <h1>Hola!</h1>
            <p>Nombre:{props.nombre}</p>
            <p>Apeliido:{props.apellido}</p>
            <p>Edad: {props.edad}</p>
            
            {//si &&-> si o si tiene que pasar uno ==; en cambio si & si pasa o no se puede pasar a la otra prueba
                props.edad != undefined && 
                props.edad >= 18 && 
                <>
                <p>Tienes peermitido pasar</p>
                <Permiso permiso1='Beber' permiso2='Conducir'/>
                </>
            }

            {//si &&-> si o si tiene que pasar uno ==; en cambio si & si pasa o no se puede pasar a la otra prueba
                props.edad != undefined && 
                props.edad < 18 && 
                <>
                <p>NO tienes peermitido pasar</p>
                <Permiso permiso1='Tomar leche' permiso2='Divertirse'/>
                </>
            }
        </>
    )
} 