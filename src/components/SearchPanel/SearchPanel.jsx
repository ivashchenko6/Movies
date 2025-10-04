import searchIcon from '../../assets/icons/search-img.svg';

import './searchPanel.scss';


const SearchPanel = () => {


    return (
        <div className="search-panel">
            <input type="text" id="movieName" name="movieName" placeholder='Search by movie name'/>
            <button>
                <img src={searchIcon} alt="search-icon" className="search-panel__icon"/>
            </button>
        </div>
    )
}

export default SearchPanel;