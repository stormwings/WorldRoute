import React, { FunctionComponent, Fragment } from 'react';

import IconAdd from './../../assets/svg/add.svg';

import ScreenContainer from '../dumb/ScreenContainer/ScreenContainer';
import HeaderContainer from '../dumb/HeaderContainer/HeaderContainer';
import Menu from '../smart/Menu/Menu';
import StatusHeader from '../smart/StatusHeader/StatusHeader';
import CardHeader from '../dumb/CardHeader/CardHeader';

const Country: FunctionComponent = () => {
  // const state = useSelector((state: any) => state);
  // const dispatch = useDispatch();

  // useEffect(() => {
  // }, []);

  return (
    <Fragment>
      <HeaderContainer />
      <StatusHeader />
      <ScreenContainer>
        <CardHeader
          content="Australia"
          subtitle="Paso 1"
          icon={IconAdd}
          className="header" 
        />
        <Menu />
      </ScreenContainer>
    </Fragment>
  );
};

export default Country;