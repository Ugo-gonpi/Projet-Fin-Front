import React from 'react';

import Image from "next/image"

import logo from "./../app/assets/logo3.png"

import Link from 'next/link';

import { changeStyle } from '@/lib/features/theme/themeSlice';

import { useDispatch } from 'react-redux';

const Header = () => {

    const dispatch = useDispatch();

    return (
        <header className="w-full h-[90px] flex bg-[#007f8e]">

            <div className="w-[20%] h-full flex justify-center items-center">

                <Image src={logo} alt="logo du site" width={150} height={150}></Image>

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
    );
}

export default Header;
