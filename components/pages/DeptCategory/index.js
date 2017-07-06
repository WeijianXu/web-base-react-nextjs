import React from 'react';
import {mergeSortIteration} from '../../../util/sortAlgorithm';
// require('./index.less');

export default class DeptCategory extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    this.sortDepts(this.props.depts);
    return (
      <ul className="hostPDbox">
          {
            this.props.depts.map((item, idx) => {
              let groups = item.deptgroups;
              return (
                <li key={`${item.deptClassifyName}`} className={idx === 0 ? "hosFarist" : ""}>
                  <div className="Hname">{item.deptClassifyName}</div>
                  <div className="Hlist">
                    {
                      groups.map((g, i) => {
                        let text = g.deptName + '(' + g.appointmentDoctorCount + ')', isSomeCategory = false;
                        if (i !== 0) {
                          isSomeCategory = g.deptSecondClassifyCode == groups[i - 1].deptSecondClassifyCode ? true : false;
                        }
                        
                        return (<a key={`${g.deptCode}`} className={'WhiteSpace ' + (isSomeCategory ? '': 'sort')} title={text} data-code={g.deptSecondClassifyCode}>{text}</a>);
                      })
                    }
                  </div>
                </li>
              )
            })
          }
      </ul>
    );
  }
  sortDepts(data) {
    let i, j, len, dept, group;
    for (i = 0, len = data.length; i < len; i++) {
      dept = data[i];
      if (dept.deptgroups && dept.deptgroups.length) {
        /*dept.deptgroups.sort(function(a, b) {
          let aCode = a.deptSecondClassifyCode,
            bCode = b.deptSecondClassifyCode;
          // 将按照字符的ASCII码进行排序（升序）
          return aCode < bCode ? -1 : (aCode == bCode ? 0 : 1);
        });*/
        mergeSortIteration(dept.deptgroups, 'ZZZZZZ', 'deptSecondClassifyCode');
      }
    }
    
  }
}