import React, { FunctionComponent, Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useForm from 'react-hook-form';

import { saveProfile, getProfile } from '../../redux/actions/authActions';
import ScreenContainer from '../dumb/ScreenContainer/ScreenContainer';
import HeaderContainer from '../dumb/HeaderContainer/HeaderContainer';
import Separator from '../dumb/Separator/Separator';
import Input from '../dumb/Input/Input';
import Button from '../dumb/Button/Button';
import CardHeader from '../dumb/CardHeader/CardHeader';
import StatusHeader from '../smart/StatusHeader/StatusHeader';
import Menu from '../smart/Menu/Menu';
import IconProfile from './../../assets/svg/name.svg';

const User: FunctionComponent = () => {
  const dispatch = useDispatch();

  const { auth } = useSelector((state: any) => state);
  const { register, handleSubmit } = useForm();
  const { profile } = auth;

  useEffect(() => {
    dispatch(getProfile(auth.user_id));
  }, []);

  const onSubmit = (values: object) => {
    dispatch(saveProfile(values, auth.user_id));
  };

  return (
    <Fragment>
      <HeaderContainer />
      <StatusHeader  />
      <ScreenContainer>
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'contents' }}>
          <CardHeader content="Settings" subtitle="Personal Information" icon={IconProfile} className="header" />
          <Separator className="medium" />
          <div className="form--container">
            <Input
              id="user_input_name"
              name="name"
              labelText="Full name"
              defaultValue={profile && profile.name}
              inputRef={register} 
              required
            />
          </div>
          <Separator className="medium" />
          <div className="form--container">
            <Input
              id="user_input_phone"
              name="phone"
              labelText="Phone number"
              defaultValue={profile && profile.phone}
              inputRef={register} 
              required
            />
            <Separator className="empty" />
            <Input
              id="user_input_location"
              name="location"
              labelText="Country, Province"
              defaultValue={profile && profile.location}
              inputRef={register} 
              required
            />
            <Separator className="empty" />
            <Input
              id="user_input_address"
              name="address"
              labelText="Your address"
              defaultValue={profile && profile.address}
              inputRef={register} 
              required
            />
          </div>
          <Separator className="medium" />
          <Button className="--primary" content="Save" onClick={() => console.log('click')} />
          <Separator className="medium" />
          <Menu />
        </form>
      </ScreenContainer>
    </Fragment>
  );
};

export default User;
