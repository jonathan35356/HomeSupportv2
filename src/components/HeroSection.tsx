
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden text-white hero-gradient">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 border-2 rounded-full -translate-x-1/2 -translate-y-1/2 border-white/30"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 border-2 rounded-full translate-x-1/3 translate-y-1/3 border-white/30"></div>
      </div>
      
      {/* Content */}
      <div className="container relative px-4 py-20 mx-auto md:py-28 lg:py-32">
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <div className="max-w-xl animate-slide-up">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Reparación de celulares a domicilio
            </h1>
            <p className="mb-8 text-lg opacity-90 md:text-xl">
              Con HomeSupport, un técnico certificado llega a tu ubicación para reparar tu dispositivo en el momento. Rápido, seguro y con garantía.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="font-medium" asChild>
                <Link to="/request" className="flex items-center">
                  Solicitar servicio
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="font-medium bg-transparent border-white hover:bg-white/10" asChild>
                <Link to="/technicians">Ver técnicos</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md p-4 overflow-hidden bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 shadow-xl animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80" 
                alt="Técnico reparando un celular" 
                className="object-cover w-full rounded-md aspect-[4/3] shadow-lg" 
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">Reparación Profesional</h3>
                    <p className="text-sm opacity-80">Técnicos certificados</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white/20 rounded-md backdrop-blur-sm">
                  <p className="text-sm font-medium">
                    "Repararon mi pantalla en menos de 1 hora y desde la comodidad de mi casa. ¡Excelente servicio!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Star component for the hero section
const Star = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M12 17.75L5.82809 20.995L7.00746 14.122L2.00977 9.25495L8.90789 8.25495L11.9964 2L15.0848 8.25495L21.983 9.25495L16.9853 14.122L18.1647 20.995L12 17.75Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HeroSection;
