import React from 'react';
import './Remainder.scss'

import spain from '../../../assets/españa.jpg'
import timer from '../../../assets/svg/pie-chart.svg'

function Remainder(props) {
  return (
    <div className="remainder">
      <div className="remainder__information">
        <div className="remainder__information--title">
          Nombre de Aplicación
        </div>
        <div className="remainder__information--description">
          <div className="icon">
            <img src={timer} alt=""/>
          </div>
          <div  className="description">
            <div className="description--title">
              Nombre del Paso
            </div>
            <div className="description--subtitle">
              Paso 7 de 15
            </div>
          </div>
        </div>
      </div>
      <div className="remainder__preview">
        <img src={spain} alt="spain"/>
      </div>
    </div>
  );
}

export default Remainder;
