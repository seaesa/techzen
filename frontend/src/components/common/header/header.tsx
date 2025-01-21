import { cn } from '@/utils/cn';
import classes from './header.module.scss';
import { headers } from '@/config/paths';

export function Header() {
  return (
    <header className={classes.header}>
      <div className={cn(classes.inner, 'container')}>
        <img width={50} height={50} src="https://techzen.vn/wp-content/themes/Techzen/assets/images/Techzenlogo.png" alt="" />

        <div className='d-flex gap-2'>
          <div className={cn(classes.links, 'd-flex gap-4')}>
            {
              headers.map((link) => (
                <a
                  key={link.label}
                  href={link.path}
                  className={classes.link}
                  onClick={(event) => event.preventDefault()}
                >
                  {link.label}
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </header>
  );
}