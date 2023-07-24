import React from 'react'

const Shimmer = () => {
  return (
    <>
       <div className="shimmercards">
        {Array(16)
          .fill("")
          .map((item,index) =>
       <div key={index} className="shimmer">
          
          </div>                        
       )}              
       </div>
    </>
  )
}

export default Shimmer