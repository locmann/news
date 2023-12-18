import { useGetTopNewsQuery } from '@api/newsApi.ts';
import { NewsItem } from '@components/NewsItem';

const Main = () => {
  const { data, error, isLoading } = useGetTopNewsQuery('');
  console.log(data, error, isLoading);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      {data ? (
        data.map((m, i) => (
          <NewsItem
            key={i}
            data={m}
          />
        ))
      ) : (
        <p>error</p>
      )}
    </div>
  );
};

export { Main };
