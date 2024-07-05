import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const  initialState:Persona{
    nombre: string;
    apellido: string;
    rut: string;
    correo: string;
    fechanacimiento: string;
    edad: number;

}

export const Pagina2 = () => {  //useState tiene el valor primario del estado;guarda lo que sea e infiere 
    const [nombre, setNombre] = useState("Joselito")  //un estado crea una variable que se puede cambiar en el tiempo set->cambiar la variable o el valor al estado
    const [apellido, setApellido] = useState("Vaca")
    const [eNombre, setENombre] = useState("")
    const validarNombre = (valor:string) => {
        if(valor.length > 4){
            setNombre("Debes ingresar 4 caracteres")
        }
        else{
            setNombre("")
        }
        setNombre(valor)   
    }

    const [eApellido, setEApellido] = useState("")

    return (
        <>
        <h1>Registrar</h1>
        <h2>Bienvenido {nombre} {apellido}</h2>

        <Form>
            <Form.Group>
                <Form.Label>Nombre: </Form.Label>
                <Form.Control
                    type="text" 
                    placeholder="Ingrese su Nombre" 
                    onChange={(e) => validarNombre(e.currentTarget.value)} //e es capaz de acceder a toda la parte interna del elemento 
                    //currentTarget recupera el valor del elemento
                    />
                <Form.Text>
                    {eNombre}
                </Form.Text>

            </Form.Group>
            <Form.Group>
                <Form.Label>Apellido: </Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Ingrese su Apellido"
                onChange={(e) => setApellido(e.currentTarget.value)}
                 />
                </Form.Group>
            <Button type='submit' variant='succes'>Registrar</Button>
        </Form>

        </>
    )   
}
export default Pagina2