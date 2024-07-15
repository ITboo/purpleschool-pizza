import {forwardRef} from 'react';
import {InputProps} from './Input.props.ts';

import styles from './Input.module.css';
import cn from 'classnames';

const Input = forwardRef<HTMLInputElement, InputProps>(
	function Input({className, isValid = false, ...props}, ref) {

		return (
			<input
				{...props}
				ref={ref}
				className={cn(styles.input, className, {
					['invalid']: isValid
				})}/>
		);
	});

export default Input;