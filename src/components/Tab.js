import {useEffect} from 'react';
const Tab = (props) =>{
    useEffect(()=>{
        
    },[]);
    if(props.isSelected){
        return (
            <div>
                {props.children}
            </div>
        );
    }

    return null;
}

export default Tab;