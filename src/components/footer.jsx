

export default function Footer() {
    return (
        <footer className="w-full bg-gray-300 lg:p-10 p-3 ">
            <div className="flex md:flex-row flex-col justify-around text-[20px]">
                <div className="">
                    <h1 className="text-gray-900 font-semibold uppercase ">Contact</h1>
                    <hr className="border-red-700 w-[100px] mt-3 " />
                    <div className="space-y-2 mt-7 text-[15px] ">
                        <div className="flex space-x-3">
                            <h3 className="font-semibold">Address :</h3>
                            <p>Nyalla, Douala, Cameroun</p>
                        </div>
                        <div className="flex space-x-3">
                            <h3 className="font-semibold">Tel :</h3>
                            <p>+237 687119503</p>
                        </div>
                        <div className="flex space-x-3">
                            <h3 className="font-semibold">E-Mail :</h3>
                            <p>ariswado10@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h1 className="text-gray-900 font-semibold uppercase ">Compte</h1>
                    <hr className="border-red-700 w-[100px] mt-3"/>
                    <div className="mt-7">
                        <ul className="text-[15px] space-y-2 text-gray-800 list-disc ">
                            <li>Mon compte</li>
                            <li>Favoris</li>
                            <li>Mon Panier</li>
                            <li>Se connecter</li>
                            <li>Verifier</li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <h1 className="text-gray-900 font-semibold uppercase">Expedition</h1>
                    <hr className="border-red-700 w-[100px] mt-3" />
                    <div className="mt-7">
                        <ul className="text-[15px] space-y-2 text-gray-800 list-disc ">
                            <li >Nouveau produit</li>
                            <li>Meillieur vente</li>
                            <li>Manufacturier</li>
                            <li>Fournisseur</li>
                            <li>Offre</li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <h1 className="text-gray-900 font-semibold uppercase">Bulletin Email</h1>
                    <hr className="border-red-700 w-[100px] mt-3" />
                    <div className="mt-7 flex flex-col space-y-3">
                        <input type="email" className="bg-white text-gray-500 text-[15px] py-2 px-3 lg:w-[300px] w-[250px] outline-none" placeholder="Veuillez entrer votre address email" />
                        <button className="bg-white w-[150px] px-3 py-1 cursor-pointer ">S'ABONNER</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
   
