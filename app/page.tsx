import ChallengePage from "./pages/ChallengePage";
import EmpoweringPage from "./pages/EmpoweringPage";
import Header from "./components/Header";
import TitlePage from "./pages/TitlePage";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <div className="w-full mb-[26px]">
        <Header />
      </div>
      <div className="w-full">
        <TitlePage />
      </div>
      <ChallengePage />
      <EmpoweringPage />
      <div className="h-96">.</div>
    </div>
  );
}
