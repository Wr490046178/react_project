import React, { Component } from 'react'
import { connect } from 'react-redux'
import { State } from '../../../store/action'
import { gethomelist, scaction } from '../../../store/dispatch'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import './scss/home.scss'
import { Row, Col, Table, Divider, Tag } from 'antd';
// import * as echarts from 'echarts';
// import ReactEchars from 'echarts-for-react';
const style = { background: 'green', padding: '8px 0', height: 100 };
interface Iprops extends RouteComponentProps {

}
class Home extends Component<Iprops>{
  state = {

  }
  componentDidMount() {


  }
  columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: any[]) => (
        <span>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: { name: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined }) => (
        <span>
          <a>Invite {record.name}</a>
          <Divider type="vertical" />
          <a>Delete</a>
        </span>
      ),
    },
  ];

  data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  render() {
    // const option={
    //   var myChart = echarts.init(document.getElementById('main'));
    //   // ????????????
    //   myChart.setOption({
    //     title: {
    //       text: 'ECharts ????????????'
    //     },
    //     tooltip: {},
    //     xAxis: {
    //       data: ['??????', '?????????', '?????????', '??????', '?????????', '??????']
    //     },
    //     yAxis: {},
    //     series: [{
    //       name: '??????',
    //       type: 'bar',
    //       data: [5, 20, 36, 10, 10, 20]
    //     }]
    //   });
    // }
    return (
      <div className='xqq'>
        <div className="container-fluid">
          <Row gutter={16}>
            <Col className="gutter-row" span={8}>
              <div style={style}>??????????????????</div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div style={style}>??????????????????</div>
            </Col>
            <Col className="gutter-row" span={8} onClick={() => {
              this.props.history.push({
                pathname: '/index/home/modeloperation'
              })
            }}>
              <div style={style}>??????????????????????????????</div>
            </Col>
          </Row>
        </div>
        <div className="warp">
          <div className="warp-header">
            <span className="warp-left">??????????????????</span>
            <span className="warp-right">??????</span>
          </div>
        </div>
        <div className="warp-foot">
          <div className="w-foot-left">
            <div className="warp-foot-le">
              <span className="warp-left">??????????????????</span>
              <span className="warp-right">??????</span>
            </div>
            <div>
              <Table columns={this.columns} dataSource={this.data} />
            </div>
          </div>
          <div className="w-foot-right">
          <div id="main"></div>
          </div>
        </div>
        <div className="warp-buttom">
          <div className="warp-buttom-header">
            <span className="warp-buttom-left">????????????</span>
            <span className="warp-buttom-right">??????</span>
          </div>
          <div><Table columns={this.columns} dataSource={this.data} /></div>
        </div>

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
})(withRouter(Home))
