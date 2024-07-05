import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Persona } from '@/Interfaces/Interfaces';



export const Pagina3 = () => {
    const [nombre, setNombre] = useState<Persona>(inialState)
    const handlePersona = (name: string, value:string) =>{
        setPersona({...persona,[name]:value})  //:value->ve que se quiere modificar ,se hace modificacion por caracter ; valor que ingresa el usuario

    }
    const handleRegistrar = () =>{
        registrarPersonas(persona).then(())=>{
            alert('Persona Registrada')
        ))catch(e)=>{
            alert('Persona no Registrada')
            console.log(e)
        }
    }
    return (
        <>
        <Form>
            <Form.Group>
                <Form.Label>Nombre: </Form.Label>
                <Form.Control type = 'text' placeholder='Ingrese su Nombre' 
                    nombre='nombre'
                    onChange=((e)=>(handlePersona(e.currentTarget.name, e.currentTarget.value))) />
                <Form.Text></Form.Text>
            </Form.Group>
       

      
            <Form.Group>
                <Form.Label>Apellido: </Form.Label>
                <Form.Control type = 'text' placeholder='Ingrese su Apellido' />
                <Form.Text></Form.Text>
            </Form.Group>
        

        
            <Form.Group>
                <Form.Label>Rut: </Form.Label>
                <Form.Control type = 'text' placeholder='Ingrese su Rut' />
                <Form.Text></Form.Text>
            </Form.Group>


            <Form.Group>
                <Form.Label>Correo: </Form.Label>
                <Form.Control type = 'text' placeholder='Ingrese su Correo' />
                <Form.Text></Form.Text>
            </Form.Group>

         
            <Form.Group>
                <Form.Label>Fecha de Nacimiento: </Form.Label>
                <Form.Control type = 'data' placeholder='Ingrese su fecha de nacimiento' />
                <Form.Text></Form.Text>
            </Form.Group>

           
            <Form.Group>
                <Form.Label>Edad: </FormLabel>
                <Form.Control type = 'number' placeholder='Ingrese su Edad' />
                <Form.Text></Form.Text>
            </Form.Group>

            <button type='submit' variant='primary'>Registrar</button>

        </Form>
        </Form>
        </Form>
        </>
    )
}

export default Pagina3