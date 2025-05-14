
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, MapPin, Clock, CreditCard, CheckCircle } from 'lucide-react';

const ServiceSteps: React.FC = () => {
  const steps = [
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Describe el problema",
      description: "Explícanos qué le sucede a tu dispositivo y qué tipo de reparación necesitas."
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Comparte tu ubicación",
      description: "Indica dónde te encuentras para localizar al técnico más cercano disponible."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Espera al técnico",
      description: "El técnico llegará a tu ubicación en el tiempo estimado para realizar la reparación."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Verifica y paga",
      description: "Prueba tu dispositivo reparado y realiza el pago directamente en la aplicación."
    }
  ];

  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center">¿Cómo funciona?</h2>
        <p className="max-w-2xl mx-auto mb-12 text-center text-muted-foreground">
          En simples pasos, obtén el servicio de reparación que necesitas sin salir de casa
        </p>
        
        <div className="flex flex-wrap justify-center">
          <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {/* Connecting line (visible on large screens only) */}
            <div className="absolute hidden w-4/5 h-0.5 bg-primary/30 top-16 left-1/2 -translate-x-1/2 lg:block z-0"></div>
            
            {steps.map((step, index) => (
              <div key={index} className="relative z-10" data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="relative transition-all hover:shadow-lg border-primary/20">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10">
                      {step.icon}
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 mx-auto -mt-20 mb-12 text-sm font-bold rounded-full text-white bg-primary">
                      {index + 1}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSteps;
