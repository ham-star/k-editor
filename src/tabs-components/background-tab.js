import Search from '../components/search';
import bg1 from '../assets/backgrounds/01.jpg';
import bg2 from '../assets/backgrounds/02.jpg';
import bg3 from '../assets/backgrounds/03.jpg';
import block from '../assets/backgrounds/on-block.jpg';
const BacgroundTab = (props) =>{
    return (
        <div className="background-tab">
            <Search/>
            <h4>Backgrounds</h4>
            <div className="background-container">
                <div className="top-backgrounds">
                    <div className="left">
                        <img src={bg1} onClick={() => props.handleBackround('this new bg')}/>
                        <img src={bg2}/>
                    </div>
                    <div className="right">
                        <img src={bg3}/>
                    </div>
                </div>
                <img src={block}/>
            </div>
        </div>
    );
}

export default BacgroundTab;