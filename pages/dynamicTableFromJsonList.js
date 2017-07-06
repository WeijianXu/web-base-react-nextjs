import React from 'react';
import Layout from '../components/layout/Layout';
import DynamicTable from '../components/pages/DynamicTable/index';
import InputData from '../components/pages/InputData/index';
require('../static/styles/bundle.css');

class ParseJsonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonList: []
    };
  }
  render() {
    return (
      <div>
        <InputData getInputData={(data) => this.handleData(data)} dataType="Array" />
        <DynamicTable jsonList={this.state.jsonList} />
      </div>
    );
  }
  handleData(data) {
    this.setState({
      jsonList: data
    });
  }
};

export default () => (
  <Layout>
    <h4>基于JSON列表数据动态生成表格</h4>
    <ParseJsonList />
  </Layout>
);
