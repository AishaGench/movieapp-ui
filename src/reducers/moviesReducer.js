// eslint-disable-next-line no-unused-vars
const initialState = {}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state =[1,2,3], { type, payload }) => {
    switch (type) {
/*
    case typeName:
        return { ...state, ...payload }
*/
    default:
        return state
    }
    
}
