"use client";

import ChallengePage from "./pages/ChallengePage";
import EmpoweringPage from "./pages/EmpoweringPage";
import Header from "./components/Header";
import OrganizationPage from "./pages/OrganizationPage";
import ReviewsPage from "./pages/ReviewsPage";
import TitlePage from "./pages/TitlePage";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <div className="mb-[26px]">
        <Header />
      </div>
      <div>
        <TitlePage />
      </div>
      <ChallengePage />
      <EmpoweringPage />
      <div className="w-[93%] my-[97px] mx-auto">
        <OrganizationPage />
      </div>
      <ReviewsPage />
      <div className="mt-[108px] mb-12">
        <Footer />
      </div>
    </div>
  );
}
