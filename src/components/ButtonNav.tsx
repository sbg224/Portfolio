import { NavigateFunction } from 'react-router-dom';


import style from './ButtonNav.module.css'

type myButtonType={
    handleChange: NavigateFunction;
    path: string;
    name: string;
    color: string
}

function ButtonNav({handleChange, path, name, color}:myButtonType){
    return(
        <div >
            <button 
            className={style.button} 
            type='button' onClick={()=> 
            handleChange(path)}
            onFocus={(e)=>{e.currentTarget.style.backgroundColor = color}}
            onBlur={(e)=>{e.currentTarget.style.backgroundColor = "#EAEAEA"}}>{name}</button>
        </div>
    )
}

export default ButtonNav