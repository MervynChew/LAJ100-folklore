"use client";

import Header from "../../components/Header";
import styles from "../home/page.module.css"; // Optional CSS file for styling
import Image from "next/image";

export default function OiwaPage() {
  return (
    <>
      <Header />
      <main className={styles.pageContainer}>
        <h1 className={styles.title}>💀 Pontianak</h1>

        <Image
          src="/image/pontianak.jpg"
          alt="Oiwa san"
          width={600}
          height={400}
          className={styles.image}
        />

        <br></br>

        <section className={styles.section}>
          <h2>👻 Who is Pontianak?</h2>
          <p>Pontianak, also called Kuntilanak in Indonesia, is one of the most famous ghosts in Southeast Asian folklore, especially in Malaysia and Indonesia. She is believed to be the restless spirit of a woman who died during pregnancy or childbirth.</p>
        </section>

        <section className={styles.section}>
          <h2>🪨 Meaning of the Name</h2>
          <p>The name "Pontianak" comes from the Malay words "ponti," meaning "dead," and "anak," meaning "child." Together, it reflects the ghost’s tragic and terrifying origin.</p>
        </section>

        <section className={styles.section}>
          <h2>👗 Appearance of Pontianak</h2>
          <p>
            Pontianak usually looks like a woman with long black hair, glowing red eyes, and wearing a white dress stained with blood. From far away, she looks beautiful to lure victims, mostly men. When close enough, she reveals her terrifying true form.
          </p>
        </section>

        <button
          className={styles.custombutton}
          type="button"
          onClick={() => window.history.back()}
        >
          <div className={styles.bar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              height="25"
              width="25"
              fill="#000"
            >
              <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" />
              <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" />
            </svg>
          </div>
          <p className={styles.buttontext}>Go Back</p>
        </button>
      </main>
    </>
  );
}
