import Saidbar from "../Saidbar/Saidbar";
import Navbar from "../Navbar/Navbar";
import Content from "../Content/Content";
import styles from "./Layout.module.css";

const Layout = () => {
	return (
		<div className={styles.layout}>
			<Navbar />
			<main className={styles.layout__main}>
				<Saidbar />
				<Content />
			</main>
		</div>
	);
}

export default Layout;