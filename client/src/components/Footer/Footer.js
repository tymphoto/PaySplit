import React from 'react';
import classes from './Footer.module.css';

function Footer() {
  return (
    <div className={classes.footer}>
      <p className="mb-0 mt-1">Команда разработчиков:</p>
      <a href="https://github.com/tymphoto" className={classes.footerLink}>Артем Тимошенко</a>
      <a href="https://github.com/VladimirRishilin" className={classes.footerLink}>Владимир Ришилин</a>
      <a href="https://github.com/AlbertRevazov" className={classes.footerLink}>Альберт Ревазов</a>
      <a href="https://github.com/MaratEs777" className={classes.footerLink}>Марат Есиев</a>
    </div>
  );
}

export default Footer;
