enum APIRoute {
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
  User = 'USER'
}


export {
  APIRoute,
  AppRoute,
  AuthStatus,
  NameSpace,
};
