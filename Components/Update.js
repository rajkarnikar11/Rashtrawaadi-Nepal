import Image from 'next/image'
import Logo from '../images/logosmall.png'

export default function Update() {
    return (
        <div className="bg-gray-100 py-2 overflow-x-hidden">
           <div className="text-center p-7  ">
               <h1 className="text-5xl text-gray-700 my-4">Updates</h1>
               <div className="h-px my-2 bg-gradient-to-r from-gray-100  via-gray-400 to-gray-100"></div>
               {/* card section */}

                <div className=" md:grid grid-cols-3 gap-4">
                    <a href="#">
                        <div className="h-96 my-5 overflow-hidden hover:shadow-lg hover:bg-gray-700 transition-colors duration-500  hover:text-gray-50 bg-gray-300 rounded-xl">
                            <div className="h-40 p-5"> 
                            
                                <Image  height={150}  src={Logo} alt="Rashtrabadilogo" />
                            
                            </div>
                            <p className=" p-5 mb-5 overflow-ellipsis ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            
                        </div>
                    </a>
                    <a href="#">
                        <div className="h-96 my-5 overflow-hidden hover:shadow-lg hover:bg-gray-700 transition-colors duration-500  hover:text-gray-50 bg-gray-300 rounded-xl">
                            <div className="h-40 p-5"> 
                            
                                <Image  height={150}  src={Logo} alt="Rashtrabadilogo" />
                            
                            </div>
                            <p className=" p-5 mb-5 overflow-ellipsis ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            
                        </div>
                    </a>
                    <a href="#">
                        <div className="h-96 my-5 overflow-hidden hover:shadow-lg hover:bg-gray-700 transition-colors duration-500  hover:text-gray-50 bg-gray-300 rounded-xl">
                            <div className="h-40 p-5"> 
                            
                                <Image  height={150}  src={Logo} alt="Rashtrabadilogo" />
                            
                            </div>
                            <p className=" p-5 mb-5 overflow-ellipsis ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            
                        </div>
                    </a>
                    <a href="#">
                        <div className="h-96 my-5 overflow-hidden hover:shadow-lg hover:bg-gray-700 transition-colors duration-500 hover:text-gray-50 bg-gray-300 rounded-xl">
                            <div className="h-40 p-5"> 
                            
                                <Image  height={150}  src={Logo} alt="Rashtrabadilogo" />
                            
                            </div>
                            <p className=" p-5 mb-5 overflow-ellipsis ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            
                        </div>
                    </a>
                    <a href="#">
                        <div className="h-96 my-5 overflow-hidden hover:shadow-lg hover:bg-gray-700 transition-colors duration-500  hover:text-gray-50 bg-gray-300 rounded-xl">
                            <div className="h-40 p-5"> 
                            
                                <Image  height={150}  src={Logo} alt="Rashtrabadilogo" />
                            
                            </div>
                            <p className=" p-5 mb-5 overflow-ellipsis ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            
                        </div>
                    </a>
                    <a href="#">
                        <div className="h-96 my-5 overflow-hidden hover:shadow-lg hover:bg-gray-700 transition-colors duration-500 hover:text-gray-50 bg-gray-300 rounded-xl">
                            <div className="h-40 p-5"> 
                            
                                <Image  height={150}  src={Logo} alt="Rashtrabadilogo" />
                            
                            </div>
                            <p className=" p-5  mb-5 overflow-ellipsis ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            
                        </div>
                    </a>
                    
                </div>

            </div>   
        </div>
    )
}
