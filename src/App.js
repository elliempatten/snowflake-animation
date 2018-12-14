import React from 'react';
import './App.css';

class Everything extends React.Component {
  render() {
    let snowflakes = [];
    for (var i = 0; i < 40; i++) {
      const position = Math.random() * 100;
      const delay = Math.random() * 2.4;
      const style = {
        animationDelay: delay + 's',
        left: position + '%'
      };
      snowflakes.push(
        <div style={style} key={i} className="snowflakeContainer">
          <img
            className="snowflake"
            alt="snowflake"
            src="https://techflourish.com/images/best-snowflake-clipart-black-and-white-4.png"
          />
        </div>
      );
    }
    return (
      <div className="everything">
        {snowflakes}
        <div className="ground">
          <p className="credit">
            {' '}
            ❆ Made by{' '}
            <a href="https://wwww.twitter.com/elliempatten">Ellie Patten</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Everything;
