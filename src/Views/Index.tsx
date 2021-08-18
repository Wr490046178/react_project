import React, { Component } from 'react'
import RouterViews from '../router/RouterViews'
import { RouterItem } from '../router/router';
import { NavLink } from 'react-router-dom';
import '../App.scss'
import { Input} from 'antd';
const { Search } = Input;
interface IProps {
    routes: RouterItem[]
}
export default class Index extends Component<IProps>{
    render() {
        return (
            <div className='zon'>
                <div className='top'>
                    <img src="/img/logo.png" className="imglogo" />
                    <NavLink to='/index/home'>首页</NavLink>
                    <NavLink to='/index/list'>模型试验室</NavLink>
                    <NavLink to='/index/shop'>自主分析库</NavLink>
                    <NavLink to='/index/audit'>审计模型库</NavLink>
                    <NavLink to='/index/operationRet'>运行结果库</NavLink>
                    <NavLink to='/index/system'>系统管理</NavLink>
                    <NavLink to='/index/onlineHelp'>在线帮助</NavLink>
                    <NavLink to="/index/home/modeloperation"></NavLink>
                    <Search
                        placeholder="请输入搜索内容"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />

                </div>
                <div className='cen'>
                    <RouterViews routes={this.props.routes} />
                </div>
            </div>
        )
    }
}