import React, { FunctionComponent, Fragment } from 'react';

import IconAdd from './../../assets/svg/add.svg';

import ListItems from './../smart/ListItems/ListItems';
import ScreenContainer from '../dumb/ScreenContainer/ScreenContainer';
import HeaderContainer from '../dumb/HeaderContainer/HeaderContainer';
import Menu from '../smart/Menu/Menu';
import StatusHeader from '../smart/StatusHeader/StatusHeader';
import CardHeader from '../dumb/CardHeader/CardHeader';
import spain from './../../assets/españa.jpg'

const Country: FunctionComponent = () => {
  // const state = useSelector((state: any) => state);
  // const dispatch = useDispatch();

  // useEffect(() => {
  // }, []);

  return (
    <Fragment>
      <img style={{ 
        width: "100%",
        marginBottom: "-25%"
      }} src={spain} />
      <ScreenContainer className="white">
        <StatusHeader />
          <ListItems
            items={
              [{
                operation_type: "add",
                date: "4",
                currencyEnd: "2",
                currencyStart: "3",
                ingressAmount: "5",
                substractionAmount: "6",
                trading_type: "7",
              }, {
                operation_type: "add",
                date: "4",
                currencyEnd: "2",
                currencyStart: "3",
                ingressAmount: "5",
                substractionAmount: "6",
                trading_type: "7",
              }]
            }
            includeSpan
            onClickSpan={() => true}
          />
      </ScreenContainer>
      {/* <ScreenContainer>
        <Menu />
      </ScreenContainer> */}
    </Fragment>
  );
};

export default Country;