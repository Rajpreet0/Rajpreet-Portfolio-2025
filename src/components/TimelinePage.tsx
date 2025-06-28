import React from 'react'
import AnimatedContent from './blocks/Animations/AnimatedContent/AnimatedContent';

const timelineItems = [
  {
    title: 'Informatik B.Sc',
    date: '2022-2025 / Frankfurt University of Applied Sciences',
    align: 'right',
  },
  {
    title: 'Software Developer',
    date: '2022-2024 / FAIR Darmstadt',
    align: 'left',
  },
  {
    title: 'IT Management',
    date: '2024-2025 / Marsh McLennan',
    align: 'right',
  },
  {
    title: 'Enterprise Architect',
    date: '2025-Today / Commerzbank AG',
    align: 'left',
  },
  {
    title: 'CEO',
    date: '2025-Today / Since3',
    align: 'right',
  },
];

const TimelinePage = () => {
  return (
    <AnimatedContent
        distance={400}
        direction="vertical"
        reverse={false}
        duration={2}
        ease="power3.out"
        initialOpacity={0.0}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
    >
         <div className="relative min-h-screen w-full flex items-center justify-center  px-4 py-12">

        {/* Vertical Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-12 bottom-12 w-0.5 bg-white rounded"></div>
        <div className="block md:hidden absolute right-6 top-12 bottom-12 w-0.5 bg-white rounded"></div>

        <div className="flex flex-col space-y-12 w-full max-w-4xl">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-3 items-center w-full gap-4"
            >
              {/* Left Text */}
              {item.align === 'left' ? (
                <div className="text-left md:text-right text-white pl-4 md:pl-0">
                  <h3 className="text-lg md:text-3xl font-semibold">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-300 break-words max-w-[250px] md:max-w-none">
                    {item.date}
                  </p>
                </div>
              ) : (
                <div className="hidden md:block"></div>
              )}

              {/* Circle */}
              <div className="flex justify-end md:justify-center pr-4 md:pr-0  ">
                <div className="hidden w-6 h-6 rounded-full border-2 border-white bg-white/35 z-10 md:block"></div>
              </div>

              {/* Right Text */}
              {item.align === 'right' ? (
                <div className="text-left text-white pl-4 md:pl-0">
                  <h3 className="text-lg md:text-3xl font-semibold">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-300 break-words max-w-[250px] md:max-w-none">
                    {item.date}
                  </p>
                </div>
              ) : (
                <div className="hidden md:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </AnimatedContent>
  );
};




export default TimelinePage