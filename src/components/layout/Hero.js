import Image from "next/image";
import React from 'react'
import Right from "../icons/Right";

export default function Hero() {
    return (
        <section className="mt-4 hero">
            <div className="py-12">
                <h1 className="text-4xl font-semibold">
                    Everyday<br/> starts with the&nbsp;
                    <span className="text-primary">
                        Pizza
                    </span>
                </h1>
                <p className="my-6 text-sm text-gray-500">
                    Pizza is the missing thing that makes everyday complete.
                    A simple and delicious joy in the life.
                </p>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm text-white uppercase rounded-full bg-primary">
                        Order Now
                        <Right />
                    </button>
                    <button className="flex gap-2 py-3 font-semibold text-gray-600">
                        Learn More..
                        <Right />
                    </button>
                </div>
            </div>
            <div className="relative">
                <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'Pizza'} />
            </div>
        </section>
    );
}
