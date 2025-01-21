import { Instagram, Twitter, Youtube } from 'react-bootstrap-icons';
import classes from './footer.module.scss';
import { cn } from '@/utils/cn';
import { footers } from '@/config/paths';


export function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={cn(classes.inner, 'container')}>
        <div className={classes.logo}>
          <img width={50} height={50} src="https://techzen.vn/wp-content/themes/Techzen/assets/images/Techzenlogo.png" alt="" />

          <p className={classes.description}>
            Build fully functional accessible web applications faster than ever
          </p>
        </div>
        <div className={classes.groups}>
          {
            footers.map((group) => {
              const links = group.links.map((link, index) => (
                <a
                  key={index}
                  className={classes.link}
                  href={link.path}
                  onClick={(event) => event.preventDefault()}
                >
                  {link.label}
                </a>
              ));

              return (
                <div className={classes.wrapper} key={group.title}>
                  <p className={classes.title}>{group.title}</p>
                  {links}
                </div>
              );
            })
          }</div>
      </div>
      <div className={cn(classes.afterFooter, 'container')}>
        <p className='fs-6 text-secondary-emphasis'>
          © 2025 by <a target='_blank' href='https://github.com/seaesa'>seaesa</a>. All rights reserved.
        </p>

        <div className={cn(classes.social, 'gap-4')}>
          <Twitter size={18} />
          <Youtube size={18} />
          <Instagram size={18} />
        </div>
      </div>
    </footer>
  );
}