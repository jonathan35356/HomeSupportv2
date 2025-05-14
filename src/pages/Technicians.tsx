
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Clock, Filter, Search } from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

interface Technician {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  reviews: number;
  distance: string;
  time: string;
  specialty: string[];
  available: boolean;
}

const mockTechnicians: Technician[] = [
  {
    id: 1,
    name: "Miguel Ángel Pérez",
    avatar: "/placeholder.svg",
    rating: 4.9,
    reviews: 124,
    distance: "1.2 km",
    time: "20 min",
    specialty: ["Pantallas", "Baterías"],
    available: true
  },
  {
    id: 2,
    name: "Laura Rodríguez",
    avatar: "/placeholder.svg",
    rating: 4.7,
    reviews: 98,
    distance: "2.5 km",
    time: "35 min",
    specialty: ["Software", "Botones"],
    available: true
  },
  {
    id: 3,
    name: "Carlos Mendoza",
    avatar: "/placeholder.svg",
    rating: 4.8,
    reviews: 156,
    distance: "3.1 km",
    time: "40 min",
    specialty: ["Pantallas", "Diagnóstico"],
    available: true
  },
  {
    id: 4,
    name: "Ana Gutiérrez",
    avatar: "/placeholder.svg",
    rating: 4.6,
    reviews: 87,
    distance: "3.8 km",
    time: "45 min",
    specialty: ["Baterías", "Daños por agua"],
    available: true
  },
  {
    id: 5,
    name: "Diego Fernández",
    avatar: "/placeholder.svg",
    rating: 4.9,
    reviews: 203,
    distance: "4.2 km",
    time: "50 min",
    specialty: ["Pantallas", "Software", "Diagnóstico"],
    available: true
  },
];

const Technicians: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("distance");
  const [specialtyFilter, setSpecialtyFilter] = useState("all");

  const filteredTechnicians = mockTechnicians
    .filter(tech => 
      tech.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
      (specialtyFilter === "all" || tech.specialty.includes(specialtyFilter))
    )
    .sort((a, b) => {
      if (sortBy === "rating") {
        return b.rating - a.rating;
      } else if (sortBy === "distance") {
        return parseFloat(a.distance) - parseFloat(b.distance);
      } else {
        return parseInt(a.time) - parseInt(b.time);
      }
    });

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h1 className="mb-2 text-3xl font-bold text-center">Técnicos Disponibles</h1>
        <p className="mb-8 text-center text-muted-foreground">
          Encuentra al mejor técnico cercano a tu ubicación
        </p>
        
        {/* Search and filter */}
        <div className="max-w-4xl p-4 mx-auto mb-8 space-y-4 bg-white rounded-lg shadow sm:p-6 sm:space-y-0 sm:flex sm:items-center sm:space-x-4">
          <div className="relative flex-grow">
            <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
            <Input
              placeholder="Buscar por nombre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <Select 
              value={specialtyFilter} 
              onValueChange={setSpecialtyFilter}
            >
              <SelectTrigger className="w-full sm:w-[180px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Especialidad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las especialidades</SelectItem>
                <SelectItem value="Pantallas">Pantallas</SelectItem>
                <SelectItem value="Baterías">Baterías</SelectItem>
                <SelectItem value="Software">Software</SelectItem>
                <SelectItem value="Botones">Botones y puertos</SelectItem>
                <SelectItem value="Daños por agua">Daños por agua</SelectItem>
                <SelectItem value="Diagnóstico">Diagnóstico</SelectItem>
              </SelectContent>
            </Select>
            
            <Select 
              value={sortBy} 
              onValueChange={setSortBy}
            >
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="distance">Distancia (más cercanos)</SelectItem>
                <SelectItem value="rating">Calificación (mejor primero)</SelectItem>
                <SelectItem value="time">Tiempo de llegada</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Technicians list */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredTechnicians.length === 0 ? (
            <div className="p-8 text-center">
              <h3 className="text-xl font-medium">No se encontraron técnicos</h3>
              <p className="text-muted-foreground">Intenta con otros filtros de búsqueda</p>
            </div>
          ) : (
            filteredTechnicians.map((tech) => (
              <Card key={tech.id} className="overflow-hidden hover:shadow-md">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full p-6 sm:w-3/4">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 text-lg font-medium rounded-full bg-primary/10 text-primary">
                          {tech.name.split(' ').map(word => word[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3 className="text-lg font-semibold">{tech.name}</h3>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-medium">{tech.rating}</span>
                              <span className="text-sm text-muted-foreground">({tech.reviews} reseñas)</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap mt-2 gap-x-4 gap-y-2">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="w-4 h-4 mr-1" />
                              <span>A {tech.distance} de distancia</span>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="w-4 h-4 mr-1" />
                              <span>Llega en {tech.time} aprox.</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mt-3">
                            {tech.specialty.map((spec, idx) => (
                              <Badge key={idx} variant="outline">{spec}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center w-full p-4 border-t sm:w-1/4 sm:border-t-0 sm:border-l">
                      <Button className="w-full">Solicitar</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Technicians;
