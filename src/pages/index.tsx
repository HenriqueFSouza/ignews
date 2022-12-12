import styles from "./home.module.scss";
import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButon";
import { GetStaticProps } from "next";
import { stripe } from "../services/stripe";

// Client-side
// Server-side
// Stati Site Generation

  // EXEMPLO : 
  // Post de um blog 
  // - conteúdo pode ser server-side-generation(mudam de acordo com o revalidate determinado)
  // - comentários podem ser carregados pelo client-side(os comentários só vão ser carregados quando precisar)
  // - quando usar server-side-rendering, todo o conteúdo é mostrado antes mesmo da página carregar. Logo, se fizermos os comentários assim 
  // a página só vai ser carregada depois que todos comentários estiverem carregados.


interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}
export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="girl-coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1M1sphAzCk3oVssgXKOUsL9Q')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}