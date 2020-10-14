
const comicsReducer = (state = [] , action) =>{
    switch(action.type){
        case "COMICS" :
            return action.payload; 
            default :
            return state
            
    }
}

export default comicsReducer