
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Smartphone, MapPin, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/request', label: 'Solicitar Servicio' },
    { path: '/technicians', label: 'Técnicos' },
    { path: '/profile', label: 'Perfil' }
  ];

  const getIcon = (path: string) => {
    switch (path) {
      case '/request':
        return <Smartphone className="w-4 h-4 mr-2" />;
      case '/technicians':
        return <MapPin className="w-4 h-4 mr-2" />;
      case '/profile':
        return <User className="w-4 h-4 mr-2" />;
      default:
        return null;
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <div className="p-1 rounded-md bg-primary text-white">
            <Smartphone className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold">HomeSupport</span>
        </Link>

        {/* Desktop menu */}
        {!isMobile && (
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Button 
                key={item.path} 
                variant={location.pathname === item.path ? "default" : "ghost"}
                asChild
                className={cn(
                  "transition-all duration-200",
                  location.pathname === item.path && "bg-primary text-primary-foreground"
                )}
              >
                <Link to={item.path} className="flex items-center">
                  {getIcon(item.path)}
                  {item.label}
                </Link>
              </Button>
            ))}
          </div>
        )}

        {/* Mobile menu toggle */}
        {isMobile && (
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && isOpen && (
        <div className="absolute left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-lg animate-fade-in">
          <div className="container py-2">
            {navItems.map((item) => (
              <Button 
                key={item.path}
                variant="ghost"
                asChild
                className={cn(
                  "w-full justify-start my-1",
                  location.pathname === item.path && "bg-primary/10 text-primary"
                )}
                onClick={() => setIsOpen(false)}
              >
                <Link to={item.path} className="flex items-center">
                  {getIcon(item.path)}
                  {item.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
