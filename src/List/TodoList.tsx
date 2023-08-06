import styles from './TodoList.module.css'

const TodoList = () => {
  return (
    <section>
      <ol className={styles.olContainer}>
        <li>React</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>HTML</li>
      </ol>
    </section>
  )
}

export default TodoList