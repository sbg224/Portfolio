import style from "./RecentProjets.module.css"
import { useContext } from "react"
import { MyArryContext } from "../context/ContextProjet"

function RecentProjets() {

  const myProjetsContext = useContext(MyArryContext);
  if (!myProjetsContext) {
    throw new Error("Le contexte MyArryContext doit être utilisé dans un MyArryProvider");
  }
	const { ProjetIndex } = myProjetsContext;
  return (
    <div className={style.recentPG}>
      <h2>My rencent work</h2>
      <div>
        <ul className={style.recentPUl}>
          {ProjetIndex.slice(0, 4).map((projet) => (
            <li className={style.recentPLi} key={projet.id}>
              <h3>{projet.name}</h3>
              <img
								className={style.recentPImgSrc}
								src={projet.imgSrc}
								alt={projet.description}
							/>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  )
}

export default RecentProjets