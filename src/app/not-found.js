import Link from "next/link";

export default function NotFound() {
    
    return(
        <div className="w-full h-full flex justify-center items-center flex-col bg-[#003f51]">

            <h1 className="font-bold text-[30px] text-[#00fdff]">Oh oh, une erreur c'est produite</h1>

            <p className="font-bold text-[20px] text-[#00fdff]">Veuillez vérifeir que vous avez bien écrit vos informations dans le login</p>

            <Link href="/" className="mt-4 underline text-[#00fdff]">Retour aux login</Link>

        </div>
    )
}