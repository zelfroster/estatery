import { useState } from 'react'
import { IoClose } from 'react-icons/io5'

const initialFormData = {
  propertyLocation: "",
  date: "",
  propertyRate: "",
  propertyType: ""
}

const Form = ({ setFilteredPropertyData, propertyData }) => {
  const [formData, setFormData] = useState(initialFormData)
  const [isSearched, setIsSearched] = useState(false)
  const { propertyLocation, date, propertyRate, propertyType } = formData

  const updateFormData = (e) => {
    setFormData(() => ({ ...formData, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredData = propertyData
      .filter(item => item.propertyType.includes(propertyType))
      .filter(item => item.propertyAddress.toLowerCase().includes(propertyLocation.toLowerCase()))
      .filter(item => {
        const rate = parseInt(item.propertyRate)
        const intPropertyRate = parseInt(propertyRate)
        if (intPropertyRate === 1 || intPropertyRate === 2 || intPropertyRate === 3) {
          switch (intPropertyRate) {
            case 1:
              return rate >= 500 && rate < 2500
            case 2:
              return rate >= 2500 && rate < 5000
            case 3:
              return rate >= 5000 && rate <= 10000
          }
        }
        return true
      })
    setFilteredPropertyData(filteredData)
    setIsSearched(true)
  }

  const resetFormFields = () => {
    setFormData(initialFormData)
    setFilteredPropertyData(propertyData)
    setIsSearched(false)
  }

  return (
    <form className="relative flex flex-col justify-between bg-white rounded-md p-6 mt-8 lg:flex-row" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1 border-b-2 border-gray/20 pb-4 xl:border-r-2 xl:border-b-0 xl:pb-0 xl:pr-8">
        <label htmlFor="location" className="text-gray">Location</label>
        <input
          type="search"
          name="propertyLocation"
          id="propertyLocation"
          value={propertyLocation}
          onChange={updateFormData}
          className="bg-white font-bold outline-none placeholder:text-darkPurple focus:placeholder:text-gray"
          placeholder="New York, USA"
        />
      </div>
      <div className="flex flex-col gap-1 border-b-2 border-gray/20 py-4 xl:border-r-2 xl:border-b-0 xl:py-0 xl:pr-8">
        <label htmlFor="date" className="text-gray">When</label>
        <input
          type="date"
          name="date"
          id="date"
          value={date}
          onChange={updateFormData}
          className="bg-white font-bold"
          placeholder="Select when to move"
        />
      </div>
      <div className="flex flex-col gap-1 border-b-2 border-gray/20 py-4 xl:border-r-2 xl:border-b-0 xl:py-0 xl:pr-8">
        <label htmlFor="price" className="text-gray">Price</label>
        <select
          name="propertyRate"
          id="propertyRate"
          value={propertyRate}
          onChange={updateFormData}
          className="bg-white font-bold"
        >
          <option value="1">$500-$2500</option>
          <option value="2">$2500-$5000</option>
          <option value="3">$5000-$10000</option>
        </select>
      </div>
      <div className="flex flex-col gap-1 border-gray/20 py-4 xl:border-r-2 xl:border-b-0 xl:py-0 xl:pr-8">
        <label htmlFor="property-type" className="text-gray">Property Type</label>
        <select
          name="propertyType"
          id="propertyType"
          value={propertyType}
          onChange={updateFormData}
          className="bg-white font-bold"
        >
          <option value="House">Houses</option>
          <option value="Apartment">Apartments</option>
          <option value="Lounge">Lounges</option>
        </select>
      </div>
      <button
        type='submit'
        className="px-8 py-2 border-lightGray border-2 rounded-md bg-purple text-white duration-200 hover:border-purple/80"
      >
        Search
      </button>
      <button
        type='button'
        className={`${isSearched ? "absolute" : "hidden"} -top-3 -right-3 w-8 aspect-square grid place-items-center bg-red-400 text-white text-xl rounded-full hover:bg-red-500`}
        onClick={resetFormFields}
      >
        <IoClose />
      </button>
    </form>
  )
}

export default Form
