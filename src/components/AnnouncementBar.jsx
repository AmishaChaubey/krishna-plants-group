"use client"

export default function AnnouncementBar() {
  return (
    <div className="bg-[#004225] text-white py-2 px-4 text-center text-sm overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="mx-4">
          Free shipping on orders above ₹199 except seeds
        </span>
        <span className="mx-4">
          Free shipping on orders above ₹199 except seeds
        </span>
        <span className="mx-4">
          Free shipping on orders above ₹199 except seeds
        </span>
        <span className="mx-4">
          Free shipping on orders above ₹199 except seeds
        </span>
        <span className="mx-4">
          Free shipping on orders above ₹199 except seeds
        </span>
        <span className="mx-4">
          Free shipping on orders above ₹199 except seeds
        </span>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  )
}