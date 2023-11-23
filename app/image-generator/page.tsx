import Link from 'next/link'
import React from 'react'

const AIGenerator = () => {
  return (
    <div className="md:h-screen bg-center bg-no-repeat bg-cover relative">
      <div className='flex flex-col md:flex-row mx-auto max-w-screen-xl h-full pt-36 pb-12 md:pt-40 px-4 gap-x-6 gap-y-6 backdrop-blur-xl'>
        <div className='basis-2/3 md:max-h-[44rem] mx-auto bg-white/[0.04] rounded-3xl backdrop-blur-sm px-4 lg:px-16'>
          <div className="flex flex-row justify-center gap-x-4 lg:gap-x-10 pt-6">
            <div>
              <div className="grid lg:grid-cols-2 gap-y-12 gap-x-12 pt-8 pb-14">
                <div className="flex flex-col items-center lg:justify-center px-5 lg:h-[24rem] rounded-3xl lg:bg-white/[0.08]">
                  <div className="flex flex-row items-center gap-x-4">
                    <div className="relative">
                      <label className="cursor-pointer">
                        <input type="file" id="fileInputB" accept="image/*" style={{ display: 'none' }} />
                        <img src="https://faceswapper.ai/images/templates/02_Small/02_01.jpg" className="object-cover cursor-pointer w-20 h-20 rounded-lg" />
                        <div className="absolute top-0 right-0 p-2 bg-black/[0.6] rounded-full backdrop-blur-xl cursor-pointer">
                          <img src="https://faceswapper.ai/images/icons/Icons_edit-2.svg" alt="Icon" className="w-3 h-3" />
                        </div>
                      </label>
                    </div>
                    <img src="https://faceswapper.ai/images/icons/arrow2.svg" className="object-cover w-10 h-4 rounded-full" />
                  </div>

                  <div className='bg-red-400/[0.04] p-3 mt-3 rounded-2xl'>
                    <div className='grid gap-x-12 grid-cols-2 items-center'>
                      <p>Gender: </p>
                      <label className="swap swap-flip text-3xl bg-black/[0.5] rounded-3xl h-10">
                        <input type="checkbox" />
                        <div className="swap-on">🚹</div>
                        <div className="swap-off">🚺</div>
                      </label>
                    </div>

                    <div className="grid gap-x-12 grid-cols-2 mt-3 items-center">
                      <p>Age: </p>
                      <label className="swap text-xl bg-black/[0.5] rounded-3xl h-10 text-center">
                        <input type="checkbox" />
                        <div className="swap-on">Adult</div>
                        <div className="swap-off">Kid</div>
                      </label>
                    </div>

                    <div className="grid gap-x-12 grid-cols-2 mt-3 items-center">
                      <p>Uniform: </p>
                      <label className='h-10 text-center bg-black/[0.5] rounded-3xl'>
                        <select className="select select-ghost w-full max-w-xs">
                          <option>Central</option>
                          <option>North</option>
                          <option>South</option>
                          <option>East</option>
                          <option>West</option>
                        </select>
                      </label>
                    </div>

                  </div>
                </div>

                <div className="relative h-[24rem] rounded-2xl bg-white/[0.08]">
                  <img src="https://faceswapper.ai/images/templates/02_Large/02_01.jpg" className="object-cover w-full h-full rounded-2xl" />
                  {/* <div className="flex flex-col items-center justify-center absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-30 h-30">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1600" width="1600" height="1600" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)', contentVisibility: 'visible' }}>
                        <defs>
                          <clipPath id="__lottie_element_17">
                            <rect width="1600" height="1600" x="0" y="0"></rect>
                          </clipPath>
                        </defs>
                        <g clip-path="url(#__lottie_element_17)">
                          <g transform="matrix(0.9945545792579651,0.10421711206436157,-0.10421711206436157,0.9945545792579651,1132.5928955078125,866.9893188476562)" opacity="1" style={{ mixBlendMode: 'screen', display: 'none' }}>
                            <g opacity="1" transform="matrix(0.9986295104026794,0.0523359552025795,-0.0523359552025795,0.9986295104026794,0,0)">
                              <path fill="rgb(0,229,255)" fill-opacity="1" d=" M0,346.32000732421875 C130.47900390625,346.32000732421875 266.3999938964844,212.3679962158203 266.3999938964844,-8.324999809265137 C266.3999938964844,-229.01800537109375 147.12899780273438,-346.32000732421875 0,-346.32000732421875 C-147.12899780273438,-346.32000732421875 -266.3999938964844,-229.01800537109375 -266.3999938964844,-8.324999809265137 C-266.3999938964844,212.3679962158203 -130.47900390625,346.32000732421875 0,346.32000732421875z"></path>
                            </g>
                          </g>
                          <g transform="matrix(0.9945545792579651,-0.10421711206436157,0.10421711206436157,0.9945545792579651,468.1868591308594,733.7866821289062)" opacity="1" style={{ display: 'none' }}>
                            <g opacity="1" transform="matrix(0.9986295104026794,-0.0523359552025795,0.0523359552025795,0.9986295104026794,0,0)">
                              <path fill="rgb(0,102,255)" fill-opacity="1" d=" M0,346.32000732421875 C130.47900390625,346.32000732421875 266.3999938964844,212.3679962158203 266.3999938964844,-8.324999809265137 C266.3999938964844,-229.01800537109375 147.12899780273438,-346.32000732421875 0,-346.32000732421875 C-147.12899780273438,-346.32000732421875 -266.3999938964844,-229.01800537109375 -266.3999938964844,-8.324999809265137 C-266.3999938964844,212.3679962158203 -130.47900390625,346.32000732421875 0,346.32000732421875z"></path>
                            </g>
                          </g>
                          <g transform="matrix(0.9986380934715271,-0.05217195674777031,0.05217195674777031,0.9986380934715271,639.3875732421875,729.613525390625)" opacity="1" style={{ display: 'block' }}>
                            <g opacity="1" transform="matrix(0.9986295104026794,-0.0523359552025795,0.0523359552025795,0.9986295104026794,0,0)">
                              <path fill="rgb(0,102,255)" fill-opacity="1" d=" M0,346.32000732421875 C130.47900390625,346.32000732421875 266.3999938964844,212.3679962158203 266.3999938964844,-8.324999809265137 C266.3999938964844,-229.01800537109375 147.12899780273438,-346.32000732421875 0,-346.32000732421875 C-147.12899780273438,-346.32000732421875 -266.3999938964844,-229.01800537109375 -266.3999938964844,-8.324999809265137 C-266.3999938964844,212.3679962158203 -130.47900390625,346.32000732421875 0,346.32000732421875z"></path>
                            </g>
                          </g>
                          <g transform="matrix(0.9986380934715271,0.05217195674777031,-0.05217195674777031,0.9986380934715271,971.3582763671875,871.1627197265625)" opacity="1" style={{ mixBlendMode: 'screen', display: 'block' }}>
                            <g opacity="1" transform="matrix(0.9986295104026794,0.0523359552025795,-0.0523359552025795,0.9986295104026794,0,0)">
                              <path fill="rgb(0,229,255)" fill-opacity="1" d=" M0,346.32000732421875 C130.47900390625,346.32000732421875 266.3999938964844,212.3679962158203 266.3999938964844,-8.324999809265137 C266.3999938964844,-229.01800537109375 147.12899780273438,-346.32000732421875 0,-346.32000732421875 C-147.12899780273438,-346.32000732421875 -266.3999938964844,-229.01800537109375 -266.3999938964844,-8.324999809265137 C-266.3999938964844,212.3679962158203 -130.47900390625,346.32000732421875 0,346.32000732421875z"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <p className="text-white/[0.6] text-center font-light text-sm -mt-4">Loading the models</p>
                  </div> */}
                  <div className="absolute top-2 left-2" style={{ display: 'none' }}>
                    <span className="font-light text-white/[0.6] px-4 py-1 cursor-pointer rounded-full bg-black/[0.4] hover:bg-black/[0.6] text-xs">Compare</span>
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center">
                    <div className="mx-2 p-4 bg-black/[0.4] rounded-full cursor-pointer hover:bg-black/[0.6] backdrop-blur-xl">
                      <img src="https://faceswapper.ai/images/icons/Icons_download.svg" alt="Icon" className="w-4 h-4" />
                    </div>
                    <div className="mx-2 p-4 bg-black/[0.4] rounded-full cursor-pointer hover:bg-black/[0.6] backdrop-blur-xl">
                      <img src="https://faceswapper.ai/images/icons/Icons_zoom-in.svg" alt="Icon" className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center pb-4 md:pb-0">
                <span className="font-light text-white/[0.6] text-xs">By uploading the images, you agree with our&nbsp;
                  <Link href="#" className="hover:underline text-white/[0.8]">Privacy Policy</Link>
                  &nbsp;and&nbsp;
                  <Link href="#" className="hover:underline text-white/[0.8]">Terms of Use</Link>
                </span>
                <button className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-4 text-center mt-2">
                  <svg viewBox="0 0 100 101" fill="none" className="inline w-4 h-4 mr-3 text-white animate-spin">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
                  </svg>
                  Generate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIGenerator