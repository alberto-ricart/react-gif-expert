import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }
    const onSubmitSearch = (event) => {
        event.preventDefault();
        if (inputValue.trim().length < 1) return;

        onNewCategory(inputValue.trim());
        setInputValue('');
    }


    return (
        <form onSubmit={onSubmitSearch}>
            <input
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
};