export const links = {
  home: "/",
  goHome: () => "/",
  details: "/restaurant/:restaurantId",
  getDetails: (restaurantId: string) => `/restaurant/${restaurantId}`
};
