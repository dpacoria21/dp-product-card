import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    ProductCard,
    ProductImage,
    ProductButtons,
    ProductTitle,
} from '../.';

const product = {
    id: '1',
    title: 'Coffee Mug - Card!',
    // img: './coffee-mug.png'
};

const App = () => {
  return (
    <ProductCard
        product={product}
        initialValues={{
            count: 4,
            maxCount: 10
        }}
    >
        {
            ({reset, count, increaseBy, isMaxCountReached}) => (
                <>
                    <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0, 0.2)' }}/>
                    <ProductTitle/>
                    <ProductButtons
                        add={{label: '+', value: 1}} 
                        minus={{label: '-', value: -1}} 
                        // className='custom-buttons'
                    />
                </>
            )
        }

    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
