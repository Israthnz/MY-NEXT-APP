import React from 'react'

export default function MenuItem({pizzaSrc}) {
    return (
        <div className="bg-gray-200 p-4 rounded-xl text-center group hover:bg-white hover:shadow-md hover:shadow-black/50 transition-all">
            <div className="text-center">
                <img src={pizzaSrc} className="max-h-auto max-w-24 block mx-auto" alt="pizza" />
            </div>
            <h4 className="font-semibold">
                Pizza Type
            </h4>
            <p className="text-gray-500 text-sm">
                Lorem ipsum dolar sit amet, Construct component
            </p>
            <button className="mt-4 bg-primary text-white rounded-full px-4 py-2">
                Add to Cart <span className="font-bold">Rs. 2,700.00</span>
            </button>
        </div>

    )
}
