import '../../css/home.css';
import img1 from "../../images/weather_.jpg";
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <>
            <div className="homecontainer">
                <div className="left">
                    <div className='subleft1'>
                        <p className='para'>Welcome to <span style={{color:"rgb(25 122 212)",fontWeight:"bold"}}>Weather</span> App</p>
                        <p className='para'>Get the Latest Weather Info Of Your City</p>
                        <div className='subleft2'>
                        <Link to="/weather" className='showBtn'>Check Now</Link>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src={img1} className='img1' alt="weather Image" />
                </div>

            </div>
        </>

    )
}

export default Home;