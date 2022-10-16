import { parseISO, format } from "date-fns";
import ja from "date-fns/locale/ja";
import { GoogleLogout } from "../components/auth";

export default function top() {
  const now = new Date();
  const date = format(now, "yyyy年MM月dd日 (EEE)", { locale: ja });
  const time = format(now, "HH:mm", { locale: ja });
  return (
    <div>
      <h1>打刻ページ</h1>
      <div>
        <div id="date">
          <h2>{date}</h2>
          <h1>{time}</h1>
        </div>
        <div id="stamp">
          <button>
            <h3>出勤</h3>
          </button>
          <button>
            <h3>休憩</h3>
          </button>
          <button>
            <h3>戻り</h3>
          </button>
          <button>
            <h3>退勤</h3>
          </button>
        </div>
      </div>
      <GoogleLogout />
    </div>
  );
}
