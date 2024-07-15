import {TextTitleProps} from './TextTitle.props.ts';

import styles from './TextTitle.module.css';
import cn from 'classnames';

export default function TextTitle({children, className, ...props}: TextTitleProps) {
	return (
		<h1
			className={cn(className, styles.h1)}
			{...props}
		>
			{children}
		</h1>
	);
}