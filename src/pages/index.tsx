import Link from "next/link";
import { Perfil } from "./Componentes/Perfil";


export default function Home() {
  return (
    <>
      <nav>
        <Link href="/Pagina1">Pagina1</Link>
        <Link href="/Pagina2">Pagina2</Link>
      </nav>
      <Perfil nombre="Joselito" apellido="Vaca" edad={20}/>
      <Perfil nombre="Pablo" apellido="Marmol" edad={15}/>
     
    </>
  );
}
