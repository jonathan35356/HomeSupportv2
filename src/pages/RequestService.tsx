
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from '@/components/ui/sonner';

const RequestService: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedIssue, setSelectedIssue] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedIssue || !date || !address) {
      toast.error("Por favor completa todos los campos requeridos");
      return;
    }
    
    // Aquí se manejaría la lógica para enviar los datos
    console.log({ selectedIssue, date, address, description });
    
    toast.success("¡Solicitud enviada con éxito! Un técnico se pondrá en contacto contigo pronto.");
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-2 text-3xl font-bold text-center">Solicitar Servicio</h1>
          <p className="mb-8 text-center text-muted-foreground">
            Cuéntanos qué necesita tu dispositivo y te enviaremos un técnico a tu ubicación
          </p>
          
          <Card>
            <CardHeader>
              <CardTitle>Detalles de la reparación</CardTitle>
              <CardDescription>
                Proporciona la información sobre el problema que presenta tu dispositivo
              </CardDescription>
            </CardHeader>
            
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="issueType">¿Qué necesita tu dispositivo?</Label>
                  <RadioGroup 
                    value={selectedIssue} 
                    onValueChange={setSelectedIssue}
                    className="grid gap-4 md:grid-cols-2"
                  >
                    {[
                      { value: "screen", label: "Reparación de pantalla" },
                      { value: "battery", label: "Reemplazo de batería" },
                      { value: "software", label: "Problemas de software" },
                      { value: "buttons", label: "Botones y puertos" },
                      { value: "water", label: "Daños por agua" },
                      { value: "diagnostic", label: "Diagnóstico completo" },
                    ].map((issue) => (
                      <div 
                        key={issue.value} 
                        className={cn(
                          "flex items-center space-x-2 p-3 border rounded-md cursor-pointer transition-all hover:border-primary",
                          selectedIssue === issue.value ? "border-primary bg-primary/5" : "border-gray-200"
                        )}
                        onClick={() => setSelectedIssue(issue.value)}
                      >
                        <RadioGroupItem value={issue.value} id={issue.value} />
                        <Label 
                          htmlFor={issue.value} 
                          className={cn(
                            "cursor-pointer flex-1",
                            selectedIssue === issue.value ? "font-medium text-primary" : ""
                          )}
                        >
                          {issue.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">¿Cuándo necesitas el servicio?</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        {date ? format(date, "PPP", { locale: es }) : "Selecciona una fecha"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        fromDate={new Date()}
                        locale={es}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">¿Dónde te encuentras?</Label>
                  <div className="flex">
                    <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-muted">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <Input
                      id="address"
                      placeholder="Ingresa tu dirección completa"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="rounded-l-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descripción del problema (opcional)</Label>
                  <Textarea
                    id="description"
                    placeholder="Proporciona detalles adicionales sobre el problema que presenta tu dispositivo..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                  />
                </div>
              </CardContent>
              
              <CardFooter>
                <Button type="submit" className="w-full text-lg">
                  Solicitar técnico
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RequestService;
