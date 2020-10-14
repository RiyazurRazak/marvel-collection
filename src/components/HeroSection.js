import React from 'react'
import { useSelector } from 'react-redux'
import './HeroSection.css'

import Skeleton from '@material-ui/lab/Skeleton'




function HeroSection() {
    
    const imagesData = useSelector(state => state.eventsReducer.results)  
    const imgArr = imagesData && imagesData.map((img)=>{
        return img.thumbnail
    })
 
    const RandomNum = Math.floor(Math.random() * 20)
    return (
        <div className="hero_section-container">
          {!imgArr ? <Skeleton className="skeleton" variant="rect" animation="pulse" width="100%" height="500px"/> : <img className="hero_section-img" src={`${imgArr[RandomNum].path}.${imgArr[RandomNum].extension}`} alt="feature-img"></img> } 
            <h1 className="hero_section_title">MARVEL WORLD</h1>
            <p className="hero_section_paragraph">Welcome to the world of Marvel</p>
          
        </div>
    )
}

export default HeroSection
