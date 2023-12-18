import React from 'react';
import { Description, ItemWrapper, Preview, Title } from '@components/NewsItem/styled.ts';
import { NewsType } from '../../types/types.ts';

type PropsType = {
  data: NewsType;
};

const NewsItem: React.FC<PropsType> = (props) => {
  return (
    <ItemWrapper>
      <Title>{props.data.title}</Title>
      <Preview src={props.data.image_url} />

      <Description>{props.data.description}</Description>
    </ItemWrapper>
  );
};

export { NewsItem };
