import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Pagina2 = () => {
    // Estados para almacenar los números ingresados, mensajes de error y el resultado
    const [numero1, setNumero1] = useState("");
    const [numero2, setNumero2] = useState("");
    const [resultado, setResultado] = useState(null);
    const [eNumero1, setENumero1] = useState("");
    const [eNumero2, setENumero2] = useState("");

    // Función para validar el primer número
    const validarNumero1 = (valor) => {
        if (valor.length > 4) {
            setENumero1("Debes ingresar hasta 4 caracteres");
        } else {
            setENumero1("");
        }
        setNumero1(valor);
    };

    // Función para validar el segundo número
    const validarNumero2 = (valor) => {
        if (valor.length > 4) {
            setENumero2("Debes ingresar hasta 4 caracteres");
        } else {
            setENumero2("");
        }
        setNumero2(valor);
    };

    // Función para manejar la operación seleccionada
    const handleOperacion = (operacion) => {
        const num1 = parseFloat(numero1); // Convertir el primer número a float
        const num2 = parseFloat(numero2); // Convertir el segundo número a float

        // Validar si los valores ingresados son números
        if (isNaN(num1) || isNaN(num2)) {
            setResultado("Por favor ingrese números válidos");
            return;
        }

        let res; // Variable para almacenar el resultado
        switch (operacion) {
            case 'sumar':
                res = num1 + num2; // Sumar los dos números
                break;
            case 'restar':
                res = num1 - num2; // Restar el segundo número del primero
                break;
            case 'multiplicar':
                res = num1 * num2; // Multiplicar los dos números
                break;
            case 'dividir':
                res = num1 / num2; // Dividir el primer número por el segundo
                break;
            default:
                res = "Operación no válida"; // Caso por defecto para operaciones no válidas
        }
        setResultado(res); // Establecer el resultado en el estado
    };

    return (
        <>
            <h1>Calculadora</h1>
            
            <Form>
                // Campo para ingresar el primer número
                <Form.Group>
                    <Form.Label>Número 1</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Ingrese un número" 
                        value={numero1}
                        onChange={(e) => validarNumero1(e.target.value)}
                    />
                    <Form.Text>
                        {eNumero1}
                    </Form.Text>
                </Form.Group>

                // Campo para ingresar el segundo número
                <Form.Group>
                    <Form.Label>Número 2</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Ingrese otro número" 
                        value={numero2}
                        onChange={(e) => validarNumero2(e.target.value)}
                    />
                    <Form.Text>
                        {eNumero2}
                    </Form.Text>
                </Form.Group>

            <Button type='submit' variant='succes'>Registrar</Button>
            <Button variant="primary" onClick={() => handleOperacion('sumar')}>Sumar</Button>
            <Button variant="secondary" onClick={() => handleOperacion('restar')}>Restar</Button>
            <Button variant="success" onClick={() => handleOperacion('multiplicar')}>Multiplicar</Button>
            <Button variant="warning" onClick={() => handleOperacion('dividir')}>Dividir</Button>
        </Form>
        //Mostrar el resultado si está disponible
        {resultado !== null && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Resultado: {resultado}</h2>
                </div>
            )}
        </>
    )
}

export default Pagina2