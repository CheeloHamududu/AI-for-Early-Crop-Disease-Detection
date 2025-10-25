import { useState, useRef } from 'react';
import { Camera, Upload, AlertCircle, CheckCircle, Leaf, Loader2, X } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import type { DiseaseDetectionResult, CropDisease } from '../types';

const DiseaseDetection = () => {
  const { user, isAuthenticated } = useAuthStore();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<DiseaseDetectionResult | null>(null);
  const [history, setHistory] = useState<DiseaseDetectionResult[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const mockDiseases: CropDisease[] = [
    {
      name: "Maize Streak Virus",
      description: "A viral disease that causes streaks on maize leaves",
      symptoms: ["Yellow-white streaks on leaves", "Stunted growth", "Reduced yield"],
      treatment: ["Remove infected plants", "Control insect vectors", "Use resistant varieties"],
      prevention: ["Plant resistant varieties", "Control leafhopper insects", "Crop rotation"],
      image: "/images/maize-streak.jpg"
    },
    {
      name: "Early Blight",
      description: "A fungal disease affecting tomatoes and potatoes",
      symptoms: ["Dark spots on leaves", "Yellowing around spots", "Leaf drop"],
      treatment: ["Apply fungicides", "Remove infected leaves", "Improve air circulation"],
      prevention: ["Crop rotation", "Proper spacing", "Resistant varieties"],
      image: "/images/early-blight.jpg"
    },
    {
      name: "Leaf Rust",
      description: "A fungal disease causing rust-colored spots on leaves",
      symptoms: ["Orange-brown pustules", "Yellowing leaves", "Premature leaf drop"],
      treatment: ["Apply fungicides", "Remove infected plant parts", "Improve nutrition"],
      prevention: ["Resistant varieties", "Proper irrigation", "Monitor humidity"],
      image: "/images/leaf-rust.jpg"
    }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Mock detection result
    const randomDisease = mockDiseases[Math.floor(Math.random() * mockDiseases.length)];
    const detectionResult: DiseaseDetectionResult = {
      id: Math.random().toString(36).substr(2, 9),
      userId: user?.id || 'anonymous',
      imageUrl: selectedImage,
      disease: randomDisease.name,
      confidence: 0.85 + Math.random() * 0.14,
      recommendations: randomDisease.treatment,
      detectedAt: new Date()
    };

    setResult(detectionResult);
    setHistory(prev => [detectionResult, ...prev.slice(0, 4)]);
    setIsAnalyzing(false);
  };

  const clearImage = () => {
    setSelectedImage(null);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <div className="text-center max-w-md mx-auto px-4">
          <Leaf className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Authentication Required</h2>
          <p className="text-gray-600 mb-6">Please sign in to access the disease detection feature</p>
          <a href="/login" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
            Sign In to Continue
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Crop Disease Detection</h1>
          <p className="text-gray-600">Upload an image of your crop for instant AI-powered disease analysis</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload Crop Image</h2>
            
            {!selectedImage ? (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Take a photo or upload an image of your crop</p>
                
                <div className="space-y-3">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 cursor-pointer"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Choose Image
                  </label>
                </div>
                
                <p className="text-xs text-gray-500 mt-4">Supported formats: JPG, PNG, WebP (Max 10MB)</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative">
                  <img
                    src={selectedImage}
                    alt="Selected crop"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <button
                    onClick={clearImage}
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                
                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Analyzing Image...
                    </>
                  ) : (
                    'Analyze for Diseases'
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Analysis Results</h2>
            
            {isAnalyzing && (
              <div className="text-center py-8">
                <Loader2 className="h-12 w-12 text-green-600 mx-auto mb-4 animate-spin" />
                <p className="text-gray-600">AI is analyzing your crop image...</p>
                <p className="text-sm text-gray-500 mt-2">This may take a few moments</p>
              </div>
            )}
            
            {result && !isAnalyzing && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-gray-900">Analysis Complete</span>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-900 mb-2">Detected Disease</h3>
                  <p className="text-green-800">{result.disease}</p>
                  <p className="text-sm text-green-700 mt-1">
                    Confidence: {(result.confidence * 100).toFixed(1)}%
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Recommended Actions</h4>
                  <ul className="space-y-1">
                    {result.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span className="text-sm text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-900">Important Note</h4>
                      <p className="text-sm text-yellow-800 mt-1">
                        This AI analysis is for guidance only. Consult with agricultural extension officers for confirmed diagnosis and treatment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {!result && !isAnalyzing && (
              <div className="text-center py-8 text-gray-500">
                <Leaf className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p>Upload an image to see analysis results</p>
              </div>
            )}
          </div>
        </div>

        {/* History Section */}
        {history.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Detections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {history.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                  <img
                    src={item.imageUrl}
                    alt={item.disease}
                    className="w-full h-32 object-cover rounded mb-3"
                  />
                  <h4 className="font-medium text-gray-900">{item.disease}</h4>
                  <p className="text-sm text-gray-600">
                    {(item.confidence * 100).toFixed(1)}% confidence
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(item.detectedAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiseaseDetection;