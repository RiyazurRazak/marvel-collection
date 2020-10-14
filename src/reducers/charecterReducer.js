
const apiCallReducer = (state = [] , action) =>{
    switch(action.type){
        case "CHARACTERS" :
            return action.payload; 
            default :
            return state
            
    }
}

export default apiCallReducer