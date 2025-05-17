import React from 'react';
import './FolkloreComparison.css'; // Import the CSS file
import Header from "../../components/Header";
import styles from "../home/page.module.css";
import Image from 'next/image';

interface FolkloreRow {
  aspect: string;
  japanese: string;
  malaysian: string;
}

const folkloreData: FolkloreRow[] = [
  {
    aspect: 'Origin of Ghost Stories',
    japanese: 'Many ghosts and Yōkai became popular during Edo period (1603–1868), thanks to artists like Toriyama Sekien.',
    malaysian: 'Stories often passed down by word of mouth in kampung; linked to traditional beliefs and death rituals.',
  },
  {
    aspect: 'Type of Spirits',
    japanese: 'Yōkai (妖怪) include strange creatures, not always evil. Yūrei (幽霊) are spirits of the dead. Onryō (怨霊) are vengeful ghosts.',
    malaysian: 'Mostly spirits of people who died tragically or rituals not done properly — like Pontianak and Pocong.',
  },
  {
    aspect: 'Purpose or Nature',
    japanese: 'Some ghosts want revenge, some just linger due to sorrow or unfinished business. Not all are harmful.',
    malaysian: 'Many spirits are dangerous and violent, often attacking the living out of anger or revenge.',
  },
  {
    aspect: 'Famous Examples',
    japanese: 'Oiwa-san (Onryō), Kuchisake-onna (Slit-Mouth Woman), Tengu (Yōkai, not always evil).',
    malaysian: 'Pontianak (vengeful female ghost), Pocong (trapped burial ghost).',
  },
  {
    aspect: 'Cultural Influence',
    japanese: 'Deeply linked to Shinto and Buddhist beliefs, plus Edo-period art and literature.',
    malaysian: 'Influenced by Malay customs, Islamic traditions, and local superstitions.',
  },
  {
    aspect: 'Appearance',
    japanese: 'Often wear white funeral kimono, long black hair. Some have unique features (e.g. Kuchisake-onna’s mouth).',
    malaysian: 'Pontianak appears as a beautiful woman in white, Pocong wrapped in burial cloth and hops around.',
  },
];

const FolkloreComparison: React.FC = () => {
  return (
    <>
      <Header />
      <div className="folklore-container">
        <h1>👻 Japanese vs Malaysian Ghost Folklore</h1>
        <table className="folklore-table">
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Japanese Folklore</th>
              <th>Malaysian Folklore</th>
            </tr>
          </thead>
          <tbody>
            {folkloreData.map((row, index) => (
              <tr key={index}>
                <td>{row.aspect}</td>
                <td>{row.japanese}</td>
                <td>{row.malaysian}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Here add passage */}

        <br></br><br></br><br></br><br></br><br></br><br></br>

        <section className={styles.subtitle}>
          Japanese Folklore
        </section>

        <section className={styles.content}>
          <p>
            Japanese folklore really got a lot of special creatures. Some are very old stories, some are more modern ones.
          </p>

          <Image
            src="/image/YokaiLot.jpg"
            alt="Ghostly figure"
            width={600}
            height={400}
            className={styles.image}
          />

          <p>
            For the traditional ones, many creatures became famous during the Edo period (1603–1868). Last time got this artist called Toriyama Sekien, he draw and collect a lot of these creatures in books, so now people know more about them.
          </p>

          <p>
            They call these creatures Yōkai (妖怪) — some got power, some just not normal human. Not all Yōkai are bad, some are just playful, or even helpful. For example, Tengu — it’s like a mountain creature with long nose or bird face, sometimes will help people, not really evil.
          </p>

          <p>
            Inside Yōkai, got one group called Yūrei (幽霊) — this one is ghost. Mostly are people who die but still got problem or very sad, so they never leave this world. If the ghost really angry and want revenge, then they become Onryō (怨霊). One example is Oiwa-san, she die because her husband treat her very badly, so she become one very vengeful spirit.
          </p>

          <p>
            Got modern stories also. One very famous is Kuchisake-onna, the “Slit-Mouth Woman”. This story become popular in 1978–1979. She will come and ask you “Am I pretty?” but no matter how you answer, she might still hurt you. Very scary, especially imagine meeting her at night!
          </p>
        </section>

        <section className={styles.subtitle}>
          Malaysian Folklore
        </section>

        <section className={styles.content}>
          <p>
            Malaysian ghost stories are also no joke. Most of them are dangerous to people. The ghost always wants to scare or hurt humans.
          </p>

          <Image
            src="/image/pon_compare.webp"
            alt="Ghostly figure"
            width={600}
            height={400}
            className={styles.image}
          />

          <p>
            One of the most famous is Pontianak. She is a woman who dies during giving birth, then becomes a ghost to take revenge. She attacks men, sometimes children or women also. She can appear very pretty, but once you see her real face, confirm you run.
          </p>

          <p>
            Another one is Pocong. It’s a ghost that still tie up in kain kafan (funeral cloth). The story say that if the cloth never untie properly, the soul cannot rest. So they hop around and scare people. This one also got link to Islamic tradition.
          </p>

          <p>
            So can say Malaysian ghost stories mostly focus on angry spirits and things not done properly after death.
          </p>
        </section>
      </div>
    </>
  );
};

export default FolkloreComparison;
