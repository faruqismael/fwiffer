import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { setTheme, resolvedTheme: currentTheme, theme } = useTheme();

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Fwiffer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="md:flex justify-center md:px-36 min-h-[100vh] dark:bg-[#000] dark:text-[#d4d6d6]">
        <div className="max-h-[100vh] overflow-hidden px-10">
          <Logo className="hidden sm:flex" />
          <Sidebar className="" />
        </div>
        <div className="flex-[30%] border-[.2px] dark:border-white/30 border-black/20 border-t-0">
          <Header />
        </div>
        <div className="text-2xl p-10 max-w-[20vw]">
          <h1>
            {" "}
            Day One of my{" "}
            <span className="text-blue-400 font-bold uppercase ">
              twitter clone
            </span>{" "}
            build
          </h1>
        </div>

        {/* <Sidebar /> */}
        {/* <Sidebar /> */}
      </div>
    </div>
  );
}
