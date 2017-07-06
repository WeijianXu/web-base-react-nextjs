import Layout from '../components/layout/Layout';
import React from 'react';
import DeptCategory from '../components/pages/DeptCategory/index';
import InputData from '../components/pages/InputData/index';
require('../static/styles/bundle.css');

class SortDeptCategory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      depts: []
    };
  }
  render() {
    return (
      <div>
        <InputData getInputData={(data) => this.handleData(data)} dataType="Array" />
        <DeptCategory depts={this.state.depts} />
      </div>
    );
  }
  handleData(data) {
    this.setState({
      depts: data
    });
  }
};


const Index = () => (
  <Layout>
    <h4>预约服务科室列表数据排序分析</h4>
    <SortDeptCategory />
  </Layout>
)

export default Index;
