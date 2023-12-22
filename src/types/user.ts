type TUserData = {
  'email': string;
  'token': TToken;
}

type TToken = string;

type TAuthData = {
  email: string;
  password: string;
}

export type {
  TUserData,
  TAuthData,
};
