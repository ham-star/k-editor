import { useHistory } from "react-router-dom";
import Header from '../components/Header';
import p1 from '../assets/p-1.png';
import p2 from '../assets/p-2.png';
import p3 from '../assets/p-3.png';
import p4 from '../assets/p-4.png';
import p5 from '../assets/p-5.png';
const Packges = () =>{
    const history = useHistory();
    const handleClick = () =>{
        
        history.push('/editor');
        
    }
    return (
        <div>
            <Header/>
            <div className="packges-container">
                <div className="section-1">
                    <h1>Packages</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                </div>

                <div className="section-2">
                    <div className="flex-container">
                        <a  onClick={handleClick}>
                            <img src={p1}/>
                        </a>
                        <a>
                            <img src={p2} onClick={handleClick}/>
                        </a>
                        <a>
                            <img src={p3} onClick={handleClick}/>
                        </a>
                        <a>
                            <img src={p4} onClick={handleClick}/>
                        </a>
                        <a>
                            <img src={p5} onClick={handleClick}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Packges;