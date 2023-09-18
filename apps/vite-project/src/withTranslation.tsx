import React, { useEffect } from 'react';
import { dynamicActivate, defaultLocale } from './i18n';

const withTranslations = (WrappedComponent:React.FC, componentName:string) => {
  return (props:any) => {
    useEffect(() => {
      dynamicActivate(defaultLocale, componentName);
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withTranslations;
