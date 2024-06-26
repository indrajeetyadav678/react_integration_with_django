import {configureStore} from '@reduxjs/toolkit'
import datalistreducer from "./RegisterSlice"


const Store=configureStore({
    reducer:{
        Regist:datalistreducer,
    }
})

export default Store;