import { Flower2, TreePalm, Sprout, Flower,Building2,Landmark  } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const services = [
  {
    title: "Landscape Design",
    icon: <TreePalm className="h-8 w-8 text-white" />,
    description:
      "Custom garden layouts that bring peace and beauty to your space.",
  },
  {
    title: "Plant Installation",
    icon: <Sprout className="h-8 w-8 text-white" />,
    description:
      "Expertly installed plants to elevate your home's environment.",
  },
  {
    title: "Pvt Horticulture Project",
    icon: <Building2 className="h-8 w-8 text-white" />,
    description:
      "Professional private horticulture projects for villas, farms, resorts, and commercial spaces.",
  },
  {
    title: "Government Horticulture Tender",
    icon: <Landmark className="h-8 w-8 text-white" />,
    description:
      "Execution of government horticulture tenders with quality landscaping and plantation services.",
  },
];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState([])
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target)
            if (index !== -1) {
              setVisibleCards(prev => [...new Set([...prev, index])])
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) cardObserver.observe(ref)
    })

    return () => cardObserver.disconnect()
  }, [])

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-20 bg-[#f3f4f6]"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 
          className={`text-3xl font-bold text-[#004225] mb-6 transition-all duration-700 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-8'
          }`}
        >
          Our Services
        </h2>
        <p 
          className={`text-gray-600 mb-12 transition-all duration-700 delay-200 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-8'
          }`}
        >
          We offer a range of services to help you build and maintain a vibrant garden space.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={el => cardRefs.current[index] = el}
              className={`bg-white rounded-lg shadow-md p-6 transition-all duration-700 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div 
                className={`bg-[#004225] rounded-full p-3 inline-block mb-4 transition-all duration-500 ${
                  visibleCards.includes(index)
                    ? 'opacity-100 scale-100 rotate-0'
                    : 'opacity-0 scale-50 -rotate-180'
                }`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
              >
                {service.icon}
              </div>
              <h3 
                className={`text-lg font-semibold text-[#004225] mb-2 transition-all duration-500 ${
                  visibleCards.includes(index)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
              >
                {service.title}
              </h3>
              <p 
                className={`text-gray-600 transition-all duration-500 ${
                  visibleCards.includes(index)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-4'
                }`}
                style={{ transitionDelay: `${index * 150 + 500}ms` }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection