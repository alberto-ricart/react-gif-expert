import PropTypes from 'prop-types';


export const GridGifItem = ({ title, url }) => {
    return (
        <div className='card'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

GridGifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}