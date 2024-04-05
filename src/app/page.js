"use client"

import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";

// import { loginEmail, loginFirstName, loginName } from "@/lib/features/login/loginSlice";

export default function Home() {

  // const [connecting, setConnecting] = useState(false);

  // const name = useSelector((state) => state.login.name);

  // const firstName = useSelector((state) => state.login.firstName);

  // const email = useSelector((state) => state.login.email);

  // const initializing = () => {
  //   if (name == "Gonzalez Pinto" && firstName == "Ugo" && email == "ugogonzalez50@gmail.com") {
  //     setConnecting(!connecting)
  //   }
  // };

  // const dispatch = useDispatch();

  return (
    <div className="w-full h-[665px] flex justify-center items-center bg-[#001933] flex-col">

      {/* Ici j'ai crée le login de mon site, des que nous rentrons dans la site il nous est demandé de nous login directement */}

      <h1 className="text-[#00fdff] text-[50px] mb-5 font-bold font-[fontSite] border-2 border-[#00aeb8] w-[200px] flex justify-center items-center rounded-[10px] shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] bg-[#007f8e]">Login</h1>

      <div className="w-[300px] h-[350px] bg-[#007f8e] flex justify-center items-center gap-4 flex-col rounded-[10px] shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-[#00aeb8] border-2">

        <div className="flex gap-3 flex-col">

          <p className="text-[#00fdff] font-bold font-[fontSite] text-[20px] m-0">Nom:</p>

          <input type="text" className="w-[250px] h-[35px] bg-[#003f51] border-[#00bebc] border-2 rounded-[10px] pl-[5px] text-[#00fdff] focus:outline-[#00bebc] font-[fontSite]"/>

          <p className="text-[#00fdff] font-bold font-[fontSite] text-[20px] m-0">Prénom:</p>

          <input type="text" className="w-[250px] h-[35px] bg-[#003f51] border-[#00bebc] border-2 rounded-[10px] pl-[5px] text-[#00fdff] focus:outline-[#00bebc] font-[fontSite]"/>

        </div>

        <div className="flex gap-3 flex-col">

          <p className="text-[#00fdff] font-bold font-[fontSite] text-[20px]">Email:</p>

          <input type="email" className="w-[250px] h-[35px] bg-[#003f51] border-[#00bebc] border-2 rounded-[10px] pl-[5px] text-[#00fdff] focus:outline-[#00bebc] font-[fontSite]"/>

        </div>

        <Link className="w-[150px] h-[40px] border-[#00fdff] border-2 rounded-[10px] text-[#00fdff] bg-[#003f51] font-[fontSite] hover:brightness-125 active:brightness-150 flex justify-center items-center font-bold" href='/acceuil'>Enregistrer</Link>

      </div>

    </div>
  );
}
