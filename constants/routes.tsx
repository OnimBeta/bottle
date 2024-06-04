export const routes = {
  home: '/',
  settings: '/settings',
  profile: '/profile',
  rating: '/rating',
  shop: '/shop',
  game: (tableID: number): string => `/game/${tableID}` ,
}