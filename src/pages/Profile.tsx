
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from '@/components/ui/sonner';
import { User, Settings, CreditCard, Phone, MapPin, History, FileText, Star } from 'lucide-react';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState("profile");
  
  const mockUser = {
    name: "Juan Carlos Pérez",
    email: "juan.perez@example.com",
    phone: "+52 55 1234 5678",
    address: "Av. Insurgentes Sur 1234, Ciudad de México",
    avatar: null,
    initials: "JP"
  };
  
  const mockServiceHistory = [
    {
      id: "SRV-2356",
      date: "15/04/2023",
      service: "Reemplazo de pantalla",
      technician: "Miguel Ángel Pérez",
      status: "Completado",
      rating: 4.8
    },
    {
      id: "SRV-2145",
      date: "02/03/2023",
      service: "Reparación de batería",
      technician: "Laura Rodríguez",
      status: "Completado",
      rating: 4.5
    },
    {
      id: "SRV-1987",
      date: "15/01/2023",
      service: "Diagnóstico completo",
      technician: "Carlos Mendoza",
      status: "Completado",
      rating: 5.0
    }
  ];
  
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Perfil actualizado correctamente");
  };
  
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <h1 className="mb-2 text-3xl font-bold">Mi Cuenta</h1>
          <p className="mb-8 text-muted-foreground">Gestiona tu información personal y revisa tu historial de servicios</p>
          
          <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
            {/* Sidebar for larger screens */}
            <div className="hidden lg:block">
              <Card>
                <CardContent className="p-4">
                  <div className="flex flex-col items-center py-4 text-center">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={mockUser.avatar || ""} />
                      <AvatarFallback className="text-3xl bg-primary text-primary-foreground">{mockUser.initials}</AvatarFallback>
                    </Avatar>
                    <h2 className="mt-4 text-xl font-semibold">{mockUser.name}</h2>
                    <p className="text-sm text-muted-foreground">{mockUser.email}</p>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="flex flex-col space-y-1">
                    {[
                      { id: "profile", icon: <User className="w-4 h-4 mr-2" />, label: "Mi Perfil" },
                      { id: "history", icon: <History className="w-4 h-4 mr-2" />, label: "Historial de Servicios" },
                      { id: "payment", icon: <CreditCard className="w-4 h-4 mr-2" />, label: "Métodos de Pago" },
                      { id: "settings", icon: <Settings className="w-4 h-4 mr-2" />, label: "Configuración" }
                    ].map((item) => (
                      <Button
                        key={item.id}
                        variant={activeTab === item.id ? "default" : "ghost"}
                        className="justify-start"
                        onClick={() => setActiveTab(item.id)}
                      >
                        {item.icon}
                        {item.label}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Tabs for mobile and content for all */}
            <div className="space-y-6">
              {/* Mobile tabs */}
              <div className="block lg:hidden">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="profile" onClick={() => setActiveTab("profile")}>
                    <User className="w-4 h-4 mb-1" />
                    <span className="text-xs">Perfil</span>
                  </TabsTrigger>
                  <TabsTrigger value="history" onClick={() => setActiveTab("history")}>
                    <History className="w-4 h-4 mb-1" />
                    <span className="text-xs">Historial</span>
                  </TabsTrigger>
                  <TabsTrigger value="payment" onClick={() => setActiveTab("payment")}>
                    <CreditCard className="w-4 h-4 mb-1" />
                    <span className="text-xs">Pagos</span>
                  </TabsTrigger>
                  <TabsTrigger value="settings" onClick={() => setActiveTab("settings")}>
                    <Settings className="w-4 h-4 mb-1" />
                    <span className="text-xs">Config</span>
                  </TabsTrigger>
                </TabsList>
              </div>
              
              {/* Profile Tab */}
              {activeTab === "profile" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Información Personal</CardTitle>
                    <CardDescription>
                      Actualiza tu información de contacto y perfil
                    </CardDescription>
                  </CardHeader>
                  <form onSubmit={handleSaveProfile}>
                    <CardContent className="space-y-6">
                      <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <Avatar className="w-20 h-20 border">
                          <AvatarImage src={mockUser.avatar || ""} />
                          <AvatarFallback className="text-2xl bg-primary text-primary-foreground">{mockUser.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <Button variant="outline" size="sm">Cambiar foto</Button>
                          <p className="mt-1 text-sm text-muted-foreground">
                            JPG, GIF o PNG. Máximo 1MB.
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nombre completo</Label>
                          <Input id="name" defaultValue={mockUser.name} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Correo electrónico</Label>
                          <Input id="email" type="email" defaultValue={mockUser.email} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Teléfono</Label>
                          <div className="flex">
                            <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-muted">
                              <Phone className="w-4 h-4 text-muted-foreground" />
                            </div>
                            <Input 
                              id="phone" 
                              className="rounded-l-none" 
                              defaultValue={mockUser.phone} 
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address">Dirección</Label>
                          <div className="flex">
                            <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-muted">
                              <MapPin className="w-4 h-4 text-muted-foreground" />
                            </div>
                            <Input 
                              id="address" 
                              className="rounded-l-none" 
                              defaultValue={mockUser.address} 
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button type="submit">Guardar cambios</Button>
                    </CardFooter>
                  </form>
                </Card>
              )}
              
              {/* History Tab */}
              {activeTab === "history" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Historial de Servicios</CardTitle>
                    <CardDescription>
                      Revisa tus servicios anteriores y su estado
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {mockServiceHistory.map((service, index) => (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                              <div>
                                <div className="flex items-center mb-2 space-x-2">
                                  <h3 className="font-semibold">{service.service}</h3>
                                  <Badge variant="outline">{service.status}</Badge>
                                </div>
                                <div className="space-y-1 text-sm text-muted-foreground">
                                  <div className="flex items-center">
                                    <FileText className="w-4 h-4 mr-2" />
                                    ID: {service.id}
                                  </div>
                                  <div className="flex items-center">
                                    <User className="w-4 h-4 mr-2" />
                                    Técnico: {service.technician}
                                  </div>
                                  <div className="flex items-center">
                                    <History className="w-4 h-4 mr-2" />
                                    Fecha: {service.date}
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center space-y-2">
                                <div className="flex items-center">
                                  <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                                  <span className="font-medium">{service.rating}</span>
                                </div>
                                <Button variant="outline" size="sm">Ver detalles</Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {/* Payment Tab */}
              {activeTab === "payment" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Métodos de Pago</CardTitle>
                    <CardDescription>
                      Gestiona tus métodos de pago
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center justify-center h-48 p-6 border-2 border-dashed rounded-md">
                      <CreditCard className="w-12 h-12 mb-4 text-muted-foreground" />
                      <h3 className="mb-1 text-lg font-medium">No tienes métodos de pago guardados</h3>
                      <p className="mb-4 text-sm text-center text-muted-foreground">
                        Añade una tarjeta de crédito o débito para realizar pagos más rápido
                      </p>
                      <Button>Añadir método de pago</Button>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {/* Settings Tab */}
              {activeTab === "settings" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Configuración de la cuenta</CardTitle>
                    <CardDescription>
                      Gestiona las preferencias de tu cuenta
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">Notificaciones por correo</h3>
                        <p className="text-sm text-muted-foreground">
                          Recibe actualizaciones sobre tus servicios por correo electrónico
                        </p>
                      </div>
                      <div>
                        <Button variant="outline">Configurar</Button>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">Notificaciones push</h3>
                        <p className="text-sm text-muted-foreground">
                          Recibe notificaciones en tiempo real en tu dispositivo
                        </p>
                      </div>
                      <div>
                        <Button variant="outline">Configurar</Button>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">Cambiar contraseña</h3>
                        <p className="text-sm text-muted-foreground">
                          Actualiza tu contraseña de acceso
                        </p>
                      </div>
                      <div>
                        <Button variant="outline">Cambiar</Button>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">Eliminar cuenta</h3>
                        <p className="text-sm text-muted-foreground">
                          Elimina permanentemente tu cuenta y todos tus datos
                        </p>
                      </div>
                      <div>
                        <Button variant="destructive">Eliminar</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
