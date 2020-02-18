import React from 'react'
import Head from 'next/head'
import Nav from '../../components/nav'
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';

const Pokemon = (props) => {
    const router = useRouter();


    return (
  <div>
    <Head>
      <title>Techtalk</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="hero">
        <h1 className="title">Das hier ist Pokemon Nummer {router.query.id}!
            <br/>
            {Object.values(props.sprites).filter(e => e!=null).map(e => <img src={e}/>)}
        </h1>

    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
    )
}

Pokemon.getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/'+id);
    const data = await res.json();

    return data;
};

export default Pokemon
