import React from 'react';
import rendered from 'react-test-renderer';
import { ProductImage } from '../../src/components/ProductImage';
import ProductCard from '../../src/components/ProductCard';
import { product2 } from '../data/product';



describe('<ProductImage />', () => {
    test('La imagen deberia de aparecer en el componente', () => {

        const wrapper = rendered.create(
            <ProductImage img='saludos.png' />
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });


    test('La imagen debe de aparecer al mandar como un product', () => {
        const wrapper = rendered.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    })
})