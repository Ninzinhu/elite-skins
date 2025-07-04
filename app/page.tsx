"use client";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

// Listas de nomes e sobrenomes brasileiros
const firstNamesM = [
  "Lucas",
  "Gabriel",
  "João",
  "Pedro",
  "Rafael",
  "Bruno",
  "Felipe",
  "Gustavo",
  "Matheus",
  "Thiago",
  "Diego",
  "Vinícius",
  "Leonardo",
  "Eduardo",
  "Rodrigo",
  "André",
  "Marcelo",
  "Fernando",
  "Henrique",
  "Caio",
  "Alexandre",
  "Ricardo",
  "Daniel",
  "Bruno",
  "Luiz",
  "Carlos",
  "Paulo",
  "Roberto",
  "Renato",
  "Fábio",
];
const firstNamesF = [
  "Mariana",
  "Ana",
  "Camila",
  "Juliana",
  "Beatriz",
  "Larissa",
  "Patrícia",
  "Fernanda",
  "Aline",
  "Tatiane",
  "Carla",
  "Renata",
  "Priscila",
  "Letícia",
  "Amanda",
  "Bruna",
  "Natália",
  "Sabrina",
  "Tatiana",
  "Simone",
];
const lastNames = [
  "Silva",
  "Santos",
  "Oliveira",
  "Souza",
  "Pereira",
  "Lima",
  "Carvalho",
  "Almeida",
  "Ferreira",
  "Rodrigues",
  "Martins",
  "Rocha",
  "Barbosa",
  "Dias",
  "Teixeira",
  "Fernandes",
  "Araujo",
  "Cavalcante",
  "Moura",
  "Gomes",
];
const notifyMessages = [
  "entrou na comunidade!",
  "acabou de entrar!",
  "se juntou ao grupo!",
  "está online agora!",
];

function getRandomName() {
  // 80% masculino, 20% feminino
  const isMale = Math.random() < 0.8;
  const first = isMale
    ? firstNamesM[Math.floor(Math.random() * firstNamesM.length)]
    : firstNamesF[Math.floor(Math.random() * firstNamesF.length)];
  const last = lastNames[Math.floor(Math.random() * lastNames.length)];
  const msg = notifyMessages[Math.floor(Math.random() * notifyMessages.length)];
  return `${first} ${last} ${msg}`;
}

