import React from 'react';
import style from '../scss/About.module.scss';
import about1 from '../images/about/about1.jpg';
import about2 from '../images/about/about2.jpg';
import about3 from '../images/about/about3.jpg';
import about4 from '../images/about/about4.jpg';
import about5 from '../images/about/about5.jpg';
import about6 from '../images/about/about6.jpg';
import about7 from '../images/about/about7.jpg';
import about8 from '../images/about/about8.jpg';
import about9 from '../images/about/about9.jpg';
import about10 from '../images/about/about10.jpg';
import about11 from '../images/about/about11.jpg';
import about12 from '../images/about/about12.jpg';
import about13 from '../images/about/about13.jpg';
import about14 from '../images/about/about14.jpg';
import Gallery from '../components/Gallery';
import AboutCard from '../components/UI/AboutCard';

const photos = [
  about1,
  about2,
  about3,
  about4,
  about5,
  about6,
  about7,
  about8,
  about9,
  about10,
  about11,
  about12,
  about13,
  about14,
];
const About = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style['container__first']}>
          <h1>The business of good food</h1>
          <div className={style.aboutPara}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              iusto dolor reprehenderit totam ab maxime enim eum suscipit nobis,
              voluptate possimus ratione quisquam cumque nulla dicta deserunt
              provident voluptatum officia. Lorem ipsum dolor sit amet
              consectetur adipisicing Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Expedita, quidem. Quam eveniet totam impedit
              rerum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore
              ullam neque dolorum, ab magni quibusdam architecto natus sit,
              facere rem reprehenderit veritatis sunt a numquam culpa. Quam,
              assumenda fugit. Nihil perferendis, similique dolor, perspiciatis,
              repellendus blanditiis atque nisi odit animi qui minima alias
              quidem.
            </p>
          </div>
        </div>
        <div className={style.container__second}>
          <div className={style['container__second--card']}>
            <AboutCard id="truck" />
          </div>
          <div className={style['container__second--card']}>
            <AboutCard id="globe" />
          </div>
          <div className={style['container__second--card']}>
            <AboutCard id="heart" />
          </div>
        </div>
        <div className={style.container__third}>
          <Gallery photos={photos} />
        </div>
      </div>
    </>
  );
};

export default About;
