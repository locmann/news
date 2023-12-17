import React from 'react';
import { Description, ItemWrapper, Preview, Title } from '@components/NewsItem/styled.ts';
import { NewsType } from '../../types/types.ts';

const NewsItem: React.FC<NewsType> = ({ data }) => {
  return (
    <ItemWrapper>
      <Title>{data.title}</Title>
      <Preview src={data.image_url} />

      <Description>{data.description}</Description>
    </ItemWrapper>
  );
};

export { NewsItem };
