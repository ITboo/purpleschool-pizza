import {ChangeEvent, useEffect, useState} from 'react';
import axios, {AxiosError} from 'axios';

import TextTitle from '../../components/TextTitle/TextTitle.tsx';
import Search from '../../components/Search/Search.tsx';

import {PREFIX} from '../../helpers/API.ts';
import {Product} from '../../interfaces/product.interface.ts';

import {MenuList} from './MenuList/MenuList.tsx';

import styles from './Menu.module.css';

export default function Menu() {
	const [data, setData] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();
	const [filter, setFilter] = useState<string>();

	useEffect(() => {
		getMenu(filter);
	}, [filter]);

	const getMenu = async (name?: string) => {
		try {
			setIsLoading(true);
			const {data} = await axios.get<Product[]>(`${PREFIX}/products`, {
				params: {
					name
				}
			});
			setData(data);
			setIsLoading(false);
			setError(undefined);
		} catch (e) {
			console.error(e);
			if (e instanceof AxiosError) {
				setError(e.message);
			}
			setIsLoading(false);
			return;
		}
	};

	function updateFilter(e: ChangeEvent<HTMLInputElement>) {
		e.preventDefault();
		setFilter(e.target.value);
	}

	return (
		<div>
			<div className={styles.head}>
				<TextTitle>Это меню</TextTitle>
				<Search placeholder="Введите блюдо или состав" onChange={updateFilter}/>
			</div>
			<div>
				{error && <>{error}</>}
				{!isLoading && data.length > 0 && <MenuList products={data}/>}
				{!isLoading && data.length == 0 && <p>Продукты не найдены...</p>}
				{isLoading && <p>Продукты загружаются...</p>}
			</div>
		</div>
	);
}
