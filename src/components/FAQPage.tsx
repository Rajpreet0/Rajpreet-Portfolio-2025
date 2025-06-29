import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  return (
    <div className='min-h-[80vh] w-full flex flex-col items-center justify-center px-4 py-12 md:py-32'>
      <div className='w-full max-w-2xl text-center mb-8 md:mb-24'>
        <p className='text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight'>
          Have <br className="hidden sm:block" /> Questions?
        </p>
      </div>

      <div className='w-full max-w-2xl'>
        <Accordion
          type='single'
          collapsible
          className='w-full'
          defaultValue='item-1'
        >
          <AccordionItem value='item-1'>
            <AccordionTrigger>01. What is your current role?</AccordionTrigger>
            <AccordionContent className='flex flex-col gap-4 text-balance text-gray-300'>
              <p>
                I am currently an Enterprise Architect at Commerzbank while also serving as the CEO of Since3, where I lead projects focused on high-performance web products and scalable digital architectures.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>02. How much does it cost for a high-performing website?</AccordionTrigger>
            <AccordionContent className='flex flex-col gap-4 text-balance text-gray-300'>
              <p>
               It depends on your project's scope and needs. If you're interested in a performant, well-designed website, give me a call, and we can discuss a fair, transparent budget for your specific case.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>03. How long will the work take from start to finish?</AccordionTrigger>
            <AccordionContent className='flex flex-col gap-4 text-balance text-gray-300'>
              <p>
                It also depends on complexity, but as an example:
                   <li className='ml-6'>A landing page with animations and CMS can take around 3 weeks.</li>
                     <li className='ml-6'>A full portfolio or business website with custom components and API integrations may take 4–6 weeks including design, development, testing, and deployment.</li>
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger>04. Are you available to join full-time?</AccordionTrigger>
            <AccordionContent className='flex flex-col gap-4 text-balance text-gray-300'>
              <p>
               Yes, I am open to full-time opportunities, provided the conditions are good and aligned with projects that are impactful, innovative, and focused on user value.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQPage;
