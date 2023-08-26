import Link from "next/link"
import styles from './styles/navbar.module.css'
export default function NavBar () {
  return(
      <div className={styles.container}>
        <h1 className={styles.h1}>Logo</h1>
      </div>
  )
}