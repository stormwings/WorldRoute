import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import './Navbar.scss';

import ImageMenuIcon from './../../../assets/image/menu.png';
import SvgUser from './../../../assets/svg/user.svg';
import Avatar from '../Avatar/Avatar';

interface IProps {
  title: string;
}

export const Navbar: FunctionComponent<IProps> = props => {
  const { title } = props;
  const history = useHistory();

  return (
    <div id="navbar">
      <div 
        className="menu-avatar" 
        style={{ cursor: 'pointer' }} 
        onClick={() => history.push('/user')}
      >
        <Avatar id="navbar" image={SvgUser} size="small" />
      </div>
    </div>
  );
};

export default Navbar;
