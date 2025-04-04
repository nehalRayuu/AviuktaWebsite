import { TestName, TestVariation } from '../context/ABTestContext';

// Interface for variation data
export interface VariationData {
  views: number;
  conversions: number;
  conversionRate: number;
}

// Interface for test results
export interface TestResult {
  testName: TestName;
  variations: {
    A: VariationData;
    B: VariationData;
  };
  winner?: TestVariation;
  confidence?: number;
}

// Type for the results storage
export type TestResultsStorage = Partial<Record<TestName, TestResult>>;

// Mock storage for test results (in real app, you'd use a database)
const TEST_RESULTS_KEY = 'ab_test_results';

// Load test results from localStorage
export const loadTestResults = (): TestResultsStorage => {
  try {
    const storedResults = localStorage.getItem(TEST_RESULTS_KEY);
    return storedResults ? JSON.parse(storedResults) : {};
  } catch (e) {
    console.error('Error loading A/B test results', e);
    return {};
  }
};

// Save test results to localStorage
export const saveTestResults = (results: TestResultsStorage): void => {
  localStorage.setItem(TEST_RESULTS_KEY, JSON.stringify(results));
};

// Track a view for a variation
export const trackView = (testName: TestName, variation: TestVariation): TestResult => {
  const results = loadTestResults();
  
  if (!results[testName]) {
    results[testName] = {
      testName,
      variations: {
        A: { views: 0, conversions: 0, conversionRate: 0 },
        B: { views: 0, conversions: 0, conversionRate: 0 }
      }
    };
  }
  
  // We now know for sure that testName exists in the results
  const testResult = results[testName]!;
  
  // Increment views for this variation
  testResult.variations[variation].views += 1;
  
  // Recalculate conversion rate
  const variationData = testResult.variations[variation];
  variationData.conversionRate = variationData.conversions / variationData.views;
  
  // Calculate winner if enough data
  calculateTestWinner(testResult);
  
  // Save updated results
  saveTestResults(results);
  
  return testResult;
};

// Track a conversion for a variation
export const trackConversion = (testName: TestName, variation: TestVariation): TestResult | undefined => {
  const results = loadTestResults();
  
  if (!results[testName]) {
    // If we don't have a record for this test yet, track a view first
    return trackView(testName, variation);
  }
  
  // We now know for sure that testName exists in the results
  const testResult = results[testName]!;
  
  // Increment conversions for this variation
  testResult.variations[variation].conversions += 1;
  
  // Recalculate conversion rate
  const variationData = testResult.variations[variation];
  variationData.conversionRate = variationData.conversions / variationData.views;
  
  // Calculate winner if enough data
  calculateTestWinner(testResult);
  
  // Save updated results
  saveTestResults(results);
  
  return testResult;
};

// Calculate if there's a statistically significant winner
// This is a simplified version, real-world implementations would use more robust statistical methods
const calculateTestWinner = (testResult: TestResult): void => {
  const { A, B } = testResult.variations;
  
  // Need minimum sample size
  if (A.views < 100 || B.views < 100) {
    testResult.winner = undefined;
    testResult.confidence = undefined;
    return;
  }
  
  // Simple relative improvement calculation
  const improvement = (B.conversionRate - A.conversionRate) / A.conversionRate;
  
  // Simple confidence calculation (this is not statistically robust but serves as a placeholder)
  // In real implementation, you would use a proper statistical significance test
  let confidence = 0;
  
  if (Math.abs(improvement) > 0.1) {  // More than 10% difference
    confidence = Math.min(Math.abs(improvement) * 100, 99);
  }
  
  if (confidence > 95) {
    testResult.winner = B.conversionRate > A.conversionRate ? 'B' : 'A';
    testResult.confidence = confidence;
  } else {
    testResult.winner = undefined;
    testResult.confidence = confidence;
  }
};