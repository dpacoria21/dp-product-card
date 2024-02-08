import React from 'react'
import { ProductTitle } from '../../src/components/ProductTitle';
import  rendered from 'react-test-renderer';
import { product1 } from '../data/product';
import ProductCard from '../../src/components/ProductCard';

product1

describe('ProductTitle', () => {
    test('Debe de mostrar el componente con el titulo personalizado', () => {
        const wrapper = rendered.create(
            <ProductTitle
                title='Custom Product'
                className='custom-class'
            >

            </ProductTitle>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Debe de mostrar el componente con el nombre del producto', () => {
        const wrapper = rendered.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

})