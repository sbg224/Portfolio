import { FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa';
import style from './Formulaire.module.css'

type formulairetype={
datas:{
name:string;
lastName:string;
email:string;
telephone: string;
message:string;
};
handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>; 
handleSubmit: React.FormEventHandler<HTMLFormElement>;
isLoading: boolean;
}

function Formulaire({handleChange, datas, handleSubmit, isLoading}:formulairetype){



return(
<div>
<form
        className={style.formG}
        onSubmit={handleSubmit}
        action="https://formspree.io/f/mqaayndr"
        method="POST"
      >
        <div className={style.formName}>
          <div className={style.inputWrapper}>
            <FaUser className={style.icon} />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Entrer votre nom"
              value={datas.name}
              onChange={handleChange}
            />
          </div>
          <div className={style.inputWrapper}>
            <FaUser className={style.icon} />
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Entrer votre prénom"
              value={datas.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={style.formEmailNumber}>
          <div className={style.inputWrapper}>
            <FaEnvelope className={style.icon} />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Entrer votre email"
              value={datas.email}
              onChange={handleChange}
            />
          </div>
          <div className={style.inputWrapper}>
            <FaPhone className={style.icon} />
            <input
              type="tel"
              name="telephone"
              id="telephone"
              placeholder="Entrer votre numéro"
              value={datas.telephone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={style.formMessage}>
          <label htmlFor="message">Message:</label>
          <div className={style.inputWrapper}>
            {/* <FaComment className={style.icon} /> */}
            <textarea
              className={style.myMessage}
              name="message"
              id="message"
              rows={10}
              cols={51}
              wrap="hard"
              placeholder="On vous écoute..."
              value={datas.message}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <button type="submit" className={style.myButtonS} disabled={isLoading}>
            {isLoading ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulaire