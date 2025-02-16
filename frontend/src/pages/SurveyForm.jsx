import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';

const SurveyForm = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    basicInfo: { name: '', dob: '', gender: '', location: '' },
    relationshipPreferences: { lookingFor: [], preferredAgeRange: { min: 18, max: 60 }, preferredLocation: '' },
    personalityInterests: { personalityType: '', favoriteActivities: [], loveLanguage: '' },
    datingPreferences: { smokes: false, drinks: false, longDistanceOk: false, dealbreaker: '' },
  });

  const handleChange = (e, section) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [name]: checked
            ? [...prev[section][name], value]
            : prev[section][name].filter((item) => item !== value),
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [section]: { ...prev[section], [name]: value },
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('token');
      console.log("Token:",token)
      await axios.post('http://localhost:6500/api/survey/submit', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success('Survey submitted successfully!');
      setTimeout(() => {
        navigate("/");  // Redirect after successful signup
    }, 2000); 
    } catch (error) {
      console.error('Error submitting survey:', error);
      toast.error('Failed to submit survey.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <ToastContainer />
        <h1 className="text-2xl font-bold mb-6 text-center">Survey Form</h1>

        {step === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.basicInfo.name}
                onChange={(e) => handleChange(e, 'basicInfo')}
                className="w-full p-2 border rounded"
              />
              <input
                type="date"
                name="dob"
                value={formData.basicInfo.dob}
                onChange={(e) => handleChange(e, 'basicInfo')}
                className="w-full p-2 border rounded"
              />
              <select
                name="gender"
                value={formData.basicInfo.gender}
                onChange={(e) => handleChange(e, 'basicInfo')}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.basicInfo.location}
                onChange={(e) => handleChange(e, 'basicInfo')}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setStep(2)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Relationship Preferences</h2>
            <div className="space-y-4">
              <label className="block">
                What are you looking for on Swember?
              </label>
              {['Serious Relationship', 'Casual Dating', 'Friendship', 'Just Exploring'].map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="checkbox"
                    name="lookingFor"
                    value={option}
                    checked={formData.relationshipPreferences.lookingFor.includes(option)}
                    onChange={(e) => handleChange(e, 'relationshipPreferences')}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
              <label className="block">
                Preferred Partner's Age Range:
              </label>
              <div className="flex space-x-4">
                <input
                  type="number"
                  name="min"
                  placeholder="Min"
                  value={formData.relationshipPreferences.preferredAgeRange.min}
                  onChange={(e) => handleChange(e, 'relationshipPreferences')}
                  className="w-1/2 p-2 border rounded"
                />
                <input
                  type="number"
                  name="max"
                  placeholder="Max"
                  value={formData.relationshipPreferences.preferredAgeRange.max}
                  onChange={(e) => handleChange(e, 'relationshipPreferences')}
                  className="w-1/2 p-2 border rounded"
                />
              </div>
              <label className="block">
                Preferred Partner's Location:
              </label>
              <select
                name="preferredLocation"
                value={formData.relationshipPreferences.preferredLocation}
                onChange={(e) => handleChange(e, 'relationshipPreferences')}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Location</option>
                <option value="Same City">Same City</option>
                <option value="Any Location">Any Location</option>
                <option value="Specific Region">Specific Region</option>
              </select>
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setStep(1)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Personality & Interests</h2>
            <div className="space-y-4">
              <label className="block">
                How do you describe yourself?
              </label>
              <select
                name="personalityType"
                value={formData.personalityInterests.personalityType}
                onChange={(e) => handleChange(e, 'personalityInterests')}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Personality Type</option>
                <option value="Introvert">Introvert</option>
                <option value="Extrovert">Extrovert</option>
                <option value="Ambivert">Ambivert</option>
              </select>
              <label className="block">
                Favorite activities?
              </label>
              {['Traveling', 'Reading', 'Gym/Fitness', 'Gaming', 'Watching Movies', 'Cooking'].map((activity) => (
                <label key={activity} className="flex items-center">
                  <input
                    type="checkbox"
                    name="favoriteActivities"
                    value={activity}
                    checked={formData.personalityInterests.favoriteActivities.includes(activity)}
                    onChange={(e) => handleChange(e, 'personalityInterests')}
                    className="mr-2"
                  />
                  {activity}
                </label>
              ))}
              <label className="block">
                What’s your love language?
              </label>
              <select
                name="loveLanguage"
                value={formData.personalityInterests.loveLanguage}
                onChange={(e) => handleChange(e, 'personalityInterests')}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Love Language</option>
                <option value="Words of Affirmation">Words of Affirmation</option>
                <option value="Physical Touch">Physical Touch</option>
                <option value="Quality Time">Quality Time</option>
                <option value="Acts of Service">Acts of Service</option>
                <option value="Gifts">Gifts</option>
              </select>
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setStep(2)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Back
              </button>
              <button
                onClick={() => setStep(4)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Dating Preferences & Dealbreakers</h2>
            <div className="space-y-4">
              <label className="block">
                Do you smoke?
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="smokes"
                    value={true}
                    checked={formData.datingPreferences.smokes === true}
                    onChange={(e) => handleChange(e, 'datingPreferences')}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="smokes"
                    value={false}
                    checked={formData.datingPreferences.smokes === false}
                    onChange={(e) => handleChange(e, 'datingPreferences')}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
              <label className="block">
                Do you drink alcohol?
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="drinks"
                    value={true}
                    checked={formData.datingPreferences.drinks === true}
                    onChange={(e) => handleChange(e, 'datingPreferences')}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="drinks"
                    value={false}
                    checked={formData.datingPreferences.drinks === false}
                    onChange={(e) => handleChange(e, 'datingPreferences')}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
              <label className="block">
                Are you okay with a long-distance relationship?
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="longDistanceOk"
                    value={true}
                    checked={formData.datingPreferences.longDistanceOk === true}
                    onChange={(e) => handleChange(e, 'datingPreferences')}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="longDistanceOk"
                    value={false}
                    checked={formData.datingPreferences.longDistanceOk === false}
                    onChange={(e) => handleChange(e, 'datingPreferences')}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
              <label className="block">
                What’s your biggest dealbreaker in a relationship?
              </label>
              <input
                type="text"
                name="dealbreaker"
                placeholder="Dealbreaker"
                value={formData.datingPreferences.dealbreaker}
                onChange={(e) => handleChange(e, 'datingPreferences')}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setStep(3)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SurveyForm;