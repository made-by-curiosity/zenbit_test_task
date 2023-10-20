export const selectIsLoggedIn = state => state.auth.token;

export const selectIsRefreshing = state => state.auth.isRefreshing;
