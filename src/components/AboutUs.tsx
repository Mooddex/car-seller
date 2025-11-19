import Image from "next/image";
import Aboutuspic from "@/assets/Aboutuspic.png"
import Button from "./Button";

export default function AboutUs() {
    return(
        <div className="w-full px-4 md:px-8 lg:px-16">
            <div className="flex flex-col md:flex-row gap-8 py-20">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <Image 
                        src={Aboutuspic}
                        alt="Car Pic"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
                
                {/* Text Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-3xl text-orange-500 font-bold mb-3">
                        ABOUT US
                    </h1>
                    <span className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dolorum illum perspiciatis provident asperiores, magnam totam!
                    </span>
                    <p className="text-gray-700 mb-8 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ea maxime nesciunt voluptatem eligendi commodi, deleniti, 
                        nulla earum illum veniam perspiciatis odio cupiditate totam, 
                        doloribus corrupti cum aspernatur aperiam ducimus repellat? 
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Maxime, fugiat, nulla corrupti facilis corporis voluptas 
                        minus ratione nobis veritatis officiis sunt ipsa veniam, 
                        placeat illo exercitationem quia labore perferendis officia!
                    </p>
                    <Button Sentence="Read More" Style="bg-orange-400 w-1/3" />
                </div>
            </div>
        </div>
    )
}