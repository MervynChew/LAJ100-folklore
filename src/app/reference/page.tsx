import React from 'react';
import './Referen.css';
import Header from '../../components/Header';
import Styles from '../home/page.module.css'

const Referen = () => {
  return (
    <>
      <Header />
      <div className="referen-container">
        <div className="referen-card">
          <h1 className="referen-title">📚 References & Credits</h1>
          <p className="referen-description">
            Below are some of the sources and inspirations used throughout this assignment:
          </p>

          <section className='subtopic'>
            General
          </section>

          <ul className="referen-list">
            <li>
              <a href="https://www.tokyoweekender.com/art_and_culture/japanese-culture/japanese-urban-legends-for-spooky-season/" target="_blank" rel="noopener noreferrer">
                • Japan ghost folklore
              </a>
            </li>
            <li>
              <a href="https://www.buro247.my/culture/scariest-malaysian-ghosts-supernatural-beings.html" target="_blank" rel="noopener noreferrer">
                • Malaysia ghodt folklore
              </a>
            </li>
          </ul>

          <br></br><br></br>

          <section className='subtopic'>
            Japan - Oiwa san
          </section>

          <ul className="referen-list">
            <li>
              <a href="https://www2.ntj.jac.go.jp/unesco/kabuki/en/play/play17.html" target="_blank" rel="noopener noreferrer">
                • Original Kabuki Oiwa folklore
              </a>
            </li>
            <li>
              <a href="https://yokai.com/oiwa/" target="_blank" rel="noopener noreferrer">
                • Yokai.com
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=gauV1D4VgkM" target="_blank" rel="noopener noreferrer">
                • Oiwa youtube story
              </a>
            </li>
          </ul>

          <br></br><br></br>

          <section className='subtopic'>
            Japan - Kachisake-onna
          </section>

          <ul className="referen-list">
            <li>
              <a href="https://www.jahernandez.com/posts/kuchisake-onna-the-slit-mouthed-woman-of-japanese-folklore" target="_blank" rel="noopener noreferrer">
                • Kachisake-onna behavior
              </a>
            </li>
            <li>
              <a href="https://yokai.com/kuchisakeonna/" target="_blank" rel="noopener noreferrer">
                • Yokai.com
              </a>
            </li>
          </ul>

          <br></br><br></br>

          <section className='subtopic'>
            Malaysia - Pontianak
          </section>

          <ul className="referen-list">
            <li>
              <a href="https://mythus.fandom.com/wiki/Pontianak" target="_blank" rel="noopener noreferrer">
                • Pontianak myth
              </a>
            </li>
            <li>
              <a href="https://medium.com/@ragnarrrasmusson/pontianak-the-vengeful-spirit-that-haunts-southeast-asia-b2adc89811c3" target="_blank" rel="noopener noreferrer">
                • Pontianak story
              </a>
            </li>
            <li>
              <a href="https://vocal.media/horror/the-pontianak-a-haunting-legend-from-southeast-asia" target="_blank" rel="noopener noreferrer">
                • What Pontianak stands for
              </a>
            </li>
          </ul>

          <br></br><br></br>

          <section className='subtopic'>
            Malaysia - Pocong
          </section>

          <ul className="referen-list">
            <li>
              <a href="https://medium.com/@HLiem/pocong-hantu-bungkus-the-famous-ghost-urban-legend-in-indonesia-and-malaysia-7a0c41a9e9d8" target="_blank" rel="noopener noreferrer">
                • Hantu Bungkus
              </a>
            </li>
            <li>
              <a href="https://vocal.media/horror/pocong-ghost-story" target="_blank" rel="noopener noreferrer">
                • Pocong legend 1
              </a>
            </li>
            <li>
              <a href="https://vocal.media/horror/ghosts-in-shrouds-the-legend-of-the-pocong" target="_blank" rel="noopener noreferrer">
                • Pocong legend 2
              </a>
            </li>
          </ul>

          <p className="referen-footer">Thank you for the available free resources to complete this assignment...</p>
        </div>
      </div>
    </>
  );
};

export default Referen;
