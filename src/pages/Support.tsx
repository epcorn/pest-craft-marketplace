
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const Support = () => {
  return (
    <div className="container py-12">
      <h1 className="font-heading text-4xl font-bold text-center mb-8">Support</h1>
      
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="font-heading text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I get started?</AccordionTrigger>
            <AccordionContent>
              Answer goes here.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl font-semibold mb-6">Contact Support</h2>
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
          <textarea
            placeholder="Message"
            className="w-full p-2 border rounded h-32"
          />
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </div>
  );
};

export default Support;
