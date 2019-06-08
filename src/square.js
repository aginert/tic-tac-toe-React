import  React from 'react';

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  //Ejemplo de componente de funcion, una forma más simple
  //de escribir componentes que solo contienen un método render 
  //y no tienen estado propio.

  export default Square;

  