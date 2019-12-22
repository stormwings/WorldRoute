import React, { FunctionComponent, Fragment, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useForm from 'react-hook-form';

import ScreenContainer from './../../containers/ScreenContainer/ScreenContainer';
import HeaderContainer from './../../containers/HeaderContainer/HeaderContainer';
import Menu from './../../smart/Menu/Menu';
import StatusHeader from './../../smart/StatusHeader/StatusHeader';
import CardHeader from './../../dumb/CardHeader/CardHeader';
import Separator from './../../dumb/Separator/Separator';
import Input from './../../dumb/Input/Input';
import Button from './../../dumb/Button/Button';

import { Operation, ResultOperation } from './../../../entities/Operation';
import { Wallet } from './../../../entities/Wallet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWallet, putWallet } from '../../../redux/actions/walletActions';

const TradingBuy: FunctionComponent = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  // initialize operation type
  const { id }: any = useParams();
  let ChargeOperation: Operation = new Operation('trading_buy');
  // form information handler
  // const [newAmount, setAmount] = useState('Your new amount');
  const [error, setError] = useState({ error: false, message: '' });
  // sync with redux information
  const myWallet = useSelector((state: any) => state.wallet);
  // get trading and set
  const trading = myWallet.tradings.find((item: any) => item.id === id);
  let wallet: Wallet = new Wallet({ ...myWallet });
  // get user's wallet from api
  useEffect(() => {
    dispatch(fetchWallet());
  }, []);

  const onSubmit = (values: any) => {
    // create Operation to send to backend
    let result: ResultOperation = ChargeOperation.createOperation(values.amount, values.finalAmount);
    wallet.removeTrading(trading.id);
    const success = wallet.newOperation(result);
    if (success && myWallet.currency.USD >= trading.substractionAmount) {
      setError({ error: false, message: '' });
      dispatch(putWallet({ ...wallet })); // new wallet value
      history.push('/trading/list');
    } else {
      setError({ error: true, message: 'Insufficient funds' });
    }
  };

  return (
    <Fragment>
      <HeaderContainer />
      <StatusHeader cryptoValue={myWallet.currency.BTC} fiatValue={myWallet.currency.USD} />
      <ScreenContainer>
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'contents' }}>
          <CardHeader content={ChargeOperation.title} subtitle={ChargeOperation.subtitle} icon={ChargeOperation.icon} className="header" />
          <Separator className="medium" />
          {trading && (
            <div className="form--container">
              <Input
                name="amount"
                disabled
                defaultValue={trading.substractionAmount}
                labelText="Amount to pay"
                error={error.error}
                autoComplete={false}
                errorText={error.message}
                inputRef={register}
              />
              <Separator className="empty" />
              <Input name="finalAmount" labelText="Your new amount" defaultValue={trading.ingressAmount} disabled inputRef={register} />
            </div>
          )}
          <Separator className="medium" />
          <Button content="Confirm" />
          <Separator />
          <Menu />
        </form>
      </ScreenContainer>
    </Fragment>
  );
};

export default TradingBuy;