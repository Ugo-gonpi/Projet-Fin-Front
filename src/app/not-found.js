import Link from "next/link";

import Image from "next/image";

import logo from "./assets/logo3.png"

export default function NotFound() {
    
    return(
        <div className="w-full h-[665px] flex justify-center items-center flex-col bg-[#003f51]">

            {/* Ici j'ai crée ma page "not-found", c'est à dire la page qui s'affiche si jamais il y a un problem de connexion ou si nous passons dans une page inexistante */}
            
            <Image src={logo} width={200} height={200} alt="logo du site"></Image>

            <h1 className="font-bold text-[30px] text-[#00fdff] underline">Oh oh, une erreur est arrivé</h1>

            <p className="font-bold text-[20px] text-[#00fdff]">Veuillez vérifier que vous avez écrits les bonnes informations dans le login</p>

            <Link href="/" className="mt-4 underline text-[#00fdff]">Retour au login</Link>

            <Link href="/acceuil" className="mt-4 underline text-[#00fdff]">Retour acceuil</Link>

        </div>
    )
}