import React, { Component } from 'react'
import { connect } from 'react-redux'
import { State } from '../../../../store/action'
import { gethomelist, scaction } from '../../../../store/dispatch'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import '../scss/Modeloperation.scss'
// import { Row, Col, Table, Divider, Tag } from 'antd';
interface Iprops extends RouteComponentProps {

}
 class Modeloperation extends Component<Iprops>{
    render() {
        return (
            <div className="Modeloperation">
                
            </div>
        )
    }
}
export default connect((state: State) => {
    return {
    }
  }, (dispatch: any) => {
    return {
      getList() {
        dispatch(gethomelist)
      },
      sc: (id: string) => {
        dispatch(scaction(id))
      }
    }
  })(withRouter(Modeloperation))