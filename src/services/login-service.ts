import { LSinstance } from './types';

export default class LoginService implements LSinstance {
  email = 'admin@example.com';
  password = 'admin';
  errorMessage = 'Invalid email and password';

  callLoginApi = (email: string, password: string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === this.email && password === this.password) {
          resolve();
        } else {
          reject(new Error(this.errorMessage));
        }
      }, 1000);
    });
  };
}

// const callLoginApi = (email, password, callback) => {
//   setTimeout(() => {
//     if (email === 'admin@example.com' && password === 'admin') {
//       return callback(null);
//     } else {
//       return callback(new Error('Invalid email and password'));
//     }
//   }, 1000);
// };

// export default callLoginApi;
