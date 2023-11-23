import React from 'react'

const Guide = () => {
    return (
        <div className="grid sm:grid-cols-2 items-center gap-6 max-w-screen-xl sm:h-screen px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <div className="w-full md:h-full md:p-12"></div>
            <div className="text-center sm:text-left">
                <h2 className="text-white text-4xl py-12 font-extrabold tracking-wide px-4">How to Generate Saudi Uniform</h2>
                <div>
                    <div className="flex flex-row w-full mx-auto mb-8 text-left">
                        <span className="text-white text-4xl mr-6 font-serif font-extrabold italic">1</span>
                        <div className="flex flex-col">
                            <h3 className="text-white/90 text-lg mb-2">Upload an Image</h3>
                            <p className="text-white/60 text-base font-light">Simply click 'Upload an Image' and select a photo you want to use as the source image. Ensure only one face in the photo is of good quality.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row w-full mx-auto mb-8 text-left">
                        <span className="text-white text-4xl mr-6 font-serif font-extrabold italic">2</span>
                        <div className="flex flex-col">
                            <h3 className="text-white/90 text-lg mb-2">Choose your option</h3>
                            <p className="text-white/60 text-base font-light">Once your original image is ready, choose the desired gender, age and model. That means you will generate saudi uniform of your uploaded image with the selected option.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row w-full mx-auto mb-8 text-left">
                        <span className="text-white text-4xl mr-6 font-serif font-extrabold italic">3</span>
                        <div className="flex flex-col">
                            <h3 className="text-white/90 text-lg mb-2">Generate Saudi Uniform</h3>
                            <p className="text-white/60 text-base font-light">Click the 'Generate' button to show AI its magic. Saudi Uniform will finish generating in a few seconds. Our AI does the job automatically while guaranteeing the best output.&nbsp;</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row w-full mx-auto mb-8 text-left">
                        <span className="text-white text-4xl mr-6 font-serif font-extrabold italic">4</span>
                        <div className="flex flex-col">
                            <h3 className="text-white/90 text-lg mb-2">Preview and Download</h3>
                            <p className="text-white/60 text-base font-light">Bingo! Your Saudi uniform is generated to who you like! Preview the final result on the same page. Click 'Download' to save the watermark-free picture to your device. Share it for fun!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guide