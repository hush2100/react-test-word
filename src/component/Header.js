import { Link } from 'react-router-dom';

export default function Header(){
  return (
    <div className="header">
      <h1><Link to="/">토익영단어</Link></h1>
      <div className="menu">
        <a href="#" className="link">단어추가</a>
        <a href="#" className="link">메뉴추가</a>
      </div>
    </div>
  );
}