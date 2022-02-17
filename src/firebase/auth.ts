import { FirebaseApp } from "firebase/app";
import {
  Auth,
  User,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

export class AuthService {
  private _auth: Auth;

  constructor(app: FirebaseApp) {
    this._auth = getAuth(app);
  }

  waitForUser(callback: (user: User | null) => void): void {
    onAuthStateChanged(this._auth, (user) => {
      console.info(user);
      callback(user);
    });
  }

  googleSignIn() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this._auth, provider);
  }

  githubSignIn() {
    const provider = new GithubAuthProvider();
    return signInWithPopup(this._auth, provider);
  }

  signOut() {
    return this._auth.signOut();
  }
}
