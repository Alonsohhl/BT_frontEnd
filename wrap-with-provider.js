import React from "react"
import { Provider } from "react-redux"

//import {store} from "./src/state/_helpers/store"

//const store = rootReducer()


import {store} from "./src/state/_helpers/store"

//const store = createStore()
export default ({ element }) => <Provider store={store}>{element}</Provider>



//////////// eslint-disable-next-line react/display-name,react/prop-types

