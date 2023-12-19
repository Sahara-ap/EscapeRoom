enum AppRoute {
  Booking = '/booking',
  Contacts = '/contacts',
  Login = '/login',
  Main = '/',
  MyQuests = '/my-quests',
  Quest = '/quest',
  NotFound = '/404'
}

enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export {
  AppRoute,
  AuthStatus,
};
