import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from "enzyme";

describe('Pruebas en AddCategory', () =>{
    
    test('Debe mostrar AddCategory correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
});
