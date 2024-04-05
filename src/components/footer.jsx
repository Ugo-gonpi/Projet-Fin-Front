import React from 'react';

import Image from "next/image";

import discord from "./../app/assets/discord.png";

import facebook from "./../app/assets/facebook.png";

import gmail from "./../app/assets/gmail.png";

import instagram from "./../app/assets/instagram.png";

import linkedin from "./../app/assets/linkedin.png";

import logo from "./../app/assets/logo3.png";

const Footer = () => {

    return (

        <footer className="w-full h-[240px] bg-[#007f8e] flex justify-center items-center flex-col">

            <div className="w-full h-[70%] flex justify-around items-center flex-row">

                {/* Ici j'ai importé des images de logos de résaux sociaux et les est linkés a mes comptes */}

                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><Image src={discord} alt="image de discord" width={40} height={40}></Image></a>

                <a href="https://www.facebook.com/ugo.gonzalezpinto"><Image src={facebook} alt="image de facebook" width={40} height={40}></Image></a>

                <a href="https://www.youtube.com/watch?v=YE07ZZhb2k0"><Image src={gmail} alt="image de gmail" width={40} height={40}></Image></a>

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
    );
}

export default Footer;
