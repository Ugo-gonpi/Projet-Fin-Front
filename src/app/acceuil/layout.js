import Link from "next/link"

export default function AcceuilLayout({ children }) {
    return(
        <section className="bg-[#001933] w-screen">
        
            <header className="w-full h-[70px] flex">

                <div className="w-[20%] h-full">
  
                </div>

                <div className="w-[80%] h-full flex justify-around items-center">
                    <Link href="/acceuil" className="text-[#00fdff] font-bold font-mono hover:border-b-2 hover:border-[#00fdff]">Acceuil</Link>
                    <Link href="/genres" className="text-[#00fdff] font-bold font-mono hover:border-b-2 hover:border-[#00fdff]">Types</Link>
                    <Link href="/details" className="text-[#00fdff] font-bold font-mono hover:border-b-2 hover:border-[#00fdff]">Details</Link>
                </div>

            </header>

            {children}

            <footer className="w-full h-[195px] bg-[#007f8e] flex justify-center items-center flex-col">

                <div>
                    <p className="text-[#00fdff] font-mono">Hello world, this is the footer</p>
                </div>

                <div>
                    <p className="font-mono">Bruh</p>
                </div>

            </footer>

        </section>
    )
}