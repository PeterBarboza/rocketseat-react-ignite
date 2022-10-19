import { ThumbsUp, Trash } from "phosphor-react"

import { Avatar } from "./Avatar"

import styles from "./Comment.module.scss"

export function Comment() {
	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="http://github.com/PeterBarboza.png" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Pedro Barboza</strong>
							<time
								title="2 de outubro as 23:48"
								dateTime="2022-10-02 23:48:37"
							>
								Cerca de 1h atrás
							</time>
						</div>

						<button title="Deletar comentário">
							<Trash size={24} />
						</button>
					</header>

					<p>Muito bom Devon, parabéns!! 👏👏</p>
				</div>

				<footer>
					<button>
						<ThumbsUp />
						Aplaudir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	)
}
