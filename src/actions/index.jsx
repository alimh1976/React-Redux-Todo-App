
var idCount=0;
export const addTodo=(text)=>({
    type:"ADD-TODO",
    id:idCount+=1,
    text
    
});

export const setVisibilityFilter = (filter) => ({
    type : 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleTodo=(id)=>({

    type:"TOGGLE-TODO",
    id

})

