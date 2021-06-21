import Image from 'next/image'
import Logo from '../images/logosmall.png'


export default function Hero  () {
    return (
    <div>
        <div id="hero" className="text-center  bg-gray-50 h-4/5  w-screen  " >
            
            <div className="text-center p-5 "> 
            < Image   height={300} width={300} src={Logo} alt="Rashtrabadilogo" />
             <div className="">
                 <h1 className="md:text-8xl text-7xl font-bold text-blue-900">Rashtrawadi </h1>  
             <h1 className="md:text-8xl text-7xl font-light font-bold text-red-600">Nepal </h1>
            </div></div>
            {/* <div className="text-center p-5 ">
                <h1 className="text-6xl md:mt-12 md:pt-12 font-bold text-blue-900">
                    IT’S TIME TO CHANGE NEPAL 
                </h1>
                <p className="text-6xl  md:pt-12 font-bold text-red-700">
                    join our campaign
                </p>
                <button>join</button>
            </div> */}
        </div>
        <div className="px-5 bg-gradient-to-b from-gray-50   to-gray-100 font-semibold font-serif text-gray-700">
            <p classNames="" > About us :we are a political ogranization.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt id sem et lobortis. Donec tristique cursus neque, quis tristique arcu bibendum non. Curabitur eget bibendum orci, sit amet sodales urna. Donec egestas purus at ipsum aliquet rutrum. Aliquam egestas feugiat mauris, non malesuada dolor rhoncus sit amet. Pellentesque vitae risus nulla. Aenean interdum hendrerit nunc vel porttitor. Maecenas dictum iaculis ipsum quis ultricies. Curabitur sagittis rhoncus ligula, vitae dignissim lacus semper et. Maecenas elit urna, accumsan ut pharetra id, aliquam vel mauris. Sed volutpat molestie nulla, quis tincidunt dui pellentesque non. Suspendisse sed finibus elit. Morbi sed tortor a lorem blandit auctor.</p>
        </div>
    </div>
    )
}
