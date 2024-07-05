import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';


export const Pagina4 = () =>{
    useEffect(()=>{
        obtenerPersonas().then(()=>{
            console.log
        }).catch((e)=>{
            alert("No se logroron cargar las personas")
            console.log(e)
        }

    },[])
    return(
        <>
          <Table striped bordered hover>
          <thead>
            <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Rut</th>
                <th>Edad</th>
                <th>Correo</th>
                <th>Fecha de Nacimiento</th>
                <th>Accion</th>
            </tr>
            </thead>
            </Table>
        </>
    )
}

export default Pagina4