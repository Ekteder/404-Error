import Head from "next/head";
import NotFoundPage from "./404";

export default function Home() {
  return (
    <>
      <Head>
        <title>Futuristic 404 - Error in the Matrix</title>
        <meta
          name="description"
          content="A stunning futuristic 404 error page with holographic effects and cyberpunk aesthetics"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="gP5gGQwXgain37Oh_AZhWox-igJHBD55-3MvNjlAS9s"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NotFoundPage />
    </>
  );
}
