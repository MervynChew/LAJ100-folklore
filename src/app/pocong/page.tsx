"use client";

import Header from "../../components/Header";
import styles from "../home/page.module.css"; // Optional CSS file for styling
import Image from "next/image";

export default function OiwaPage() {
  return (
    <>
      <Header />
      <main className={styles.pageContainer}>
        <h1 className={styles.title}>💀 Pocong</h1>

        <Image
          src="/image/pocong.jpg"
          alt="Oiwa san"
          width={600}
          height={400}
          className={styles.image}
        />

        <br></br>

        <section className={styles.section}>
          <h2>👻 Who is Pocong?</h2>
          <p>The Pocong is a famous ghost in Malaysian and Indonesian folklore. It&rsquo;s said to be the spirit of a dead person trapped inside their white burial shroud, called a kain kafan. When someone dies and is buried according to Muslim customs, their body is wrapped tightly in this shroud with ties at the head, feet, and waist. If these ties are not properly undone after burial or after 40 days (it is believed that human soul will remain in the earth for 40 days after death), the soul is believed to be stuck inside the shroud and can&rsquo;t rest peacefully. This restless spirit then rises from the grave as a Pocong, wandering the living world.</p>
        </section>

        <section className={styles.section}>
          <h2>👗 Appearance and Movement</h2>
          <p>The Pocong looks exactly like a wrapped corpse with only its face visible through the shroud. Because the feet are tied tightly together, it can’t walk normally. Instead, it moves by hopping or bouncing, which gives it a very eerie and unnatural motion. People say hearing the hopping sounds late at night is a sure sign a Pocong is nearby. Its sudden appearance and strange movements often terrify anyone who crosses its path.</p>
        </section>

        <section className={styles.section}>
          <h2>⚰️ Why Does It Haunt? </h2>
          <p>
            The reason a Pocong appears is mainly due to improper burial rituals — the ties around the shroud weren&rsquo;t loosened or removed after the burial, trapping the spirit inside. The Pocong&rsquo;s spirit can&rsquo;t leave the physical world until these ties are undone, so it roams the area near its grave. Sometimes, it&rsquo;s said to seek help from the living to release it, but other times it just haunts people as a warning or to scare them. Some believe encountering a Pocong is an omen of death or bad luck.
          </p>
        </section>

        <section className={styles.section}>
          <h2>📜 Cultural Significance and Folklore</h2>
          <p>
            In Malaysia and Indonesia, the Pocong is one of the most well-known supernatural beings in ghost stories and urban legends. It&rsquo;s a common figure in scary tales shared during gatherings or on quiet nights. The Pocong reminds people about the importance of respecting burial customs and the dead. While some say the ghost is dangerous and aggressive, others believe it&rsquo;s more of a restless soul looking for peace. Either way, the Pocong continues to be a powerful symbol of fear and mystery in Southeast Asian culture.
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
