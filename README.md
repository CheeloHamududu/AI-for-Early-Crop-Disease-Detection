# CropAI Zambia - Open Source AI for Early Crop Disease Detection

This is a comprehensive web application for AI-powered crop disease detection in Zambia, built with React 18, TypeScript, Vite, and Tailwind CSS.

## Project Overview

CropAI Zambia is an open-source platform that helps Zambian farmers detect crop diseases early using artificial intelligence. The application provides:

- **AI-Powered Disease Detection**: Upload crop images for instant AI analysis
- **Farmer Survey System**: Comprehensive data collection from farming communities
- **User Authentication**: Secure login and registration for farmers
- **Educational Content**: Project journey and agricultural best practices
- **Responsive Design**: Mobile-first design accessible on all devices

## Project Status

- **Project Type**: React + TypeScript Modern Web Application
- **Entry Point**: `src/main.tsx` (React application entry)
- **Build System**: Vite 7.0.0 (Fast development and build)
- **Styling System**: Tailwind CSS 3.4.17 (Atomic CSS framework)
- **Authentication**: Zustand-based state management with localStorage persistence

## Core Features

### 1. Disease Detection System
- Image upload and preview functionality
- Mock AI analysis with realistic disease detection
- Results display with confidence scores and treatment recommendations
- Detection history tracking

### 2. Farmer Survey
- Comprehensive demographic and agricultural data collection
- Multi-step form with validation
- Image upload for training data
- Privacy-focused data handling

### 3. User Management
- Registration with farmer-specific fields (farm size, crops)
- Login system with password visibility toggle
- Persistent authentication using Zustand + localStorage
- User profile management

### 4. Content Pages
- **Home**: Project story, impact statistics, and call-to-action
- **About**: Team information, timeline, and contact details
- **Journey**: Step-by-step project development story

## Technical Architecture

### Directory Structure

```
src/
├── components/          # Reusable UI components
│   └── Navbar.tsx      # Main navigation with auth state
├── pages/              # Page components
│   ├── Home.tsx        # Landing page with project story
│   ├── Login.tsx       # User authentication
│   ├── Register.tsx    # User registration
│   ├── DiseaseDetection.tsx # Main AI detection feature
│   ├── Survey.tsx      # Farmer survey form
│   └── About.tsx       # Project information
├── store/              # State management
│   └── authStore.tsx   # Authentication state with Zustand
├── types/              # TypeScript type definitions
│   └── index.ts        # Core interfaces and types
└── utils/              # Utility functions
```

### State Management
- **Zustand**: Lightweight state management for authentication
- **localStorage**: Persistent user sessions
- **Context API**: React context for auth provider

### Authentication Flow
1. User registers/logs in through dedicated pages
2. Auth state managed in Zustand store with persistence
3. Protected routes check authentication status
4. User data includes farmer-specific information

### Data Models
- **User**: Authentication and profile data
- **SurveyResponse**: Comprehensive farmer survey data
- **DiseaseDetectionResult**: AI analysis results
- **CropDisease**: Disease information and treatments

## Tech Stack

### Core Framework
- **React**: 18.3.1 - Declarative UI library
- **TypeScript**: 5.8.3 - Type-safe JavaScript superset
- **Vite**: 7.0.0 - Next generation frontend build tool
- **Tailwind CSS**: 3.4.17 - Atomic CSS framework

### Routing and State Management
- **React Router DOM**: 6.30.1 - Client-side routing
- **Zustand**: 4.4.7 - Lightweight state management
- **Lucide React**: Beautiful icon library

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Component Architecture**: Reusable, typed components

## Development Commands

- **Install dependencies**: `npm install`
- **Build project**: `npm run build`
- **Development server**: `npm run dev` (if needed for testing)

## Key Implementation Details

### Authentication System
- Mock authentication with email/password validation
- Farmer-specific registration fields (farm size, primary crops)
- Session persistence using localStorage
- Protected route components

### Disease Detection
- Image upload with preview functionality
- Mock AI analysis with realistic delays
- Confidence scoring and treatment recommendations
- Detection history with image thumbnails

### Survey System
- Multi-section form with validation
- File upload for crop images
- Comprehensive data collection including:
  - Demographics and farm information
  - Disease experience and losses
  - Environmental monitoring practices
  - Technology adoption and preferences

### Responsive Design
- Mobile-first responsive layout
- Touch-friendly interface elements
- Optimized for various screen sizes
- Accessible navigation patterns

## Build and Deployment

The project uses Vite build system:
- **Development server**: `http://127.0.0.1:5173`
- **Build output**: `dist/` directory
- **Optimized production build**: Automatic code splitting and optimization

## Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `yw_manifest.json` - Project manifest file

## Security Considerations

- Input validation on all forms
- File upload restrictions (image types only)
- Mock authentication (replace with real backend in production)
- Privacy-focused data handling for survey responses

## Future Enhancements

- Integration with real AI/ML backend
- Database integration for survey data
- Real farmer data from Zambian agricultural sources
- Advanced analytics and reporting
- Mobile app development
- Offline functionality for rural areas

## Contributing

This is an open-source project designed to serve Zambian farming communities. When contributing:

1. Maintain the mobile-first responsive design
2. Follow TypeScript best practices
3. Ensure accessibility standards
4. Test on various devices and screen sizes
5. Keep the farmer user experience as the primary focus

## License

This project is open-source and freely available to all Zambian farmers and agricultural stakeholders.
