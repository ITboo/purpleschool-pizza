import {Link} from 'react-router-dom';
import {MouseEvent} from 'react';

import {CardProductProps} from './CardProduct.props.ts';

import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store/store.ts';
import {cartActions} from '../../store/Cart.slice.ts';

import styles from './CardProduct.module.css';

function CardProduct(props: CardProductProps) {

	const dispatch = useDispatch<AppDispatch>();

	function addCart(event: MouseEvent<HTMLButtonElement>) {
		event.preventDefault();
		event.stopPropagation();
		dispatch(cartActions.add(props.id));
	}

	return (
		<Link to={`/product/${props.id}`} className={styles.link}>
			<div className={styles.card}>
				<div
					className={styles.head}
					style={{backgroundImage: `url('${props.image}')`}}>
					<div className={styles.price}>
						{props.price}&nbsp;
						<span className={styles.currency}>₽</span>
					</div>
					<button className={styles.addToCart} onClick={addCart}>
						<img src="/cart-button-icon.svg" alt="Добавить в корзину"/>
					</button>
					<div className={styles.rating}>
						{props.rating}&nbsp;
						<img src="/star-icon.svg" alt="Иконка звезды"/>
					</div>
				</div>
				<div className={styles.footer}>
					<div className={styles.title}>{props.name}</div>
					<div className={styles.description}>{props.description}</div>
				</div>
			</div>
		</Link>
	);
}

export default CardProduct;