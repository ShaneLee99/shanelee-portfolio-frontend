import { sanityClient, urlFor } from "../sanity"
import Dynamic from 'next/dynamic';
import JarallaxImage from '../components/JarallaxImage';
import moment from 'moment'

const Jarallax = Dynamic(() => import('../components/Jarallax'), { ssr: false });

const home = ({
  portfolios, 
  home_page, 
  Navbar,
  Blog,
  DateTime
}) => {
  return (
        <div className="main">

 

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

          <Jarallax className="w-full h-screen bg-cover bg-center jarallax" speed={0.2}>
    
            <JarallaxImage className="h-screen" src={urlFor(home_page[0].backgroundImage)} alt="" />
            
            <div className="w-full h-full bg-opacity-60 bg-Background space-y-4 flex flex-col items-center justify-center">

              {home_page[0].titleline1?<h2 className="text-Text text-center font-poppins font-[800] text-2xl md:text-4xl lg:text-5xl uppercase tracking-wide leading-[1]">{home_page[0].titleline1}</h2>:<div></div>}
              {home_page[0].titleline2?<h2 className="text-Text text-center font-poppins font-[800] text-2xl md:text-4xl lg:text-5xl uppercase tracking-wide leading-[1]">{home_page[0].titleline2}</h2>:<div></div>}
              
              <div className="flex md:flex-row flex-col md:space-x-4 space-y-4 md:space-y-0 pt-5">
                  {home_page[0].buttonleft?
                    <div className="bg-FirstColour border-FirstColour border-2 rounded hover:bg-transparent flex items-center justify-center h-12 w-64 transition-all">
                      <a href={home_page[0].buttonleft.href} className="flex items-center justify-center h-full w-full focus:outline-none font-semibold text-sm text-Text transition-all hover:text-FirstColour font-rubik tracking-wide">{home_page[0].buttonleft.title}</a>
                    </div>
                  :<div></div>}
                  {home_page[0].buttonright?
                    <div className="bg-SecondryColour border-SecondryColour border-2 rounded hover:bg-transparent flex items-center justify-center h-12 w-64 transition-all">
                      <a href={home_page[0].buttonright.href} className="flex items-center justify-center h-full w-full focus:outline-none font-semibold text-sm text-Text transition-all hover:text-SecondryColour font-rubik tracking-wide">{home_page[0].buttonright.title}</a>
                    </div>
                  :<div></div>}
              </div>

              

            </div>
          </Jarallax>

          {home_page[0].buttonleft && home_page[0].portfoliotitle?
          
            <div id="portfolio" className="bg-Background flex justify-center">

              <div className="py-20 flex flex-col items-center px-10 md:px-[4rem] lg:px-40 xl:px-60">

              <h2 className="text-Text font-poppins font-[800] text-2xl md:text-4xl lg:text-5xl uppercase tracking-wide leading-[1]">{home_page[0].portfoliotitle}</h2>
                <div className="border-[1px] mt-8 mb-[5rem] w-64 border-Text"></div>

                <div className="w-full h-full gap-8 items-start flex flex-wrap transition-all justify-center mt-[2rem]">
                    {portfolios.map((portfolio) => (
                      portfolio.thumbnail && portfolio.title && portfolio.owninguser.name?
                        <a href={`/artwork/${portfolio.slug.current}`} className="w-full md:w-[49%] h-full lg:w-[24%] hover:scale-[0.95] transition-all relative group rounded-xl flex flex-col items-center justify-center overflow-hidden">       
                            <img className="w-full h-full transition-all" src={urlFor(portfolio.thumbnail.image)} />
                            <div className="absolute bottom-0 left-0 w-full items-center justify-center transition-colors h-[50%] from-transparent via-Background/50 to-Background/70 group-hover:bg-gradient-to-b flex flex-col">
                                <p className="font-rubik group-hover:text-Text font-[600] text-transparent text-lg">{portfolio.title}</p>
                                <p className="font-rubik group-hover:text-Text font-[300] text-transparent text-base">By {portfolio.owninguser.name}</p>
                            </div>
                        </a>
                      :null
                    ))}
                </div>

              </div>

            </div>

          :null}

        {Blog?
          
          <div id="blogs" className="bg-Background flex justify-center">

            <div className="py-20 flex flex-col items-center px-10 md:px-[4rem] lg:px-40 xl:px-60">

            <h2 className="text-Text font-poppins font-[800] text-2xl md:text-4xl lg:text-5xl uppercase tracking-wide leading-[1]">{home_page[0].blogtitle}</h2>
              <div className="border-[1px] mt-8 mb-[5rem] w-64 border-Text"></div>

              <div className="w-full h-full gap-8 items-start flex flex-wrap transition-all justify-center mt-[2rem]">
                {Blog?.map((skill) => (
                    <a href={`/blog/${skill.slug.current}`} className="w-full md:max-w-4xl max-w-md h-44 bg-SecondryBackground rounded-xl flex items-center md:p-8 p-4 hover:scale-[0.98] transition-all">
                      <img src={urlFor(skill.image)} className="md:w-[100px] md:h-[100px] h-[75px] w-[75px] rounded-full"></img>
                      <div className="text-Text ml-5">
                        <h2 className="font-[500] text-xl font-poppins">{skill.title}</h2>
                        <div className="font-[300] md:text-base text-xs mt-2 text-Text font-rubik flex md:flex-row flex-col md:space-y-0 space-y-2">
                          <p className="mr-2">Posted: {moment(skill.date).format(("dddd, MMMM Do YYYY, h:mma")) }</p>
                          {skill.portfolio.title?<p className="md:flex hidden mr-2">/</p>:null}
                          {skill.portfolio.title?<p className="">Portfolio Refrence: {skill.portfolio.title}</p>:null}
                        </div>
                      </div>
                    </a>
                ))}
              </div>

            </div>

          </div>

        :null}
        </div>
)}

export const getServerSideProps = async () => {

  const query = `*[_type == "portfolio"]{
    title,
    owninguser->{
      name,
    },
    thumbnail,
    images,
    slug
  }`
  const portfolios = await sanityClient.fetch(query)

  const home_query = '*[_type == "home" && home == "Home"]'
  const home_page = await sanityClient.fetch(home_query)

  const nav_query = `*[_type == "header" && header == "Header"][0]{
    headerlogoalt,
    headerlogo,
    directorys
  }`
  const navbar = await sanityClient.fetch(nav_query)

  const blog_query = `*[_type == "blog"]{
    title,
    post,
    image,
    slug,
    date,
    portfolio->{
      title
    },
    owninguser->{
      name,
      image,
      desc
    }
  }`

  const blog = await sanityClient.fetch(blog_query)

  const datetime = moment(blog.date).format(("dddd, MMMM Do YYYY, h:mma"));


  if (!portfolios.length || !blog.length) {
    return {
      props: {
        portfolios: [],
        home_page,
        Navbar: navbar,
        Blog: blog,
        DateTime: datetime
      },
    }
  } else {
    return {
      props: {
        portfolios,
        home_page,
        Navbar: navbar,
        Blog: blog,
        DateTime: datetime
      },
    }
  }
}

export default home
