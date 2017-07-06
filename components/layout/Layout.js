import Header from './Header';
// require('./layout.less');

const Layout = (props) => (
  <div className="layout">
    <Header />
    {props.children}
  </div>
)

export default Layout;
