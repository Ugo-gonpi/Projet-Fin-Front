import Link from "next/link";

export default function NotFound() {
    return(
        <div className="w-[100%] h-[100%] flex justify-center items-center flex-col bg-black">
            <h1 className="text-white font-bold text-[25px]">Cette page n'existe pas</h1>
            <p className="text-white font-bold text-[20px]">Veuillez vérifier que vous avez bien été déplacé dans une page crée</p>
            <Link href="/" className="text-white mt-4 underline">Retour à l'acceuil</Link>
        </div>
    )
}