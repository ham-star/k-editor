import Search from '../components/search';
import block from '../assets/text/one-block.jpg';
import photos1 from '../assets/text/text-1.jpg';
import photos2 from '../assets/text/text-2.jpg';
const TextTab = (props) =>{
    return (
        <div className="text-tab">
            <Search/>
            <div className="flex-text">
                <h4>Fast food templates</h4>
                <a href="#">See all</a>
            </div>
            <div className="top-photos">
                <img src={photos1}/>
                <img src={photos2}/>
            </div>
            <img  src={block}/>
        </div>
    );
}

export default TextTab;