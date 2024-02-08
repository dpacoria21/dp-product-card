# DP-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Diego Pacori

### Ejemplo

```
import {
    ProductCard,
    ProductImage,
    ProductButtons,
    ProductTitle,
} from 'dp-product-card';
```

```
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
```