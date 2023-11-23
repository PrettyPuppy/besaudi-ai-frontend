import Link from 'next/link'
import React from 'react'

const Example = () => {
    return (
        <div className="grid md:grid-cols-2 items-center gap-6 max-w-screen-xl md:h-screen px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <img src="/images/home/Image_01.png" className="justify-self-center w-full md:hidden" style={{ visibility: 'visible' }} />
            <div className="text-center md:text-left md:pr-12">
                <h2 className="text-white text-4xl py-6 font-extrabold tracking-wide px-4 md:px-0">Get Playful with Face Swapping</h2>
                <p className="text-white/60 text-base font-light leading-relaxed">Get ready to be spellbound by the AI technology at Faceswapper.ai. Our cutting-edge tech guarantees flawless, natural face swaps, seamlessly concealing any traces of editing. Whether aiming for humour or a creative spark, our user-friendly AI face swapping tool offers unparalleled realism.</p>
                <Link href="/image-generator">
                    <button className="bg-[#0066FF] text-white text-base rounded-full px-12 py-4 mt-8">
                        Upload File
                    </button>
                </Link>
            </div>
            <img src="/images/example-1.png" className="justify-self-center w-full hidden md:block" style={{ visibility: 'visible' }} />
            <img src="/images/example-2.png" className="justify-self-center w-full" style={{ visibility: 'visible' }} />
            <div className="text-center md:text-left md:pl-12"><h2 className="text-white text-4xl py-6 font-extrabold tracking-wide px-4 md:px-0">Swap Faces in a Snap</h2>
                <p className="text-white/60 text-base font-light leading-relaxed">Faceswapper.ai makes realistic face transformations a breeze. Our AI expertly harmonizes facial features, lighting, and expressions, leaving a lasting impression. It's as simple as a few clicks, suitable for beginners and experts, ensuring an amazing experience with minimal learning curves.</p>
                <Link href="/image-generator">
                    <button className="bg-[#0066FF] text-white text-base rounded-full px-12 py-4 mt-8">
                        Upload File
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Example