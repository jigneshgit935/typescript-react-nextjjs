import React from 'react';

type ItemProps<T> = {
  id: number;
  title: string;
  extra: T[];
};

const Item = (props: ItemProps<object>) => {
  return <div></div>;
};

export default Item;
