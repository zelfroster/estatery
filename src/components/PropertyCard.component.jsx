import { CgHeart } from 'react-icons/cg'
import { BiBed } from 'react-icons/bi'
import { TbBath } from 'react-icons/tb'
import { BiArea } from 'react-icons/bi'
import { BsStars } from 'react-icons/bs'

const PropertyCard = ({ propertyData }) => {

  const { isPopular, propertyImage, propertyRate, propertyName, propertyDetails, propertyAddress } = propertyData

  return (
    <div className="flex flex-col rounded-md bg-white border-2 border-lightGray/40 duration-300 relative z-0 hover:scale-105">

      <img className='rounded-t-md' src={propertyImage} alt="image" />

      <div className="flex flex-col gap-2 p-6 text-sm bg-white rounded-b-md">

        {
          isPopular &&
          <>
            <div className="absolute flex items-center gap-1 top-48 -left-2 bg-purple text-white px-4 py-1 rounded-t rounded-br z-20 xl:top-56">
              <BsStars />
              <p>POPULAR</p>
            </div>
            <div className="absolute bg-[#4035be] w-4 aspect-square rotate-45 top-[212px] -left-1 -z-10 xl:top-[244px]"></div>
          </>
        }

        <div className="flex justify-between">
          <div className="flex flex-col">
            <h3 className="text-purple text-xl font-bold">
              ${propertyRate}<span className="text-gray text-xs font-medium">/month</span>
            </h3>
            <h2 className="text-xl font-bold">{propertyName}</h2>
          </div>
          <span className="w-max h-max p-1 border-2 border-gray/40 rounded-full duration-300 hover:border-purple">
            <CgHeart className="p-1 text-3xl text-purple" />
          </span>
        </div>

        <p className="text-gray my-2">{propertyAddress}</p>

        <div className="flex justify-between text-gray text-xs pt-4 border-t border-gray/20">
          <div className="flex items-center gap-2">
            <BiBed className="text-xl font-extrabold text-purple" />
            <p className="text-xs">{propertyDetails.beds} Beds</p>
          </div>
          <div className="flex items-center gap-2">
            <TbBath className="text-xl font-extrabold text-purple" />
            <p className="text-xs">{propertyDetails.bathrooms} Bathrooms</p>
          </div>
          <div className="flex items-center gap-2">
            <BiArea className="text-xl font-extrabold text-purple" />
            <p className="text-xs">{propertyDetails.size} m<sup>2</sup></p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PropertyCard
