import styles from "./footer.module.css"
export default function Footer({completedTodo,totalTodos}) {
  return (
    <div className={styles.footer}>
        <span className={styles.item}>Completed Task:{completedTodo}</span>
        <span className={styles.item}>Total Task:{totalTodos}</span>
    </div>
  )
}
