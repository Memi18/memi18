

import PropTypes from 'prop-types';
import Item from '../Item/Item'; 
import './ItemList.css';

const ItemList = ({ comics }) => {
    return (
        <div className="Listgroup">
            {comics.map((comic) => (
                <div key={comic.id} className="card">

                    <Item comic={comic} />

                </div>
            ))}
        </div>
    );
};

ItemList.propTypes = {
    comics: PropTypes.array.isRequired,
};

export default ItemList;


