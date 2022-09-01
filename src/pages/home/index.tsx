import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { getRestaurants, Restaurant } from "../../api";
import Header from "../../components/Header";
import List from "../../components/List";
import Search from "../../components/Search";
import useDebounce from "../../hooks/use-debounce";

const initialData = {
  searchTerm: "",
  loading: false,
  data: [] as Restaurant[]
};

type Data = typeof initialData;

export default function Home() {
  const [data, setData] = useState<Data>(initialData);
  const debouncedValue = useDebounce<string>(data.searchTerm, 500);

  const fetchData = useCallback(async () => {
    const response = await getRestaurants(debouncedValue);
    const data = response?.data ?? [];

    setData((prev) => ({ ...prev, data, loading: false }));
  }, [debouncedValue]);

  const onSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, searchTerm: event.target.value, loading: true }));
  }, []);

  useEffect(() => void fetchData(), [fetchData]);

  return (
    <div className="flex flex-col">
      <Header />
      <Search onSearch={onSearch} />
      <List data={data.data} searchTerm={debouncedValue} loading={data.loading} />
    </div>
  );
}
