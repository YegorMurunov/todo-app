import React from 'react';
import styles from './header.module.scss';

const Header = () => {
	const date = new Date();
	const options = { weekday: 'long' };
	const dayOfWeek = date.toLocaleString('en-US', options);
	const day = date.getDay();
	const month = date.getMonth();
	const year = date.getFullYear();

	return (
		<header className={styles.header}>
			<h1 className={styles.header__title}>Todo App</h1>
		</header>
	);
};

export default Header;
