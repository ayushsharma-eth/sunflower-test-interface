import React from 'react'
import { Navigation } from '../components/Navigation'
import HomeSearch from '../components/HomeSearch'
import '../css/App.css'
import TestCarousel from '../components/TestCarousel'

export function Home () {
  
  return (
      <div>
          <Navigation search={false}/>
          <div className="searchBackground">
            <div className="titleCenter">Sunflower</div>
            <div className="homeSearchContainer">
              <div className="center">
                <HomeSearch placeholder={"Search..."} />
              </div>
            </div>
          </div>
      </div>
  )
}

export default Home