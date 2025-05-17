'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import styles from '../css/storyline.module.css';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const scenes = [
  {
    title: '👻 Born from Betrayal: The Birth of a Curse',
    text: `They say when a woman dies during childbirth, her soul doesn’t always rest. Especially if she is in pain and got angry in her heart.

    Long ago, in a quiet kampung somewhere in Southeast Asia, a woman was betrayed by the man she loved. Pregnant, abandoned, and left to die in agony, she took her final breath not with peace—but with rage. That rage twisted her spirit into something else. Something terrifying. From her grave, she rose as the Pontianak.`,
    image: '/image/pon_scene1.webp',
    audio: '/audio/creepy_sing.mp3',
  },
  {
    title: '🌙 The Beautiful Horror That Walks at Night',
    text: `Pontianak not look like monster at first. She walk at night like normal pretty lady — long black hair, white dress, very ghostly beautiful. But don’t be fooled. That beauty is just a mask.

    If you smell frangipani at night, or hear baby crying but no baby around — better run fast fast. If cry faint, she dekat already. If cry loud, maybe she is right behind you.

    If you turn around then you see...

    Red eyes.
    Face pale and rotting.
    Mouth so wide until can see from ear to ear.
    `,
    image: '/image/pon_scene2.png',
    audio: '/audio/baby_cry.mp3',
  },
  {
    title: '🩸 What She Do To People',
    text: `Pontianak not just kill you, she tear you apart.

    She especially like to attack men — those who remind her of the boyfriend who leave her. But also pregnant ladies, kids, or anyone who cross her path at night.

    She use her very sharp nails to rip open belly, eat the organs. Sometimes she hide her real scary face, pretend helpless, cry soft soft to lure you close — then it’s already too late.
`,
    image: '/image/pon_scene3.jpg',
    audio: '/audio/bone_eat.mp3',
  },
  {
    title: '🌳 Where She Hide',
    text: `During daytime, Pontianak is said to rest inside banana tree. That’s why some kampung no dare plant banana tree too near house, or hang clothes outside at night. Because smell like that can attract her.

    If you want safe, some people say can put nail at back of her neck. Then she become normal woman, quiet and powerless. But once the nail is removed, she remembers everything.

    And she will come for you.
`,
    image: '/image/pon_scene4.jpeg',
    audio: '/audio/ghost.mp3',
  },
  {
    title: '🕯️ Still Around, Still Scary',
    text: `Stories of the Pontianak still spread, passed down from one generation to the next. Taxi drivers claim to pick up lone women late at night who disappear halfway through the ride. Some say she appears in mirrors. Others hear her crying outside their windows, only to find nothing but scratch marks on the walls the next morning.

    Whether you believe or not, remember this:
    If you're walking alone at night and catch the scent of frangipani...

    Don’t turn around.
`,
    image: '/image/pon_scene5.jpg',
    audio: '/audio/smell.mp3',
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
          <h1 className={styles.storyTitle}>🕯️ The Pity Mum 🕯️</h1>

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
                ref={el => (audioRefs.current[index] = el!)}
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
            <Link href="/pontianak">
              <button className={styles.storyButton}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="black" width="24" height="24">
                  <path d="M32 2C18.75 2 8 12.75 8 26v32c0 2.21 2.69 3.32 4.24 1.76L20 52l7.76 7.76c.78.78 2.05.78 2.83 0L38.34 52 52 59.76C53.55 61.32 56 60.21 56 58V26C56 12.75 45.25 2 32 2zM24 28a4 4 0 110-8 4 4 0 010 8zm16 0a4 4 0 110-8 4 4 0 010 8z" />
                </svg>
                Who is Pontianak
                <div className={styles.arrow}>›</div>
              </button>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
