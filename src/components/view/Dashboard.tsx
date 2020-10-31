import React, { FunctionComponent, Fragment } from 'react';
import HeaderContainer from '../dumb/HeaderContainer/HeaderContainer';
import ScreenContainer from '../dumb/ScreenContainer/ScreenContainer';
import Separator from '../dumb/Separator/Separator';
import StatusHeader from '../smart/StatusHeader/StatusHeader';
import Menu from '../smart/Menu/Menu';

const Dashboard: FunctionComponent = () => {
  // const dispatch = useDispatch();
  // const state = useSelector((state: any) => state);

  // useEffect(() => {
  // }, []);

  return (
    <Fragment>
      <HeaderContainer />
      <StatusHeader />
      <ScreenContainer>
        dashboard last people's posts list
        <Separator />
        <Menu />
      </ScreenContainer>
    </Fragment>
  );
};

export default Dashboard;
