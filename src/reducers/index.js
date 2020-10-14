import characterReducer from "./charecterReducer"
import comicsReducer from './comicsreducer'
import eventsReducer from './eventsReducer'
import seriesReducer from './seriesReducer'



import {combineReducers} from "redux"

const allReducers = combineReducers({
    
    characterReducer,
    comicsReducer,
    eventsReducer,
    seriesReducer,
  
})

export default allReducers