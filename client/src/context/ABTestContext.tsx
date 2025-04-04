import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { trackView, trackConversion, TestResult } from '../lib/abTesting';

// Define the types of tests we'll be running
export type TestName = 'heroHeadline' | 'ctaButton' | 'serviceLayout';
export type TestVariation = 'A' | 'B';

// Map to store variations for each test
type TestVariations = Record<TestName, TestVariation>;

// Context interface
interface ABTestContextType {
  getVariation: (testName: TestName) => TestVariation;
  recordConversion: (testName: TestName) => void;
  variations: TestVariations;
  getTestResults: (testName: TestName) => TestResult | undefined;
}

// Create the context
const ABTestContext = createContext<ABTestContextType | undefined>(undefined);

// Experiment configuration
const EXPERIMENTS: Record<TestName, { weight: number }> = {
  heroHeadline: { weight: 0.5 }, // 50% A, 50% B
  ctaButton: { weight: 0.5 },    // 50% A, 50% B
  serviceLayout: { weight: 0.5 } // 50% A, 50% B
};

// Provider props
interface ABTestProviderProps {
  children: ReactNode;
}

// Storage key for variations
const VARIATIONS_KEY = 'ab_test_variations';

export const ABTestProvider: React.FC<ABTestProviderProps> = ({ children }) => {
  // Initialize variations state
  const [variations, setVariations] = useState<TestVariations>(() => {
    // Try to get variations from localStorage
    const storedVariations = localStorage.getItem(VARIATIONS_KEY);
    if (storedVariations) {
      try {
        return JSON.parse(storedVariations);
      } catch (e) {
        console.error('Error parsing stored A/B test variations', e);
      }
    }
    
    // Initialize with random assignments
    const initialVariations: Partial<TestVariations> = {};
    
    Object.entries(EXPERIMENTS).forEach(([testName, config]) => {
      initialVariations[testName as TestName] = Math.random() < config.weight ? 'B' : 'A';
    });
    
    return initialVariations as TestVariations;
  });

  // Save variations to localStorage
  useEffect(() => {
    localStorage.setItem(VARIATIONS_KEY, JSON.stringify(variations));
  }, [variations]);

  // Track page view for each variation when they are first assigned
  useEffect(() => {
    Object.entries(variations).forEach(([testName, variation]) => {
      console.log(`A/B Test [${testName}]: User is seeing variation ${variation}`);
      
      // Track the view in our analytics system
      trackView(testName as TestName, variation);
    });
  }, [variations]);

  // Get variation for a specific test
  const getVariation = (testName: TestName): TestVariation => {
    return variations[testName];
  };

  // Record a conversion for a specific test
  const recordConversion = (testName: TestName) => {
    const variation = variations[testName];
    console.log(`A/B Test [${testName}]: Conversion recorded for variation ${variation}`);
    
    // Track the conversion in our analytics system
    trackConversion(testName, variation);
  };

  // Get test results for a specific test
  const getTestResults = (testName: TestName): TestResult | undefined => {
    try {
      const storedResults = localStorage.getItem('ab_test_results');
      if (!storedResults) return undefined;
      
      const results = JSON.parse(storedResults);
      return results[testName];
    } catch (e) {
      console.error('Error retrieving test results', e);
      return undefined;
    }
  };

  // Value to be provided by the context
  const value = {
    getVariation,
    recordConversion,
    variations,
    getTestResults
  };

  return (
    <ABTestContext.Provider value={value}>
      {children}
    </ABTestContext.Provider>
  );
};

// Custom hook to use the A/B test context
export const useABTest = () => {
  const context = useContext(ABTestContext);
  if (context === undefined) {
    throw new Error('useABTest must be used within an ABTestProvider');
  }
  return context;
};

// Utility component for conditional rendering based on test variations
interface ABTestComponentProps {
  testName: TestName;
  renderA: () => React.ReactNode;
  renderB: () => React.ReactNode;
}

export const ABTestComponent: React.FC<ABTestComponentProps> = ({ 
  testName, 
  renderA, 
  renderB 
}) => {
  const { getVariation } = useABTest();
  const variation = getVariation(testName);
  
  return <>{variation === 'A' ? renderA() : renderB()}</>;
};