import axios from "axios";

const baseUrl = "https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants";

export type Restaurant = {
  id: string;
  name: string;
  image: string;
  logo: string;
  description: string;
  telephone: string;
  price_range: string;
  payment_methods: string;
  website: string;
  opening_hours: string;
};

type RestaurantsResponse = {
  data: Restaurant[];
};

type RestaurantResponse = {
  data: Restaurant;
};

export const getRestaurants = async (searchTerm?: string) => {
  try {
    const endpoint =
      searchTerm && searchTerm !== ""
        ? `${baseUrl}?page=1&limit=10&search=${searchTerm}`
        : `${baseUrl}?page=1&limit=10`;

    const response = await axios.get<RestaurantsResponse>(endpoint);

    return response.data;
  } catch (error) {}
};

export const getRestaurant = async (restaurantId: string) => {
  try {
    const endpoint = `${baseUrl}/${restaurantId}`;

    const response = await axios.get<RestaurantResponse>(endpoint);

    return response.data;
  } catch (error) {}
};
