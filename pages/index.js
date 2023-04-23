import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pavan&apos;s | PortFolio</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building exceptional digital experiences."
        />
        <link rel="shortcut icon" href="/favicon_io/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="favicon_io/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="favicon_io/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />

      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />


    </div>
  );
}
