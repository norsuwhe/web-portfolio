import { useEffect } from "react";
import MyImage from "../../assets/img/photo.png";
import AnimatedMain from "../../components/AnimatedMain/AnimatedMain";
import Header from "../../components/Header/Header";
import SubHeader from "../../components/SubHeader/SubHeader";
import "./About.scss";

const About = () => {
  useEffect(() => {
    document.title = "Обо мне";
  }, []);

  return (
    <AnimatedMain>
      <section className="about">
        <div className="about__description">
          <Header>
            Привет,
            <br /> меня зовут Владимир
          </Header>
          <SubHeader>И я Front-end разработчик</SubHeader>
          <SubHeader size="small">TypeScript / React / Redux / Sass</SubHeader>
          <p className="about__paragraph">
            Люблю разработку, самостоятельно изучать новые технологии и решать с
            их помощью задачи. Не люблю самостоятельно дизайнить, поэтому этот
            сайт такой скучный. А ещё я немного фотограф, музыкант и кофеман.
          </p>
        </div>
        <div className="about__image-group">
          <img className="about__image" src={MyImage} alt="photo of me" />
          <div className="about__rectangle"></div>
        </div>
      </section>
    </AnimatedMain>
  );
};

export default About;
