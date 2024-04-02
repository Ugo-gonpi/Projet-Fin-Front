import Link from "next/link"

// Ici j'ai "fetch" l'api, c'est à dire que j'ai fait que je puisse utiliser et afficher les informations dans cette api.

async function getProduct(){
    const res = await fetch('https://www.freetogame.com/api/games')
    return res.json()
}

export default async function Acceuil() {

    const products = await getProduct()

    return(
        <div className="bg-[#003f51] w-full justify-center items-center flex flex-wrap">

            {/* Ici j'ai crée les cards de mon site, ou j'ai affiché les images, et d'autres infos utiles prises de l'api */}

            {
                products.map((element, key) => {
                    return(
                        <div className="w-[300px] h-[500px] flex justify-center items-center flex-wrap" key={key}>

                            <div className="bg-[#007f8e] w-[300px] h-[420px] text-center rounded-[10px] hover:scale-105 transition-[2s] border-2 border-[#00aeb8] ml-5 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">

                                <div className="w-full h-[55%]">
                                    <img src={element.thumbnail} className="w-full h-[90%] rounded-t-[10px]"/>
                                </div>

                                <div className="w-full h-[45%] px-4 flex justify-between items-center flex-col">

                                    <p className="text-[#00fdff] font-[fontSite] text-[18px] font-bold">{element.title}</p>

                                    <p className="text-[#00fdff] font-[fontSite]"> <span className="text-[#00fdff] font-[fontSite] font-bold italic">-Publisher :</span> {element.publisher}</p>

                                    <p className="text-[#00fdff] font-[fontSite]"> <span className="text-[#00fdff] font-[fontSite] font-bold italic">-Developer :</span> {element.developer}</p>

                                    <Link className="mt-[10px] w-[150px] h-[40px] border-[#00fdff] border-2 rounded-[10px] text-[#00fdff] bg-[#003f51] font-[fontSite] hover:brightness-125 active:brightness-150 flex justify-center items-center font-bold mb-[10px]" href="/details">Details</Link>

                                </div>

                            </div>

                        </div>
                    )
                })
            }

        </div>
    )
}