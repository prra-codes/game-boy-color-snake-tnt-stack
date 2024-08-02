import GameBoyColor from "@/components/GameBoyColor/GameBoyColor";
import WebsiteInfo from "@/components/WebsiteInfo/WebsiteInfo";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-grey ">
      <div>
        <GameBoyColor />
      </div>
      <div>
        <WebsiteInfo />
      </div>
    </div>
  );
}
