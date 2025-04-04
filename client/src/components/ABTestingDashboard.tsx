import React from 'react';
import { useABTest } from '../context/ABTestContext';
import { TestName, TestVariation } from '../context/ABTestContext';
import { TestResult, VariationData } from '../lib/abTesting';

const ABTestingDashboard: React.FC = () => {
  const { getTestResults } = useABTest();

  // Get results for all tests
  const heroHeadlineResults = getTestResults('heroHeadline');
  const ctaButtonResults = getTestResults('ctaButton');
  const serviceLayoutResults = getTestResults('serviceLayout');

  // Function to render a result card for each test
  const renderTestCard = (testName: TestName, results: TestResult | undefined) => {
    if (!results) {
      return (
        <div className="bg-gray-900 rounded-lg p-6 border border-purple-600 border-opacity-20">
          <h3 className="text-xl font-bold mb-4">{formatTestName(testName)}</h3>
          <p className="text-gray-300">No data available yet. Interact with the site to generate test data.</p>
        </div>
      );
    }

    const { variations, winner, confidence } = results;

    return (
      <div className="bg-gray-900 rounded-lg p-6 border border-purple-600 border-opacity-20">
        <h3 className="text-xl font-bold mb-4">{formatTestName(testName)}</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className={`p-4 rounded-lg border ${winner === 'A' ? 'border-green-500 bg-green-900 bg-opacity-20' : 'border-gray-700'}`}>
            <h4 className="font-bold mb-2">Variation A</h4>
            {renderVariationStats(variations.A)}
          </div>
          <div className={`p-4 rounded-lg border ${winner === 'B' ? 'border-green-500 bg-green-900 bg-opacity-20' : 'border-gray-700'}`}>
            <h4 className="font-bold mb-2">Variation B</h4>
            {renderVariationStats(variations.B)}
          </div>
        </div>
        
        {winner && (
          <div className="mt-4 p-3 bg-purple-600 bg-opacity-20 rounded-lg">
            <p className="font-bold">
              Winner: Variation {winner} 
              {confidence && <span className="ml-2 text-sm">({confidence.toFixed(1)}% confidence)</span>}
            </p>
          </div>
        )}
        
        {!winner && variations.A.views > 0 && variations.B.views > 0 && (
          <div className="mt-4 p-3 bg-gray-800 rounded-lg">
            <p className="text-sm text-gray-300">
              Not enough data to determine a winner yet. Continue testing.
            </p>
          </div>
        )}
      </div>
    );
  };

  // Format test name for display
  const formatTestName = (testName: TestName): string => {
    switch (testName) {
      case 'heroHeadline':
        return 'Hero Headline Test';
      case 'ctaButton':
        return 'Call-to-Action Button Test';
      case 'serviceLayout':
        return 'Services Layout Test';
      default:
        return testName;
    }
  };

  // Render statistics for a variation
  const renderVariationStats = (data: VariationData) => {
    return (
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-400">Views:</span>
          <span>{data.views}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Conversions:</span>
          <span>{data.conversions}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Conversion Rate:</span>
          <span>{(data.conversionRate * 100).toFixed(2)}%</span>
        </div>
      </div>
    );
  };

  return (
    <section id="ab-testing" className="py-20 relative overflow-hidden">
      <div className="gradient-bg absolute inset-0 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            A/B Testing <span className="text-purple-600">Results</span>
          </h2>
          <p className="text-gray-300 mb-8">
            Real-time analytics from our A/B testing experiments. This dashboard shows how different variations perform in terms of user engagement.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderTestCard('heroHeadline', heroHeadlineResults)}
          {renderTestCard('ctaButton', ctaButtonResults)}
          {renderTestCard('serviceLayout', serviceLayoutResults)}
        </div>
        
        <div className="mt-16 bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-lg p-6 border border-purple-600 border-opacity-20">
          <h3 className="text-xl font-bold mb-4">How This Works</h3>
          <p className="text-gray-300 mb-4">
            Our A/B testing system randomly assigns users to different variations of key elements across the site.
            We then track which variations lead to higher engagement and conversion rates.
          </p>
          <div className="space-y-4 text-gray-300">
            <div>
              <h4 className="font-bold text-purple-600">Hero Headline Test</h4>
              <p className="text-sm">Testing different headline messaging to see which resonates best with visitors.</p>
            </div>
            <div>
              <h4 className="font-bold text-purple-600">Call-to-Action Button Test</h4>
              <p className="text-sm">Comparing button styles and copy to optimize click-through rates.</p>
            </div>
            <div>
              <h4 className="font-bold text-purple-600">Services Layout Test</h4>
              <p className="text-sm">Evaluating different service card layouts to determine which design increases engagement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ABTestingDashboard;