import Image from "next/image";
import Aboutuspic from "@/assets/Aboutuspic.png"
import Button from "./Button";


export default function AboutUs() {
    return(
        <div className="w-full h-screen">
            <div className="grid grid-cols-2 py-20">
                <div>
                    <Image 
                    src={Aboutuspic}
                    alt="Car Pic"
                    
                    />
                </div>
                <div className="mr-12 mx-15">
                    <h1 className="text-3xl text-orange-500 font-bold mb-3">ABOUT US</h1>
                    <span className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illum perspiciatis provident asperiores, magtotam!</span>
                    <p className="mt-21 mb-12 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea maxime nesciunt voluptatem eligendi commodi, deleniti, nulla earum illum veniam perspiciatis odio cupiditate totam, doloribus corrupti cum aspernatur aperiam ducimus repellat?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, fugiat, nulla corrupti facilis corporis voluptas minus ratione nobis veritatis officiis sunt ipsa veniam, placeat illo exercitationem quia labore perferendis officia!Lorem
                    </p>
                    <Button Sentence="Read More" Style="bg-orange-400"  />
                </div>
            </div>
        </div>
    )
}