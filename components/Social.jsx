import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaFacebook, FaWhatsapp} from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/Gokuno'},
    {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/jorge-allan-paz-garza/'},
    {icon: <FaFacebook />, path: 'https://www.facebook.com/1UPWebDesigns'},
    {icon: <FaWhatsapp />, path: 'https://wa.me/+526621826450'},

]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles} target="_blank"> 
                    {item.icon}
                </Link>

            )
        })}
    </div>
  )
}

export default Social