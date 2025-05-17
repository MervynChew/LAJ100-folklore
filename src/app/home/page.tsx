import Header from '../../components/Header';
import styles from './page.module.css';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>👻 Introduction: Ghost Tales in Japan and Malaysia</h1>
        <section className={styles.content}>
          <p>
            During my mid-semester break, I got curious and so decided to choose folklore stories
            from Japan and Malaysia to be the assignment topic. Honestly, reading those scary stories
            at night really gives me goosebumps. But I was also very impressed — got so many different
            types of creatures and stories I never heard before.
          </p>

          <Image
            src="/image/Yokai.webp"
            alt="Ghostly figure"
            width={600}
            height={400}
            className={styles.image}
          />

          <p>
            I believe most of us, deep inside, are scared of ghosts? Maybe not everyone admits it —
            but come on lah, who doesn&rsquo;t feel uneasy when walking alone in a dark, quiet place? As
            for me… I don&rsquo;t really believe in God, but somehow, I do believe in ghosts. Weird, I know.
            But sometimes, I just feel like something is there… watching. Especially in gloomy places —
            the kind where the air feels heavy, and the silence is too loud.
          </p>

          <p>
            And the worst part? When I&rsquo;m all alone. You might not have experienced a ghost yourself —
            but I bet that you&rsquo;ve heard at least one before. Maybe from your cousin, your grandma, or
            your friend who swore they saw something at night. Maybe even that abandoned house near
            your taman… the swing which swings with no wind.
          </p>

          <Image
            src="/image/swing.webp"
            alt="Haunted swing"
            width={600}
            height={400}
            className={styles.image}
          />

          <p>
            If you&rsquo;re planning to dive into these ghost stories… just make sure you&rsquo;re not alone.
            Sometimes, the one sitting beside you... wasn&rsquo;t there before.
          </p>

          <p>
            Who hasn&rsquo;t heard ghost stories before, right? I believe that every country has their own
            superstitions and thus comes with different ghosts. Whether it&rsquo;s told when you are still
            small by your grandma, or watched in a late-night horror movie, these tales aren&rsquo;t just
            for scares. Actually, they show us what each culture believes about life, death, and
            things we can&rsquo;t see with our eyes.
          </p>

          <p>
            In Japan, ghost stories are called <strong>kaidan (怪談)</strong>, and they usually feature
            spirits known as <strong>yūrei (幽霊)</strong>. These yūrei are souls of people who died
            with strong feelings — like anger, sadness, or tak puas hati. Because of that, they
            cannot rest in peace. Many of these stories are influenced by Shinto and Buddhist
            teachings, where honouring the dead is very important. Classic Japanese kaidan are usually
            full of quiet sadness and eerie vibes.
          </p>

          <p>
            Over here in Malaysia, our ghost stories are usually passed down from our grandma or
            grandpa. These ghosts often carry a message — kalau buat salah, mesti ada akibat.
            It&rsquo;s not just to scare people, but also to teach about adat, agama, and respecting the
            unknown or unseen world.
          </p>

          <p>
            So, even though Japan and Malaysia are very different countries, both cultures use ghost
            stories for more than just fright. They reflect values, fears, and even ways of coping
            with death. Japanese yūrei tend to haunt in silence, slowly… while Malaysian ghosts
            sometimes appear directly — sudden, loud, and powerful. But both are scary in their own style!
          </p>
        </section>
      </main>
    </>
  );
}
