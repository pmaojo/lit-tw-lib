// src/pages/LandingPage.ts
import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import { BaseComponent } from '../../base/BaseComponent';

@customElement('landing-page')
export class LandingPage extends BaseComponent {
  protected renderContent() {
    return html`
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Componentes Web SOLID
          </h1>
          <p class="text-xl mb-8">
            Una biblioteca de componentes web construida con Lit y siguiendo principios SOLID
          </p>
          <div class="flex gap-4">
            <primary-button label="Comenzar" size="lg"></primary-button>
            <secondary-button label="Documentación" size="lg"></secondary-button>
          </div>
        </div>
      </section>

      <!-- Inputs Showcase -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-8">Inputs</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="space-y-4">
              <text-input
                label="Texto"
                placeholder="Ingrese texto..."
              ></text-input>

              <email-input
                label="Email"
                placeholder="email@ejemplo.com"
              ></email-input>

              <number-input
                label="Cantidad"
                min="0"
                max="100"
              ></number-input>
            </div>

            <div class="space-y-4">
              <phone-input
                label="Teléfono"
                placeholder="(123) 456-7890"
              ></phone-input>

              <url-input
                label="Sitio Web"
                placeholder="https://ejemplo.com"
              ></url-input>

              <select-input
                label="Opciones"
                .options=${[
                  { value: '1', label: 'Opción 1' },
                  { value: '2', label: 'Opción 2' },
                  { value: '3', label: 'Opción 3' }
                ]}
              ></select-input>
            </div>

            <div class="space-y-4">
              <textarea-input
                label="Mensaje"
                rows="3"
                placeholder="Escriba su mensaje..."
              ></textarea-input>

              <search-input
                label="Búsqueda"
                placeholder="Buscar..."
              ></search-input>
            </div>
          </div>
        </div>
      </section>

      <!-- Buttons & Controls -->
      <section class="py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-8">Botones y Controles</h2>
          
          <div class="space-y-8">
            <div class="flex flex-wrap gap-4">
              <primary-button label="Principal"></primary-button>
              <secondary-button label="Secundario"></secondary-button>
              <link-button label="Enlace" href="#"></link-button>
              <icon-button icon="star"></icon-button>
            </div>

            <button-group>
              <primary-button label="Izquierda"></primary-button>
              <primary-button label="Centro"></primary-button>
              <primary-button label="Derecha"></primary-button>
            </button-group>

            <custom-progress value="75" color="blue"></custom-progress>
          </div>
        </div>
      </section>

      <!-- Cards & Content -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-8">Tarjetas y Contenido</h2>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <custom-card
              title="Tarjeta Simple"
              content="Una tarjeta básica con título y contenido"
              elevated
            ></custom-card>

            <custom-accordion>
              <accordion-item title="Sección 1">
                Contenido de la sección 1
              </accordion-item>
              <accordion-item title="Sección 2">
                Contenido de la sección 2
              </accordion-item>
            </custom-accordion>

            <custom-tabs
              .tabs=${[
                { label: 'Tab 1', content: 'Contenido del tab 1' },
                { label: 'Tab 2', content: 'Contenido del tab 2' }
              ]}
            ></custom-tabs>
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section class="py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-8">Testimonios</h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <custom-testimonial
              quote="Estos componentes son increíbles"
              author="Juan Pérez"
              role="Desarrollador Frontend"
              avatar="/avatars/1.jpg"
            ></custom-testimonial>

            <custom-testimonial
              quote="La mejor biblioteca que he usado"
              author="María García"
              role="Tech Lead"
              avatar="/avatars/2.jpg"
            ></custom-testimonial>
          </div>
        </div>
      </section>

      <!-- Navigation -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-8">Navegación</h2>
          
          <div class="space-y-8">
            <custom-breadcrumbs
              .items=${[
                { label: 'Inicio', href: '#' },
                { label: 'Componentes', href: '#' },
                { label: 'Navegación', href: '#' }
              ]}
            ></custom-breadcrumbs>

            <div class="flex items-center gap-4">
              <custom-avatar
                src="/avatars/user.jpg"
                size="large"
                status="online"
              ></custom-avatar>
              
              <custom-avatar
                size="medium"
                status="away"
              ></custom-avatar>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}