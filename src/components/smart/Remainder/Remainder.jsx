import React from 'react';

import spain from '../../../assets/españa.jpg'
import timer from '../../../assets/svg/pie-chart.svg'

function Remainder(props) {
  return (
    <div
      style={{
        backgroundColor: '#5E54AC',
        padding: '10px',
        width: '85%',
        borderRadius: '21px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontFamily: 'Arial',
            fontWeight: 'bold',
            color: '#ffffff',
            padding: '0.1em',
            fontSize: '14px',
            marginLeft: '5px',
          }}
        >
          Nombre de Aplicación
        </div>
        <div
          style={{
            display: 'flex',
          }}
        >
          <div
            style={{
              margin: '0.2em',
            }}
          >
            <img
              src={timer}
              style={{
                width: "33px",
                height: "33px"
              }}
              alt=""
            />
          </div>
          <div
            style={{
              margin: 'auto 6px',
            }}
          >
            <div
              style={{
                fontSize: '11px',
                color: '#ffffff',
                marginBottom: '0.5em',
              }}
            >
              Nombre del Paso
            </div>
            <div
              style={{
                fontSize: '11px',
                color: '#ffffff',
              }}
            >
              Paso 7 de 15
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
        }}
      >
        <img
          src={spain}
          style={{
            borderRadius: '20px',
            width: '70px',
            height: '70px',
          }}
          alt="spain"
        />
      </div>
    </div>
  );
}

export default Remainder;
