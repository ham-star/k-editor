import fdsa from '../assets/se.svg';

const Search = () =>{
    return (
        <div className="search-component">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 250.3 250.3" style={{enableBackground: 'new 0 0 250.3 250.3'}} xmlSpace="preserve">
                <g>
                    <path d="M166.5,28.5c-38-38-100-38-138,0c-38,38-38,100,0,138c33.9,33.9,86.9,37.6,124.9,11l67.8,67.8c6.6,6.6,17.4,6.6,24.1,0
                        c6.6-6.6,6.6-17.4,0-24.1l-67.8-67.8C204.1,115.4,200.5,62.5,166.5,28.5 M150.5,150.5c-29.2,29.2-76.7,29.2-105.9,0
                        c-29.2-29.2-29.2-76.7,0-105.9c29.2-29.2,76.7-29.2,105.9,0C179.7,73.8,179.7,121.3,150.5,150.5" />
                </g>
            </svg>

            <input type="text" placeholder="Search templates"/>
        </div>
    );
}


export default Search;