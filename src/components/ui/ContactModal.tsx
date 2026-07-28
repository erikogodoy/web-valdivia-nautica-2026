'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { submitContacto, submitExpositor, submitSponsor } from '@/app/actions/contactActions';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
  initialLevel?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  initialType = 'general',
  initialLevel = '',
}: ContactModalProps) {
  const [formType, setFormType] = useState(initialType);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseState, setResponseState] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseState(null);

    const formData = new FormData(e.currentTarget);
    let res;

    if (formType === 'expositor') {
      res = await submitExpositor(formData);
    } else if (formType === 'sponsor') {
      res = await submitSponsor(formData);
    } else {
      res = await submitContacto(formData);
    }

    setIsSubmitting(false);
    setResponseState(res);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-naval-950/80 backdrop-blur-md animate-fade-in">
      <div className="glass-panel w-full max-w-xl p-6 sm:p-8 rounded-2xl border-white/10 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <h3 className="font-syne text-2xl font-bold text-white mb-2">
            {formType === 'expositor' && 'Solicitud de Stand — Expositor'}
            {formType === 'sponsor' && `Solicitud de Auspicio ${initialLevel ? `(${initialLevel})` : ''}`}
            {formType === 'sem' && 'Inscripción SEM 2026'}
            {formType === 'general' && 'Contacto Valdivia Náutica'}
          </h3>
          <p className="text-sm text-slate-300">
            Ingresa tus datos y nuestro equipo comercial te responderá a la brevedad.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="flex gap-2 mb-6 border-b border-white/10 pb-3">
          <button
            onClick={() => { setFormType('general'); setResponseState(null); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              formType === 'general' ? 'bg-cyanic-400 text-naval-950' : 'text-slate-400 hover:text-white'
            }`}
          >
            Consulta General
          </button>
          <button
            onClick={() => { setFormType('expositor'); setResponseState(null); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              formType === 'expositor' ? 'bg-cyanic-400 text-naval-950' : 'text-slate-400 hover:text-white'
            }`}
          >
            Quiero Exponer
          </button>
          <button
            onClick={() => { setFormType('sponsor'); setResponseState(null); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              formType === 'sponsor' ? 'bg-cyanic-400 text-naval-950' : 'text-slate-400 hover:text-white'
            }`}
          >
            Quiero Auspiciar
          </button>
        </div>

        {/* Success/Error Banner */}
        {responseState && (
          <div
            className={`p-4 rounded-xl mb-6 flex items-start gap-3 text-sm ${
              responseState.success
                ? 'bg-cyanic-500/20 text-cyanic-300 border border-cyanic-500/40'
                : 'bg-red-500/20 text-red-300 border border-red-500/40'
            }`}
          >
            {responseState.success ? (
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-cyanic-400 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-400 mt-0.5" />
            )}
            <div>
              <p className="font-semibold">{responseState.message}</p>
            </div>
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {formType === 'expositor' && (
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                Nombre de la Empresa / Organización *
              </label>
              <input
                type="text"
                name="nombre_empresa"
                required
                className="w-full px-4 py-2.5 bg-naval-900/80 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyanic-400"
                placeholder="Ej. Astilleros del Sur S.A."
              />
            </div>
          )}

          {formType === 'sponsor' && (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Empresa / Marca *
                </label>
                <input
                  type="text"
                  name="empresa"
                  required
                  className="w-full px-4 py-2.5 bg-naval-900/80 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyanic-400"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Nivel de Interés
                </label>
                <select
                  name="nivel_interes"
                  defaultValue={initialLevel || 'Cadmio'}
                  className="w-full px-4 py-2.5 bg-naval-900/80 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyanic-400"
                >
                  <option value="Li — Litio">Li — Litio ($6.000.000 CLP)</option>
                  <option value="Co — Cobalto">Co — Cobalto ($3.000.000 CLP)</option>
                  <option value="Mn — Manganeso">Mn — Manganeso ($2.000.000 CLP)</option>
                  <option value="Ni — Níquel">Ni — Níquel ($1.000.000 CLP)</option>
                  <option value="Cd — Cadmio">Cd — Cadmio ($500.000 CLP)</option>
                </select>
              </div>
            </>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
              Nombre de Contacto *
            </label>
            <input
              type="text"
              name={formType === 'expositor' || formType === 'sponsor' ? 'contacto_nombre' : 'nombre'}
              required
              className="w-full px-4 py-2.5 bg-naval-900/80 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyanic-400"
              placeholder="Tu nombre completo"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                Correo Electrónico *
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2.5 bg-naval-900/80 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyanic-400"
                placeholder="correo@ejemplo.cl"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                Teléfono / WhatsApp
              </label>
              <input
                type="tel"
                name="telefono"
                className="w-full px-4 py-2.5 bg-naval-900/80 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyanic-400"
                placeholder="+56 9 1234 5678"
              />
            </div>
          </div>

          {formType === 'expositor' && (
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                Rubro Principal
              </label>
              <select
                name="rubro"
                className="w-full px-4 py-2.5 bg-naval-900/80 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyanic-400"
              >
                <option value="Industria Naval">Industria Naval & Astilleros</option>
                <option value="Electromovilidad">Electromovilidad (SEM)</option>
                <option value="Pesca">Pesca Artesanal / Recreativa</option>
                <option value="Turismo Fluvial">Turismo Fluvial & Navegación</option>
                <option value="Deporte">Deporte Náutico (Remo/Kayak)</option>
                <option value="Oficios">Oficios de Ribera</option>
              </select>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
              Mensaje / Comentarios *
            </label>
            <textarea
              name={formType === 'expositor' ? 'descripcion_propuesta' : formType === 'sponsor' ? 'comentarios' : 'mensaje'}
              rows={4}
              required
              className="w-full px-4 py-2.5 bg-naval-900/80 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyanic-400"
              placeholder="Cuéntanos tus requerimientos o dudas..."
            />
          </div>

          <div className="pt-4 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-7 py-2.5 text-xs font-bold uppercase tracking-wider text-naval-950 bg-cyanic-400 rounded-xl hover:bg-cyanic-300 transition-all flex items-center gap-2 shadow-lg shadow-cyanic-400/20 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Enviar Solicitud
                </>
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
