import OnboardingForm from '../components/OnboardingForm';
import ProposalViewer from '../components/ProposalViewer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-2">
      <h1 className="text-4xl font-bold mb-8">Proposal Automation</h1>
      <div className="mb-8">
        <OnboardingForm />
      </div>
      <div>
        <ProposalViewer />
      </div>
    </div>
  );
}
