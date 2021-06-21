import head from 'next/head';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Update from '../Components/Update';
import Events from '../Components/Events';
import Footer from '../Components/Footer';
export default function Home() {
  return (
    <div className="overflow-x-hidden" >
      
      <head>
        <title>Rashtrawadi Nepal</title>
        <meta name='keywords' content='web development'></meta>
      </head>
      <Navbar />
      <Hero /> 
      <Update />
      <Events />
      <Footer />
    </div>
  )
}
