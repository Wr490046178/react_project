//redux仓库
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { State, HomeAction} from './action'
const name = (state: State = {
    list: [],
    children: [],
    gou: [],
    flag: false,
    f: [],
}, action: HomeAction) => {
    const newList = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'GET_HOME_LIST':
            newList.list = action.list
            return newList
        case 'ADD_SHOP':
            newList.gou.push(action.item)
            newList.gou.num += 1
            return newList
        case 'JIAN':
            if (newList.gou[action.index].num > 0) {
                newList.gou[action.index].num--
            }
            return newList
        case 'JIA':
            newList.gou[action.index].num++
            return newList
        case 'XUAN':
            newList.gou[action.index].flag = !newList.gou[action.index].flag
            newList.flag = newList.gou.every((item: HomeAction) => item.flag)
            return newList
        case 'QUAN':
            newList.flag = !newList.flag
            newList.gou.map((item: HomeAction) => item.flag = newList.flag)
            return newList
        case 'REMOVE':
            newList.gou.splice(action.index, 1)
            return newList
        case 'ADD':
            newList.f.push({
                name: action.a,
                like: false
            })
            return newList
        case 'ISLIKE':
            newList.f[action.a].like = !newList.f[action.a].like
            return newList
        case 'SHAN':
            newList.f.splice(action.index, 1)
            return newList
        // case "CHANGE_COLLECT":
        //     // console.log(action.item);
        //     return
        case 'DEL':
            state.list.splice(action.index, 1)
            return { ...state, list: [...state.list] }
        // case "DIAN":
        //     // console.log(action.flag);
        //     // console.log(1111);

        //     return
        case 'SC':
            state.list.forEach(item => {
                if (item.id === action.id) {
                    item.issc = !item.issc
                }
            })
            return { ...state, list: [...state.list] }





            // case 'ADD-NN':
            // let a = new Date().getTime()
            // let obj={
            //     "title":action.name,
            // }
            // state.list.push(obj);
            // // return { ...state, list: [...state.list] }
            // return newList


        
        default:
            return newList

    }
}

const store = createStore(name, applyMiddleware(thunk))
export default store;