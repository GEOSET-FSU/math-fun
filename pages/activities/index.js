import Menu from '../../components/menu';
import Activities from '../../components/activities';
import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Interactive Math</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
                <link rel="manifest" href="/site.webmanifest"></link>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"></link>
                <meta name="msapplication-TileColor" content="#da532c"></meta>
                <meta name="theme-color" content="#ffffff"></meta>
            </Head>
            <nav>
                <Menu />
            </nav>
            <main>
                <Activities />
            </main>
        </div>
    );
}