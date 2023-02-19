import React from 'react'
import Form from './Form.component'
import PropertyCard from './PropertyCard.component'
import data from "../constants/propertyData.json"
import { useState } from 'react'

const Rent = () => {
  const [propertyData, setPropertyData] = useState(data)
  const [filteredPropertyData, setFilteredPropertyData] = useState(propertyData)
  return (
    <main className="flex-1 container mt-12">

      <section className="flex justify-between flex-col xl:flex-row gap-4">
        <h1 className="text-3xl font-extrabold text-center text-[#13152f]">
          Search properties to rent{" "}
        </h1>
        <select className="px-4 py-1 text-xs rounded-md bg-white border-2 border-lightGray" name="dropdown" id="">
          <option value="search">Search with Search Bar</option>
        </select>
      </section>

      <Form setFilteredPropertyData={setFilteredPropertyData} propertyData={propertyData} />

      <section className="grid grid-cols-1 gap-8 my-12 md:grid-cols-2 xl:grid-cols-3">
        {
          filteredPropertyData.map(item => <PropertyCard key={item.id} propertyData={item} />)
        }
      </section>

    </main>
  )
}

export default Rent
