import LoginService from './login-service';

/* lastfm-service */
interface ResItem {
  artist: {
    name: string;
  };
  name: string;
  playcount: string;
  image: any[];
}

interface DataItem {
  id: string; // mbid есть не у всех
  category: string;
  artist: string;
  title: string;
  price: number;
  playcount: string;
  text: string;
  imageSmall: string;
  imageBig: string;
}

/* login-service */
type Email = string;
type Password = string;

interface LSinstance {
  email: Email;
  password: Password;
  errorMessage: string;

  callLoginApi(email: Email, password: Password): Promise<any>;
}

export { ResItem, DataItem, LSinstance, Email, Password };
