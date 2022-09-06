import styles from "/styles/Home.module.css"
import React from 'react'
import { v4 as uuidv4 } from "uuid";

export default function liste(props) {
  console.log(props);
  return (
    <div className={styles.container}>
    <h1 className={styles.titre}>Vocabulaire de base</h1>
    <table className={styles.tableau}>
      <tbody>
        {props.listeEnCours.map(el => (
          <tr key={uuidv4()}>
            <td>{el.en}</td>
            <td>{el.fr}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}


export async function getStaticProps(context){
  const slug = context.params.liste;
  const data = await import('/data/listes.json')

  const listeEnCours = data.englishList.find(list => list.name === slug)
  return {
    props: {
      listeEnCours: listeEnCours.data
    }
  }
}

export async function getStaticPaths(){
  const data = await import('/data/listes.json')
  const paths = await data.englishList.map(item => ({
    params: {liste: item.name}
  }))

  return {
    paths,
    fallback: false
  }
}