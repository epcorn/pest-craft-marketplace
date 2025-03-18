
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container py-12">
      <h1 className="font-heading text-4xl font-bold text-center mb-8">About Us</h1>
      
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="font-heading text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-600 mb-6">Company story content goes here.</p>
        
        <h2 className="font-heading text-2xl font-semibold mb-4">Mission & Vision</h2>
        <p className="text-gray-600">Mission and vision content goes here.</p>
      </div>

      <h2 className="font-heading text-2xl font-semibold text-center mb-8">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="font-heading font-semibold text-xl mb-2">Team Member</h3>
            <p className="text-gray-600">Role</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
