import { useCallback, useEffect, useState } from "react";
import Loading from "react-loading";
import { useParams } from "react-router";
import { getRestaurant, Restaurant } from "../../api";
import Container from "../../components/Container";
import Body from "./Body";
import Header from "./Header";

export default function Details() {
  const params = useParams<{ restaurantId: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const response = await getRestaurant(params.restaurantId!);
    const data = response?.data ?? ({} as Restaurant);

    setRestaurant(data);
    setLoading(false);
  }, [params.restaurantId]);

  useEffect(() => void fetchData(), [fetchData]);

  return (
    <Container title={`eatery - ${restaurant?.name ?? "details"}`}>
      {loading ? (
        <div data-testid="loading" className="flex w-full h-[100vh] justify-center items-center">
          <Loading type="spin" width="4%" color="#DD4F50" />
        </div>
      ) : (
        <div className="flex flex-col w-full">
          <Header restaurant={restaurant ?? ({} as Restaurant)} />
          <Body restaurant={restaurant ?? ({} as Restaurant)} />
        </div>
      )}
    </Container>
  );
}
