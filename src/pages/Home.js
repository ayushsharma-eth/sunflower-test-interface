import React from 'react'
import { Navigation } from '../components/Navigation'
import HomeSearch from '../components/HomeSearch'
import '../css/App.css'

export function Home () {
  
  return (
      <div>
          <Navigation search={false} placeholder={"Search..."}/>
          <div className="searchBackground">
            <div className="titleCenter">Sunflower</div>
            <div className="homeSearchContainer">
              <div className="center">
                <HomeSearch placeholder={"Testing"} />
              </div>
            </div>
          </div>
      </div>
  )
}

export default Home