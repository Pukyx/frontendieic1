import { Persona } from "@/Interfaces/Interfaces"
import {addDoc, collection} from "firebase/firestore"
import { db } from "./Firebase"
const registrarPersonas = async(persona:Persona)=> {   //hay que inidicar el tipo de datos sino da error 

    const docRedf = await addDoc(collection(db, "persona"),persona);
}  