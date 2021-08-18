import React, { Component } from 'react'
import { connect } from 'react-redux'
import { State } from '../../../store/action'
import { HomeChild } from '../../../store/action'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Jia, Jian, Quan, Remove, Xuan } from '../../../store/dispatch'
interface Iprops extends RouteComponentProps {
    gou: HomeChild[],
    jian: (index: number) => void
    jia: (index: number) => void
    xuan: (index: number) => void,
    remove: (index: number) => void,
    quan: () => void
    flag: boolean
}
class Shop extends Component<Iprops>{
    render() {
        const { gou, flag } = this.props
        return (
            <div>
                {
                    gou.map((item, index) => {
                        return <div key={index}>
                            <input type="checkbox" checked={item.flag} onChange={() => {
                                this.props.xuan(index)
                            }} />
                            <img src={item.img} alt="" />
                            <p>标题：{item.title}</p>
                            <p>价格：{item.price}</p>
                            <button onClick={() => {
                                this.props.jian(index)
                            }}>-----</button>
                            <span>{item.num}</span>
                            <button onClick={() => {
                                this.props.jia(index)
                            }}>+++++</button>
                            <button onClick={() => {
                                this.props.remove(index)
                            }}>删除</button>
                        </div>
                    })
                }
                全选：<input type="checkbox" checked={flag} onChange={() => {
                    this.props.quan()
                }} />
                <h3>总数量{gou.reduce((a, b) => { return b.flag ? a += b.num : a }, 0)}</h3>
                <h3>总价:{gou.reduce((a,b)=>{return b.flag?a+=b.num*b.price:a},0)}</h3>
            </div>
        )
    }
}
export default connect((state: State) => {
    return {
        gou: state.gou,
        flag: state.flag
    }
}, (dispatch: any) => {
    return {
        jian(index: number) {
            dispatch(Jian(index))
        },
        jia(index: number) {
            dispatch(Jia(index))
        },
        xuan(index: number) {
            dispatch(Xuan(index))
        },
        quan() {
            dispatch(Quan())
        },
        remove(index: number) {
            dispatch(Remove(index))
        },
    }
})(withRouter(Shop))
