import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';

const OnboardingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    logoUrl: '',
    teamDetails: '',
    testimonials: '',
    projects: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/company', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2 className="text-2xl font-bold mb-4">Company Onboarding</h2>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Company Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="logoUrl" className="block text-sm font-medium text-gray-700">
          Logo URL
        </label>
        <input
          type="text"
          name="logoUrl"
          id="logoUrl"
          value={formData.logoUrl}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="teamDetails" className="block text-sm font-medium text-gray-700">
          Team Details
        </label>
        <textarea
          name="teamDetails"
          id="teamDetails"
          value={formData.teamDetails}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="testimonials" className="block text-sm font-medium text-gray-700">
          Testimonials
        </label>
        <textarea
          name="testimonials"
          id="testimonials"
          value={formData.testimonials}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="projects" className="block text-sm font-medium text-gray-700">
          Projects
        </label>
        <textarea
          name="projects"
          id="projects"
          value={formData.projects}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default OnboardingForm;
