import Link from "next/link";
import Image from "next/image";
import logo from "./assets/logo2.png"

export default function NotFound() {
    
    return(
        <div className="w-full h-[665px] flex justify-center items-center flex-col bg-[#003f51]">

            <Image src={logo} width={100} height={100} alt="logo du site"></Image>

            <h1 className="font-bold text-[30px] text-[#00fdff] underline">Oh oh, une erreur c'est produite</h1>

            <p className="font-bold text-[20px] text-[#00fdff]">Veuillez vérifier que vous avez écrits les bonnes informations dans le login</p>

            <Link href="/" className="mt-4 underline text-[#00fdff]">Retour au login</Link>

            <Link href="/acceuil" className="mt-4 underline text-[#00fdff]">Retour à l'acceuil</Link>

        </div>
    )
}