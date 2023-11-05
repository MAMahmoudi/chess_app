import LeftBar from "../components/LeftBar";
import Board from "../components/Board";
import "./Page.css";
import "./globals.css";

export default function Page() {
  return (
    <div className="main">
      <LeftBar />
      <Board />
    </div>
  );
}
