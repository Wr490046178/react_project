import React, { Component } from 'react'
import { connect } from 'react-redux'
import { State } from '../../../store/action'
import { Add, isLike } from '../../../store/dispatch'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { Shan } from '../../../store/dispatch'

interface Iprops extends RouteComponentProps {
    add: (a: string) => void,
    isLike: (a: number) => void,
    Shan: (index: any) => void,
    f: any
}
class My extends Component<Iprops> {
    state = {
        a: '',
    }
    render() {
        const { f } = this.props
        const { a } = this.state
        return (
            <div>
                <input type="text" value={a} onChange={(e) => {
                    this.f(e.target.value)
                }} />
                <span onClick={() => {
                    this.props.add(a)
                }}>发布</span>
                {
                    f.map((item: { name: boolean, like: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined }, 
                        index: React.Key | null | undefined) => {
                        return <div key={index}>
                            {item.name}
                            <span className={item.like ? 'active' : ''} onClick={() => { this.props.isLike(index as number) }}>❥(^_-)喜欢</span>
                            <button onClick={() => {
                                this.props.Shan(index)
                            }}>删除</button>
                            
                        </div>
                    })
                }
            </div>
        )
    }
    f(e: any) {
        this.setState({
            a: e
        })
    }
}
export default connect((state: State) => {
    return {
        f: state.f
    }
}, (dispatch: any) => {
    return {
        add(a: string) {
            dispatch(Add(a))
        },
        isLike(a: number) {
            dispatch(isLike(a))
        },
        Shan(a: any) {
            dispatch(Shan(a))
        },
    }

})(withRouter(My))