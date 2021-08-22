import React from 'react'
import { Navigation } from '../components/Navigation'
import HomeSearch from '../components/HomeSearch'

export function Market (props) {
  
  return (
      <div>
          <Navigation search={false} placeholder={"Search..."}/>
          <h1>Sunflower</h1>
          <HomeSearch placeholder={"Testing"} />
          
      </div>
  )
}

export default Market