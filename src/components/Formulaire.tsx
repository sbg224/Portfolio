

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
<form className={style.formG} onSubmit={handleSubmit}   action="https://formspree.io/f/mqaayndr"
  method="POST">
  <div className={style.formName}>
    <input type="text" name='name' id='name'  placeholder='Entrer votre nom' value={datas.name} onChange={handleChange}/> 
    <input type="text" name='lastName' id='lastName'  placeholder='Entrer votre lastName' value={datas.lastName} onChange={handleChange}/> 
  </div>
  <div className={style.formEmailNumber}>
    <input type="email" name='email' id='email'  placeholder='Entrer votre email'value={datas.email} onChange={handleChange}/> 
    <input type="tel" name='telephone' id='telephone'  placeholder='Entrer votre numéro' value={datas.telephone} onChange={handleChange}/> 
  </div>
  <div className={style.formMessage}>
    <label htmlFor="message">Message:</label>
    <textarea className={style.myMessage} name="message" id="message" rows={10} cols={51} wrap='hard' placeholder='On vous ecoute ...' value={datas.message} onChange={handleChange}/>
  </div>
  <div>
    <button type='submit' className={style.myButtonS} disabled={isLoading}>{isLoading ? 'Envoi en cours...' : 'Envoyer'}</button>
  </div>
</form>
</div>
)
}


export default Formulaire