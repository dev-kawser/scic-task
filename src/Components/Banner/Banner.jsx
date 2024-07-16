import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div
                className="hero min-h-screen mt-10 rounded-md"
                style={{
                    backgroundImage: "url(https://i.ibb.co/xzYDqQz/billie-dollar-money-background.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">TakaXpress</h1>
                        <Link className="btn btn-primary">Dashboard</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;