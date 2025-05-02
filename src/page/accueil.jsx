// React imports
import { BiCart, BiSolidMessageAltCheck } from "react-icons/bi";
import { BsCake, BsFlag, BsTelephoneForward } from "react-icons/bs";
import { CiMedal } from "react-icons/ci";
import { FaCalendar, FaImage, FaQuoteLeft, FaStar } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

// Components imports
import image1 from '../assets/image/image1.jpg'
import image2 from '../assets/image/image2.jpg'
import image3 from '../assets/image/image3.jpg'
import image4 from '../assets/image/image4.jpg'
import image5 from '../assets/image/image5.jpg'
import image6 from '../assets/image/image6.jpg'
import image7 from '../assets/image/image7.jpg'
import image8 from '../assets/image/image8.jpg'
import image9 from '../assets/image/image9.jpg'
import image10 from '../assets/image/image10.jpg'
import image11 from '../assets/image/image11.jpg'
import image12 from '../assets/image/image12.jpg'
import image13 from '../assets/image/image13.jpg'
import image14 from '../assets/image/image14.jpg'
import { MdAttachEmail } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";

export function Accueil () {
    return (
        <div className="mt-[100px] ">
            <div className="flex justify-between p-10">
                <div className="border-0 w-1/2 flex flex-col">
                    <h2 className="text-[20px] text-[#f1730c] font-semibold ">Young Econ</h2>
                    <h1 className="text-5xl text-black font-semibold mb-2 ">Meillieurs Ventes</h1>
                    <h1 className="text-5xl text-[#f1730c] font-semibold ">34% Reduction</h1>
                    <p className="w-[95%] text-[15px] mt-3 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, consequuntur minus consectetur totam, repudiandae soluta facere magnam officiis reiciendis ab iure? Ullam, placeat rem? Nostrum, consectetur? Inventore illum quisquam minima.</p>
                    <button className="bg-[#f1730c] text-white w-52 h-10 rounded-sm mt-5 cursor-pointer ">Commencer</button>
                    <div className="mt-10 grid grid-cols-2 gap-4 w-[70%] ">
                        <div className="flex justify-start items-center space-x-2">
                            <SlCalender className="text-[#f1730c] text-4xl " />
                            <div>
                                <p className="font-bold">12</p>
                                <p>Years experience</p>
                            </div>
                        </div>
                        <div className="flex justify-start items-center space-x-2">
                            <CiMedal className="text-[#f1730c] text-4xl " />
                            <div>
                                <p className="font-bold">4235</p>
                                <p>Total achievements</p>
                            </div>
                        </div>
                        <div className="flex justify-start items-center space-x-2">
                            <BsCake className="text-[#f1730c] text-4xl " />
                            <div>
                                <p className="font-bold">3468</p>
                                <p>Happy students</p>
                            </div>
                        </div>
                        <div className="flex justify-start items-center space-x-2">
                            <BiSolidMessageAltCheck className="text-[#f1730c] text-4xl " />
                            <div>
                                <p className="font-bold">3k +</p>
                                <p>Possitive Review</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] h-[500px] p-2 flex relative">
                    <div className="w-[100%] h-full flex">
                        <img src={image1} className="w-1/2 h-full object-center object-cover scale-[1] rounded-l-2xl " alt="" />
                        <img src={image1} className="w-1/2 h-full object-center object-cover scale-[1] rounded-r-2xl " alt="" />
                    </div>
                    <div className="bg-white w-[350px] p-4 absolute bottom-[-80px] left-1/2 -translate-x-1/2 shadow-lg rounded-md space-y-2 ">
                        <div className="flex justify-between items-center ">
                            <img src={image1} className="rounded-full w-10 h-10" alt="" />
                            <div>
                                <h1 className="flex justify-center items-center">Djemblo Djem's <BsFlag /> </h1>
                                <h2>Wed, 30 April 2025</h2>     
                            </div>
                            <div className="flex space-x-2 text-[#f1730c] ">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div> 
                        </div>
                        <p className="font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, neque?</p>
                    </div>
                </div>
            </div>
            <div className="border-0 mt-12 p-10 flex flex-col justify-center items-center w-full space-y-5">
                <h1 className="text-3xl font-semibold">Looking for favourite shoe ?</h1>
                <div className="flex justify-between items-center w-[65%] p-2 space-x-3 shadow-md shadow-gray-500 rounded-md ">
                    <input type="text" className="outline-none h-10 w-[80%] " placeholder="Search here" />
                    <button className="bg-[#f1730c] text-white w-[20%] h-10 rounded-sm cursor-pointer">Search</button>
                </div>
            </div>

            {/* About us */}
            <div className="border-0 p-10 w-full flex flex-col justify-center items-center">
                <div className="border-0 w-[65%] flex flex-col justify-center items-center ">
                    <h1 className="text-3xl font-semibold mb-3">About Us</h1>
                    <p className="text-center mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo amet, magnam ratione deserunt error necessitatibus impedit labore sed dolore! Similique quo, dolorum, iure nesciunt itaque nam qui maxime sed minus excepturi ut explicabo perspiciatis tenetur!</p>
                    <div className="border-0 w-full grid grid-cols-2 gap-4 place-items-center">
                        <div className="w-96 h-80 bg-gray-300 relative">
                            <img src={image8} className="w-96 h-80 object-cover object-center z-20 " alt="" />
                            {/* <FaImage className="text-7xl text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" /> */}
                        </div>
                        <div className="w-96 h-80">
                            <img src={image4} className="w-96 h-80 object-cover object-center" alt="" />
                        </div>
                        <div className="w-96 h-80">
                            <img src={image11} className="w-96 h-80 object-cover object-center" alt="" />
                        </div>
                        <div className="w-96 h-80">
                            <img src={image6} className="w-96 h-80 object-cover object-center" alt="" />
                        </div>
                    </div>
                    <button className="bg-[#f1730c] mt-5 text-white w-[20%] h-10 rounded-sm cursor-pointer">Get Started</button>
                </div>
            </div>

            {/* Best Products */}
            <div className="px-20 my-10">
                <h1 className="text-3xl font-semibold mb-3">Our best seller product</h1>
                <div className="flex">
                    <div className="p-2 flex flex-col w-80 transition-all duration-300 hover:shadow-2xl cursor-pointer">
                        <img src={image5} className="w-80 h-80 object-cover object-center rounded-md" alt="" />
                        <div className="w-full flex justify-between mt-3">
                            <div>
                                <h2 className="text-[19px] ">Air Nike 1</h2>
                                <p className="font-bold">15000 FCFA</p>
                            </div>
                            <button className="bg-[#f1730c] text-white w-[35%] h-10 flex justify-around items-center rounded-sm cursor-pointer"><BiCart size={30} /> Acheter</button>
                        </div>
                    </div>
                    <div className="p-2 flex flex-col w-80 transition-all duration-300 hover:shadow-2xl cursor-pointer">
                        <img src={image2} className="w-80 h-80 object-cover object-center rounded-md" alt="" />
                        <div className="w-full flex justify-between mt-3">
                            <div>
                                <h2 className="text-[19px] ">Air Nike 2</h2>
                                <p className="font-bold">10000 FCFA</p>
                            </div>
                            <button className="bg-[#f1730c] text-white w-[35%] h-10 flex justify-around items-center rounded-sm cursor-pointer"><BiCart size={30} /> Acheter</button>
                        </div>
                    </div>
                    <div className="p-2 flex flex-col w-80 transition-all duration-300 hover:shadow-2xl cursor-pointer">
                        <img src={image14} className="w-80 h-80 object-cover object-center rounded-md" alt="" />
                        <div className="w-full flex justify-between mt-3">
                            <div>
                                <h2 className="text-[19px] ">Air Nike 2</h2>
                                <p className="font-bold">12000 FCFA</p>
                            </div>
                            <button className="bg-[#f1730c] text-white w-[35%] h-10 flex justify-around items-center rounded-sm cursor-pointer"><BiCart size={30} /> Acheter</button>
                        </div>
                    </div>
                    <div className="p-2 flex flex-col w-80 transition-all duration-300 hover:shadow-2xl cursor-pointer">
                        <img src={image3} className="w-80 h-80 object-cover object-center rounded-md" alt="" />
                        <div className="w-full flex justify-between mt-3">
                            <div>
                                <h2 className="text-[19px] ">Air Nike 2</h2>
                                <p className="font-bold">12000 FCFA</p>
                            </div>
                            <button className="bg-[#f1730c] text-white w-[35%] h-10 flex justify-around items-center rounded-sm cursor-pointer"><BiCart size={30} /> Acheter</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-10">
                    <div className="flex flex-col w-1/2">
                        <h1 className="text-6xl text-black font-semibold mb-2 ">Handmade Leather Men Moccassin</h1>
                        <p className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias vero porro minus natus recusandae sit nemo, ipsam repellat reiciendis eius.</p>
                        <button className="bg-[#f1730c] text-white w-[20%] h-10 rounded-sm cursor-pointer">Get Product</button>
                    </div>
                    <div className="w-[450px] h-96 overflow-hidden rounded-2xl">
                        <img src={image7} className="w-full h-full object-center object-cover" alt="" />
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="px-20 my-14 flex justify-center items-center flex-col">
                <h1 className="text-5xl font-semibold mb-10">Testimonials</h1>
                <div className="grid grid-cols-3 gap-4">
                    <div className="p-3 bg-[#f1730c] text-white flex justify-center items-start flex-col rounded-lg transition-all duration-300 hover:shadow-md cursor-pointer shadow-[#f1730c] ">
                        <FaQuoteLeft size={40} className="" />
                        <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores voluptatum placeat eligendi totam, nostrum quaerat iste ullam, alias maxime voluptate error possimus ab quisquam voluptatibus! Vero, sunt? Molestias, sapiente.</p>
                        <div className="flex space-x-2 my-3 ">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className="flex space-x-4 justify-center items-center">
                            <img src={image3} className="w-10 h-10 rounded-full object-cover object-center" alt="" />
                            <div className="flex flex-col">
                                <h1>Djemblo Djem's</h1>
                                <p>Software Engeneer</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 bg-[#f1f1f1] text-black flex justify-center items-start flex-col rounded-lg transition-all duration-300 hover:shadow-md cursor-pointer ">
                        <FaQuoteLeft size={40} className="text-[#f1730c] " />
                        <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores voluptatum placeat eligendi totam, nostrum quaerat iste ullam, alias maxime voluptate error possimus ab quisquam voluptatibus! Vero, sunt? Molestias, sapiente.</p>
                        <div className="flex space-x-2 my-3 text-[#f1730c] ">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className="flex space-x-4 justify-center items-center">
                            <img src={image3} className="w-10 h-10 rounded-full object-cover object-center" alt="" />
                            <div className="flex flex-col">
                                <h1>Djemblo Djem's</h1>
                                <p>Software Engeneer</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 bg-[#f1f1f1] text-black flex justify-center items-start flex-col rounded-lg transition-all duration-300 hover:shadow-md cursor-pointer ">
                        <FaQuoteLeft size={40} className="text-[#f1730c] " />
                        <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores voluptatum placeat eligendi totam, nostrum quaerat iste ullam, alias maxime voluptate error possimus ab quisquam voluptatibus! Vero, sunt? Molestias, sapiente.</p>
                        <div className="flex space-x-2 my-3 text-[#f1730c]  ">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className="flex space-x-4 justify-center items-center">
                            <img src={image3} className="w-10 h-10 rounded-full object-cover object-center" alt="" />
                            <div className="flex flex-col">
                                <h1>Djemblo Djem's</h1>
                                <p>Software Engeneer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact US */}
            <div className="p-10 w-full flex flex-col justify-center items-center">
                <h1 className="text-5xl font-semibold">Contact Us</h1>
                <div className="w-[65%] mt-16 flex flex-col justify-center items-center">
                    <div className="flex justify-between items-center space-x-16">
                        <div className="flex flex-col space-y-5">
                            <div className="flex justify-start items-center space-x-2">
                                <BsTelephoneForward className="text-[#f1730c] text-4xl " />
                                <div>
                                    <p className="font-bold">Call</p>
                                    <p>687 11 95 03</p>
                                </div>
                            </div>
                            <div className="flex justify-start items-center space-x-2">
                                <MdAttachEmail className="text-[#f1730c] text-4xl " />
                                <div>
                                    <p className="font-bold">E-Mail</p>
                                    <p>ariswado10@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex justify-start items-center space-x-2">
                                <GiPositionMarker className="text-[#f1730c] text-4xl " />
                                <div>
                                    <p className="font-bold">Position</p>
                                    <p>Nyalla, Doula Cameroon</p>
                                </div>
                            </div>
                        </div>
                        <form action="" className="flex flex-col justify-center items-start space-y-5">
                            <input type="text" className="bg-gray-100 w-72 h-10 px-3 text-gray-700 outline-none rounded-md " placeholder="Nom" />
                            <input type="email" className="bg-gray-100 w-72 h-10 px-3 text-gray-700 outline-none rounded-md " placeholder="E-Mail Address" />
                            <textarea name="" className="bg-gray-100 w-72 h-24 max-h-24 min-h-24 px-3 text-gray-700 outline-none rounded-md " id="" placeholder="Message"></textarea>
                            <button className="bg-[#f1730c] mt-5 text-white w-[100%] h-10 rounded-sm cursor-pointer">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}