import styles from "../../styles/Listes.module.css";
import Head from "next/head";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default function Listes(props) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cours NextJS</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.titre}>Les listes de Vocabulaire </h1>
        <ul className="list-group">
          {props.array.map((item) => {
            return (
              <li className="list-group-item" key={uuidv4()}>
                <Link href={`/listes/${item.name}`}>
                  <a>{item.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await import(`/data/listes.json`);
  const array = data.englishList;
  return {
    props: {
      array: array,
    },
  };
}
