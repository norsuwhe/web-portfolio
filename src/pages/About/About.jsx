import MyImage from "../../assets/img/photo.png";
import Header from "../../components/Header/Header";
import SubHeader from "../../components/SubHeader/SubHeader";
import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <div className="about__description">
        <Header>Привет, меня зовут Владимир</Header>
        <SubHeader>И я Front-end разработчик</SubHeader>
        <SubHeader size="small">TypeScript / React / Redux / Sass</SubHeader>
        <p className="about__paragraph">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus..
        </p>
      </div>
      <div className="about__image-group">
        <img className="about__image" src={MyImage} alt="photo of me" />
        <div className="about__rectangle"></div>
      </div>
    </section>
  );
};

export default About;
