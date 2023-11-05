import "./LeftBar.css";
import ToolBar from "./ToolBar";
import Game_Monitor from "./Game_Monitor";

export default function LeftBar() {
  return (
    <div className="LeftBar">
      <ToolBar />
      <Game_Monitor />
    </div>
  );
}
