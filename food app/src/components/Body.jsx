// import React from 'react'
import { useState } from 'react'
import Cards from './Cards'
import Search from './Search'
// import { foodData } from '../foodData'
const Body = () => {

  const [search ,setSearch]=useState("")

  return (
    <>
      <div className="">

      
      <Search search={search} setSearch={setSearch} />
        <Cards search={search} />
        </div>  
    </>
  )
}

export default Body