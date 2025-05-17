"use client";

import Header from "../../components/Header";
import styles from "../home/page.module.css"; // Optional CSS file for styling
import Image from "next/image";

export default function OiwaPage() {
  return (
    <>
      <Header />
      <main className={styles.pageContainer}>
        <h1 className={styles.title}>💀 Oiwa san</h1>

        <Image
          src="/image/Oiwa.png"
          alt="Oiwa san"
          width={600}
          height={400}
          className={styles.image}
        />

        <br></br>

        <section className={styles.section}>
          <h2>🪨 Meaning of the Name</h2>
          <p>Oiwa is a girl&rsquo;s name that means &ldquo;rock.&rdquo;</p>
        </section>

        <section className={styles.section}>
          <h2>👻 Who is Oiwa?</h2>
          <p>
            She&rsquo;s famous as a tragic and scary ghost, an onryō, from the story
            called Yotsuya Kaidan — also known as &ldquo;the ghost story of Yotsuya.&rdquo;
            Along with Okiku and Otsuyu, she&rsquo;s one of Japan&rsquo;s Big Three Ghost
            Stories.
          </p>
        </section>

        <section className={styles.section}>
          <h2>📜 The Real History</h2>
          <p>
            Oiwa&rsquo;s story is actually based on real people who lived in Edo (old
            Tokyo) in the 1600s. Their tale got popular after it was turned into
            a kabuki play in 1825 called Tōkaidō Yotsuya Kaidan. This play made
            Oiwa probably the most famous ghost in Japan. Since then, many
            versions and adaptations of her story have appeared everywhere.
          </p>
        </section>

        <section className={styles.section}>
          <h2>🕯️ The Curse and Haunting</h2>
          <p>
            The real Oiwa died way back in 1636. People say her angry ghost, or
            onryō, still haunts the places she used to live — and even those
            involved in telling her story. Over the years, strange accidents and
            deaths around theater, film, and TV productions of her story have
            been blamed on her curse.
          </p>
        </section>

        <section className={styles.section}>
          <h2>⛩️ Shrines and Memorials</h2>
          <p>
            There are shrines and temples built for her spirit. The first one
            was on the site of her family&rsquo;s house in Yotsuya. That shrine got
            destroyed by fire in 1879, and then again during World War II
            bombings. After the war, her shrine and the original spot in Yotsuya
            were rebuilt.
          </p>
        </section>

        <section className={styles.section}>
          <h2>⚰️ Her Grave and Tradition</h2>
          <p>
            Her grave is believed to be at Myōgyōji Temple in Sugamo, Tokyo.
            Actors and crews doing Yotsuya Kaidan often visit her grave to pay
            respects — hoping to avoid her wrath.
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
