import { ProjectsList } from "./ProjectsList";
import "./Projects.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef, useCallback } from "react";
import MainContainer from "../../components/MainContainer/MainContainer";
import ButtonNext from "../../assets/svg/slider-button-next.svg";
import ButtonPrev from "../../assets/svg/slider-button-prev.svg";

const Projects = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={3}
        slidesPerGroup={3}
        roundLengths={true}
        ref={sliderRef}
        centerInsufficientSlides={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          400: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          715: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          820: {
            slidesPerView: 2.5,
            slidesPerGroup: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
      >
        {ProjectsList.map(
          ({ name, techStack, description, githubLink, deployLink }) => {
            return (
              <SwiperSlide key={name} className="slider-container">
                <ProjectCard
                  name={name}
                  tech={techStack}
                  description={description}
                  github={githubLink}
                  deploy={deployLink}
                  className="project-card"
                />
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
      <button className="swiper__button_prev" onClick={handlePrev}>
        <img src={ButtonPrev} alt="prev slide button" />
      </button>
      <button className="swiper__button_next" onClick={handleNext}>
        <img src={ButtonNext} alt="next slide button" />
      </button>
    </>
  );
};

export default Projects;
