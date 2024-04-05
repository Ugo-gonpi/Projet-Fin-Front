"use client"

import Image from "next/image";

import logo from "./../assets/logo3.png";

import { useParams } from "next/navigation";

export default function Details() {

    return(
        <div className="w-full h-screen bg-[#001933]">

            <div className="w-full flex justify-center">

                <div className="w-[700px] h-[400px] mt-[70px] flex rounded-[10px] shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-2 border-[#00aeb8] bg-[#007f8e]">

                    <div className="w-[35%] h-full bg-blue-600 rounded-l-lg">

                        <Image src={logo} width={150} height={150} alt="image test"></Image>

                    </div>

                    <div className="w-[65%] h-full rounded-r-lg">

                    </div>

                </div>

            </div>

        </div>
    )
}