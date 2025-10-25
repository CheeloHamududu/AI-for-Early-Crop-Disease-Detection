import { useState } from 'react';
import { FileText, Upload, CheckCircle, AlertCircle, Send, X } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import type { SurveyResponse } from '../types';

const Survey = () => {
  const { user, isAuthenticated } = useAuthStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    // Demographics
    age: '',
    experience: '',
    farmSize: '',
    primaryCrops: [] as string[],
    
    // Disease Experience
    commonDiseases: [] as string[],
    yieldLoss: '',
    identificationMethod: '',
    
    // Environmental
    soilMonitoring: '',
    weatherTracking: '',
    
    // Technology
    hasSmartphone: false,
    cameraComfort: '',
    desiredFeatures: [] as string[]
  });

  const ageOptions = ['18-25', '26-35', '36-45', '46-55', '56+'];
  const experienceOptions = ['< 2 years', '2-5 years', '5-10 years', '10-20 years', '> 20 years'];
  const farmSizeOptions = ['< 1 hectare', '1-5 hectares', '5-10 hectares', '10-50 hectares', '> 50 hectares'];
  const cropOptions = ['Maize', 'Tomatoes', 'Cabbage', 'Onions', 'Potatoes', 'Beans', 'Sorghum', 'Millet', 'Groundnuts'];
  const diseaseOptions = ['Maize Streak Virus', 'Early Blight', 'Leaf Rust', 'Powdery Mildew', 'Bacterial Wilt', 'Root Rot'];
  const yieldLossOptions = ['< 10%', '10-25%', '25-50%', '50-75%', '> 75%'];
  const identificationOptions = ['Visual inspection', 'Extension officer', 'Laboratory testing', 'Mobile apps', 'Community knowledge'];
  const monitoringOptions = ['Yes, regularly', 'Occasionally', 'Rarely', 'Never'];
  const comfortOptions = ['Very comfortable', 'Comfortable', 'Somewhat comfortable', 'Not comfortable'];
  const featureOptions = ['Disease identification', 'Treatment recommendations', 'Weather alerts', 'Soil analysis', 'Market prices', 'Farming tips'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleMultiSelect = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field as keyof typeof formData].includes(value)
        ? (prev[field as keyof typeof formData] as string[]).filter(item => item !== value)
        : [...(prev[field as keyof typeof formData] as string[]), value]
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (event) => {
          setUploadedImages(prev => [...prev, event.target?.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Store survey response (in real app, this would go to backend)
    const surveyResponse: SurveyResponse = {
      id: Math.random().toString(36).substr(2, 9),
      userId: user?.id || 'anonymous',
      demographics: {
        age: formData.age,
        experience: formData.experience,
        farmSize: formData.farmSize,
        primaryCrops: formData.primaryCrops
      },
      diseaseExperience: {
        commonDiseases: formData.commonDiseases,
        yieldLoss: formData.yieldLoss,
        identificationMethod: formData.identificationMethod
      },
      environmental: {
        soilMonitoring: formData.soilMonitoring,
        weatherTracking: formData.weatherTracking
      },
      technology: {
        hasSmartphone: formData.hasSmartphone,
        cameraComfort: formData.cameraComfort,
        desiredFeatures: formData.desiredFeatures
      },
      images: uploadedImages,
      submittedAt: new Date()
    };

    console.log('Survey submitted:', surveyResponse);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <div className="text-center max-w-md mx-auto px-4">
          <FileText className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Authentication Required</h2>
          <p className="text-gray-600 mb-6">Please sign in to participate in the farmer survey</p>
          <a href="/login" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
            Sign In to Continue
          </a>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <div className="text-center max-w-md mx-auto px-4">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-6">Your survey response has been submitted successfully. Your input will help us improve the CropAI Zambia platform.</p>
          <a href="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Farmer Survey</h1>
          <p className="text-gray-600">Help us build better tools for Zambian farmers</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Demographics Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">About You & Your Farm</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Age Group</label>
                <select
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Select age group</option>
                  {ageOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Farming Experience</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Select experience</option>
                  {experienceOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Farm Size</label>
                <select
                  name="farmSize"
                  value={formData.farmSize}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Select farm size</option>
                  {farmSizeOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Primary Crops</label>
                <div className="space-y-2 max-h-32 overflow-y-auto border border-gray-200 rounded-md p-3">
                  {cropOptions.map(crop => (
                    <label key={crop} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.primaryCrops.includes(crop)}
                        onChange={() => handleMultiSelect('primaryCrops', crop)}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700">{crop}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Disease Experience Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Disease Experience</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Common Diseases Faced</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {diseaseOptions.map(disease => (
                    <label key={disease} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.commonDiseases.includes(disease)}
                        onChange={() => handleMultiSelect('commonDiseases', disease)}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700">{disease}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Typical Yield Loss</label>
                  <select
                    name="yieldLoss"
                    value={formData.yieldLoss}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select yield loss</option>
                    {yieldLossOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Disease Identification Method</label>
                  <select
                    name="identificationMethod"
                    value={formData.identificationMethod}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select method</option>
                    {identificationOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Environmental Monitoring Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Environmental Monitoring</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Do you monitor soil conditions?</label>
                <select
                  name="soilMonitoring"
                  value={formData.soilMonitoring}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select option</option>
                  {monitoringOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Do you track weather patterns?</label>
                <select
                  name="weatherTracking"
                  value={formData.weatherTracking}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select option</option>
                  {monitoringOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Technology Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Technology Adoption</h2>
            
            <div className="space-y-6">
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="hasSmartphone"
                    checked={formData.hasSmartphone}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <span className="text-sm font-medium text-gray-700">I own a smartphone</span>
                </label>
              </div>

              {formData.hasSmartphone && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">How comfortable are you using phone camera features?</label>
                    <select
                      name="cameraComfort"
                      value={formData.cameraComfort}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select comfort level</option>
                      {comfortOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">What features would you like in a farming app?</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {featureOptions.map(feature => (
                        <label key={feature} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={formData.desiredFeatures.includes(feature)}
                            onChange={() => handleMultiSelect('desiredFeatures', feature)}
                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                          />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Image Upload Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Crop Images (Optional)</h2>
            <p className="text-sm text-gray-600 mb-4">Share images of your crops to help train our AI model</p>
            
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 cursor-pointer"
                >
                  Upload Images
                </label>
              </div>

              {uploadedImages.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {uploadedImages.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Submit Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start space-x-2">
              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-900">Privacy Notice</h4>
                <p className="text-sm text-blue-800 mt-1">
                  Your survey responses will be used to improve the CropAI Zambia platform. Personal information will be kept confidential and will not be shared with third parties.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Submit Survey
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Survey;