export default function Home() {
  // Número de pessoas online animado e persistente
  const [online, setOnline] = useState(2384);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [notify, setNotify] = useState(false);
  const [notifyName, setNotifyName] = useState("");

  useEffect(() => {
    // Recupera do localStorage se existir
    const saved = localStorage.getItem("eliteskins_online");
    if (saved) {
      setOnline(Number(saved));
    }
  }, []);

  useEffect(() => {
    // Salva sempre que mudar
    localStorage.setItem("eliteskins_online", String(online));
  }, [online]);

  useEffect(() => {
    // Loop de animação
    intervalRef.current = setInterval(() => {
      setOnline((prev) => {
        // Variação aleatória entre -3 e +5
        const delta = Math.floor(Math.random() * 9) - 3;
        let next = prev + delta;
        if (next < 2000) next = 2000;
        if (next > 3500) next = 3500;
        return next;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNotifyName(getRandomName());
      setNotify(true);
      setTimeout(() => setNotify(false), 2500);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>
          EliteSkins – Skins de CS2 e CSGO | Comunidade Counter-Strike Brasil
        </title>
        <meta
          name="description"
          content="EliteSkins é a maior comunidade brasileira de negociação de skins de CS2 e CSGO. Compre, venda e troque skins de Counter-Strike com segurança, suporte e transparência. Junte-se à melhor comunidade de CS2 e CSGO do Brasil!"
        />
        <meta
          name="keywords"
          content="CS2, CSGO, Counter-Strike, skins, skins csgo, skins cs2, comunidade csgo, comunidade cs2, grupo de skins, trade skins, comprar skins csgo, vender skins csgo, elite skins, elite skins csgo, elite skins cs2, counter strike brasil, grupo whatsapp csgo, grupo telegram csgo"
        />
        <meta
          property="og:title"
          content="EliteSkins – Skins de CS2 e CSGO | Comunidade Counter-Strike Brasil"
        />
        <meta
          property="og:description"
          content="A EliteSkins é a maior comunidade de negociação de skins de CS2 e CSGO do Brasil. Negocie skins de Counter-Strike com segurança, rapidez e suporte!"
        />
        <meta property="og:image" content="/banner-cs2.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eliteskins.com.br" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="EliteSkins – Skins de CS2 e CSGO | Comunidade Counter-Strike Brasil"
        />
        <meta
          name="twitter:description"
          content="A EliteSkins é a maior comunidade de negociação de skins de CS2 e CSGO do Brasil. Negocie skins de Counter-Strike com segurança, rapidez e suporte!"
        />
        <meta name="twitter:image" content="/banner-cs2.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        {notify && (
          <div className={styles.notify}>
            <span className={styles.notifyIcon}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="9" fill="#ff7a00" />
                <path
                  d="M9 4.5a2.5 2.5 0 0 1 2.5 2.5c0 1.38-1.12 2.5-2.5 2.5S6.5 8.38 6.5 7A2.5 2.5 0 0 1 9 4.5Zm0 6c2.21 0 4 1.12 4 2.5V15H5v-2c0-1.38 1.79-2.5 4-2.5Z"
                  fill="#fff"
                />
              </svg>
            </span>
            <span className={styles.notifyText}>{notifyName}</span>
          </div>
        )}
        {/* Banner */}
        <section className={styles.banner}>
          <div className={styles.logoBannerWrapper}>
            <Image
              src="/logo.png"
              alt="Logo EliteSkins"
              width={80}
              height={80}
              className={styles.logoBanner}
            />
          </div>
          <Image
            src="/banner-cs2.png"
            alt="Banner EliteSkins"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className={styles.bannerContentDesktop}>
            <div className={styles.bannerBox}>
              <h1 className={styles.title}>
                Bem-vindo à EliteSkins – O maior grupo de negociações seguras de
                skins de CS2
              </h1>
              <p className={styles.subtitle}>
                A EliteSkins é referência no mercado de compra e venda de skins
                de CS2, sendo o grupo número 1 em negociações seguras, rápidas e
                transparentes.
              </p>
              <a href="#contato" className={styles.ctaButton}>
                QUERO ENTRAR PARA O GRUPO AGORA!
              </a>
              <div className={styles.onlineInfo}>
                <span className={styles.onlineIcon}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7" cy="7" r="7" fill="#19e05c" />
                  </svg>
                </span>
                <span className={styles.onlineText}>
                  <strong>{online.toLocaleString("pt-BR")}</strong> pessoas
                  online agora na comunidade
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Texto do banner para mobile */}
        <section className={styles.bannerTextMobile}>
          <div className={styles.bannerBox}>
            <h1 className={styles.title}>
              Bem-vindo à EliteSkins – O maior grupo de negociações seguras de
              skins de CS2
            </h1>

            <p className={styles.subtitle}>
              A EliteSkins é referência no mercado de compra e venda de skins de
              CS2, sendo o grupo número 1 em negociações seguras, rápidas e
              transparentes.
            </p>
            <a href="#contato" className={styles.ctaButton}>
              QUERO ENTRAR PARA O GRUPO AGORA!
            </a>
            <div className={styles.onlineInfo}>
              <span className={styles.onlineIcon}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7" cy="7" r="7" fill="#19e05c" />
                </svg>
              </span>
              <span className={styles.onlineText}>
                <strong>{online.toLocaleString("pt-BR")}</strong> pessoas online
                agora na comunidade
              </span>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className={styles.benefits} id="beneficios">
          <h2 className={styles.title}>Acesse nossos grupos:</h2>
          <div className={styles.actionGroups}>
            <div className={styles.actionCard}>
              <Image
                src="/Elite-Rifas.jpeg"
                alt="Grupo de Rifas"
                width={220}
                height={220}
              />
              <h3>Grupo de Rifas</h3>
              <p>
                Participe de rifas seguras, transparentes e concorra a skins
                incríveis!
              </p>
              <div className={styles.actionButtonWrapper}>
                <a
                  href="https://chat.whatsapp.com/JFq53Ra06vV5qmakTSyTan?mode=r_c"
                  className={styles.actionButton}>
                  Entrar no Grupo
                </a>
              </div>
            </div>
            <div className={styles.actionCard}>
              <Image
                src="/Elite-Liquidacao.jpeg"
                alt="Grupo de Trade Skins"
                width={220}
                height={220}
              />
              <h3>Grupo de Trade</h3>
              <p>
                Negocie skins com agilidade, segurança e suporte dos
                administradores.
              </p>
              <div className={styles.actionButtonWrapper}>
                <a
                  href="https://chat.whatsapp.com/HPgJ81jQeXLDYGdMK9rTtI?mode=r_c"
                  className={styles.actionButton}>
                  Entrar no Grupo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer} id="contato">
          <p>
            EliteSkins &copy; {new Date().getFullYear()} - Todos os direitos
            reservados.
          </p>
          <p>Contato: suporteeliteskins@gmail.com</p>
        </footer>
      </div>
    </>
  );
}
