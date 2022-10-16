//import dynamic from "next/dynamic";
import { GoogleLogin, GoogleLogout } from "../components/auth";
//const GoogleLogin = dynamic(() => import("../components/auth"), {
//  ssr: false,
//});
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/clientApp";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function RouteGuard() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      user ? router.push("login") : router.push("top");
    }

    return () => {
      isMounted = false;
    };
  });
}
