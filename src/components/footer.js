import styles from './styles/footer.module.css'
export default function Footer(){
    return(
        <div className={styles.container}>
            <p>Projeto Feito Com Next e Api: <a href="https://fakestoreapi.com/products">https://fakestoreapi.com/products</a></p>
        </div>
    )
}