import React from 'react';
import styles from './Root.module.css'

class Root extends React.Component {

  state = {
    test: 'it works! :)'
  }


  
  render(){

    return(
      <div className={styles.wrapper}>
        <h1>There will be a CookBook</h1>
      </div>
    )

  }
}

export default Root;
