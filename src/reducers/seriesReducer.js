
const seriesReducer = (state = [] , action) =>{
    switch(action.type){
        case "SERIES" :
            return action.payload; 
            default :
            return state
            
    }
}

export default seriesReducer