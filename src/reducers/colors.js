const initialState = {
    collection: []
}

export default function colors(state = initialState, action) {

    switch (action.type) {
        case 'ADD_COLOR':
            const collection = [...state.collection];
            collection.push(action.color);
            return {...state, collection: collection}; 

        default: 
            return state;

        // case '':
        // break;
    }
 
 }