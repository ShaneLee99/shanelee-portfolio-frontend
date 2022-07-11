import { sanityClient, urlFor } from "../sanity"
import Dynamic from 'next/dynamic'
import React, { useState } from 'react'
import moment from 'moment'

const Jarallax = Dynamic(() => import('../components/Jarallax'), { ssr: false });

const blog = ({
  blogs,  
  Navbar,
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


          

          <div className="w-screen h-screen bg-Background pt-40 p-4 flex items-center flex-col space-y-5">
          
            {blogs?.map((skill) => (
              blogs?
                <a href={`/blog/${skill.slug.current}`} className="w-full md:max-w-4xl max-w-md h-44 bg-SecondryBackground rounded-xl flex items-center md:p-8 p-4 hover:scale-[0.98] transition-all">
                  <img src={urlFor(skill.image)} className="md:w-[100px] md:h-[100px] h-[75px] w-[75px] rounded-full"></img>
                  <div className="text-Text ml-5">
                    <h2 className="font-[500] text-xl font-poppins">{skill.title}</h2>
                    <div className="font-[300] md:text-base text-xs mt-2 text-Text font-rubik flex md:flex-row flex-col md:space-y-0 space-y-2">
                      <p className="mr-2">Posted: {DateTime}</p>
                      {skill.portfolio.title?<p className="md:flex hidden mr-2">/</p>:null}
                      {skill.portfolio.title?<p className="">Portfolio Refrence: {skill.portfolio.title}</p>:null}
                    </div>
                  </div>
                </a>
            :null))}

            {!blogs?
              <div>
                <h2 className="text-Text font-poppins font-[800] text-2xl md:text-4xl lg:text-5xl uppercase tracking-wide leading-[1]">No Blogs Found</h2>
                <div className="border-[1px] my-8 w-full border-Text"></div>
                <h2 className="text-Text font-poppins font-[800] lg:text-2xl text-xl text-center uppercase tracking-wide leading-[1]">Sorry!</h2>
              </div>
            :null}
            
          </div>

        </div>
)}

export const getServerSideProps = async () => {
  let current = new Date();
  let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
  let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
  const dateTime = cDate + ' ' + cTime;
  
  const query = `*[_type == "blog"]{
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
  const blogs = await sanityClient.fetch(query)

  const nav_query = `*[_type == "header" && header == "Header"][0]{
    headerlogoalt,
    headerlogo,
    directorys
  }`
  const navbar = await sanityClient.fetch(nav_query)

  const datetime = moment(blogs.date).format(("dddd, MMMM Do YYYY, h:mm:ss a")); 

  if (!blogs.length) {
    return {
      props: {
        blog: [],
        Navbar: navbar
      },
    }
  } else {
    return {
      props: {
        blogs,
        Navbar: navbar,
        DateTime: datetime
      },
    }
  }
}

export default blog
