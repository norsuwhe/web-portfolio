import MyImage from "../../assets/img/photo.png";
import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <div className="about__description">
        <h1 className="about__header">Привет, меня зовут Владимир</h1>
        <h2 className="about__spec">И я Front-end разработчик</h2>
        <h3 className="about__tech-stack">TypeScript / React / Redux / Sass</h3>
        <p className="about__paragraph">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus..
        </p>
      </div>
      <div className="about__image-group">
        <img className="about__image" src={MyImage} alt="" />
        <div className="about__rectangle"></div>
      </div>
    </section>
  );
};

export default About;
