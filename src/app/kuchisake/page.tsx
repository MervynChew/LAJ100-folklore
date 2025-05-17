'use client';

import Header from '../../components/Header';
import styles from '../home/page.module.css'; // Optional CSS file for styling
import Image from 'next/image';

export default function KuchisakePage() {
  return (
    <>
    <Header />
    <main className={styles.pageContainer}>
      <h1 className={styles.title}>💀 Kuchisake-onna (口裂け女)?</h1>

      <Image
            src="/image/kuchisake.jpg"
            alt="Oiwa san"
            width={600}
            height={400}
            className={styles.image}
          />

      <br></br>

      <section className={styles.section}>
        <h2>🪨 What is she?</h2>
        <p>Kuchisake Onna means &ldquo;Slit-Mouthed Woman.&rdquo; Shes&rsquo; a scary ghost lady who got her face horribly cut from ear to ear, making a bloody, creepy smile. You usually find her lurking in dark streets or alleys at night, covering her mouth with a mask, fan, or handkerchief.</p>
      </section>

      <section className={styles.section}>
        <h2>🌙 How She Appears?</h2>
        <p>
          At night, Kuchisake Onna will suddenly approach lone people walking by. She&rsquo;ll ask you,
          &ldquo;Am I pretty?&rdquo; (Watashi, kirei?)
        </p>

        <p>
          If you say no, she&rsquo;ll attack and kill you right there.
          If you say yes, she removes her mask — revealing a horrifying, bloody slit smile — and asks again:
        </p>

        <p>
          “Even now?” (Kore demo kirei?)
        </p>

        <p>
          If you scream or say no at this point, she slashes your face like hers.
If you say yes again, she might let you go… but she will follow you home, and your fate is never certain.

        </p>

      </section>

      <section className={styles.section}>
        <h2>👹 Her Origin Story</h2>
        <p>
          Kuchisake Onna is said to be the ghost of a woman who died a really violent death — maybe abused or betrayed — so her spirit cannot find peace. One popular version says she was a beautiful lady back in the Heian period (that&rsquo;s way before, around 794-1185). She was married to a successful samurai, but she was a bit vain and unfaithful. When her husband caught her cheating, he got so angry he slashed her mouth from ear to ear and asked her, &ldquo;Now, who still thinks you&rsquo;re pretty?&rdquo;
        </p>

        <p>
          Her vengeful spirit never left, and since then, people say she haunts the living world with that scary slit mouth.
        </p>

        <p>
          Back in the Edo period, a lot of sightings of Kuchisake Onna were blamed on kitsune (those trickster fox spirits) messing around with people. Then in the 20th century, people started to believe it was real ghosts or even serial killers, and mass hysteria made the story go viral all over Japan.
        </p>
      </section>

      <section className={styles.section}>
        <h2>🎭 How People Outsmart Her</h2>
        <p>
           Some clever kids found ways to confuse her so she couldn&rsquo;t attack. They gave tricky answers, or threw money or hard candies to distract her, giving them time to run away and escape her curse.
        </p>
      </section>

      <button className={styles.custombutton} type="button" onClick={() => window.history.back()}>
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
