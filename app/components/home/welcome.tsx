import Link from 'next/link'
import React from 'react'

const Welcome = () => {
    return (
        <div className="w-full relative h-[44rem] lg:h-[54rem] bg-cover bg-center">
            <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto">
                <div className="z-20 lg:basis-1/2 px-8 pt-20">
                    <section>
                        <div className="pt-24 pb-8 mx-auto text-center lg:text-left lg:pt-40">
                            <h1 className="mb-8 leading-none text-white text-5xl lg:text-7xl font-bold tracking-wide z-30">Saudi Uniform with AI Power</h1>
                            <p className="text-base font-light text-gray-300 lg:text-lg tracking-wide">Upload your photos to generate Saudi Uniform with AI. Experience funny or realistic Saudi Uniform. Be whoever you want to be!&nbsp;</p>
                            <Link href="/image-generator">
                                <button className="bg-[#0066FF] text-white text-lg rounded-full px-12 py-4 mt-12 font-semibold tracking-wide z-30">
                                    Upload File
                                </button>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
            <div className="absolute bottom-0 md:right-0 z-10">
                <div className="relative">
                    <img src='/images/title.png' />
                </div>
            </div>
        </div>
    )
}

export default Welcome