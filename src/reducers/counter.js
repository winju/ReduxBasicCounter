const counterReducer = (state = 0 , action) =>{
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'INCREMENTBY5':
            return state + 5;
        case 'DECREMENT':
            return state - 1;
        default:
            return 0;
    }
}

export default counterReducer;