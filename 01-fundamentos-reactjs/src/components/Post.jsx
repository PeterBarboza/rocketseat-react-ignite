import styles from "./Post.module.scss"

export function Post(props) {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img
						className={styles.avatar}
						src="http://guthub.com/PeterBarboza.png"
					/>
					<div className={styles.authorInfo}>
						<strong>Pedro barboza</strong>
						<span>Web developer</span>
					</div>
				</div>

				<time title="2 de outubro as 23:48" dateTime="2022-10-02 23:48:37">
					Publicado a 1h
				</time>
			</header>

			<div className={styles.content}>
				<p>Fala galeraa 👋</p>

				<p>
					Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
					no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
				</p>

				<p>
					👉 <a href="#">jane.design/doctorcare</a>
				</p>

				<p>
					<a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
					<a href="#">#rocketseat</a>{" "}
				</p>
			</div>
		</article>
	)
}
