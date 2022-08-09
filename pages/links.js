import { sanityClient, urlFor } from "../sanity"
import Dynamic from 'next/dynamic';
import Head from 'next/head'

const Jarallax = Dynamic(() => import('../components/Jarallax'), { ssr: false });

const Links = ({
links,
DomainName,
Navbar
}) => {
  return (
        <div className="main bg-Background">

            <Head>
                <title>{DomainName} - Links</title>
                <link rel="shortcut icon" href={urlFor(Navbar.headerlogo)} />
            </Head>

            <div className="absolute top-0 left-0 w-full h-16 bg-clip-padding backdrop-blur-xl bg-opacity-50 bg-Background z-[420] flex items-center xl:px-40 lg:px-32 md:px-20 px-8 transition-all">
              
              {Navbar?.headerlogo?
                <a href="/"><img className="max-h-10" alt={Navbar.headerlogoalt} src={urlFor(Navbar.headerlogo)} /></a>
              :
              <a href="/" className="text-Text font-poppins font-[600] text-lg">{Navbar.headerlogoalt}</a>}
            
              <div className="flex-grow"></div>

              <div className="space-x-5 md:flex hidden">
                  {Navbar.directorys.map(( data ) => (
                  <a href={data.href} className="text-Text transition-all hover:text-FirstColour font-rubik font-[300] text-lg">{data.title}</a>
                  ))}
              </div>

              <button onClick={() => {document.getElementById("mobile_menu").style.display = "flex";}} className="flex md:hidden">
                
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-Text transition-all hover:text-FirstColour" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

          </div>

          <div id="mobile_menu" className="bg-SecondryBackground w-full h-screen hidden top-0 left-0 fixed z-[999]">
                <div className="flex w-full h-full relative">
                    <button onClick={() => {document.getElementById("mobile_menu").style.display = "none";}} className="absolute top-5 right-5 ">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-Text transition-all hover:text-FirstColour" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    <div className="flex flex-col items-center justify-center w-full h-full">
                      {Navbar.directorys.map(( data ) => (
                        <a href={data.href} className="text-Text transition-all p-4 w-full text-center hover:text-FirstColour font-rubik font-[300] text-xl">{data.title}</a>
                      ))}
                    </div>
                </div>
              </div>

            <div className="w-screen h-screen pt-32 flex flex-col items-center">
                <h2 className="text-Text font-poppins font-[800] text-2xl md:text-4xl lg:text-5xl uppercase tracking-wide leading-[1]">Links</h2>
                <div className="border-[1px] mt-8 mb-8 w-64 border-Text"></div>

                <div className="max-w-lg w-full flex flex-col items-center space-y-5 mt-5">


                    {links?.map((link) => (
                        <a href={link.href} key={link.id} className="bg-SecondryColour w-full h-16 rounded-lg group flex items-center justify-center border-2 border-SecondryColour hover:bg-transparent transition-all hover:scale-[0.95]">
                            <img className="w-[30px] h-[30px] mr-2" src={urlFor(link.image)}></img>
                            <h3 className="text-Text font-rubik group-hover:text-SecondryColour transition-all cursor-default uppercase">{link.buttontitle}</h3>
                        </a>

                    ))}

                </div>
                
                
            </div>

 

       </div>
)}

export const getServerSideProps = async (pageContext) => {

    
    const DomainName = pageContext.req.headers.host

    const query = `*[_type == "linkspage"]{
      buttontitle,
      image,
      href
    }`
    const links = await sanityClient.fetch(query)

    const nav_query = `*[_type == "header" && header == "Header"][0]{
      headerlogoalt,
      headerlogo,
      directorys
    }`
    const navbar = await sanityClient.fetch(nav_query)
  
    if (!Links.length) {
      return {
        props: {
          links: [],
          DomainName,
          Navbar: navbar
        },
      }
    } else {
      return {
        props: {
          links,
          DomainName,
          Navbar: navbar
        },
      }
    }
  }

export default Links
