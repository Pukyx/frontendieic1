import { initialStatePersona } from '
import { useRouter} from 'next/router;'
import React from 'react'
import { useEffect, useState } from'react'
import {Button, Form } from'react-bootstrap'

const Pagina5 = () => {
    const [nombre, setNombre] = useState<Persona>(inialState)
    const handlePersona = (name: string, value:string) =>{
        setPersona({...persona,[name]:value})  //:value->ve que se quiere modificar ,se hace modificacion por caracter ; valor que ingresa el usuario

    }
    const router = useRouter()
    useEffect(()=>{
        const key = router.query.key;
        if(typeof == "string"){
        ObtenerPersona(key).then((p)=>{
            if(p! = undefined){
                initialStatePersona(p)
            }else{
                //devolver a la tabla 
            }
        })
        }else{
            //devolver a la tabla       
        }
 
        const handleModificar = () =>{
            modificarPersona(persona).then(()=>{
                alert("Se ha modificado la persona con exito")
            }).catch((e)=>{
                console.log(e)
                alert("Algo ha ocurrido")
                //useState  y then 
                //buscar "array filter" y MODAL->para eliminar lo ingresadd
            })
        }

  return (
    <>
        <Form>
            <Form.Group>
                <Form.Label>Nombre: </Form.Label>
                <Form.Control type = 'text' placeholder='Ingrese su Nombre' 
                    value = {persona.nombre}
                    nombre='nombre'
                    onChange=((e)=>(handlePersona(e.currentTarget.name, e.currentTarget.value))) />
                <Form.Text></Form.Text>
            </Form.Group>
       

      
            <Form.Group>
                <Form.Label>Apellido: </Form.Label>
                value = {persona.apellido}
                nombre = 'apellido'
                onChange =((e)=>(handlePersona(e.currentTarget.name, e.currentTarget.value
                <Form.Control type = 'text' placeholder='Ingrese su Apellido' />
                <Form.Text></Form.Text>
            </Form.Group>
        

        
            <Form.Group>
                <Form.Label>Rut: </Form.Label>
                value = {persona.rut}
                nombre = 'rut'
                onChange =((e)=>(handlePersona(e.currentTarget.name, e.currentTarget.value)))  //:value->ve que se quiere modificar,se hace modificacion por caracter ; valor que ingresa el usuario
                <Form.Control type = 'text' placeholder='Ingrese su Rut' />
                <Form.Text></Form.Text>
            </Form.Group>


            <Form.Group>
                <Form.Label>Correo: </Form.Label>
                value = {persona.correo}
                nombre = 'correo'
                onChange =((e)=>(handlePersona(e.currentTarget.name, e.currentTarget.value)))  //:value->ve que se quiere modificar,se hace modificacion por caracter ; valor que ingresa el usuario
                <Form.Control type = 'text' placeholder='Ingrese su Correo' />
                <Form.Text></Form.Text>
            </Form.Group>

         
            <Form.Group>
                <Form.Label>Fecha de Nacimiento: </Form.Label>
                value = {persona.fechaNacimiento}
                nombre = 'fechaNacimiento'
                onChange =((e)=>(handlePersona(e.currentTarget.name, e.currentTarget.value)))  //:value->ve que se quiere modificar,se hace modificacion por caracter ; valor que ingresa el usuario
                <Form.Control type = 'data' placeholder='Ingrese su fecha de nacimiento' />
                <Form.Text></Form.Text>
            </Form.Group>

           
            <Form.Group>
                <Form.Label>Edad: </FormLabel>
                value = {persona.edad}
                nombre = 'edad'
                onChange =((e)=>(handlePersona(e.currentTarget.name, e.currentTarget.value)))  //:value->ve que se quiere modificar,se hace modificacion por caracter ; valor que ingresa el usuario
                <Form.Control type = 'number' placeholder='Ingrese su Edad' />
                <Form.Text></Form.Text>
            </Form.Group>

            <button type='submit' variant='primary'>Registrar</button>

        </Form>
        </Form>
    </>
  )
}

export default Pagina5


//en la consola de la pagina debria aparecer a pesar de los errores deberia aparecer la clave 'key'
//como recomendación es mejor unicamente la clave no el valor,hay que evitar pasar valores sensibles 
//react native->para disposistivos moviles 