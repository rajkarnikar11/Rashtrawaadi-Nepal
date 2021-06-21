import Image from 'next/image'
import Logo from '../images/logosmall.png'


export default function Footer() {
    return (
        <div id="footer" className="h-42 bg-gray-700 md:flex text-center text-gray-300">
           <div className="p-5">
           < Image   height={110} width={110} src={Logo} alt="Rashtrabadilogo" />
           </div>
           <div className="w-3/4 my-auto mx-auto md:mx-0 text-2xl text-center">
               <h1>xyz@abc.com</h1>
               <h2 className="mt-5">+977-1111111111</h2>
           </div>
           <div className="p-5">
                <a className="font-bold hover:text-white" href="/">Home</a>
                <p className="mt-7 font-light">Copyright © 2021<br></br>Rashtrawadi Nepal</p>
           </div>
        </div>
    )
}
