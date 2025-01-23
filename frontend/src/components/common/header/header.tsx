import { cn } from '@/utils/cn';
import classes from './header.module.scss';
import { headers } from '@/config/paths';
import { Link } from 'react-router';

export function Header() {
  return (
    <header className={classes.header}>
      <div className={cn(classes.inner, 'container')}>
        <img width={50} height={50} src="https://techzen.vn/wp-content/themes/Techzen/assets/images/Techzenlogo.png" alt="" />

        <div className='d-flex gap-2'>
          <div className={cn(classes.links, 'd-flex gap-4')}>
            {
              headers.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className={classes.link}
                >
                  {link.label}
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </header>
  );
}