import React from 'react';
import { Settings, HeadphonesIcon, Bot, Shield, Server, BarChart3, ChevronRight, Users, Clock, CheckCircle2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="px-6 py-4 flex items-center justify-between bg-white sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
          <img src="./src/img/Imagenpequeño2.png" className="w-12 h-12 text-teal-800" alt="Logo" />
          <div className="flex flex-col">
            <span className="font-montserrat font-bold">SATEM</span>
            <span className="text-sm">Soluciones Inteligentes</span>
          </div>  
        </div>
        <div className="flex items-center gap-8">
        <button className="bg-teal-800 text-white px-4 py-2 rounded-full hover:bg-teal-900 transition font-montserrat">
            Conectar Ya
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600267185393-e158a98703de?auto=format&fit=crop&q=80&w=2070"
            alt="IT Support Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 leading-tight">
                Soluciones de TI<br />que Impulsan tu Negocio
              </h1>
              <p className="text-gray-600 text-base md:text-lg mb-8 font-inter">
                Servicios de soporte técnico y soluciones tecnológicas diseñadas para optimizar tus operaciones y maximizar tu productividad.
              </p>
              <div className="flex gap-4">
                <button className="bg-teal-800 text-white px-6 py-3 rounded-full hover:bg-teal-900 transition font-montserrat">
                  Comenzar Ahora
                </button>
                <button className="border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-50 transition font-inter">
                  Ver Servicios
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573495612890-430e48b164df?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" id="principal" className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-4">
              Nuestros Servicios de TI
            </h2>
            <p className="text-gray-600 text-base md:text-lg font-inter max-w-2xl mx-auto">
              Soluciones integrales diseñadas para mantener tu infraestructura tecnológica funcionando de manera óptima.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <HeadphonesIcon />,
                title: "Soporte Técnico 24/7",
                description: "Asistencia técnica especializada disponible en todo momento para resolver cualquier incidencia.",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2070"
              },
              {
                icon: <Bot />,
                title: "Automatización de Procesos",
                description: "Optimiza tus operaciones con soluciones automatizadas que aumentan la eficiencia.",
                image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/M365_FY25_C2_BOUNCE_ALL_IN_ONE_PLAN_Textless_16x9?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1328&qlt=100&fit=constrain"
              },
              {
                icon: <Shield />,
                title: "Seguridad Informática",
                description: "Protección integral para tus sistemas y datos contra amenazas cibernéticas.",
                image: "https://cdn.kaspersky.com/fm/site-editor/aa/aac05e64c0c79a381eff409248ebf167/processed/maximize-your-business-1-q93.webp"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-teal-50 rounded-lg text-teal-800">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-montserrat font-bold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 text-base md:text-lg mb-4 font-inter">{service.description}</p>
                  <a href="#" className="inline-flex items-center text-teal-800 font-montserrat hover:gap-2 transition-all">
                    Saber más <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Help Desk Support"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-6">
                ¿Por qué elegir nuestros servicios?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Clock />,
                    title: "Soporte 24/7",
                    description: "Asistencia técnica disponible en todo momento, todos los días del año."
                  },
                  {
                    icon: <Users />,
                    title: "Equipo Especializado",
                    description: "Profesionales certificados con amplia experiencia en el sector TI."
                  },
                  {
                    icon: <CheckCircle2 />,
                    title: "Soluciones Personalizadas",
                    description: "Adaptamos nuestros servicios a las necesidades específicas de tu empresa."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="p-2 bg-teal-50 rounded-lg text-teal-800 h-fit">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-base md:text-lg font-inter">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-6">
            Optimiza tu Infraestructura Tecnológica
          </h2>
          <p className="text-teal-100 text-base md:text-lg font-inter mb-8">
            Descubre cómo nuestras soluciones pueden ayudarte a alcanzar tus objetivos empresariales.
          </p>
          <button className="bg-white text-teal-800 px-8 py-4 rounded-full hover:bg-teal-50 transition font-montserrat">
            Agenda una Consulta Gratuita
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>           
              <span className="font-montserrat font-bold">SATEM</span>
            
            <p className="text-gray-400 text-base md:text-lg font-inter">
              Soluciones tecnológicas integrales
            </p> 
            <p className="text-gray-400 text-base md:text-lg font-inter">
              para tu empresa en un sólo lugar.
            </p>
          </div>
          
          {[
            {
              title: 'Empresa',
              links: ['Sobre Nosotros', 'Contacto']
            },
            {
              title: 'Servicios',
              links: ['Soporte Técnico', 'Help Desk', 'Automatización', 'Consultoría']
            },
            {
              title: 'Recursos',
              links: ['Casos de Éxito']
            }
          ].map((section, index) => (
            <div key={index}>
              <h4 className="font-montserrat font-bold mb-4 text-base md:text-lg">{section.title}</h4>
              <ul className="space-y-2 text-gray-400 text-base md:text-lg font-inter">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-white transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <style jsx>{`
          @media (max-width: 767px) {
            footer > div {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
            footer > div > div {
              margin-bottom: 20px;
            }
          }
        `}</style>
      </footer>
    </div>
  );
}

export default App;
