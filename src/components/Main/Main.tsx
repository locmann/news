import { useGetTopNewsQuery } from '@api/newsApi.ts';
import { NewsItem } from '@components/NewsItem';

const Main = () => {
  const { data, error, isLoading } = useGetTopNewsQuery('');
  console.log(data, error, isLoading);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      Main page
      <NewsItem data={data.data[0]} />
    </div>
  );
};

export { Main };
