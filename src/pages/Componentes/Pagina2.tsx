import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Pagina2 = () => {  /
    const [numero1, setNumero1] = useState("1")  
    const [numero2, setNumero2] = useState("2")
    const [eNumero1, setENumero1] = useState("")
    const validarNumero1 = (valor:string) => {
        if(valor.length > 4){
            setNumero1("Debes ingresar 4 caracteres")
        }
        else{
            setNumero1("")
        }
        setNumero1(valor)   
    }
    const [eNumero2, setENumero2] = useState("")
    const validarNumero2 = (valor:string) => {
        if(valor.length > 4){
            setNumero2("Debes ingresar 4 caracteres")
        }
        else{
            setNumero2("")
        }
        setNumero2(valor)
    }

    return (
        <>
        <h1>Ingrese dos numeros</h1>
        
        <Form>
            <Form.Group>
                <Form.Label>Numero 1</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Ingrese un numero" 
                    onChange={(e) => validarNumero1(e.target.value)}
                />
                <Form.Text>
                    {eNumero1}
                </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Numero 2</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Ingrese su otro numero" 
                    onChange={(e) => setNumero2(e.target.value)}/>
                <Form.Text>
                    {numero2}
                </Form.Text>
            </Form.Group>

            <Button type='submit' variant='succes'>Registrar</Button>
        </Form>
        </>
    )
}
export default Pagina2