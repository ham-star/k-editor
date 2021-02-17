import Header from "../components/Header";
import prev from '../assets/final-result.jpg';
import {useHistory} from 'react-router-dom';

const Preview = () => {
    const history = useHistory();
    const handleNextPage = () =>{
        history.push('/puplish');
    }
    return (
        <div className="preview-page">
            <Header/>
            <div className="preview-container">
                <img src={prev}/>
                <div>
                    <button onClick={handleNextPage}>
                        PUPLISH
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Preview;