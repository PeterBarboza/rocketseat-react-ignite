import { PencilSimpleLine } from "phosphor-react"

import styles from "./Sidebar.module.scss"

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img
				src="https://images.unsplash.com/photo-1664263724040-fc877e716506?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
				className={styles.cover}
				loading="lazy"
			/>

			<div className={styles.profile}>
				<img
					className={styles.avatar}
					src="https://github.com/PeterBarboza.png"
					loading="lazy"
				/>

				<strong>Pedro Barboza</strong>
				<span>Web developer</span>
			</div>

			<footer>
				<a href="#">
					<PencilSimpleLine size={20} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	)
}
