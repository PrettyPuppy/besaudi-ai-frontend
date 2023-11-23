import Link from 'next/link'
import React from 'react'

const Funny = () => {
    return (
        <div className="max-w-screen-xl text-center mx-auto">
            <div className="w-full md:h-full md:p-12"></div>
            <h2 className="text-white text-4xl pt-14 pb-4 md:py-14 font-extrabold tracking-wide px-4">Turn one face photo into endless fun</h2>
            <div className="grid md:grid-cols-2 items-center gap-x-6 gap-y-16 px-4 py-6 w-full text-center lg:px-6">
                <div className="text-center md:text-left p-4 md:p-12">
                    <h3 className="text-white text-3xl py-6 font-semibold tracking-wide">Create Funny Memes</h3>
                    <p className="text-white/60 text-base font-light leading-relaxed">People always like interesting and fresh content on the internet. Funny memes and emojis are among the best ways to increase the engagement between you and your audience. Saudi Uniform can generate one uniform on any other image with one click. The possibilities are endless for imagination and fun!</p>
                    <Link href="/image-generator">
                        <button className="bg-[#0066FF] text-white text-base rounded-full px-12 py-4 mt-8">
                            Upload File
                        </button>
                    </Link>
                </div>
                <img src="https://faceswapper.ai/images/home/Image_04.png" className="justify-self-center w-full" data-xblocker="passed" />
                <img src="https://faceswapper.ai/images/home/Image_05.jpg" className="justify-self-center w-full" data-xblocker="passed" />
                <div className="text-center md:text-left p-4 -mt-60 mx-4 bg-black/[0.6] rounded-xl md:p-12 md:m-0 md:bg-transparent">
                    <h3 className="text-white text-3xl py-6 font-semibold tracking-wide">Explore Diverse Styles of YourSelf</h3>
                    <p className="text-white/60 text-base font-light leading-relaxed">Generate Saudian with different uniform, from movie star to superhero. See what you'd look like as a different character. Find a new way to express yourself. You can also generate one on other characters' uniform to try new makeup, hairstyles, or dresses.</p>
                    <Link href="/image-generator">
                        <button className="bg-[#0066FF] text-white text-base rounded-full px-12 py-4 mt-8">
                            Upload File
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Funny