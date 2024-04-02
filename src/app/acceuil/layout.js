// Ici j'importe les deux composants nécessaires pour la page

import Header from "@/components/header"

import Footer from "@/components/footer"

export default function AcceuilLayout({ children }) {

    return(
        <section className="bg-[#001933] w-full">

            {/* Le header de la page d'acceuil */}

            <Header />

            {/* Ici je crée la div qui mme servira pour acceuillir tous les différents genres de jeux qu'il y a dans l'api */}

            <div className="w-full h-[100px] flex justify-center items-center flex-col">

                <div className="w-full h-[50%] flex justify-center items-center gap-7">

                    <p className="text-[#00fdff] font-bold hover:underline font-[fontSite]">Shooter</p>

                    <p className="text-[#00fdff] font-bold hover:underline font-[fontSite]">Mmoarpg</p>

                    <p className="text-[#00fdff] font-bold hover:underline font-[fontSite]">Arpg</p>

                    <p className="text-[#00fdff] font-bold hover:underline font-[fontSite]">Strategy</p>

                    <p className="text-[#00fdff] font-bold hover:underline font-[fontSite]">Action Rpg</p>

                    <p className="text-[#00fdff] font-bold hover:underline font-[fontSite]">Battle Royale</p>

                    <p className="text-[#00fdff] font-bold hover:underline font-[fontSite]">Mmorpg</p>

                    <p className="text-[#00fdff] font-bold hover:underline font-[fontSite]">Fighting</p>

                </div>

                <div className="w-full h-[50%] flex justify-center items-center gap-8">

                    <p className="text-[#00fdff] font-bold hover:underline font-[fontSite]">Moba</p>

                    <p className="text-[#00fdff] font-bold hover:underline font-[fontSite]">Action</p>

                    <p className="text-[#00fdff] font-bold hover:underline font-[fontSite]">Card Games</p>

                    <p className="text-[#00fdff] font-bold hover:underline font-[fontSite]">Sports</p>

                    <p className="text-[#00fdff] font-bold hover:underline font-[fontSite]">Racing</p>

                    <p className="text-[#00fdff] font-bold hover:underline font-[fontSite]">Mmo</p>

                    <p className="text-[#00fdff] font-bold hover:underline font-[fontSite]">Fantasy</p>

                    <p className="text-[#00fdff] font-bold hover:underline font-[fontSite]">Social</p>

                </div>

            </div>

            {/* Le "children" ici c'est la page.js du dossier acceuil */}

            {children}

            {/* Le footer de la page d'acceuil */}

            <Footer />

        </section>
    )
}