import { MainLayout } from '@/components/layouts/main'
import { Button } from 'react-bootstrap'
import classes from './home.module.scss';
import { cn } from '@/utils/cn';

export const HomePage = () => {
  return (
    <MainLayout>
      <div className={classes.hero}>
        <div className={cn(classes.container, 'container')}>
          <h2 className={classes.title}>A fully featured React components library</h2>
          <p className={classes.description}>
            Build fully functional accessible web applications faster than ever – Mantine includes
            more than 120 customizable components and hooks to cover you in any situation
          </p>

          <Button variant='primary' className={classes.control}>
            Get started
          </Button>
        </div>
      </div>
    </MainLayout>
  )
} 