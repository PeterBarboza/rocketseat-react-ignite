import styles from "./Avatar.module.scss"

//hasBorder

export function Avatar({ hasBorder = true, src }) {
	return (
		<img
			className={hasBorder ? styles.avatarWithBorder : styles.avatar}
			src={src}
			loading="lazy"
		/>
	)
}
