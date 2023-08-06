import styles from './TodoItem.module.css'
import { BsCheckCircle } from 'react-icons/bs'
import { IoRemoveCircleOutline } from 'react-icons/io5'

interface TodoItemProps {
  id: number
  text: string
  isChecked: boolean
  onToggleClick: (id:number) => void
  onRemoveClick: (id:number) => void
}

const TodoItem = (props: TodoItemProps) => {
  const handleToggleClick = () => {
    props.onToggleClick(props.id)
  }

  const handleRemoveClick = () => {
    props.onRemoveClick(props.id)
  }


  return (
    <li className={styles.container}>
      <BsCheckCircle className={[styles.checkIcon, `${props.isChecked ? styles.checkedCircleIcon : styles.unCheckedCircleIcon}`].join(' ')}
      onClick={handleToggleClick}
      />
      <span className={props.isChecked ? styles.strikeThrough : ''}>{props.text}</span>
      <IoRemoveCircleOutline className={styles.removeIcon} onClick={handleRemoveClick}/>
    </li>
  )
}

export default TodoItem;