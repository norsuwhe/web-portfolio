import "./Contacts.scss";

const Contacts = () => {
  return (
    <section className="contacts">
      <ul className="contacts__links">
        <li>
          <a className="contacts__link" href="">
            Email
          </a>
        </li>
        <li>
          <a className="contacts__link" href="">
            Telegram
          </a>
        </li>
        <li>
          <a className="contacts__link" href="">
            HH
          </a>
        </li>
        <li>
          <a className="contacts__link" href="">
            GitHub
          </a>
        </li>
      </ul>
      <p className="contacts__info">
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
        tellus..
      </p>
    </section>
  );
};

export default Contacts;
