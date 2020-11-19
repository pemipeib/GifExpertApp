import React, {useState} from 'react';
import PropTypes from 'prop-types';


const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault(); //para que no refresque la página
        if (inputValue.trim().length > 2){
            setCategories(cats => [ inputValue, ...cats,]);
            setInputValue('');
        }
    }
    
    return (
        <form onSubmit={ handleSubmit }>
            {/*Este parrafo esta solo para las pruebas*/}
            <p>{inputValue}</p>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
                placeholder={'Nombre de la busqueda'}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
