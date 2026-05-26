import { HeroSection } from "./components/HeroSection";
import { ProblemSolutionSection } from "./components/ProblemSolutionSection";
import { PlayfulStatementSection } from "./components/PlayfulStatementSection";
import { EbooksSection } from "./components/EbooksSection";
import { BookCoversShowcase } from "./components/BookCoversShowcase";
import { BundleSection } from "./components/BundleSection";
import { WorkflowComparisonSection } from "./components/WorkflowComparisonSection";
import { BeforeAfterSection } from "./components/BeforeAfterSection";
import { PresentationImpactSection } from "./components/PresentationImpactSection";
import { CreatedByArchitectsSection } from "./components/CreatedByArchitectsSection";
import { WhoThisIsForSection } from "./components/WhoThisIsForSection";
import { FAQSection } from "./components/FAQSection";
import { FinalCTASection } from "./components/FinalCTASection";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#1a1a1a]">
      <HeroSection />
      <ProblemSolutionSection />
      <PlayfulStatementSection />
      <EbooksSection />
      <BookCoversShowcase />
      <BundleSection />
      <WorkflowComparisonSection />
      <BeforeAfterSection />
      <PresentationImpactSection />
      <CreatedByArchitectsSection />
      <WhoThisIsForSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}