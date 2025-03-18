
import { ArrowRight, Shield, Zap, Award, ArrowDownRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
                Request a Demo
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
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Key Features</h2>
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

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="relative">
                <div className="absolute -right-4 top-0 md:hidden">
                  <ArrowDownRight className="h-8 w-8 text-primary" />
                </div>
                <div className="p-6 rounded-lg border bg-white">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4">
                    {step}
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">Step {step}</h3>
                  <p className="text-gray-600">Description of step {step} goes here...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">What Our Customers Say</h2>
          <Carousel>
            <CarouselContent>
              {[1, 2, 3].map((testimonial) => (
                <CarouselItem key={testimonial} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-6 rounded-lg border">
                    <p className="text-gray-600 mb-4">"Testimonial text goes here..."</p>
                    <div className="font-semibold">Customer Name</div>
                    <div className="text-sm text-gray-500">Company</div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join the growing number of professionals using our advanced pest control solutions.
          </p>
          <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90">
            Request a Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
