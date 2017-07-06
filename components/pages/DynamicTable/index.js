import React from 'react';
// require('./index.less');

class DynamicTable extends React.Component {
  constructor(props) {
    super(props);
  }
  getHeads() {
    let heads = new Set(), html = [];
    let e = this.props.jsonList[0];
    for(let attr in e) {
      if (!heads.has(attr)) {
        heads.add(attr);
        html.push(<th key={attr}>{attr}</th>);
      }
    }
    return {heads, html};
  }
  getbodys(heads) {
    let html = [];
    for (var i = 0; i < this.props.jsonList.length; i++) {
      let e = this.props.jsonList[i];
      let tr = [];
      heads.forEach((attr) => {
        let v = e[attr] ? e[attr] : '-';
        tr.push(<td key={attr + '_' + i}>{v}</td>);
      });
      html.push(<tr key={i}>{tr}</tr>);
    }
    return html;
  }
  render() {
    let head = this.getHeads();
    let body = this.getbodys(head.heads);
    return (
      <table className="table">
        <thead>
          <tr>{head.html}</tr>
        </thead>
        <tbody>{body}</tbody>
      </table>
    );
  }
};

export default DynamicTable;