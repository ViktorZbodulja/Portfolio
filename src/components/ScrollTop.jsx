import React from 'react';
import { useEffect } from 'react';
//detects when we change url
import { useLocation } from 'react-router-dom';

function ScrollTop() {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scroll({
        top: 0,
        left: 0
    })
  }, [pathname]);
}

export default ScrollTop