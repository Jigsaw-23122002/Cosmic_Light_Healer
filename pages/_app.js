import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Cosmic Light Healer</title>
        <meta
          name="description"
          content="Cosmic light healer is a new start-up project"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <PopupWidget />
    </ThemeProvider>
  );
}

export default MyApp;
