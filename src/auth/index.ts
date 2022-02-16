import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

export const googleSignIn = async () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const result = await signInWithPopup(auth, provider).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.error(errorCode, errorMessage, email, credential);
  });

  if (result) {
    console.info(result.user.displayName);
  }

  return !!result;
};

export const githubSignIn = async () => {
  const auth = getAuth();
  const provider = new GithubAuthProvider();

  const result = await signInWithPopup(auth, provider).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GithubAuthProvider.credentialFromError(error);
    console.error(errorCode, errorMessage, email, credential);
  });

  if (result) {
    console.info(result);
    console.info(result.user.displayName);
  }

  return result;
};
