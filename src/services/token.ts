const AUTH_TOKEN_KEY_NAME = 'escape-room-token';

type TToken = string;

function saveToken(token: TToken) {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
}

function getToken() {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
}

function dropToken() {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
}

export {
  getToken,
  saveToken,
  dropToken,
};
