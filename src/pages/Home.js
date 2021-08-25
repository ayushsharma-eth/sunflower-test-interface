import React from 'react'
import { Navigation } from '../components/Navigation'
import HomeSearch from '../components/HomeSearch'

export function Market (props) {
  
  return (
      <div>
          <Navigation search={false} placeholder={"Search..."}/>
          <div className="titleCenter">Sunflower</div>
          <div className="center">
            <HomeSearch placeholder={"Testing"} />
          </div>
      </div>
  )
}

export default Market