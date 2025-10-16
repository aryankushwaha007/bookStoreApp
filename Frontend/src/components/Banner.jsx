import React from 'react'

const Banner = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
                <div className='md:w-1/2 w-full mt-12 md:mt-32 order-2 md:order-1 '>
                    <div className='space-y-11'>
                        <h1 className='text-4xl font-bold'>Hello, welcome here to learn something <span className='text-pink-500'>new everyday!!!</span></h1>
                        <p className='text-xl'>
                            Learning books are gateways to knowledge and personal growth. They allow us to explore new ideas, understand complex concepts, and see the world from different perspectives. Unlike temporary sources of information, books encourage deep thinking and lasting learning. Each page offers lessons that build our curiosity, sharpen our minds, and shape our character. Whether it’s a textbook, a biography, or a self-improvement guide, learning books help us grow beyond our limits and inspire us to keep seeking wisdom throughout life.
                        </p>
                        <label className="input validator w-full outline-none">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg>
                            <input type="email" placeholder="mail@site.com" required />
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>
                        <button className="btn btn-secondary">Secondary</button>
                    </div>



                </div>
                <div className='order-1 md:w-1/2 w-full '>
                    <img src="/Banner.jpg" className='w-full h-full object-cover px-2' alt="Banner" />
                </div>
            </div>

        </>
    )
}

export default Banner