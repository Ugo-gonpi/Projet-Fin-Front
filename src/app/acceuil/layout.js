import Link from "next/link"

import Image from "next/image"

import dicord from "./../assets/discord.png"
import facebook from "./../assets/facebook.png"
import gmail from "./../assets/gmail.png"
import instagram from "./../assets/instagram.png"
import linkedin from "./../assets/linkedin.png"

export default function AcceuilLayout({ children }) {
    return(
        <section className="bg-[#001933] w-full">
        
            <header className="w-full h-[70px] flex">

                <div className="w-[20%] h-full">

                </div>

                <div className="w-[60%] h-full flex justify-around items-center">

                    <Link href="/acceuil" className="text-[#00fdff] font-bold font-[fontSite] hover:border-b-2 hover:border-[#00fdff] text-[20px]">Acceuil</Link>

                    <Link href="/genres" className="text-[#00fdff] font-bold font-[fontSite] hover:border-b-2 hover:border-[#00fdff] text-[20px]">Genre de jeux</Link>

                    <Link href="/details" className="text-[#00fdff] font-bold font-[fontSite] hover:border-b-2 hover:border-[#00fdff] text-[20px]">Details</Link>

                </div>

                <div className="w-[20%] h-full">

                </div>

            </header>

            {children}

            <footer className="w-full h-[150px] bg-[#007f8e] flex justify-center items-center flex-col">

                <div className="w-full h-[70%] flex justify-around items-center flex-row">
                    <a href=""><Image src={dicord} alt="image de discord" width={40} height={40}></Image></a>
                    <a href="https://www.facebook.com/ugo.gonzalezpinto"><Image src={facebook} alt="image de facebook" width={40} height={40}></Image></a>
                    <a href=""><Image src={gmail} alt="image de gmail" width={40} height={40}></Image></a>
                    <a href="https://www.instagram.com/ugo.gp_2/"><Image src={instagram} alt="image de discord" width={40} height={40}></Image></a>
                    <a href="https://www.linkedin.com/in/ugo-gonzalez-pinto-9aa3062b5/"><Image src={linkedin} alt="image de discord" width={40} height={40}></Image></a>
                </div>

                <div className="w-full h-[30%] flex justify-center items-center flex-col">
                    <p className="font-[fontSite] text-[#00fdff] brightness-75">Tous droits de ce site reviene à :</p>
                    <p className="font-[fontSite] text-[#00cdc9] brightness-75 text-[14px]">Ugo Gonzalez Pinto ©</p>
                </div>

            </footer>

        </section>
    )
}