import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

import { Comment } from "./Comment"
import { Avatar } from "./Avatar"

import styles from "./Post.module.scss"
import { useState } from "react"

export function Post({ author, content, publishedAt }) {
	const [comments, setComments] = useState([])
	const [newCommentText, setNewCommentText] = useState("")

	const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
		locale: ptBR
	})

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true
	})

	function handleCreateNewComment(event) {
		event.preventDefault()

		setComments([...comments, newCommentText])
		setNewCommentText("")
	}
	
	function handleNewInvalidComment(event) {
		event.target.setCustomValidity("Esse campo é obrigatório!")
	}

	function handleNewCommentChange(event) {
		event.target.setCustomValidity("")
		setNewCommentText(event.target.value)
	}

	function deleteComment(commentToDelete) {
		const commentsWithoutDeletedOne = comments.filter((comment) => {
			return comment !== commentToDelete
		})

		setComments(commentsWithoutDeletedOne)
	}

	const isNewCommentEmpty = newCommentText.length === 0

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={author.avatarUrl} />

					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>

				<time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
					{publishedDateRelativeToNow}
				</time>
			</header>

			<div className={styles.content}>
				{
					content.map((line) => {
						if(line.type === "paragraph") {
							return <p key={line.content}>{line.content}</p>
						} else if(line.type === "link") {
							return <p key={line.content}><a href="#">{line.content}</a></p>
						}
					})
				}
			</div>

			<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>

				<textarea 
					placeholder="Deixe um comentário" 
					name="comment"
					value={newCommentText}
					onChange={handleNewCommentChange}
					onInvalid={handleNewInvalidComment}
					required
				></textarea>

				<footer>
					<button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{
					comments.map((comment) => {
						return (
							<Comment 
								content={comment} 
								key={comment} 
								onDeleteComment={deleteComment}
							/>
						)
					})
				}
			</div>
		</article>
	)
}
