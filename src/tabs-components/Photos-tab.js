import Search from '../components/search';
import block from '../assets/photos/one-block.jpg';
import photos1 from '../assets/photos/photos-1.jpg';
import photos2 from '../assets/photos/photos-2.jpg';
const PhotoTab = (props) =>{
    return (
        <div className="phtos-tab">
            <Search/>
            <div className="flex-text">
                <h4>Fast food templates</h4>
                <a href="#">See all</a>
            </div>
            <div className="top-photos">
                <img src={photos1} onClick={() => props.handlePhoto('new photo')}/>
                <img src={photos2}/>
            </div>
            <img  src={block}/>
        </div>
    );
}

export default PhotoTab;