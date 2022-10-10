import { Header } from "./components/Header"
import { Sidebar } from "./components/SideBar"
import { Post } from "./components/Post"

import "./global.scss"
import styles from "./App.module.scss"

const posts = [{}, {}, {}]

function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />

				<main>
					{posts.map(() => (
						<Post />
					))}
				</main>
			</div>
		</div>
	)
}

export default App
