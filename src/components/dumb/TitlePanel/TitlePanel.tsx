import React, { FunctionComponent } from "react";
import "./TitlePanel.scss";

interface Props {
  title: string;
  subtitle?: string;
  fontFamily?: string;
  fontBold?: boolean;
  fontSize?: string;
  redirection?: any;
  style?: any;
}

const TitlePanel: FunctionComponent<Props> = props => {
  const {
    title,
    subtitle,
    redirection,
    fontFamily,
    fontBold,
    fontSize,
    style
  } = props;
  const customFontFamily = fontFamily ? fontFamily : "";
  const customFontWeight = fontBold ? "bold" : "";
  const customFontSize = fontSize ? fontSize : "";

  // pending improve classes as hr and button, improve sizes
  return (
    <section id="title-panel" style={style ? style : {}}>
      <div className="title-panel__box">
        <h2
          className={`title-panel__box__title ${customFontFamily} ${customFontWeight} ${customFontSize}`}
        >
          {title}
        </h2>
        {subtitle && <p className="title-panel__box__subtitle">{subtitle}</p>}
      </div>
      {redirection && (
        <a className="title-panel__link" href={redirection.link}>
          {redirection.name} >>
        </a>
      )}
    </section>
  );
};

export default TitlePanel;
