import React from 'react';

const TestimonialsSection = () => {
const testimonials = [
  {
    text: "I love the service of Krishna Plant & Group. They have done my front yard gardening and it looks so beautiful. Mr. Gaurav has good knowledge of plants and they also give tips to taking care of plants. The plants they sale are low maintenance plants and this makes us tension free. Thanks for the great service Gaurav.",
    name: "Anita Chauhan",
    rating: 5
  },
  {
    text: "We have hust shifted to our new house we were searching for a company for vertical garden for a long time we found Krishna Plant & Group. On google we got its number and got a vertical garden made by them.This vertical garden looked very beautiful. I and his team are a very experienced team and they have designed a very beautiful vertical garden and we I am very happy.Thank you Mr. Gaurav.Thank you for creating such a beautiful Vertical Garden.",
    name: "Abhishek Shrivastav", 
    rating: 5
  },
  {
    text: "I have recently shifted to Gulshan Dynasty on the 31st floor.As a consulting onconutritionist I needed a place to be totally at peace n in sync with the nature -- the plants by Krishna Plant & Group have been nurtured with lot of love n care n hv a very special vibrancy. Gaurav team have very lovingly brought lot of positive vibes to my space n am deeply grateful for the same.Thank you Mr. Gaurav.Thank you for creating such a beautiful Vertical Garden.",
    name: "Archana Agarwal",
    rating: 5
  },
  {
    text: "I recently visited Krishna Plant & Group, and I was thoroughly impressed with their wide selection of plants and exceptional customer service. Whether you're looking for indoor plants, outdoor varieties, or even rare species, they have it all. The staff is very knowledgeable and gave me great advice on how to care for my new plants.",
    name: "Ashish Kumar",
    rating: 5
  },
  {
    text: "I recently visited Krishna Plant & Group, and I must say, I was thoroughly impressed. This place offers an excellent variety of artificial plants that look incredibly realistic, making them perfect for those who want greenery without the maintenance. For those interested in real plants, their selection of indoor and outdoor varieties is extensive.",
    name: "Sonam Jain",
    rating: 5
  },
  {
    text: "Best service of Krishna Plant & Group. They have done my house gardening and it looks so beautifully. Mr. Gaurav has good knowledge of plants and they also give tips to taking care of plant. The plants they sale are low maintenance plants and this make us tension free. Thanks for that great service Gaurav.",
    name: "Aniket Kumar",
    rating: 5
  },
  // new testimonials
  {
    text: "Krishna Plant & Group transformed my balcony into a lush green paradise. I never thought such a small space could look so refreshing and peaceful. Their design sense and plant quality are outstanding. Highly recommend them to everyone looking to beautify their home.",
    name: "Ritika Sharma",
    rating: 5
  },
  {
    text: "We hired Krishna Plant & Group for our office garden setup. The entire team was professional, creative, and delivered on time. Our employees love the greenery around, and it has completely uplifted the work environment.",
    name: "Rajeev Mehta",
    rating: 5
  },
  {
    text: "Superb experience with Krishna Plant & Group! They not only helped me choose the right plants but also guided me on placement according to vastu and sunlight. Their after-service support is also commendable. Very happy with the results.",
    name: "Pooja Verma",
    rating: 5
  }
];


    

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background with Green Section */}
      <div className="absolute inset-0">
        {/* Top Green Section */}
        <div className="absolute top-0 left-0 w-full h-full bg-white">
          {/* Floating Elements */}

          {/* Geometric Patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>
        
        {/* Bottom White Section */}
        
        {/* Curved Transition */}
        <div className="absolute top-2/3 left-0 w-full h-32 -mt-16">
          <svg className="w-full h-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64L80,74.7C160,85,320,107,480,112C640,117,800,107,960,90.7C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header with Enhanced Styling */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-[#004225] text-sm font-medium rounded-full border border-white/30">
              ✨ What Our Customers Say
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-[#004225] mb-6 leading-tight">
            Testimonials
            <span className="block text-3xl md:text-4xl font-light text-[#004225] mt-2">
              that speak volumes
            </span>
          </h2>
       
        </div>

        {/* Enhanced Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-white backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:transform hover:scale-105 hover:-rotate-1 border border-gray-100"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#004225]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              
              {/* Category Badge with Enhanced Styling */}
            

              {/* Star Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Quote Icon */}
              <div className="mb-4">
                <svg className="w-8 h-8 text-[#004225]/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Testimonial Text with Better Typography */}
              <p className="text-gray-700 text-base leading-relaxed mb-8 font-medium">
                "{testimonial.text}"
              </p>

              {/* Enhanced Author Info */}
              <div className="flex items-center">
               
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-base mb-1">
                    {testimonial.name}
                  </h4>
             
                </div>
                {/* Verified Badge */}
                
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
       
      </div>

      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;