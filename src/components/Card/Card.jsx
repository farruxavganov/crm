import styles from "./Card.module.css";
const Card = () => {
	return (
		<div className={styles.card}>
			<div className={styles.card__header}>
				<div className={styles.card__info}>
					<h3 className={styles.card__title}>PHP Developer</h3>
					<p className={styles.card__disc}> Houseepers</p>				
				</div>
				<div className={styles.card__el}>
					<img src="assets/el.png" alt="" />
				</div>
			</div>
			<div className={styles.card__body}>
				<button className={styles.card__btn}>Button</button>
				<button className={`${styles.card__btn} ${styles.card__btn_bg}`}>
					<img src="assets/users.png" alt=""/>
					<span>3</span>
				</button>
				<button className={`${styles.card__btn} ${styles.card__btn_bg}`}>
					<img src="assets/disc.png" alt="" />
					<span>123</span>
				</button>
			</div>
			<div className={styles.card__footer}>
				<img src="assets/user.png" alt="" />
				<div className={styles.card__userInfo}>
					<p>Recrutor</p>
					<h3>Farrukh Avganov</h3>
				</div>
			</div>
		</div>
	);
}

export default Card;