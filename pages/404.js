import { sanityClient, urlFor } from "../sanity"
import Dynamic from 'next/dynamic';
import JarallaxImage from '../components/JarallaxImage';
import moment from 'moment'
import Head from 'next/head'

const Jarallax = Dynamic(() => import('../components/Jarallax'), { ssr: false });

const FourOhFour = ({
    DomainName
}) => {
  return (
        <div className="main container">

          <Head>
            <title>404 - Page Not Found</title>
          </Head>

            <div className="bg-Background w-screen h-screen flex flex-col items-center justify-center">
                <h2 className="text-Text font-poppins font-[800] text-2xl md:text-4xl lg:text-5xl uppercase tracking-wide leading-[1]">404</h2>
                <div className="border-[1px] mt-8 mb-8 w-64 border-Text"></div>
                <h2 className="text-Text font-poppins font-[800] text-lg md:text-2xl uppercase tracking-wide leading-[1]">Page not Found.</h2>
                <img className="mt-8 lg:w-96 md:w-72 w-52" src="https://tims.host/assets/images/404-cat.png"></img>

            </div>

 

       </div>
)}




export default FourOhFour
