import {Suspense} from 'react';
import {Await, useLoaderData} from 'react-router-dom';

import {Product} from '../../interfaces/product.interface.ts';
import ProductItem from '../../components/ProductItem/ProductItem.tsx';

export default function Product() {

	const data = useLoaderData() as { data: Product };

	return (
		<>
			<Suspense fallback={'Загружаем данные продукта...'}>
				<Await resolve={data.data}>
					{({data}: { data: Product }) => (
						<ProductItem {...data}/>
					)}
				</Await>
			</Suspense>
		</>
	);
}