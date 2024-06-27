import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';

const ProposalViewer = () => {
  const [companyId, setCompanyId] = useState('');
  const [proposal, setProposal] = useState({ executiveSummary: '', pricingSection: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyId(e.target.value);
  };

  const handleGenerateProposal = async () => {
    try {
      const response = await axios.post('/api/proposal', { companyId });
      setProposal(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.proposalContainer}>
      <h2 className="text-2xl font-bold mb-4">Generate Proposal</h2>
      <div>
        <label htmlFor="companyId" className="block text-sm font-medium text-gray-700">
          Company ID
        </label>
        <input
          type="text"
          name="companyId"
          id="companyId"
          value={companyId}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
        />
      </div>
      <button
        onClick={handleGenerateProposal}
        className="mt-4 bg-green-600 text-white hover:bg-green-700"
      >
        Generate Proposal
      </button>
      {proposal.executiveSummary && (
        <div className="mt-8">
          <h3 className={styles.proposalTitle}>Proposal</h3>
          <div className={styles.proposalContent}>
            <h4 className="text-md font-medium text-gray-700">Executive Summary:</h4>
            <p>{proposal.executiveSummary}</p>
          </div>
          <div className={styles.proposalContent}>
            <h4 className="text-md font-medium text-gray-700">Pricing Section:</h4>
            <p>{proposal.pricingSection}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProposalViewer;
