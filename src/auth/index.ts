import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

export const LoginProviders = { Github: "github", Google: "google" } as const;
export type LoginProvider = typeof LoginProviders[keyof typeof LoginProviders];

export const isAuth = () => !!getAuth();

export const googleSignIn = async () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider).catch((error) => {
    // TODO Error handle
    console.error(error);
  });

  return !!result;
};

export const githubSignIn = async () => {
  const auth = getAuth();
  const provider = new GithubAuthProvider();

  const result = await signInWithPopup(auth, provider).catch((error) => {
    // TODO Error handle
    console.error(error);
  });

  return !!result;
};

export const signOut = () => {
  const auth = getAuth();
  if (!auth) return;
  return auth.signOut();
};
