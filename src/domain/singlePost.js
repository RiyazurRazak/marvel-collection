import React from 'react'
import "./singlePost.css"

import {useParams} from 'react-router-dom'
import {useSelector}from 'react-redux'
import Footer from '../components/Footer'
import Skeleton from '@material-ui/lab/Skeleton'


function SinglePost() {

    const reducers ={events:'eventsReducer' , comics:'comicsReducer' , characters:'characterReducer', series:'seriesReducer'}
    const{slug , id }= useParams()
   
    const filterData = useSelector(state => state[reducers[slug]])   
  
    const {results} = filterData

    const requiredData = results && results.filter((data)=> data.id === parseInt(id))
    console.log(requiredData)
    const img = requiredData &&  requiredData[0].thumbnail

// set the scroll bar to top    
    document.body.scrollTop= 0;
    document.documentElement.scrollTop = 0;

    return (
        <div>
            {
                results &&
                <div className="singlepost">
                 <div className="singlepost__hero_container">
                  <img className="singlepost__hero_image"src={`${img.path}.${img.extension}`} alt={requiredData[0].title}></img>
                  <h1 className="singlepost__hero_title">{slug === 'characters'? requiredData[0].name : requiredData[0].title}</h1>
                 </div>

                 <div>
                    
                    <h1 className="singlepost_title">{slug === 'characters'? requiredData[0].name : requiredData[0].title}</h1>
                     { (requiredData[0].description === null  || requiredData[0].description.length === 0) ? <br /> :
                    
                    <div>
                    <h3 className="singlepost_title">Description</h3>
                    <p className="single__post_desc">{requiredData[0].description}</p>
                    </div>
                     }
                 </div>
                </div>
            }

            {!requiredData && <Skeleton className="skeleton" variant="rect" animation="pulse" width="100%" height="500px" /> }   
            <Footer />
          
        </div>
    )
}

export default SinglePost
