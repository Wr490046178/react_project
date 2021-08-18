import React, { Component } from 'react'
import { connect } from 'react-redux'
import { State, HomeList } from '../../../store/action'
import { Add, Dian, gethomelist, delaction } from '../../../store/dispatch'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Shan } from '../../../store/dispatch'
import { Modal, Button } from 'antd';


interface Iprops extends RouteComponentProps {
    list: HomeList[],
    flag: boolean,
    getList: () => void,
    del: any
    add: (a: string) => void,
    f: any,
    Shan: (index: any) => void,

}
class Home extends Component<Iprops>{
    componentDidMount() {
        this.props.getList()
    }
    state = {
        visible: false,
        a: '',
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    
    handleOk = (e: any) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = (e: any) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render() {
        const { list } = this.props
        const { f } = this.props
        const { a } = this.state
        return (
            <div>
                <input type="text" value={a} onChange={(e) => {
                    this.f(e.target.value)
                }} />
                <button onClick={() => {
                    this.props.add(a)
                }}>添加</button>
                {
                    list.map((item, index) => {
                        return <div key={index}>
                            <p>{item.name}</p>
                            <img src={item.img} alt="" />
                            <Button type="primary" onClick={this.showModal}>
                                修改
                            </Button>
                            <Modal
                                title="Basic Modal"
                                visible={this.state.visible}
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                            >
                                <p>
                                   内容：<input type="text" />
                                </p>
                            </Modal>
                            <button onClick={(e) => {
                                e.stopPropagation()
                                this.props.del(index)
                            }}>删除</button>

                        </div>

                    })
                },
                {

                    f.map((item: { name: boolean },
                        index: React.Key) => {
                        return <div key={index}>
                            {item.name}
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
        list: state.list,
        f: state.f
    }
}, (dispatch: any) => {
    return {
        getList() {
            dispatch(gethomelist)
        },

        dian(flag: boolean) {
            dispatch(Dian)
        },
        del: (index: number) => {
            dispatch(delaction(index))
        },
        add(a: string) {
            dispatch(Add(a))
        },
        Shan(a: any) {
            dispatch(Shan(a))
        },
    }
})(withRouter(Home))