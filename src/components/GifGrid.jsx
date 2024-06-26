import PropTypes from 'prop-types';
import { GridGifItem } from './GridGifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Loading...</h2>)
            }
            <div className="card-grid">
                {images.map((image) => (
                    <GridGifItem key={image.id}
                        {...image}
                    />
                ))}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};
