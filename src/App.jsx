import { Header } from "./components/Header";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <div>
            <span>Vagner</span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              ad molestias, eveniet perspiciatis architecto iure odit vitae,
              natus voluptate enim, magnam explicabo inventore sequi ducimus
              recusandae quis fugit. Veritatis, enim.
            </p>
          </div>
          <div>
            <span>Vagner</span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              ad molestias, eveniet perspiciatis architecto iure odit vitae,
              natus voluptate enim, magnam explicabo inventore sequi ducimus
              recusandae quis fugit. Veritatis, enim.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
