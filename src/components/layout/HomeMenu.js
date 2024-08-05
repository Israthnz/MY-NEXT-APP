import Image from "next/image";
import React from 'react'
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
    return (
        <section className="">
            <div className="absolute left-0 right-0 w-full justify-start">
                <div className="absolute left-0 -top-[70px] text-left -z-10">
                    <Image src={'/sallad1.png'} width={109} height={189} alt={'Sallad'} />
                </div>
                <div className="absolute -top-[100px] right-0 -z-10">
                    <Image src={'/sallad2.png'} width={107} height={195} alt={'Sallad'} />
                </div>
            </div>
            {/* Menu starts here */}
            <div className="text-center mb-4">
                <SectionHeaders
                    subHeader={'Check out'}
                    mainHeader={'Menu'} />
            </div>
            {/* Menu ends here */}
            <div className="grid grid-cols-3 gap-5">
                <MenuItem pizzaSrc={'pizza-01.png'} />
                <MenuItem pizzaSrc={'pizza-02.png'} />
                <MenuItem pizzaSrc={'pizza-03.png'} />
                <MenuItem pizzaSrc={'pizza-04.png'} />
                <MenuItem pizzaSrc={'pizza-05.png'} />
                <MenuItem pizzaSrc={'pizza-06.png'} />
            </div>
        </section>
    );
}
