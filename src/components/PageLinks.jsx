import React from 'react'
import PageLink from './PageLink'
import { pageLinks } from '../data';

const PageLinks = (props) => {
    const {parentClass, itemClass} = props;
  return (
    <ul className={parentClass} id="nav-links">
        {
            pageLinks.map((link) => {
                return <PageLink itemClass={itemClass} {...link} />;
            })
        }
    </ul>)
  ;
}

export default PageLinks