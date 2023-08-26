import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios'
import { Card } from '@/components/card'
import { useRef, useState } from 'react'
import { BsX } from 'react-icons/bs'

export async function getStaticProps(){
  const maxpokemons = 40
  const res = await fetch(`https://fakestoreapi.com/products/?limit=${maxpokemons}`)
  const data = await res.json()

  data.forEach((item, index) => {
    item.id = index + 1
  });

  return{
    props:{
        make: data,
    }
  }
}


  
export default function Home({ make }) {
 const [data, setdata] = useState(make);
 const [inf, setinf] = useState();


 const click = (values) => {
  const filter = []
  for(var i in data){
    if(data[i].title.toLowerCase().includes(values.target.value)){
      filter.push(data[i])
    }if (values.target.value === ""){
      setdata(make)
    }
  }
  setdata(filter)
 }
 const rf = useRef();
 const clicka = () => {
  setdata(make)
  rf.current.value = '';
 }
 <head>
      <title>
        Loja Exemplo
      </title>
    </head>
  return (
    
    <div className={styles.contain}>
     <input className={styles.search} ref={rf} type='text' placeholder='Search' name='search' onChange={click}></input>
   <BsX onClick={clicka} className={styles.icon}/>{console.log(inf)}
      
      <div className={styles.container}>
      {data?.map((make) => {
        return(
          <Card key={make.id} make={make}/>
        )
      })}
      </div>
    </div>
  )
}
