import React from "react";

const SocialLink = (props) => {
  const { id, href, iconClass, itemClass } = props;
  return (
    <li key={id}>
      <a href={href} target="_blank" rel="noreferrer" className={itemClass}>
        <i className={iconClass}></i>
      </a>
    </li>
  );
};

export default SocialLink;
