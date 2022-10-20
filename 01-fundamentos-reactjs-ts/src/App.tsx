import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post, PostContent } from "./components/Post"

import "./global.scss"
import styles from "./App.module.scss"

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: "http://github.com/Diego3g.png",
			name: "Diego Fernandes",
			role: "Web developer",
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋" },
			{ type: "paragraph", content: "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
			{ type: "link", content: "jane.design/doctorcare" }
		],
		publishedAt: new Date("10/10/2022 20:00:00"),
	},
	{
		id: 2,
		author: {
			avatarUrl: "http://github.com/braydevkin.png",
			name: "Brayan Quirino",
			role: "Web developer",
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋" },
			{ type: "paragraph", content: "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",},
			{ type: "link", content: "jane.design/doctorcare" }
		],
		publishedAt: new Date("10/19/2022 18:00:00"),
	},
]

function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />

				<main>
					{posts.map((item) => (
						<Post 
							key={item.id}
							author={item.author}
							content={item.content as PostContent[]}
							publishedAt={item.publishedAt}
						/>
					))}
				</main>
			</div>
		</div>
	)
}

export default App
