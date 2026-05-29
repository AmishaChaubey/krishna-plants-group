import React, { useEffect, useRef, useState } from 'react';
import Abhishek from '../../public/img1.PNG';
import ImageBG from '../../public/background.png';

const SixthComp = () => {
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.15, rootMargin: '-30px 0px' }
        );
        if (componentRef.current) observer.observe(componentRef.current);
        return () => {
            if (componentRef.current) observer.unobserve(componentRef.current);
        };
    }, []);

    return (
        <section
            ref={componentRef}
            className="sm:py-[8vw] py-[14vw] overflow-hidden"
        >
            {/* ───────────── DESKTOP ───────────── */}
            <div className="hidden sm:block px-[6.458vw]">

                {/* Section label */}
                <div
                    className={`flex items-center gap-[1vw] mb-[3vw] ml-[0.5vw] transition-all duration-700 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                    style={{ transitionDelay: '0.1s' }}
                >
                    <span className="block w-[3vw] h-[0.15vw] bg-[#6b8c5a]" />
                    <span className="text-[#6b8c5a] text-[0.9vw] font-semibold uppercase tracking-[0.2em]">
                        Our Story
                    </span>
                </div>

                {/* Heading */}
                <h2
                    className={`text-[#1e2a16] text-[3.8vw] font-extrabold leading-tight mb-[4vw] transition-all duration-800 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: '0.2s', letterSpacing: '-0.02em' }}
                >
                    Meet The <span className="text-[#6b8c5a]">Founder</span>
                </h2>

                {/* Card */}
                <div
                    className={`relative flex rounded-[2vw] overflow-hidden bg-[#1e2a16] shadow-2xl transition-all duration-1000 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: '0.3s', minHeight: '38vw' }}
                >
                    {/* Left – image fills full height, never cropped */}
                    <div
                        className={`relative flex-shrink-0 w-[36%] transition-all duration-1100 ease-out ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                        }`}
                        style={{ transitionDelay: '0.45s' }}
                    >
                        <img
                            src={Abhishek}
                            alt="Mr. Saurabh Singh – Founder"
                            className="w-full h-full object-contain object-top"
                            style={{ display: 'block' }}
                        />
                        {/* Gradient overlay on the right edge to blend into dark bg */}
                        <div
                            className="absolute inset-y-0 right-0 w-[6vw]"
                            style={{
                                background: 'linear-gradient(to right, transparent, #1e2a16)',
                            }}
                        />
                    </div>

                    {/* Right – text content */}
                    <div className="flex-1 flex flex-col justify-center px-[4vw] py-[3.5vw]">

                        {/* Decorative quote mark */}
                        <span
                            className="text-[#6b8c5a] text-[6vw] leading-none mb-[1vw] select-none"
                            style={{ fontFamily: "'Georgia', serif", opacity: 0.35 }}
                        >
                            "
                        </span>

                        {/* Name + badge */}
                        <div
                            className={`flex items-center gap-[1vw] mb-[1.8vw] transition-all duration-900 ease-out ${
                                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                            }`}
                            style={{ transitionDelay: '0.55s' }}
                        >
                            <div>
                                <p className="text-white text-[1.9vw] font-bold leading-none" style={{ fontFamily: "'Georgia', serif" }}>
                                    Mr. Saurabh Singh
                                </p>
                                <p className="text-[#6b8c5a] text-[0.85vw] font-semibold uppercase tracking-widest mt-[0.3vw]">
                                    Founder &amp; Director · 18+ Years Experience
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-[3vw] h-[0.2vw] bg-[#6b8c5a] mb-[1.8vw] rounded-full" />

                        {/* Paragraphs */}
                        {[
                            'Mr. Saurabh Singh founded Krishna Plant & Group House driven by a passion for sustainability and a lifelong commitment to enriching the environment. With over 18 years of expertise, he believes plants are essential to a balanced life — purifying the air, uplifting moods, and creating tranquility in today\'s fast-paced world.',
                            'Through a diverse range of plants, tailored gardening solutions, and expert guidance, Krishna Plant & Group House makes greenery accessible to every home. Every plant is hand-selected for health and quality, paired with the knowledge needed to help it thrive.',
                            'Whether you\'re an experienced gardener or just beginning your green journey, our team is here to help you find the perfect plant for your space and lifestyle.',
                        ].map((text, i) => (
                            <p
                                key={i}
                                className={`text-[#b8c9a8] text-[1.1vw] font-normal leading-relaxed mb-[1.2vw] transition-all duration-900 ease-out ${
                                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                                }`}
                                style={{ transitionDelay: `${0.65 + i * 0.15}s` }}
                            >
                                {text}
                            </p>
                        ))}

                        {/* Stats row */}
                        <div
                            className={`flex gap-[3vw] mt-[1.5vw] transition-all duration-900 ease-out ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                            }`}
                            style={{ transitionDelay: '1.1s' }}
                        >
                            {[
                                { value: '18+', label: 'Years Experience' },
                                { value: '480+', label: 'Projects' },
                                { value: '1500+', label: 'Happy Clients' },
                            ].map((stat) => (
                                <div key={stat.label} className="flex flex-col">
                                    <span className="text-[#6b8c5a] text-[2vw] font-extrabold leading-none" style={{ fontFamily: "'Georgia', serif" }}>
                                        {stat.value}
                                    </span>
                                    <span className="text-[#7a9068] text-[0.75vw] uppercase tracking-widest mt-[0.3vw]">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Decorative leaf pattern (top-right corner) */}
                    <div
                        className="absolute top-0 right-0 w-[12vw] h-[12vw] pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle at top right, rgba(107,140,90,0.18) 0%, transparent 70%)',
                        }}
                    />
                </div>
            </div>

            {/* ───────────── MOBILE ───────────── */}
            <div className="block sm:hidden px-[5vw]">

                {/* Label */}
                <div
                    className={`flex items-center gap-[2.5vw] mb-[4vw] transition-all duration-700 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                    style={{ transitionDelay: '0.1s' }}
                >
                    <span className="block w-[8vw] h-[0.4vw] bg-[#6b8c5a] rounded-full" />
                    <span className="text-[#6b8c5a] text-[3vw] font-semibold uppercase tracking-widest">
                        Our Story
                    </span>
                </div>

                {/* Heading */}
                <h2
                    className={`text-[#1e2a16] text-[8.5vw] font-extrabold leading-tight mb-[6vw] transition-all duration-800 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: '0.2s', fontFamily: "'Georgia', serif" }}
                >
                    Meet The <span className="text-[#6b8c5a]">Founder</span>
                </h2>

                {/* Image – full width, proper aspect ratio, never cropped */}
                <div
                    className={`w-full rounded-[5vw] overflow-hidden mb-[6vw] transition-all duration-1000 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                    }`}
                    style={{ transitionDelay: '0.35s' }}
                >
                    <img
                        src={Abhishek}
                        alt="Mr. Saurabh Singh – Founder"
                        className="w-full h-auto object-contain object-top"
                        style={{ display: 'block' }}
                    />
                </div>

                {/* Dark card for text */}
                <div className="bg-[#1e2a16] rounded-[5vw] px-[6vw] py-[7vw]">

                    {/* Name */}
                    <div
                        className={`mb-[4vw] transition-all duration-800 ease-out ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                        style={{ transitionDelay: '0.5s' }}
                    >
                        <p className="text-white text-[5.5vw] font-bold" style={{ fontFamily: "'Georgia', serif" }}>
                            Mr. Saurabh Singh
                        </p>
                        <p className="text-[#6b8c5a] text-[3vw] font-semibold uppercase tracking-widest mt-[1vw]">
                            Founder &amp; Director · 18+ Years
                        </p>
                    </div>

                    <div className="w-[10vw] h-[0.5vw] bg-[#6b8c5a] rounded-full mb-[5vw]" />

                    {/* Paragraphs */}
                    {[
                        'Mr. Saurabh Singh founded Krishna Plant & Group House with a passion for sustainability and a commitment to enriching the environment. Plants purify air, uplift moods, and create tranquility in today\'s fast-paced world.',
                        'Through our wide variety of plants, gardening solutions, and expert guidance, we make greenery accessible to all — with healthy, high-quality plants and the knowledge to nurture them.',
                        'Whether you\'re a seasoned gardener or just starting out, our team helps you find the perfect plant for your lifestyle.',
                    ].map((text, i) => (
                        <p
                            key={i}
                            className={`text-[#b8c9a8] text-[3.8vw] leading-relaxed mb-[4vw] transition-all duration-800 ease-out ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                            }`}
                            style={{ transitionDelay: `${0.6 + i * 0.15}s` }}
                        >
                            {text}
                        </p>
                    ))}

                    {/* Stats */}
                    <div
                        className={`flex justify-between mt-[2vw] transition-all duration-800 ease-out ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                        style={{ transitionDelay: '1.05s' }}
                    >
                        {[
                            { value: '18+', label: 'Years Exp.' },
                            { value: '5K+', label: 'Plants' },
                            { value: '100%', label: 'Quality' },
                        ].map((stat) => (
                            <div key={stat.label} className="flex flex-col items-center">
                                <span className="text-[#6b8c5a] text-[7vw] font-extrabold leading-none" style={{ fontFamily: "'Georgia', serif" }}>
                                    {stat.value}
                                </span>
                                <span className="text-[#7a9068] text-[2.8vw] uppercase tracking-wider mt-[1vw]">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SixthComp;