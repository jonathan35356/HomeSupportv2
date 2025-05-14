
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Carlos Rodríguez",
      avatar: "CR",
      role: "Cliente",
      content: "El técnico llegó en menos de 30 minutos y solucionó el problema de mi pantalla rota rápidamente. Excelente servicio y atención.",
      rating: 5
    },
    {
      name: "Ana María Gómez",
      avatar: "AG",
      role: "Cliente",
      content: "Me encanta poder ver el perfil del técnico antes de que llegue a mi casa. Me da mucha confianza. La aplicación es muy intuitiva.",
      rating: 5
    },
    {
      name: "Fernando López",
      avatar: "FL",
      role: "Cliente",
      content: "El sistema de pago es muy seguro y práctico. Además, la garantía que ofrecen me da tranquilidad. Lo recomendaré a mis amigos.",
      rating: 4
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center">Lo que dicen nuestros clientes</h2>
        <p className="max-w-2xl mx-auto mb-12 text-center text-muted-foreground">
          Descubre por qué miles de personas confían en HomeSupport para la reparación de sus dispositivos
        </p>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4 space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 text-lg font-medium rounded-full bg-primary/10 text-primary">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        filled={i < testimonial.rating}
                      />
                    ))}
                  </div>
                </div>
                <p className="italic text-muted-foreground">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Star = ({ filled }: { filled: boolean }) => {
  return (
    <svg 
      className={`w-5 h-5 ${filled ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-300'}`}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2}
        d="M12 17.75L5.82809 20.995L7.00746 14.122L2.00977 9.25495L8.90789 8.25495L11.9964 2L15.0848 8.25495L21.983 9.25495L16.9853 14.122L18.1647 20.995L12 17.75Z" 
      />
    </svg>
  );
};

export default Testimonials;
