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
    <ScreenContainer className="hover">
      <div id="card--header__container">
        <Icon
          image={IconAdd}
          copy="España"
          onClick={() => history.push('/country')}
        />
        <Icon
          image={IconAdd}
          copy="Francia"
          onClick={() => history.push('/country')}
        />
        <Icon
          image={IconAdd}
          copy="Japon"
          onClick={() => history.push('/country')}
        />
        <Icon
          image={IconAdd}
          copy="Suecia"
          onClick={() => history.push('/country')}
        />
      </div>
    </ScreenContainer>
  );
};

export default StatusHeader;
