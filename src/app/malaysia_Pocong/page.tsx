'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import styles from '../css/storyline.module.css';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const scenes = [
  {
    title: '👻 Chapter 1: The Wrong Burial',
    text: `In a small kampung in Perak, an old woman named Mak Som passed away. The villagers did the usual — wrapped her body in white cloth (kain kafan) and tied it at the head, neck, and feet.

    But after the burial, they forgot something.

    You're supposed to untie the knot at the feet after putting the body in the grave. They didn't do it. And that's when the trouble started.
`,
    image: '/image/poc_scene1.jpg',
    audio: '/audio/suspense.mp3',
  },
  {
    title: '🌙 Chapter 2: Weird Sounds at Night',
    text: `A few nights later, the neighbours heard strange sounds.

    Thump… thump… thump…

    Like someone hopping outside.
    Then came the smell — like something dead. Rotten and old.

    People also started having weird dreams. A woman in white, with no feet, just staring at them from the graveyard.
    `,
    image: '/image/poc_scene2.jpg',
    audio: '/audio/thump.mp3',
  },
  {
    title: '🌬️ Chapter 3: She’s Outside the Window',
    text: `Lina, a teenage girl, was studying late at night. Around 2:30am, the wind blew hard and her window suddenly opened.

    She went to close it — then she saw something.

    Across the road stood a white figure. Wrapped in cloth, face pale, eyes black. Not moving.

    Then… it started hopping toward her.

    She screamed and shut the curtain. The next morning, her cat was dead — its neck twisted.
`,
    image: '/image/poc_scene3.webp',
    audio: '/audio/wind.mp3',
  },
  {
    title: '🌕 Chapter 4: Stupid Dare',
    text: `A few boys thought it was all fake. So they dared each other to go to Mak Som's grave at midnight.

    One boy, Azman, touched the headstone and laughed. “See? I told you already. Nothing!”

    Suddenly the flashlight flickered.
    Behind the grave — something stood up.
    It was her. The Pocong.

    It hopped once… twice… then suddenly rushed at them.

    Azman shouted in shock, “Holy shit!”
    The boys screamed and ran — but Azman fell.
    Something grabbed his leg. Cold and bony. The others kept running.
`,
    image: '/image/poc_scene4.jpg',
    audio: '/audio/omg.mp3',
  },
  {
    title: '☠️ Chapter 5: The Bomoh Said…',
    text: `The villagers called a bomoh and the imam. After checking the grave, the bomoh looked serious.

    “She's not at peace. Her foot tie is still there.”

    He told everyone to stay indoors after dark. Burn incense. Pray for her soul.

    But it was already too late.
`,
    image: '/image/poc_scene5.avif',
    audio: '/audio/suspense.mp3',
  },
  {
    title: '🔚 Chapter 6: Last Knock',
    text: `Pak Din, the gravekeeper, lived alone near the cemetery.

    At 3am, someone knocked on his window.
    He looked out — and there she was.
    Mak Som. Wrapped in white. Her face was grey, mouth wide open.

    Then she screamed. Loud and long.

    The next day, Pak Din was gone. No blood. No sign of a fight. Just two marks on the ground — like someone had hopped away.`,
    image: '/image/poc_scene6.jpg',
    audio: '/audio/curious.mp3',
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
          <h1 className={styles.storyTitle}>🕯️ The Haunting of Kampung Baru 🕯️</h1>

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
            <Link href="/pocong">
              <button className={styles.storyButton}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="black" width="24" height="24">
                  <path d="M32 2C18.75 2 8 12.75 8 26v32c0 2.21 2.69 3.32 4.24 1.76L20 52l7.76 7.76c.78.78 2.05.78 2.83 0L38.34 52 52 59.76C53.55 61.32 56 60.21 56 58V26C56 12.75 45.25 2 32 2zM24 28a4 4 0 110-8 4 4 0 010 8zm16 0a4 4 0 110-8 4 4 0 010 8z" />
                </svg>
                Who is Pocong
                <div className={styles.arrow}>›</div>
              </button>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
