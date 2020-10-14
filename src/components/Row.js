import React, { useEffect } from 'react'
import './Row.css'

import {characters, comics , events, series} from "../actions"
import { useDispatch }from 'react-redux'
import {useSelector}from 'react-redux'
import {getApiData} from '../api'

import Skeleton from '@material-ui/lab/Skeleton'
import { useHistory} from 'react-router-dom'


function Row(props) {

//dictnories
    const actions = {events: events , comics:comics, characters:characters, series:series}
    const reducers ={events:'eventsReducer' , comics:'comicsReducer' , characters:'characterReducer', series:'seriesReducer'}

//redux dispath hook    
    const dispatch = useDispatch()
    const history = useHistory()

// current action and reducers    
    const type = actions[props.fetchType]
    const reducer = reducers[props.fetchType]

//fetch api.......

    useEffect(()=>{

        getApiData(props.fetchType).then((data)=>{
         dispatch(type(data.data))
        })
    },[])

// fetch data from store    
    const fetchData = useSelector(state => state[reducer])

//destructure the data..    
    const {results} = fetchData
   

// onclick handler
    const onClickHandler = (id)=>history.push(`/${props.fetchType}/${id}`)
    

// dom    
    return (
        <div>
            
            <p className="row__title">{props.title}</p>
            <div className="row__images">
               {/* skeleton on loading...... */}
            {!results && <Skeleton className="skeleton" variant="rect" animation="wave" width='100%' height='250px'/>}    
            {/* looping the posters */}
            {results && results.map((char)=>{
                const img = char.thumbnail
                return(
                    <img key={char.id}className="row__image" src={`${img.path}${props.isposter? '/portrait_xlarge':"/landscape_xlarge" }.${img.extension}`} alt={char.name} onClick={()=> onClickHandler(char.id)}></img>
                )
            })}
              </div>

        </div>
    )
}

export default Row
