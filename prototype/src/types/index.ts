export interface SurveyResponse {
  id: string;
  userId: string;
  demographics: {
    age: string;
    experience: string;
    farmSize: string;
    primaryCrops: string[];
  };
  diseaseExperience: {
    commonDiseases: string[];
    yieldLoss: string;
    identificationMethod: string;
  };
  environmental: {
    soilMonitoring: string;
    weatherTracking: string;
  };
  technology: {
    hasSmartphone: boolean;
    cameraComfort: string;
    desiredFeatures: string[];
  };
  images: string[];
  submittedAt: Date;
}

export interface DiseaseDetectionResult {
  id: string;
  userId: string;
  imageUrl: string;
  disease: string;
  confidence: number;
  recommendations: string[];
  detectedAt: Date;
}

export interface CropDisease {
  name: string;
  description: string;
  symptoms: string[];
  treatment: string[];
  prevention: string[];
  image: string;
}