import Link from "next/link";
import Image from "next/image";

import styles from './styles/card.module.css'

export function Card({ make }){
    return(
        <Link className={styles.link} href={`/make/${make.id}`}>
        <div className={styles.container}>
          <Image width='200' height='200' alt={make.title} src={make.image} />
          <h1>{make.title}</h1>
          <div className={styles.inf}>
            <h2>R$ {make.price}</h2>
            <p>Estoque: {make.rating.count}</p>
          </div>
        </div></Link>
    )
}