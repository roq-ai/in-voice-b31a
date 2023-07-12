const mapping: Record<string, string> = {
  businesses: 'business',
  invoices: 'invoice',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
