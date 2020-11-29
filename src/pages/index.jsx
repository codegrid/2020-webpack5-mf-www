import React from 'react';

import Header from '../components/Header';
import styles from '../assets/index.scss';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header isBlog={false} />
        <main className={styles.container}>
          <div className={styles.contents}>
            <h1 className={styles.title}>コーポレートサイト</h1>
          </div>
        </main>
      </>
    );
  }
}
