
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Products = () => {
  return (
    <div className="container py-12">
      <h1 className="font-heading text-4xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for product grid */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-heading font-semibold text-xl mb-2">Product Name</h3>
            <p className="text-gray-600 mb-4">Product description goes here.</p>
            <Button>Learn More</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Products;
