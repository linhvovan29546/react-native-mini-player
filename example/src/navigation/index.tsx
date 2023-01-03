import { useMemo } from 'react';
import React from 'react';
import HomeNavigator from './homeNav';

const MainNavigation = () => {

  const renderNavigator = useMemo(() => {
    return <HomeNavigator />;
  }, []);
  return renderNavigator;
};

export default MainNavigation;
