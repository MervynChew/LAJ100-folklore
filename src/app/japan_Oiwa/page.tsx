'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import styles from '../css/storyline.module.css';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const scenes = [
  {
    title: '🌸 Once in Edo...',
    text: `A long time ago in Edo period, in Japan, there lived a woman named Oiwa. She was married to a samurai named Tamiya Iemon, but their marriage was full of pain and sadness. Iemon was not a good man. He was selfish, greedy, and even killed Oiwa’s father when Oiwa’s father discovered Iemon’s misconduct and tried to expose him, Iemon murdered him, yet pretended to mourn in order to keep Oiwa unaware. Oiwa didn’t know this, and she had no choice but to stay with Iemon.`,
    image: '/image/edo.avif',
    audio: '/audio/edo.mp3',
  },
  {
    title: '💔 A Hard Life and a Cruel Plan',
    text: `After some time, Oiwa gave birth to a son. Life was very hard for them, and they were very poor. Iemon began to hate Oiwa and wanted to leave her. One day, he met a young woman named Oume, the granddaughter of a rich doctor. Oume liked Iemon and wanted to marry him. The doctor supported this and devised a cruel plan—he gave Oiwa an ointment under the pretense of medicine, but it actually horribly disfigured her face.

    When Oiwa put it on her face, it became horribly disfigured (twisted and ugly). Iemon was disgusted by her looks. To get rid of Oiwa, Iemon paid a man to rape Oiwa, hoping to use it as grounds for divorce.

    But the plan didn’t go as expected. The man Iemon hired was horrified by Oiwa's appearance and starting to feel sorry for Oiwa. He showed her a mirror. When Oiwa saw her reflection in a mirror, she let out a strangled cry and, in despair and rage, stabbed her own throat with a sword.
    
    But her death was only the beginning.`,
    image: '/image/oiwa_scene2.jpg',
    audio: '/audio/scream1.mp3',
  },
  {
    title: '🔪 Iemon’s Deception and Framing',
    text: `To cover his crimes, Iemon killed a servant named Kobotoke Kohei, falsely accusing him of being Oiwa’s lover. He nailed both corpses to a wooden panel and threw it into the river to make it appear they committed a double suicide. Meanwhile, Iemon proceeded to marry Oume.`,
    image: '/image/oiwa_scene3.png',
    audio: '/audio/kill1.mp3',
  },
  {
    title: '👻 The Vengeful Ghost Awakens',
    text: `On the night Iemon married Oume, he saw Oiwa’s ghost instead of Oume. He thought it was Oiwa and stabbed her, but when he looked again, he had actually killed Oume by mistake. Then, he saw Oiwa’s ghost again and killed Oume’s grandfather. From that moment on, Oiwa’s spirit haunted him wherever he went.
    
    He couldn’t escape. Her face would appear in lights, in mirrors, in dreams — always watching him. He kept trying to run, but her spirit followed him. `,
    image: '/image/oiwa_scene4.webp',
    audio: '/audio/wedding.mp3',
  },
  {
    title: '🧠 Madness and Retribution',
    text: `Driven to madness by Oiwa’s ghost, Iemon fled to a mountain temple to escape her. but Oiwa’s ghost never left him. He hallucinated, saw Oiwa’s disfigured face everywhere, and even lashed out violently at shadows. Eventually, the fear and guilt drove Iemon insane.`,
    image: '/image/oiwa_scene5.jpg',
    audio: '/audio/madness.mp3',
  },
  {
    title: '⚔️ Justice Comes',
    text: `In the end, Satō Yomoshichi, Osode’s husband, survived an earlier murder attempt and tracked Iemon down. In a final confrontation, Yomoshichi killed Iemon, bringing justice for Oiwa and Osode, and finally ending the cursed cycle of betrayal and vengeance.`,
    image: '/image/oiwa_scene6.webp',
    audio: '/audio/victory.mp3',
  },
];

export default function JapanPage() {
  const [visibleScenes, setVisibleScenes] = useState(1);
  const audioRefs = useRef<HTMLAudioElement[]>([]);

  useEffect(() => {
    // Play audio when a scene becomes visible
    if (audioRefs.current[visibleScenes - 1]) {
      audioRefs.current[visibleScenes - 1].play();
    }
  }, [visibleScenes]);

  const showNextScene = () => {
    if (visibleScenes < scenes.length) {
      setVisibleScenes(prev => prev + 1);
    }
  };

  return (
    <>
      <div className={styles.blackPage}>
        <Header />
        <main className={styles.storyContainer}>
          <h1 className={styles.storyTitle}>🕯️ The Story of Oiwa – Japan’s Most Famous Ghost</h1>

          {scenes.map((scene, index) => (
            <section
              key={index}
              className={`${styles.scene} ${index < visibleScenes ? styles.sceneVisible : ''}`}
            >
              <h2 className={styles.sceneTitle}>{scene.title}</h2>
              <Image src={scene.image} alt={scene.title} width={680} height={400} />
              <p className={styles.content}>{scene.text}</p>
              <audio
                src={scene.audio}
                ref={el => {
                  if (el) audioRefs.current[index] = el;
                }}
                preload="auto"
              />
              {index === visibleScenes - 1 && visibleScenes < scenes.length && (
                <button className={styles.nextButton} onClick={showNextScene}>
                  Next
                </button>
              )}
            </section>
          ))}

          <div className={styles.cta}>
            <Link href="/oiwa">
              <button className={styles.storyButton}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="black" width="24" height="24">
                  <path d="M32 2C18.75 2 8 12.75 8 26v32c0 2.21 2.69 3.32 4.24 1.76L20 52l7.76 7.76c.78.78 2.05.78 2.83 0L38.34 52 52 59.76C53.55 61.32 56 60.21 56 58V26C56 12.75 45.25 2 32 2zM24 28a4 4 0 110-8 4 4 0 010 8zm16 0a4 4 0 110-8 4 4 0 010 8z" />
                </svg>
                Who is Oiwa-san
                <div className={styles.arrow}>›</div>
              </button>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
