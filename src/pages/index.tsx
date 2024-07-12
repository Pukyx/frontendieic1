import Link from "next/link";
import { Perfil } from "./Componentes/Perfil";


//la etiqueta link sirve para direccionar 

export default function Home() {
  return (
    <>
      <nav>
        <Link href="/Pagina1">Pagina1</Link>
        <Link href="/Pagina2">Pagina2</Link>
        <Link href="/Pagina3">Pagina3</Link>
        <Link href="/Pagina4">Datos</Link>

      
      </nav>
      <Perfil nombre="Joselito" apellido="Vaca" edad={20}/>
      <Perfil nombre="Pablo" apellido="Marmol" edad={15}/>
     
    </>
  );
}
