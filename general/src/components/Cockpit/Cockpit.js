import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
  const button = useRef(null);
  const context = useContext(AuthContext);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect')

    // setTimeout(() => {
    //   alert('saved data to the cloud!')
    // }, 1000);

    button.current.click();

    return () => {
      console.log('[Cockpit.js] cleanup useEffect')
    };
  }, [])

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect')

    return () => {
      console.log('[Cockpit.js] cleanup 2nd useEffect')
    };
  })

  const assignedClasses = [];
  let buttonClass = '';

  if (props.showPersons) {
    buttonClass = classes.Red;
  }

  if (props.length <= 2) {
    assignedClasses.push(classes.red); // ['red']
  }

  if (props.length <= 1) {
    assignedClasses.push(classes.bold); // ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>

      <button ref={button} className={buttonClass} onClick={props.clicked}>
        Toggle Persons
      </button>

      <button onClick={context.login}>Log in</button>
    </div>
  );
};

export default React.memo(Cockpit);
