
import { ArrowRight, Shield, Zap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="animate-fade-up">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-secondary mb-6">
              Advanced Pest Control <br />
              <span className="text-primary">Technology</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Professional-grade pest detection and control solutions for modern pest management challenges.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="group">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Why Choose Our Products?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Advanced Protection",
                description: "State-of-the-art technology for comprehensive pest control coverage"
              },
              {
                icon: Zap,
                title: "Fast Detection",
                description: "Quick and accurate pest detection with modern sensors"
              },
              {
                icon: Award,
                title: "Professional Grade",
                description: "Industry-leading quality trusted by professionals worldwide"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
