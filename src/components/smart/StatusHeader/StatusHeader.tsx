import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import Icon from '../../dumb/Icon/Icon';
import IconAdd from './../../../assets/svg/add.svg';
import ScreenContainer from '../../dumb/ScreenContainer/ScreenContainer';
import './IconList.scss';

interface IProps {
}

const StatusHeader: FunctionComponent<IProps> = () => {
  const history = useHistory();

  return (
    <ScreenContainer>
      <div id="card--header__container">
        <Icon
          image={IconAdd}
          onClick={() => history.push('/country')}
        />
        <Icon
          image={IconAdd}
          onClick={() => history.push('/country')}
        />
        <Icon
          image={IconAdd}
          onClick={() => history.push('/country')}
        />
      </div>
    </ScreenContainer>
  );
};

export default StatusHeader;
