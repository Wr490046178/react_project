import React,{Component} from 'react'
//axios 
import axios from 'axios'
import './scss/login.scss'
import '../../mock/mock'
import { Form, Input, Button, Checkbox } from 'antd';


interface Iprops{
    history:any
}
class Login extends Component<Iprops>{
    state:any;
    constructor(props:any){
      super(props)
      this.state={

      }
    }
     Demo = () => {
        const onFinish = (values: any) => {
          console.log('Success:', values);
          this.props.history.push({
            pathname:"/index"
        })
        };
      
        const onFinishFailed = (errorInfo: any) => {
          console.log('Failed:', errorInfo);
        };
      
        return (
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="用户名"
              name="user"
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input />
            </Form.Item>
      
            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input.Password />
            </Form.Item>
      
            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
              <Checkbox>记住密码</Checkbox>
            </Form.Item>
      
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" >
              登录
              </Button>
            </Form.Item>
          </Form>
        );
      };
    
    render(){
        return (
            <div className="login">
                <div className='login_box'>
                    <div className='login_box_boss'>
                      <div className="login_demo"><this.Demo/></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login
