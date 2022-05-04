import { sanityClient, urlFor } from "../../sanity"
import { formatSizeUnits } from "../../utils"
import Image from "../../components/Image"
import Review from "../../components/Review"
import Map from "../../components/Map"
import Link from "next/link"
import Router from 'next/router'

const Portfolio = ({ 
  portfolio,
  title,
  slug,
  thumbnail,
  images,
  user,
  desc,
  file,
  FileURL
}) => {
  var Filesize = formatSizeUnits(FileURL?.size)
  return (
    <div className="bg-Background min-h-screen overflow-x-hidden">

      <button onClick={() => Router.back()} className="absolute flex md:top-10 md:left-10 top-3 left-3 w-auto md:h-12 h-6 items-center md:space-x-4 space-x-2 group transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-full text-Text transition-all group-hover:text-FirstColour w-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
        </svg>
        <p className="text-Text group-hover:text-FirstColour transition-all font-rubik">Go Back</p>
      </button>



      <div className="py-20 flex flex-col items-center px-10 md:px-[4rem] lg:px-40">

        {title?<h2 className="text-Text font-poppins font-[800] text-2xl md:text-4xl lg:text-5xl uppercase tracking-wide leading-[1]">{title}</h2>:null}
        {desc?<h2 className="text-Text mt-5 font-rubik font-[400] text-2xl md:text-4xl lg:text-2xl tracking-wide leading-[1]">{desc}</h2>:null}

        {title || desc?<div className="border-[1px] my-8 w-64 border-Text"></div>:null}

        {user?
          <a href={`/profile/${user.slug.current}`} className="flex items-center group transition-all">
            <img className="w-14 h-14 rounded-full border-Text transition-all border-2 group-hover:border-FirstColour" src={urlFor(user.image)} />
            <h1 className="text-Text pl-4 font-rubik text-lg transition-all group-hover:text-FirstColour">{user.name}</h1>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 pl-1 text-FirstColour" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </a>
        :null}

        {file?
          <div className="max-w-[30rem] h-auto rounded-lg space-y-4 mt-10  flex flex-col text-center break-words">
          
              <a href={`${FileURL.url}`} download className="flex w-[24rem] h-20 bg-SecondryColour border-2 border-SecondryColour group hover:bg-transparent transition-all p-4 rounded-lg items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 transition-all text-Text group-hover:text-SecondryColour" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>

                <div className="flex flex-col text-Text group-hover:text-SecondryColour ml-2">
                  <p className="font-[600] text-lg text-left transition-all">{FileURL?.originalFilename}</p>
                  <p className="font-[300] text-left transition-all">{Filesize}</p>
                </div>
              </a>
          </div>
        :null}

        {!portfolio?
          <div className="fixed w-full h-full flex items-center justify-center">
            <h2 className="text-Text font-poppins font-[800] text-2xl md:text-4xl lg:text-5xl uppercase tracking-wide leading-[1]">This page could not be loaded.</h2>
          </div>
        :null}

        <div className="mt-8 flex flex-col items-center">
          <div className="w-full h-full gap-8 items-start flex flex-wrap justify-center mt-[2rem]">

            {thumbnail?
              <div className="flex flex-col hover:scale-[0.95] transition-all items-center space-y-2 w-full h-auto">
                <img className="rounded-lg w-full h-full" src={urlFor(thumbnail.image)} />
                <p className="text-Text pt-4 text-xl font-rubik">{thumbnail.description}</p>
              </div>
            :null}

            {images?.map(( data ) => (
              <div className="flex flex-col hover:scale-[0.95] transition-all items-center space-y-2 w-full h-auto">
                <img className="rounded-lg w-full h-full" src={urlFor(data.image)} />
                <p className="text-Text pt-4 text-xl font-rubik">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug

  const query = `*[ _type == "portfolio" && slug.current == $pageSlug][0]{
    title,
    thumbnail,
    description,
    slug,
    file,
    owninguser->{
      name,
      slug,
      image
    },
    images,
    "FileInfo": file.file.asset->{
      url,
      size,
      originalFilename
    }
  }`

  const portfolio = await sanityClient.fetch(query, { pageSlug })

  console.log(portfolio.file)


  var raw_portfolio = portfolio;
  var title = portfolio?.title;
  var thumbnail = portfolio?.thumbnail;
  var description = portfolio?.description;
  var slug = portfolio?.slug;
  var file = portfolio?.file;
  var owninguser = portfolio?.owninguser;
  var images = portfolio?.images;
  var fileinfo = portfolio?.FileInfo;

  if (!raw_portfolio) {
    raw_portfolio = null
  }
  if (!title) {
    title = null
  }
  if (!thumbnail) {
    thumbnail = null
  }
  if (!description) {
    description = null
  }
  if (!slug) {
    slug = null
  }
  if (!file) {
    file = null
  }
  if (!owninguser) {
    owninguser = null
  }
  if (!images) {
    images = null
  }
  if (!fileinfo) {
    fileinfo = null
  }

  return {
    props: {
      portfolio: raw_portfolio,
      title: title,
      slug: slug,
      thumbnail: thumbnail,
      images: images,
      user: owninguser,
      desc: description,
      file: file,
      FileURL: fileinfo
    }
  }
}

export default Portfolio
