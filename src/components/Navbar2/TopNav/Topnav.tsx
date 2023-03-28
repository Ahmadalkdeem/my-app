import React from 'react'
import css from './css.module.scss'
import { BsWhatsapp, BsFacebook, BsInstagram } from "react-icons/bs";
function Topnav() {
    return (
        <div className={`${css.MyDiv}`}>

            <a target='_blank' href="https://stackoverflow.com/questions/43768629/how-to-scale-large-font-awesome-icons-from-the-react-icons-package"><BsWhatsapp className={css.MyIcon} size={30} /></a>
            <a target='_blank' href="https://stackoverflow.com/questions/43768629/how-to-scale-large-font-awesome-icons-from-the-react-icons-package"><BsInstagram className={css.MyIcon} size={30} /></a>
            <a target='_blank' href="https://stackoverflow.com/questions/43768629/how-to-scale-large-font-awesome-icons-from-the-react-icons-package"><BsFacebook className={css.MyIcon} size={30} /></a>

        </div>
    )
}

export default Topnav