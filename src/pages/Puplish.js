import puplishPhoto from '../assets/puplish.jpg';
import Header from '../components/Header';
const Puplish = () =>{
    return (
        <div className="puplish-page">
            <Header/>
            <div className="puplish-container">
                <img src={puplishPhoto}/>
                <div>
                    <button>
                        PROCEED TO PAY
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Puplish;