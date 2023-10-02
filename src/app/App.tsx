import { Header } from '~/components/Header/Header';
import { SideNav } from '~/components/SideNav/SideNav';
import { Сontainer } from '~/components/Сontainer/Сontainer';
import { BooksList } from '~/page/BooksList/BooksList';
import styles from './App.module.scss';

function App() {

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.content}>
        <Сontainer className={styles.сontainer}>
          <SideNav />
          <div className={styles.wrapperPage}>
            <BooksList />
          </div>
        </Сontainer>
      </div>
    </div>
  )
}

export default App
