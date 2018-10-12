



const todo =(state,action)=>{



    switch(action.type){
        case "ADD-TODO":
        return{
            text:action.text,
            id:action.id,
            completed:false
            
        }
        case "TOGGLE-TODO":
        if(state.id !==action.id){
            return state
        }
        return {
            ...state,
            completed:!state.completed
        }
        default: return state
    }

}


const todos =(state=[],action)=>{
    

    console.log(action)

    switch (action.type){

        case "ADD-TODO":
        return [
            ...state,
            todo(undefined,action)
        ]
        case "TOGGLE-TODO":
        return state.map((items)=>todo(items,action))

        
        default: return state

      
       
    }

    

}
export default todos;