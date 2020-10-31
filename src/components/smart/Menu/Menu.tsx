import React, { FunctionComponent } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Menu.scss';
import Icon from './../../dumb/Icon/Icon';
import IconAdd from './../../../assets/svg/add.svg';
import { authSignOut } from './../../../redux/actions/authActions';

const Menu: FunctionComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { key } = useSelector((state: any) => state.auth);

  if (!key) return <Redirect to={'/login'} />;

  return (
    <div id="card--header__container">
      <Icon
        image={IconAdd}
        copy="Wallet"
        onClick={() => history.push('/')}
      />
      <Icon
        image={IconAdd}
        copy="country"
        onClick={() => history.push('/country')}
      />
      <Icon
        image={IconAdd}
        copy="Profile"
        onClick={() => history.push('/user')}
      />
      <Icon
        image={IconAdd}
        copy="Logout"
        onClick={() => dispatch(authSignOut())}
      />
    </div>
  );
};

export default Menu;
