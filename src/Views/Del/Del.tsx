import React, { Component } from 'react'
import { HomeList, State, HomeChild } from '../../store/action'
import { connect } from 'react-redux'
import { addshop } from '../../store/dispatch'
import { withRouter, RouteComponentProps } from 'react-router-dom'
interface Iprops extends RouteComponentProps {
    match: any,
    list: HomeList[],
    con: HomeChild[],
    gou: HomeChild[]
    gouList: () => void
    addShop: (item: HomeChild) => void
}
class Del extends Component<Iprops>{
    render() {
        let { match: { params: { id } }, list, gou } = this.props;
        let con = list.find(item => item.id === Number(id))?.children;
        return (
            <div className='xq'>
                <div className='fan' onClick={() => {
                    this.props.history.push('/index/home')
                }}>返回</div>
                {
                    con?.map((item, index) => {
                        return <div key={index}>
                            <dl>
                                <dt><img src={item.img} alt="" /></dt>
                                <dd>
                                    <p>{item.title}</p>
                                </dd>
                            </dl>

                        </div>
                    })
                },
                <div className='xia'
                    onClick={() => {
                        this.props.history.push('/index/shop')
                    }}
                >购物车{gou.length}</div>
                <div
                    className='f'
                    onClick={() => {
                        this.props.history.push('/index/my')
                    }}>发布评论</div>
            </div>
        )
    }
}
export default connect((state: State) => {
    return {
        list: state.list,
        cont: state.children,
        gou: state.gou
    }
}, (dispatch: any) => {
    return {
        addShop(item: HomeChild) {
            dispatch(addshop(item))
        },

    }
})(withRouter(Del))

