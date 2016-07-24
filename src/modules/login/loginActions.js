export const FB_LOGIN = 'FB_LOGIN';
export const FB_LOGOUT = 'FB_LOGOUT';

const fbLoginPromise = new Promise((resolve, reject) =>
  FB.login((response) => response.status === 'connected' ? resolve(response) : reject(response))
);

const fbLogoutPromise = new Promise((resolve, reject) => {
  try {
    //FB.logout();
    resolve();
  } catch (e) {
    console.log(e);
    reject(e);
  }
}
);

export const fbLogin = () => ({
  type: FB_LOGIN,
  payload: fbLoginPromise
});

export const fbLogout = () => ({
  type: FB_LOGOUT,
  payload: fbLogoutPromise
});
