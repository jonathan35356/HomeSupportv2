
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { 
  Clock, Shield, Star, MapPin, Phone, ArrowRight, 
  CheckCircle, Smartphone, Settings, CreditCard 
} from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ServiceSteps from '@/components/ServiceSteps';
import Testimonials from '@/components/Testimonials';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Características principales */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">
            Reparación de celulares a un <span className="text-primary">clic de distancia</span>
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="transition-transform hover:shadow-lg hover:-translate-y-1">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="p-3 mb-4 rounded-full bg-primary/10">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Rápido y Eficiente</h3>
                <p className="text-muted-foreground">Servicio a domicilio en menos de 2 horas en la mayoría de las áreas.</p>
              </CardContent>
            </Card>
            
            <Card className="transition-transform hover:shadow-lg hover:-translate-y-1">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="p-3 mb-4 rounded-full bg-primary/10">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Seguro y Confiable</h3>
                <p className="text-muted-foreground">Técnicos verificados y garantía en todas nuestras reparaciones.</p>
              </CardContent>
            </Card>
            
            <Card className="transition-transform hover:shadow-lg hover:-translate-y-1">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="p-3 mb-4 rounded-full bg-primary/10">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Calidad Premium</h3>
                <p className="text-muted-foreground">Solo utilizamos repuestos originales y de alta calidad.</p>
              </CardContent>
            </Card>
            
            <Card className="transition-transform hover:shadow-lg hover:-translate-y-1">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="p-3 mb-4 rounded-full bg-primary/10">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Ubicación Exacta</h3>
                <p className="text-muted-foreground">Localiza a los técnicos más cercanos a tu ubicación.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <ServiceSteps />

      {/* Servicios que ofrecemos */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-4 text-3xl font-bold text-center">Servicios que ofrecemos</h2>
          <p className="max-w-2xl mx-auto mb-12 text-center text-muted-foreground">
            Nuestros técnicos especializados pueden resolver una amplia variedad de problemas con tu dispositivo móvil
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <Smartphone />, title: 'Reparación de Pantalla' },
              { icon: <CreditCard />, title: 'Reemplazo de Batería' },
              { icon: <Settings />, title: 'Problemas de Software' },
              { icon: <Phone />, title: 'Botones y Puertos' },
              { icon: <Shield />, title: 'Daños por Agua' },
              { icon: <CheckCircle />, title: 'Diagnóstico Completo' },
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden transition-transform hover:shadow-md hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        Soluciones profesionales con repuestos de calidad y garantía en el servicio
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/request" className="flex items-center">
                Solicitar un servicio ahora
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <Testimonials />

      {/* CTA */}
      <section className="py-16 text-white hero-gradient">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">¿Tu celular necesita reparación?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            No pierdas más tiempo. Con HomeSupport, podemos llegar a tu ubicación hoy mismo y solucionar el problema de tu dispositivo.
          </p>
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-center">
            <Button size="lg" variant="secondary">
              <Link to="/request">Solicitar servicio</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white hover:text-primary">
              <Link to="/technicians">Ver técnicos disponibles</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-300">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="p-1 rounded-md bg-primary">
                  <Smartphone className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold text-white">HomeSupport</span>
              </div>
              <p className="mt-2 max-w-xs">Reparación profesional de celulares a domicilio con garantía y seguridad.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase text-white">Servicios</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Reparación de pantalla</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Cambio de batería</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Problemas de software</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase text-white">Empresa</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Sobre nosotros</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Trabaja con nosotros</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Contacto</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase text-white">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Términos de servicio</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Política de privacidad</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-8 mt-8 border-t border-gray-800">
            <p className="text-sm text-center text-gray-400">&copy; {new Date().getFullYear()} HomeSupport. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
