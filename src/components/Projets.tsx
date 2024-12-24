
import { redirect } from 'react-router-dom'
import style from './Projets.module.css'


type myProjetsType ={  
  myProjets:{
      id: number;
      name: string;
      description: string;
      imgSrc: string;
      lien:string
  }[];
}

function Projets({myProjets}:myProjetsType ){
    return(
        <div className={style.projetG}>
            <ul className={style.projetUl}>
                {myProjets.map((myProjet) =>(
                  <li key={myProjet.id} className={style.projetList}>
                    <img src={myProjet.imgSrc} alt={myProjet.name} className={style.listImgSrc} />
                    <div className={style.listText} >
                      <h3>{myProjet.name}</h3>
                      <p>{myProjet.description}</p>
                      <a href={myProjet.lien}>En savoir plus</a>
                    </div>
                  </li>
                ) )}
            </ul>
        </div>
    )
}

export default Projets