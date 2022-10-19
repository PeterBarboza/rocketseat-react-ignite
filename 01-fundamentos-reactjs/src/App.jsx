import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import "./global.scss"
import styles from "./App.module.scss"

const posts = [
	{
		author: {
			avatarUrl: "http://guthub.com/PeterBarboza.png",
			name: "Joca Barboza",
			role: "Web developer",
		},
		content: "",
		publishedAt: new Date("10/10/2022 20:00:00"),
	},
]


function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />

				<main>
					{posts.map((item, index) => (
						<Post 
							key={index}
							author={item.author}
							content={item.content}
							publishedAt={item.publishedAt}
						/>
					))}
				</main>
			</div>
		</div>
	)
}

export default App
