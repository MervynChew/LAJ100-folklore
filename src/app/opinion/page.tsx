import Header from '../../components/Header';
import styles from '../home/page.module.css';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>👻 Introduction: Ghost Tales in Japan and Malaysia</h1>
        <section className={styles.content}>
          <p>
            Personally, I feel that Malaysian ghosts are scarier. One reason is because they usually look like real humans, but with very disturbing features. Take the Pontianak for example — sometimes she appears beautiful at first, but then suddenly her face changes into something horrifying, with red eyes, a bloody mouth, and sharp nails. Just imagining her floating or standing under a tree at night already makes me feel uneasy. Plus, Malaysian ghosts often appear in places we know — like under street lamps, behind village houses, or even in the toilet — which makes them feel even more real and close to us.
          </p>

          <Image
            src="/image/opinion_lamp.jpg"
            alt="Ghostly figure"
            width={600}
            height={400}
            className={styles.image}
          />

          <p>
            Malaysian ghost stories also often involve revenge. Many of these spirits died because of betrayal, abuse, or injustice. That’s why when we hear their stories, we can sort of feel their anger or sadness. Maybe that’s what makes it more frightening — the emotion and their expression.
          </p>

          <p>
            But if we talk about variety and imagination, then I think Japanese folklore really stands out. There are so many different types of creatures — some look like half-human, half-animal; some are living objects like umbrellas with eyes; and there are even toilet spirits like Hanako-san. Not all of them are bad. Some are harmless, or even helpful. For example, there’s Zashiki-warashi, a child spirit said to bring good luck to a household. Honestly, it’s quite different from Malaysian ghosts, which usually bring fear.
          </p>

          <Image
            src="/image/opinion_zashiki.jpg"
            alt="Haunted swing"
            width={600}
            height={400}
            className={styles.image}
          />

          <p>
            To me, Japanese folklore feels like a big universe filled with unique spirits and supernatural beings, each with their own personality and background. Some are connected to religion like Shinto or Buddhism, and their stories are often recorded in literature, anime, games, and movies. Because of that, more people around the world know about them.
          </p>

          <p>
            In Malaysia, our ghost stories are mostly passed down through word of mouth, or from older generations. And because we don’t have much influence on Japan's culture, maybe anime? And this makes us have less knowledge about our own culture. I was shocked to know those ghosts in Malaysia when I surveyed them because I totally have no idea what it is, for example Pocong. This is my first time knowing this.
          </p>

          <p>
            In the end, both Malaysia and Japan have their own special style when it comes to folklore. Malaysian ghosts are terrifying in their appearance, while Japanese folklore offers a wide range of mysterious beings — some scary, some interesting, some even cute. Japanese folklore has more to have a story behind each of the YoKai, which I think that people will love more. 
          </p>

          <p>
            I personally like Japanese Folklore more, as I think those YoKai are more special and always have a unique appearance which will always refresh my mind again and again. I hope that Malaysian folklore can be more involved in maybe game and anime sector so that more teenagers can learn more about them, locally and internationally.
          </p>
        </section>
      </main>
    </>
  );
}
