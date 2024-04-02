import Link from "next/link"

// Ici j'ai importé toutes les images que je vais utiliser dans le sites, ergo le logo du site et tous les logos des résaux sociaux.

import Image from "next/image"

import dicord from "./../assets/discord.png"

import facebook from "./../assets/facebook.png"

import gmail from "./../assets/gmail.png"

import instagram from "./../assets/instagram.png"

import linkedin from "./../assets/linkedin.png"

import logo from "./../assets/logo3.png"

export default function AcceuilLayout({ children }) {

    return(
        <section className="bg-[#001933] w-full">

            {/* Le header de la page d'acceuil */}
        
            <header className="w-full h-[90px] flex bg-[#007f8e]">

                <div className="w-[20%] h-full flex justify-center items-center">

                    <Image src={logo} alt="logo du site" width={150} height={150} className="flex justify-center items-center"></Image>

                </div>

                <div className="w-[60%] h-full flex justify-around items-center">

                    <Link href="/acceuil" className="text-[#00fdff] font-bold font-[fontSite] hover:border-b-2 hover:border-[#00fdff] text-[23px]">Acceuil</Link>

                    <p className="text-[#00fdff] font-bold font-[fontSite] hover:border-b-2 hover:border-[#00fdff] text-[23px]">Genre de jeux</p>

                    <Link href="/details" className="text-[#00fdff] font-bold font-[fontSite] hover:border-b-2 hover:border-[#00fdff] text-[23px]">Favoris</Link>

                </div>

                <div className="w-[20%] h-full flex justify-center items-center">

                    <label className="flex cursor-pointer gap-2">

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fill-[#00fdff]"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>

                        <input type="checkbox" value="synthwave" className="toggle theme-controller bg-[#00fdff] hover:bg-[#00fdff]"/>

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fill-[#00fdff]"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>

                    </label>

                </div>

            </header>

            <div>

            </div>

            {/* Le "children" ici c'est la page.js du dossier acceuil */}

            {children}

            {/* Le footer de la page d'acceuil */}

            <footer className="w-full h-[240px] bg-[#007f8e] flex justify-center items-center flex-col">

                <div className="w-full h-[70%] flex justify-around items-center flex-row">
                    
                    {/* Ici j'ai importé des images de logos de résaux sociaux et les est linkés a mes comtes, pour qu'on puiise me contacter au besoin */}

                    <a href=""><Image src={dicord} alt="image de discord" width={40} height={40}></Image></a>

                    <a href="https://www.facebook.com/ugo.gonzalezpinto"><Image src={facebook} alt="image de facebook" width={40} height={40}></Image></a>

                    <a href=""><Image src={gmail} alt="image de gmail" width={40} height={40}></Image></a>

                    <a href="https://www.instagram.com/ugo.gp_2/"><Image src={instagram} alt="image de discord" width={40} height={40}></Image></a>

                    <a href="https://www.linkedin.com/in/ugo-gonzalez-pinto-9aa3062b5/"><Image src={linkedin} alt="image de discord" width={40} height={40}></Image></a>

                </div>

                {/* Ici j'ai crée un pseudo copyright */}

                <Image src={logo} width={140} height={140} alt="logo du site"></Image>

                <div className="w-full h-[30%] flex justify-center items-center flex-col">

                    <p className="font-[fontSite] text-[#00fdff] brightness-75">Tous les droits de ce site revienne à :</p>

                    <p className="font-[fontSite] text-[#00cdc9] brightness-75 text-[14px] mb-[10px]">Ugo Gonzalez Pinto ©</p>

                </div>

            </footer>

        </section>
    )
}