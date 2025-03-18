
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="container py-12">
      <h1 className="font-heading text-4xl font-bold text-center mb-8">Contact Us</h1>
      
      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Message"
            className="w-full p-2 border rounded h-32"
          />
          <Button type="submit">Send Message</Button>
        </form>

        <div>
          <div className="h-64 bg-gray-200 mb-4 rounded">
            Map placeholder
          </div>
          <div className="space-y-2">
            <p>123 Street Name, City, Country</p>
            <p>Email: contact@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
