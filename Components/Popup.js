import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Popup(props) {
    return (props.trigger) ? (
        <div  className="absolute rounded-xl  w-96 text-center h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300  z-30 top-1/3" >
            <div className="relative p-2" >
                <button onClick={()=>props.setTrigger(false)} className="absolute top-2 right-3">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" alt="x" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg></button>
                {props.children}
            </div>
        </div>
    ): "";
}

export default Popup
