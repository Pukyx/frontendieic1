import { Persona } from "@/Interfaces/Interfaces"
import {addDoc, collection} from "firebase/firestore"
import { db } from "./Firebase"
const registrarPersonas = async(persona:Persona)=> {   //hay que inidicar el tipo de datos sino da error 

    const docRedf = await addDoc(collection(db, "persona"),persona);
}  

export const obtenerPersonas = async(key:string)=> {
    const docRef = await collection(db, "persona").doc(key);
    const doc = await docRef.get();
    if (!doc.exists) {
        console.log("No such document!");
        return null;
    } else {
        return doc.data() as Persona;
    }
}
//a cada uno hay que ponerle el docsnap


return personas //regresamos las personas para que puedan ser usadas en otros componentes

}else{
    return undefined
}

export const modificarPersona = async(persona:Persona)=> {
    const ref = doc(collection(db, "persona"), persona.key);
    //Con key incluida:
    //await updateDoc(ref, {...persona});
    await updateDoc(ref, {          //Sin key, aparece todo menos la clave 
        nombre: persona.nombre,
        apellido: persona.apellido,
        rut: persona.rut,
        correo: persona.correo,
        fechanacimiento: persona.fechanacimiento,
        edad: persona.edad,
    })
}
//si aparece o no la clave depende de lo que se esté programando

//buscar modal-> en react bootstrap