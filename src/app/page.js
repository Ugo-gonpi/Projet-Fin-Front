import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#001933] flex-col">

      <h1 className="text-[#00fdff] text-[50px] mb-3 font-bold font-mono">Login</h1>

      <div className="w-[300px] h-[350px] bg-[#007f8e] flex justify-center items-center gap-4 flex-col rounded-[10px] shadow-xl">

        <div className="flex gap-3 flex-col">

          <p className="text-[#00fdff] font-bold font-mono text-[20px] m-0">Nom:</p>
          <input type="text" className="w-[250px] h-[35px] bg-[#003f51] border-[#00fdff] border-2 rounded-[10px] pl-[5px] text-[#00fdff]"/>

          <p className="text-[#00fdff] font-bold font-mono text-[20px] m-0">Prénom:</p>
          <input type="text" className="w-[250px] h-[35px] bg-[#003f51] border-[#00fdff] border-2 rounded-[10px] pl-[5px] text-[#00fdff]"/>

        </div>

        <div className="flex gap-3 flex-col">

          <p className="text-[#00fdff] font-bold font-mono text-[20px]">Email:</p>
          <input type="email" className="w-[250px] h-[35px] bg-[#003f51] border-[#00fdff] border-2 rounded-[10px] pl-[5px] text-[#00fdff]"/>

        </div>

        <button className="w-[150px] h-[40px] border-[#00fdff] border-2 rounded-[10px] text-[#00fdff] bg-[#003f51] font-mono hover:brightness-125 active:brightness-150">S'enregistrer</button>
      </div>

    </div>
  );
}
