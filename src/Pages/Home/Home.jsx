import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <Link className="border-2 p-2" to="/registration">Registration</Link>
            <Link className="border-2 p-2 ml-3" to="/login">Login</Link>
        </div>
    );
};

export default Home;