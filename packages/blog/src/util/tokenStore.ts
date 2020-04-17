import Cookies from 'js-cookie';

export const tokenStoreKey = 'staffToken';
export const applicantTokenStoreKey = 'applicantToken';

export const tokenStore = {
  get() {
    return Cookies.get(tokenStoreKey);
  },
  getAsApplicant() {
    return Cookies.get(applicantTokenStoreKey);
  },
  save(token: string) {
    Cookies.set(tokenStoreKey, token, { expires: 1 });
  },
  saveAsApplicant(token: string) {
    Cookies.set(applicantTokenStoreKey, token, { expires: 1 });
  },
  clear() {
    Cookies.remove(tokenStoreKey);
  },
  clearAsApplicant() {
    Cookies.remove(applicantTokenStoreKey);
  },
};
