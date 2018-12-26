import { createStore as reduxCreateStore } from "redux"



const reducer = (state, action) => {
  if (action.type === `INCREMENT`) {
    return Object.assign({}, state, {
      count: state.count + 1,
    })
  }
  return state
}

const initialState = {   count: 0 ,
                                    auth:false}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore