import { urlFor } from '../sanity'


const ImageMap = ( { image } ) => {


    return (
        <img className="border-2 border-[#FFFFFF] rounded-lg" src={urlFor(image.image)} />,
        <p>{image.description} Hi</p>
    )
}