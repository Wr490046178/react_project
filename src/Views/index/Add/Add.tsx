import React, { Component } from 'react'
import {connect} from 'react-redux'
// import {addsaction} from '../../../store/dispatch'
import {RouteComponentProps} from 'react-router-dom'
interface Prps extends RouteComponentProps{

}
class Add extends Component<Prps>{
  
    render() {

        return (
            <div>
                <input type="text" />
                <button onClick={()=>{
                    this.props.history.push('/index/list')
                }}>修改成功</button>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch:Function) => {
    return {
       
        }
    
}
export default connect(null,mapDispatchToProps)(Add)


