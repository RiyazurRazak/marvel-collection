export const characters = (props) =>{
    return{
        type: "CHARACTERS",
        payload : props,  
    }
}

export const comics = (props) =>{
    return{
        type: "COMICS",
        payload : props,  
    }
}

export const events = (props) =>{
    return{
        type: "EVENTS",
        payload : props,  
    }
}

export const series = (props) =>{
    return{
        type: "SERIES",
        payload : props,  
    }
}