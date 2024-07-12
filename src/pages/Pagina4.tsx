import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { obtenerPersonas } from './Firebase'
import { Persona } from './Persona
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

//instalar react icons, ir a home y poner en la consola
// npm install react-icons --save

export const Pagina4 = () =>{
    const [persona, setPersonas] = useState<Persona[]>([]) //tipo de dato,valor de la variable
    useEffect(()=>{
        obtenerPersonas().then(()=>{    
            console.log
            setPersonas(personas)
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
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Rut</th>
                <th>Edad</th>
                <th>Correo</th>
                <th>Fecha de Nacimiento</th>
                <th>Accion</th>
            </tr>
            </thead>
            <tbody>
                {
                    personas.map((p)=>{      //p es un listado del tipo persona -> asi lo toma 
                        return[             //la funcion map devuelve un nuevo array con los elementos modificados
                            <tr>           
                                <td>{p.nombre}</td>
                                <td>{p.apellido}</td>
                                <td>{p.rut}</td>
                                <td>{p.edad}</td>
                                <td>{p.correo}</td>
                                <td>{p.fechanacimiento}</td>
                                <td>{p.accion}</td>
                                <td>
                                <Link href={{pathname:"Pagina5",query:{key:p.key}}}   //diccionario con clave dentro de otro diccionario 
                                    Button vaiant= 'warning'> <FaEdit /></Button>
                                </Link>
                                    <Button variant='danger'> <MdDelete /></Button>	
                                </td>

                              
                            </tr>

                        ]
                    })
                }
            </tbody>
            </Table>
        </>
    )
}

export default Pagina4

//indefinido es no tener nada 