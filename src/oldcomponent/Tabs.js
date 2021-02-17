
const Tabs = (props) =>{
    return (
        <div onClick={() => props.action('new url')}>
            this is tabs
        </div>
    );
}

export default Tabs;