import {useState} from 'react';
import Header from '../components/Header';
import btn from '../assets/btn.svg';
import visual from '../assets/visual.svg';
import resize from '../assets/resize.svg';
import Canvas from '../components/Canvase';
import TabNav from '../components/TabNav';
import Tab from '../components/Tab';
import {useHistory} from 'react-router-dom';
import {BacgroundTab,PhotoTab,TextTab} from '../tabs-components';
const Editor = () =>{
    const history = useHistory();
    const [state, setstate] = useState('bacground')
    const [bg, setbg] = useState(null);
    const [photo, setPhoto] = useState(null);
    const setSelected = (selectedTab) =>{
        setstate(selectedTab);
        console.log(selectedTab);

    }

    const handleNextPage = () =>{
        history.push('/preview');
    }
    //function for editor 
    const handleBackround = (newbg) =>{
        // console.log(bg);
        setbg(newbg);
        console.log(bg);
    }
    const handlePhoto = (newPhoto) =>{
        setPhoto(newPhoto);
    }
    return (
        <div>
            <Header/>
            <div className="editor-container">
                <div className="tabs-section">
                    <TabNav setSelected={setSelected} selected={state}>
                        <Tab isSelected={state === 'bacground'}>
                            <BacgroundTab handleBackround={handleBackround}/>
                        </Tab>
                        <Tab isSelected={state === 'photos'}>
                            <PhotoTab handlePhoto={handlePhoto} photo={photo}/>
                        </Tab>
                        <Tab isSelected={state=== 'text'}>
                            <TextTab/>
                        </Tab>
                        <Tab isSelected={state === 'elements'}>
                            <p>Elements</p>
                        </Tab>
                        <Tab isSelected={state=== 'music'}>
                            <p>
                                music
                            </p>
                        </Tab>
                        <Tab isSelected={state=== 'video'}>
                            <p>
                                video
                            </p>
                        </Tab>
                        <Tab isSelected={state=== 'uploads'}>
                            <p>
                                uploads
                            </p>
                        </Tab>
                    </TabNav>
                </div>
                <div className="canvas-section">
                    <div className="canvas-header">
                        <div className="left-heade">
                            <img src={visual}></img>
                            <span>
                                Visual
                            </span>
                        </div>
                        <button>
                            Next <img src={btn} onClick={handleNextPage}></img>
                        </button>
                    </div>
                    <Canvas bgChanged={bg} photo={photo} />
                    <div className="float-element">
                        <button className="resize">
                            76 % <img src={resize}></img>
                        </button>
                        <button className="help">
                            Help?
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Editor;