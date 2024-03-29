import React from 'react';
import rendered from 'react-test-renderer';
import ProductCard from '../../src/components/ProductCard';
import { product2 } from '../data/product';

const {act} = rendered;

describe('ProductCard', () => {
    test('Debe de mostrar el componente correctamente', () => {
        const wrapper = rendered.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <h1>Product Card</h1>
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Debe de incrementar el contador', () => {
        const wrapper = rendered.create(
            <ProductCard product={product2}>
                {
                    ({count, increaseBy}) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{count}</span>
                            <button onClick={() => increaseBy(1)}>+</button>
                        </>
                    )
                }
            </ProductCard>
        );
        let tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot();

        act(() => {
            (tree as any).children[2].props.onClick();
        });
        
        tree = wrapper.toJSON();

        expect((tree as any).children[1].children[0]).toBe('1');
    })
})