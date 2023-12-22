enum APIRoute {
  Login = '/v1/escape-room/login',
  Logout = '/v1/escape-room/logout',
  MyQuests= '/v1/escape-room/reservation',
  Quests = '/v1/escape-room/quest',
}

enum AppRoute {
  Booking = '/booking',
  Contacts = '/contacts',
  Login = '/login',
  Main = '/',
  MyQuests = '/my-quests',
  Quest = '/quest',
  NotFound = '*'
}

enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

enum NameSpace {
  App = 'APP',
  Cards = 'CARDS',
  MyQuests = 'MY_QUESTS',
  User = 'USER'
}

enum LoadingDataStatus {
  Unsent = 'UNSENT',
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Error = 'ERROR',
}


export {
  APIRoute,
  AppRoute,
  AuthStatus,
  NameSpace,
  LoadingDataStatus,
};
