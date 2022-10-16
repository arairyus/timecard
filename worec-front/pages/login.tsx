import { GoogleLogin } from "../components/auth";
import { useRouter } from "next/router";

export default function top() {
  return (
    <div>
      <h1>ログイン</h1>
      <GoogleLogin />
    </div>
  );
}
