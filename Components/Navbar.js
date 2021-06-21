import {useState , useEffect} from 'react';
import Popup from './Popup'

import Image from 'next/image'
import Logo from '../images/logo.png'
const NavItems= props => <li >
    <a className="text-sm  font-bold text-gray-500 px-3 hover:text-gray-900  transition-colors duration-300 " href={props.href}>
        {props.text}
    </a>
    </li>
export default function Navbar() {
    const [buttonPopup,setButtonPopup]=useState(false);
    const [TimedPopup,setTimedPopup]=useState(false);
    
    useEffect(()=>{
        setTimeout(()=>{
        setTimedPopup(true);
    },3000);
    },[]);
    return (
    <div className=" z-10 ">
        <nav className="flex sticky  justify-between bg-gray-200 shadow-lg">
            <div className="p-1 mx-2 -mb-2" >
                <a  href="/">
                    < Image  height={50} width={140} src={Logo} alt="Rashtrabadilogo" />
                </a>
            </div>
            <div>
                 <ul className="flex space-x-2 p-4 mx-2 -mb-2">
                    <NavItems href="/" text="Home"/>
                    <NavItems href="#events" text="Events"/>
                    <NavItems href="#footer" text="Contact "/>
                    <button onClick={()=>setButtonPopup(true)} className="text-sm  font-bold text-gray-500 px-3 hover:text-gray-900  transition-colors duration-300 ">Join</button>
                    
                </ul>
                
            </div>
           
        </nav>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h2 className="text-2xl my-4 text-red-700 font-bold">Join Rashtrawadi Nepal</h2>
            <form  >
                <label >
                    Name:
                    <input className="m-3 rounded" type="text" name="name" />
                </label>
                <br></br>
                <label>
                    Age:
                    <input className="m-3 rounded" type="text" name="name" />
                </label>
                <br/>
                <label>
                    Ward No.:
                    <input className="m-3 rounded" type="text" name="name" />
                </label>
                <br /><input className="p-2 font-bold m-5 rounded bg-blue-900 text-red-700 hover:bg-red-700 duration-300 hover:text-blue-900 hover:shadow-lg " type="submit" value="Submit" />
                <br/>
                <h1 className="text-2xl mt-2 text-blue-900 font-bold">एक राष्ट्र , एक सोच ,एक सिधन्त।</h1>
            </form>
        </Popup>
        <Popup trigger={TimedPopup} setTrigger={setTimedPopup}>
            <h3>My popup</h3>
        </Popup>
        </div>
    )
}
