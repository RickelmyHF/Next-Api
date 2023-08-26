import Image from "next/image"
import styles from '@/styles/make.module.css'
import { BsCartPlus } from 'react-icons/bs'
import Link from "next/link"
export const getStaticPaths = async() => {
      const api = 'https://fakestoreapi.com/products/'
      const res = await fetch(`${api}`)
      const data = await res.json()
    
      const paths = data.map((make, index) => {
        return {
            params: {
                makeid: (index + 1 ).toString()
            },
        }
      })
      return{
            paths,
            fallback: false,
      }
    }
    export const getStaticProps = async(context) => {
     const id = context.params.makeid
    
     const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    
     const data = await res.json()
     return{
        props: {
            make: data,
        }
     }
    
    }
export default function Cat ({ make }) {
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
            <Image className={styles.img} width='430' height='450' alt={make.title} src={make.image}/> 
            </div>
            <div className={styles.div}>
                  <div>
                  <h1 className={styles.title} > {make.title} 
                  </h1>
                  <p className={styles.category}>category: {make.category}</p>
                  </div>
                  <p className={styles.preço}>R${make.price}</p>
                  <div>
                  <h1 className={styles.name}>Description</h1>
                  <p className={styles.description}> {make.description}</p>
                  </div>
                  <Link className={styles.link} href='/'> Voltar </Link>
            </div>
        </div>
    )
}