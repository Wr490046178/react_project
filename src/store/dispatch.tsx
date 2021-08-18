//封装后redux仓库
import axios from 'axios'
import { Dispatch } from 'redux'
import '../mock/mock'
// import '../mock/data.json'

import { HomeChild } from './action'
import {HomeList} from "./action"

export const gethomelist = async (dispatch: Dispatch) => {
    let res = await axios.get('/api/list');
    dispatch({ type: "GET_HOME_LIST", list: res.data.list })
}
export const addshop = (item: HomeChild) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: 'ADD_SHOP', item })
    }
}
export const Jian = (index: number) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: 'JIAN', index })
    }
}
export const Jia = (index: number) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: 'JIA', index })
    }
}

export const Xuan = (index: number) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: 'XUAN', index })
    }
}
export const Quan = () => {
    return (dispatch: Dispatch) => {
        dispatch({ type: 'QUAN' })
    }
}
export const Remove = (index: number) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: 'REMOVE', index })
    }
}

export const Add = (a: string) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: 'ADD', a })
    }

}
export const isLike = (a: number) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: 'ISLIKE', a })

    }
}
export const Shan = (index: number) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: 'SHAN', index })
    }
}
export const changeCollect = (item: HomeList) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: 'CHANGE_COLLECT', item })
    }
}

export const Dian = (flag: boolean) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: 'DIAN', flag })
    }
}
export const scaction=(id:string)=>{
    return  (dispathch:Function)=>{
        dispathch({
            type:'SC',
            id
        })
    }
}
export const delaction=(index:number)=>{
    return  (dispathch:Function)=>{
        dispathch({
            type:'DEL',
            index
        })
    }
}
// export const addaction=(name:string)=>{
//     return  (dispathch:Function)=>{
//         dispathch({
//             type:'ADD',
//             name
//         })
//     }
// }
export const addsaction=(name:string)=>{
    return  (dispathch:Function)=>{
        dispathch({
            type:'ADD-NN',
            name
        })
    }
}