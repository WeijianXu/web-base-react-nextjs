import Link from 'next/link';
// require('./header.less');

const Header = () => (
  <div className="header">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/dynamicTableFromJsonList">
        <a>动态表格</a>
      </Link>
      <Link href="/sortDeptCategory">
        <a>科室分类</a>
      </Link>
  </div>
)

export default Header;