import React from 'react';

export default class InputData extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  render() {
    let errorStyle = this.state.hasError ? {} : {
      display: 'none'
    };
    return (
      <div>
        <textarea type="text" placeholder="请输入数据" onChange={(e) => this.handleChange(e)}></textarea>
        <span style={errorStyle}>不是{this.props.dataType}，解析失败！</span>
        <style jsx>{`
          textarea {
            width: 100%;
          }
          span {
            color: red;
          }
        `}</style>
      </div>
    );
  }
  handleChange(event) {
    try {
      let data = JSON.parse(event.target.value);
      console.log(`[object ${this.props.dataType}]`);
      if (Object.prototype.toString.call(data) === `[object ${this.props.dataType}]`) {
        this.setState({
          hasError: false
        });
        // 只有成功时，触发父组件事件
        this.props.getInputData(data);
      } else {
        this.setState({
          hasError: true
        });
      }
    } catch (e) {
      this.setState({
        hasError: true
      });
    }
  }
}