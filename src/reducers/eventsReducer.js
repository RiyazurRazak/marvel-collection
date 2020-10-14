
const eventsReducer = (state = [] , action) =>{
    switch(action.type){
        case "EVENTS" :
            return action.payload; 
            default :
            return state
            
    }
}

export default eventsReducer