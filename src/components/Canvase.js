import selected from '../assets/backgrounds/selected.jpg';
import photo from '../assets/photos/selected-photo.jpg'
const Canvas = (props) =>{
    let style;
    if(props.bgChanged !== null && props.photo === null){
        style ={backgroundImage:`url(${selected})`};
    }else if(props.photo !== null){
        style ={backgroundImage:`url(${photo}) `};
    }
    return (
        <div className="canvas">
            <div className="canvas-plane" style={style}>

            </div>
        </div>
    );
}

export default Canvas;