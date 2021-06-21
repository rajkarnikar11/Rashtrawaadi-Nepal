import Image from 'next/image'
import Logo from '../images/logosmall.png'

export default function Events() {
    return (
        <div className="bg-gray-100" id="events">
            <div className="text-center p-7  ">
               <h1 className="text-5xl text-gray-700 my-4">Events</h1>
               <div className="h-px my-2 bg-gradient-to-r from-gray-100  via-gray-400 to-gray-100"></div>
                
                <div className="text-center mt-5 md:flex" >
                    <div className="md:w-2/5">
                    < Image   height={300} width={300} src={Logo} alt="Rashtrabadilogo" />
                    </div>
                    <div className=" md:w-1/2">
                        <h1 className="text-2xl m-6 text-center text-gray-700" >Event 1</h1>
                        <p className="text-justify text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className=" mt-5 bg-gray-700 text-gray-100 py-2 px-4 rounded hover:border-gray-700 duration-300 hover:bg-gray-50 hover:text-gray-700">Read more</button>
                    </div>
            
                </div>
                <div className="h-px my-2 bg-gradient-to-r from-gray-100  via-gray-400 to-gray-100"></div>
                <div className="text-center mt-5 md:flex" >
                    <div className="md:w-2/5">
                    < Image   height={300} width={300} src={Logo} alt="Rashtrabadilogo" />
                    </div>
                    <div className=" md:w-1/2">
                        <h1 className="text-2xl m-6 text-center text-gray-700" >Event 2</h1>
                        <p className="text-justify text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className=" mt-5 bg-gray-700 text-gray-100 py-2 px-4 rounded hover:border-gray-700 duration-300 hover:bg-gray-50 hover:text-gray-700">Read more</button>

                    </div>
            
                </div>
                <div className="h-px my-2 bg-gradient-to-r from-gray-100  via-gray-400 to-gray-100"></div>
                <div className="text-center mt-5 md:flex" >
                    <div className="md:w-2/5">
                    < Image   height={300} width={300} src={Logo} alt="Rashtrabadilogo" />
                    </div>
                    <div className=" md:w-1/2">
                        <h1 className="text-2xl m-6 text-center text-gray-700" >Event 3</h1>
                        <p className="text-justify text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                <button className=" mt-5 bg-gray-700 text-gray-100 py-2 px-4 rounded hover:border-gray-700 duration-300 hover:bg-gray-50 hover:text-gray-700">Read more</button>

                    </div>
            
                </div>
                {/* <div className="h-px my-2 bg-gradient-to-r from-gray-400  via-gray-50 to-gray-400"></div> */}
            </div>
        </div>
    )
}
