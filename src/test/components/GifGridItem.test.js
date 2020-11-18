import React from 'react';
import {shallow} from "enzyme";

import GifGridItem from "../../components/GifGridItem";

const title = 'Un titulo';
const url = 'http://localhost/algo.jpg';
const wrapper = shallow(
    <GifGridItem
        title={title}
        url={url}
    />
);

describe('Pruebas en <GifGridItem />', () =>{
    
    test('Debe mostrar <GifGridItem /> correctamente', () => {
                const wrapper = shallow(
                    <GifGridItem
                        title={title}
                        url={url}
                    />
                );
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe mostrar el title en el párrafo', () => {
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title);
    });
    
    test('Debe tener imagen con la url y el alt', () => {
        const img = wrapper.find('img')
        expect(img.prop('src')).toBe(url); //prop de enzyme llama directamente a la propiedad de la etiqueta
        expect(img.prop('alt')).toBe(title);
    });
    
    test('Debe tener la clase animate__backInDown', () => {
        const div = wrapper.find('div');
        expect(div.prop('className')).toContain('animate__backInDown');
    });
    
});
