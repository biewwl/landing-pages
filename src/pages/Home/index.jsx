import { Link } from "react-router-dom";
import page1 from '../../images/page1/page1.png';
import './styles/Home.css';

function Home() {
  return (
    <main className="home">
      <Link to="/page-1" target="_blank">
        <img src={page1} alt="" />
      </Link>
    </main>
  );
}

export default Home;
