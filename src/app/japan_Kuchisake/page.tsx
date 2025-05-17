'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import styles from '../css/storyline.module.css';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const scenes = [
  {
    title: '🌫️ Chapter 1: Walk Back to Restu',
    text: `That night already quite late, around 12.30am like that.
    Aiman, Computer Science student, just finished studying at the library. He packed up his laptop, say bye to his group, and walked back to Desasiswa Restu alone.
    
    The road that time very quiet. Streetlight also not bright — some flickering like horror movie. The air a bit cold, can feel the wind blow from Bukit Gambir side. He just walk fast-fast, hoping can reach hostel quick.
    
    But halfway walking, he feel something not right…`,
    image: '/image/japan2_scene1.webp',
    audio: '/audio/walk.mp3',
  },
  {
    title: '🚶 Chapter 2: Got Something Behind?',
    text: `As he reached the turning near Restu, suddenly Aiman felt like got someone behind him. You know that kind of feeling… like your neck hair stand up.

    He stop and turn back. Nothing. Empty road. No bicycle, no car, not even cats.

    He shook his head. "Aiya, maybe too tired la," he thought. Then he continue walking.

    But then, really got footsteps behind him. Same pace as his.

    Then suddenly got soft voice call him from behind:

    "私 きれい? (Am I pretty?)"
`,
    image: '/image/japan2_scene3.jpg',
    audio: '/audio/watashikirei.wav',
  },
  {
    title: '🧣 Chapter 3: The Lady in the Fog',
    text: `He turn around fast.

    Got one woman standing there. Long hair, face half-covered with white mask. She wear long beige coat, and hair macam wet wet a bit. Stand under the streetlight, never move.

    She look at him, eyes very big and serious.
    Aiman blur already, but he just say, “Er… yeah, you pretty.”

    The woman tilt her head one side.

    "これでもきれい (Like that also pretty?)" she ask again. Then slowly, she pull down her mask…`,
    image: '/image/japan2_scene2.jpeg',
    audio: '/audio/koredemokirei.wav',
  },
  {
    title: '😱 Chapter 4: The Real Face',
    text: `The mouth — slit from ear to ear. The skin all open, like someone cut it with blade. Got blood still dripping down. Teeth yellow and sharp.

    That time Aiman feel cold sweat run down his back. His legs start shaking.

    She ask again, voice deeper now,
    "これでもきれい (Like that also pretty?)"

    Aiman’s body froze. His breath hitched.

    “Y-Yeah...” he stammered, unsure what else to say.

    She stared.

    Then... she vanished.

    Right there, in front of him. Gone.

    Aiman stood in stunned silence.

    Did he imagine her?

    Was it stress? Lack of sleep?

    He sprinted the rest of the way uphill to Restu, nearly slipping on the pavement.
    `,
    image: '/image/japan2_scene4.jpg',
    audio: '/audio/curious.mp3',
  },
  {
    title: '🏃 Chapter 5: Run Like Hell',
    text: `He reached his room, slammed the door, and dropped his bag to the floor.

    Trying to calm himself down, he walked to the shared bathroom down the hall, splashed water on his face, and stared into the cracked mirror above the sink.

    Everything seemed normal—
    Until he noticed her reflection.
    Standing behind him.

    No mask.
    Holding a pair of rusty scissors.
    Still smiling.

    She leaned in, her breath cold against his ear:
    “今は？きれいですか (Now still pretty?)"`,
    image: '/image/japan2_scene5.webp',
    audio: '/audio/heavy_breathing.mp3',
  },
  {
    title: '✂️ The Final Moment',
    text: `The lights in the bathroom flickered violently.

    Then—

    A sound.
    A slice.
    A scream that echoed through the halls of Restu.

    But when his roommate came back from clubbing later that night...

    There was no one there.
    Only a cracked mirror... and the faint scent of old perfume.`,
    image: '/image/japan2_scene6.jpg',
    audio: '/audio/man_scream.mp3',
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
          <h1 className={styles.storyTitle}> 🕯️ USM Ghosting 🕯️</h1>

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
            <Link href="/kuchisake">
              <button className={styles.storyButton}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="black" width="24" height="24">
                  <path d="M32 2C18.75 2 8 12.75 8 26v32c0 2.21 2.69 3.32 4.24 1.76L20 52l7.76 7.76c.78.78 2.05.78 2.83 0L38.34 52 52 59.76C53.55 61.32 56 60.21 56 58V26C56 12.75 45.25 2 32 2zM24 28a4 4 0 110-8 4 4 0 010 8zm16 0a4 4 0 110-8 4 4 0 010 8z" />
                </svg>
                Who is Kuchisake-onna
                <div className={styles.arrow}>›</div>
              </button>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
