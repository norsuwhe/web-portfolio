import { useEffect } from "react";
import AnimatedMain from "../../components/AnimatedMain/AnimatedMain";
import "./Contacts.scss";
import { ContactsList } from "./ContactsList";

const Contacts = () => {
  useEffect(() => {
    document.title = "Контакты";
  }, []);
  return (
    <AnimatedMain>
      <section className="contacts">
        <ul className="contacts__links">
          {ContactsList.map(({ name, link }) => {
            return (
              <li key={name}>
                <a className="contacts__link" href={link}>
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
        <p className="contacts__info">
          В данный момент я ищу работу. Интересно было бы поработать в
          разработке реально крутых и технологичных проектов. Буду рад выслушать
          ваши предложения!
        </p>
      </section>
    </AnimatedMain>
  );
};

export default Contacts;
