import backgorunds from '../assets/tabs/backgorunds.svg';
import elements from '../assets/tabs/elements.svg';
import music from '../assets/tabs/music.svg';
import photos from '../assets/tabs/photos.svg';
import videos from '../assets/tabs/videos.svg';
import uploads from '../assets/tabs/uploads.svg';
import text from '../assets/tabs/text.svg';
const TabNav = (props) =>{
    return(
        <div className="tabs">
            <div className="tabs-nav">
                <div className={"tab-itme " + (props.selected === 'bacground' ? 'active' : '')} onClick={() => props.setSelected('bacground')}>
                    <img src={backgorunds}/>
                    <p>Background</p>
                </div>
                <div className={"tab-itme " + (props.selected === 'photos' ? 'active' : '')} onClick={() => props.setSelected('photos')}>
                    <img src={photos}/>
                    <p>Photos</p>
                </div>
                <div className={"tab-itme " + (props.selected === 'text' ? 'active' : '')} onClick={() => props.setSelected('text')}>
                    <img src={text}/>
                    <p>Text</p>
                </div>
                <div className={"tab-itme " + (props.selected === 'elements' ? 'active' : '')} onClick={() => props.setSelected('elements')}>
                    <img src={elements}/>
                    <p>Elements</p>
                </div>
                <div className={"tab-itme " + (props.selected === 'music' ? 'active' : '')} onClick={() => props.setSelected('music')}>
                    <img src={music}/>
                    <p>Music</p>
                </div>
                <div className={"tab-itme " + (props.selected === 'video' ? 'active' : '')} onClick={() => props.setSelected('video')}>
                    <img src={videos}/>
                    <p>Video</p>
                </div>
                <div className={"tab-itme " + (props.selected === 'uploads' ? 'active' : '')} onClick={() => props.setSelected('uploads')}>
                    <img src={uploads}/>
                    <p>Uploads</p>
                </div>
            </div>
            <div className="tabs-content">
                {props.children}
            </div>
            {/* <ul>
                <li>
                    <button onClick={ () => props.setSelected('tab-1')}>tab 1</button>
                </li>
                <li>
                    <button onClick={ () => props.setSelected('tab-2')}>tab 2</button>
                </li>
                <li>
                    <button onClick={ () => props.setSelected('tab-3')}>tab 3</button>
                </li>
            </ul> */}
            
        </div>
    );
}

export default TabNav;