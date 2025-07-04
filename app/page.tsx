"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  // Número de pessoas online animado e persistente
  const [online, setOnline] = useState(2384);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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

  return (
    <div className={styles.page}>
      {/* Banner */}
      <section className={styles.banner}>
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
  );
}
