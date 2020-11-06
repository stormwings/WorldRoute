import React, { FunctionComponent, Fragment } from 'react';
import HeaderContainer from '../dumb/HeaderContainer/HeaderContainer';
import ScreenContainer from '../dumb/ScreenContainer/ScreenContainer';
import Separator from '../dumb/Separator/Separator';
import StatusHeader from '../smart/StatusHeader/StatusHeader';
import Menu from '../smart/Menu/Menu';
import TitlePanel from '../dumb/TitlePanel/TitlePanel';

import Remainder from '../smart/Remainder/Remainder';

const Dashboard: FunctionComponent = () => {
  // const dispatch = useDispatch();
  // const state = useSelector((state: any) => state);

  // useEffect(() => {
  // }, []);

  return (
    <Fragment>
      <HeaderContainer />
      <TitlePanel 
        title='Hello Username :)'
        subtitle="Nombre de paso" 
        fontSize="size-m"
        fontBold
      />
      <Remainder
      />
      {/* <StatusHeader /> */}
      {/* <ScreenContainer>
        dashboard last people's posts list
        <Separator />
        <Menu />
      </ScreenContainer> */}
    </Fragment>
  );
};

export default Dashboard;
