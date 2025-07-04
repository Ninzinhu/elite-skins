"use client";
import Image from "next/image";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styles from "./page.module.css";

export default function Home() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <div className={styles.page}>
      {/* Banner */}
      <section className={styles.banner}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          className={styles.particles}
          options={{
            fullScreen: false,
            background: { color: "#000" },
            fpsLimit: 60,
            particles: {
              color: { value: ["#ff7a00", "#fff"] },
              number: { value: 60, density: { enable: true, area: 800 } },
              size: { value: 2.5, random: { enable: true, minimumValue: 1 } },
              opacity: { value: 0.7, random: true },
              move: {
                enable: true,
                speed: 0.7,
                direction: "none",
                outModes: "out",
              },
              links: { enable: false },
              shape: { type: "circle" },
            },
            detectRetina: true,
          }}
        />
        <Image
          src="/banner-cs2.png"
          alt="Banner EliteSkins"
          fill
          style={{ objectFit: "cover" }}
          priority
        />

        <div className={styles.bannerContent}>
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
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className={styles.benefits} id="beneficios">
        <div className={styles.actionGroups}>
          <div className={styles.actionCard}>
            <h3>Grupo de Rifas</h3>
            <a href="#" className={styles.actionButton}>
              Entrar no Grupo
            </a>
          </div>
          <div className={styles.actionCard}>
            <h3>Grupo de Trade Skins</h3>
            <a href="#" className={styles.actionButton}>
              Entrar no Grupo
            </a>
          </div>
        </div>
        <h2 className={styles.title}>O que você encontra na EliteSkins:</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefit}>
            <span className={styles.benefitIcon}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="none" />
                <path
                  d="M10 19.5L16 25.5L26 13.5"
                  stroke="#FFD600"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <strong>Intermediação 100% segura</strong>
            <p>através dos administradores do grupo</p>
          </div>
          <div className={styles.benefit}>
            <span className={styles.benefitIcon}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="none" />
                <path
                  d="M10 19.5L16 25.5L26 13.5"
                  stroke="#FFD600"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <strong>Monitoramento 24h</strong>
            <p>7 dias por semana</p>
          </div>
          <div className={styles.benefit}>
            <span className={styles.benefitIcon}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="none" />
                <path
                  d="M10 19.5L16 25.5L26 13.5"
                  stroke="#FFD600"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <strong>Compra e venda de skins</strong>
            <p>com até 40% de desconto</p>
          </div>
          <div className={styles.benefit}>
            <span className={styles.benefitIcon}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="none" />
                <path
                  d="M10 19.5L16 25.5L26 13.5"
                  stroke="#FFD600"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <strong>Espaço para networking</strong>
            <p>e troca de experiências</p>
          </div>
          <div className={styles.benefit}>
            <span className={styles.benefitIcon}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="none" />
                <path
                  d="M10 19.5L16 25.5L26 13.5"
                  stroke="#FFD600"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <strong>Rifas 100% seguras</strong>
            <p>e transparentes</p>
          </div>
          <div className={styles.benefit}>
            <span className={styles.benefitIcon}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="none" />
                <path
                  d="M10 19.5L16 25.5L26 13.5"
                  stroke="#FFD600"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <strong>Chances reais</strong>
            <p>de ganhar prêmios</p>
          </div>
          <div className={styles.benefit}>
            <span className={styles.benefitIcon}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="none" />
                <path
                  d="M10 19.5L16 25.5L26 13.5"
                  stroke="#FFD600"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <strong>Skins de todos os tipos</strong>
            <p>circulando diariamente</p>
          </div>
          <div className={styles.benefit}>
            <span className={styles.benefitIcon}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="none" />
                <path
                  d="M10 19.5L16 25.5L26 13.5"
                  stroke="#FFD600"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <strong>Preços justos</strong>
            <p>muito abaixo da Steam</p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className={styles.testimonials} id="depoimentos">
        <h2 className={styles.title}>O que falam da EliteSkins</h2>
        <div className={styles.testimonialsCards}>
          <div className={styles.testimonialCard}>
            <Image
              src="/depo1.jpg"
              alt="Depoimento 1"
              width={220}
              height={400}
            />
          </div>
          <div className={styles.testimonialCard}>
            <Image
              src="/depo2.jpg"
              alt="Depoimento 2"
              width={220}
              height={400}
            />
          </div>
          <div className={styles.testimonialCard}>
            <Image
              src="/depo3.jpg"
              alt="Depoimento 3"
              width={220}
              height={400}
            />
          </div>
          <div className={styles.testimonialCard}>
            <Image
              src="/depo4.jpg"
              alt="Depoimento 4"
              width={220}
              height={400}
            />
          </div>
        </div>
        <a href="#contato" className={styles.ctaButton}>
          Quero fazer parte
        </a>
      </section>

      {/* Footer */}
      <footer className={styles.footer} id="contato">
        <p>
          EliteSkins &copy; {new Date().getFullYear()} - Todos os direitos
          reservados.
        </p>
        <p>Contato: contato@eliteskins.com.br</p>
      </footer>
    </div>
  );
}
