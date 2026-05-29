import { Phone, Mail } from "lucide-react"

const CTASection = () => (
  <section className="py-20 bg-[#004225] text-white">
    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Garden?</h2>
      <p className="text-xl mb-8 text-green-100">
        Get a free consultation and let our experts design the perfect landscape for your space
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-[#004225] hover:bg-gray-100 px-8 py-3 text-lg rounded flex items-center justify-center">
          <Phone className="mr-2 h-5 w-5" />
          Call Now
        </button>
        <button className="border border-white text-white hover:bg-white hover:text-[#004225] px-8 py-3 text-lg rounded bg-transparent flex items-center justify-center">
          <Mail className="mr-2 h-5 w-5" />
          Get Quote
        </button>
      </div>
    </div>
  </section>
)

export default CTASection