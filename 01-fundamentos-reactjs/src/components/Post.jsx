import { format } from "date-fns"

import { Comment } from "./Comment"
import { Avatar } from "./Avatar"

import styles from "./Post.module.scss"

export function Post({ author, content, publishedAt }) {
	const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
		day: "2-digit",
		month: "long",
		hour: "2-digit",
		minute: "2-digit",
	}).format(publishedAt)

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src="http://github.com/PeterBarboza.png" />

					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>

				<time title="2 de outubro as 23:48" dateTime="2022-10-02 23:48:37">
					{publishedDateFormatted}
				</time>
			</header>

			<div className={styles.content}>
				<p>Fala galeraa 👋</p>

				<p>
					Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz
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

			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>

				<textarea placeholder="Deixe um comentário"></textarea>

				<footer>
					<button type="submit">Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				<Comment />
				<Comment />
				<Comment />
			</div>
		</article>
	)
}
