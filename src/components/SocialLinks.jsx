import React from "react";
import SocialLink from "./SocialLink";
import { socialLinks } from "../data";

const SocialLinks = (props) => {
    const {parentClass, itemClass} = props;
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => (
        <SocialLink key={link.id} {...link} itemClass={itemClass}/>
      ))}
    </ul>
  );
};

export default SocialLinks;
