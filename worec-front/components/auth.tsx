//import { NextUIProvider } from "@nextui-org/react";
import { auth, provider } from "../firebase/clientApp";
import { signInWithPopup, getRedirectResult } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [provider.providerId],
};

export function GoogleLogin() {
  const router = useRouter();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(async (result) => {
      const user = result.user;
      router.push("top");
    });
  };

  return (
    <button onClick={signInWithGoogle}>
      <p>グーグルでサインイン</p>
    </button>
  );
}

export function GoogleLogout() {
  const router = useRouter();
  const signOut = () => {
    auth.signOut();
    router.push("/login");
  };
  return (
    <button onClick={signOut}>
      <p>サインアウト</p>
    </button>
  );
}

//意図しない画面遷移
