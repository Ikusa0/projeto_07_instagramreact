import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import MobileFooter from "./MobileFooter";

export default function Body() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <Stories />
        <Posts />
      </div>
      <Sidebar />
      <MobileFooter />
    </div>
  );
}
