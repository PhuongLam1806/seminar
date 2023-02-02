import { useEffect, useState } from 'react';
import productsAPI from '../api/productsAPI';

export default function useProductDetail(productId) {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const result = await productsAPI.get(productId);
                console.log('kq', result);
                setProduct(result);
            } catch (error) {
                console.log('fail', error);
            }

            setLoading(false);
        })();
    }, [productId]);

    return { product, loading };
}
