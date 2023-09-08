import React from 'react';
import styles from './layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			{/* <Header /> */}
			<main className={styles.page}>{children}</main>
			{/* <Footer /> */}
		</div>
	);
};

export default Layout;
