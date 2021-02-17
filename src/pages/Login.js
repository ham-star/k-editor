import device from '../assets/index-1.png';
import device1 from '../assets/index-1-multiplay.png';
import ball from '../assets/index-2.png';
import logo from '../assets/logo.png';
import { useHistory } from "react-router-dom";

const Login = () =>{
    const history = useHistory();
    const handleSubmit = () =>{
        
        history.push('/packges');
        
    }

    return (
        <div className="layers-container">
            <div className="laery-1">
                <div className="layer-left"></div>
                <div className="layer-right"></div>
            </div>
            <div className="laery-2">
                <div className="device">
                    <img src={device}/>
                    <img className="multi" src={device1} />
                </div>
                <div className="ball">
                    <img src={ball} />
                </div>
            </div>
            <div className="laery-3">
                <form>
                    <div className="form-wrapper">
                        <img src={logo}></img>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                        </p>
                        <input type="text" placeholder="Username"></input>
                        <input type="passwrod" placeholder="Password"></input>
                        <button  type="button" onClick={handleSubmit}>LOG IN</button>
                        <div className="flex-cont">
                            <a href="#">Forgot Password?</a>
                            <a href="#">New User</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;