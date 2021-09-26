import React from 'react';
import { useSelector } from 'react-redux';

export const withState = (WrappedComponent) => {
  const hocComponent = (props) => {
    const { list, loading } = useSelector((state) => ({
      list: state.users.list,
      loading: state.users.loading,
    }));

    return <WrappedComponent {...props} list={list} loading={loading} />;
  };

  return hocComponent;
};
