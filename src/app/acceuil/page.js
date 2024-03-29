async function getProduct(){
    const res = await fetch('https://www.freetogame.com/api/games')
    return res.json()
}
export default async function Acceuil() {
    const products = await getProduct()

    return(
        <div className="bg-[#003f51] w-full justify-center items-center flex flex-wrap">
            {
                products.map((element, key) => {
                    return(
                        <div className="w-[300px] h-[500px] flex justify-center items-center flex-wrap" key={key}>
                            <div className="bg-[#007f8e] w-[300px] h-[440px] text-center rounded-[10px] hover:scale-105 transition-[2s] border-2 border-[#00aeb8] ml-5 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
                                <div className="w-full h-[55%]">

                                </div>

                                <div className="w-full h-[45%]">
                                    <p className="text-[#00fdff] font-[fontSite] underline text-[18px] font-bold">{element.title}</p>
                                    <p className="text-[#00fdff] font-[fontSite]">-Publisher: {element.publisher}</p>
                                    <p className="text-[#00fdff] font-[fontSite]">-Developer: {element.developer}</p>
                                    {/* <p className="text-[#00fdff] font-[fontSite] underline">{element.release_date}</p> */}
                                    <button className="mt-[10px] w-[150px] h-[40px] border-[#00fdff] border-2 rounded-[10px] text-[#00fdff] bg-[#003f51] font-[fontSite] hover:brightness-125 active:brightness-150 font-bold">Details</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}