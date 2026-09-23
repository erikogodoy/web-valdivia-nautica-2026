'use client';

import React, { useState, useEffect } from 'react';
import { X, Check, Copy, MessageCircle, Mail, AlertCircle, ArrowRight, CheckCircle2, Loader2, Building, User, Phone, CreditCard, ShieldCheck } from 'lucide-react';
import { submitSemRegistration } from '@/app/actions/contactActions';

export interface SemRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialLevel?: string; // 'general' | 'streaming' | 'estudiante' | string
}

const TICKET_LEVELS = [
  {
    id: 'general',
    name: 'General (Presencial)',
    price: 100000,
    formattedPrice: '$100.000 CLP',
    tag: 'Acceso Total 3 Días',
    detail: 'Acceso completo a conferencias en Parque Saval, acreditación oficial, coffee breaks y networking.',
    border: 'border-poster-cyan/60 hover:border-poster-cyan',
  },
  {
    id: 'streaming',
    name: 'Streaming (Online)',
    price: 50000,
    formattedPrice: '$50.000 CLP',
    tag: 'Transmisión HD',
    detail: 'Acceso a la señal en vivo HD de todos los paneles técnicos, repositorio de ponencias y certificado digital.',
    border: 'border-poster-gold/60 hover:border-poster-gold',
  },
  {
    id: 'estudiante',
    name: 'Estudiantes (Acreditado)',
    price: 25000,
    formattedPrice: '$25.000 CLP',
    tag: 'Tarifa Rebajada',
    detail: 'Tarifa preferencial para alumnos regulares universitarios y de CFT. Requiere credencial estudiantil vigente.',
    border: 'border-white/20 hover:border-white/40',
  },
];

export default function SemRegistrationModal({
  isOpen,
  onClose,
  initialLevel = 'general',
}: SemRegistrationModalProps) {
  // Normalize initial level
  const normalizedInitial = initialLevel.toLowerCase().includes('stream')
    ? 'streaming'
    : initialLevel.toLowerCase().includes('estudian')
    ? 'estudiante'
    : 'general';

  const [selectedLevelId, setSelectedLevelId] = useState(normalizedInitial);
  const [step, setStep] = useState<'form' | 'transfer'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  // Form State
  const [formDataState, setFormDataState] = useState({
    nombre: '',
    rut: '',
    email: '',
    telefono: '',
    institucion: '',
  });

  const [orderCode, setOrderCode] = useState('SEM-2026');

  useEffect(() => {
    if (isOpen) {
      setSelectedLevelId(normalizedInitial);
      setStep('form');
      setErrorMessage('');
      setCopied(false);
    }
  }, [isOpen, initialLevel]);

  if (!isOpen) return null;

  const currentLevel = TICKET_LEVELS.find((l) => l.id === selectedLevelId) || TICKET_LEVELS[0];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormDataState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formDataState.nombre || !formDataState.rut || !formDataState.email) {
      setErrorMessage('Por favor ingresa tu Nombre, RUT y Correo electrónico.');
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('nombre', formDataState.nombre);
    formData.append('rut', formDataState.rut);
    formData.append('email', formDataState.email);
    formData.append('telefono', formDataState.telefono);
    formData.append('institucion', formDataState.institucion);
    formData.append('nivel', currentLevel.name);
    formData.append('monto', currentLevel.price.toString());

    try {
      const res = await submitSemRegistration(formData);
      if (res.codigoOrden) {
        setOrderCode(res.codigoOrden);
      } else {
        setOrderCode(`SEM-${Math.floor(1000 + Math.random() * 9000)}`);
      }
      setStep('transfer');
    } catch (err) {
      setOrderCode(`SEM-${Math.floor(1000 + Math.random() * 9000)}`);
      setStep('transfer');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Bank Data exact from Anita Jaramillo message
  const bankData = {
    titular: 'Valdivia Náutica Spa.',
    rut: '77.899.264-7',
    banco: 'Santander',
    tipoCuenta: 'Cuenta Corriente',
    numeroCuenta: '93668294',
    giro: 'Productora de Eventos',
    correos: ['ventasajcck@gmail.com', 'contacto@valdivianautica.cl'],
    whatsapp: '+56 9 8136 3976',
  };

  const fullBankText = `DATOS PARA TRANSFERENCIA BANCARIA:
• Titular: ${bankData.titular}
• RUT: ${bankData.rut}
• Banco: ${bankData.banco}
• Tipo de Cuenta: ${bankData.tipoCuenta}
• N° de Cuenta: ${bankData.numeroCuenta}
• Giro: ${bankData.giro}
• Monto a Transferir: ${currentLevel.formattedPrice} (${currentLevel.name})
• Código de Orden: ${orderCode}
• Nombre Asistente: ${formDataState.nombre || 'Asistente'} (RUT: ${formDataState.rut || ''})
• Correos para comprobante: ${bankData.correos.join(' / ')}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullBankText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // WhatsApp Pre-filled URL
  const waMessage = `¡Hola! Acabo de registrar mi inscripción al Seminario SEM 2026.
• Orden: ${orderCode}
• Nivel: ${currentLevel.name} (${currentLevel.formattedPrice})
• Nombre: ${formDataState.nombre}
• RUT: ${formDataState.rut}
• Email: ${formDataState.email}

Adjunto el comprobante de transferencia bancaria para confirmar mi pase.`;

  const waUrl = `https://wa.me/56981363976?text=${encodeURIComponent(waMessage)}`;

  // Email Pre-filled URL
  const mailSubject = `Comprobante de Pago SEM 2026 — ${orderCode} — ${formDataState.nombre}`;
  const mailBody = `Hola equipo de Valdivia Náutica,

Adjunto el comprobante de transferencia para la inscripción al Seminario de Electromovilidad Marítima (SEM 2026):

- Código de Orden: ${orderCode}
- Nivel de Inscripción: ${currentLevel.name}
- Monto Transferido: ${currentLevel.formattedPrice}
- Nombre Completo: ${formDataState.nombre}
- RUT: ${formDataState.rut}
- Teléfono: ${formDataState.telefono}
- Empresa / Institución: ${formDataState.institucion}

Quedo atento a la confirmación de mi acreditación.

Saludos cordiales,
${formDataState.nombre}`;

  const mailUrl = `mailto:${bankData.correos.join(',')}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-poster-midnight/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="glass-panel w-full max-w-2xl bg-poster-dark/95 p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl relative my-auto max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-xl bg-white/5 hover:bg-white/10 transition-colors z-20"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        {/* STEP 1: REGISTRO DE COMPRA */}
        {step === 'form' && (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-archivo font-bold uppercase tracking-[0.2em] text-poster-cyan">
                Acreditación Oficial · Parque Saval
              </span>
              <h3 className="font-archivo text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Inscripción Seminario <span className="text-poster-cyan">SEM 2026</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1">
                Paso 1 de 2: Selecciona tu modalidad e ingresa los datos del participante.
              </p>
            </div>

            {/* Selector de Nivel */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {TICKET_LEVELS.map((t) => {
                const isSelected = t.id === selectedLevelId;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedLevelId(t.id)}
                    className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-poster-cyan/15 border-poster-cyan shadow-lg shadow-poster-cyan/20 ring-1 ring-poster-cyan'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-slate-300 mb-1">
                        {t.tag}
                      </div>
                      <div className={`font-archivo font-bold text-sm leading-snug ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                        {t.name}
                      </div>
                    </div>
                    <div className="font-archivo font-extrabold text-base text-poster-gold mt-3">
                      {t.formattedPrice}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Error notice */}
            {errorMessage && (
              <div className="mb-5 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2.5 text-xs text-rose-300">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Nombre y Apellido <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={formDataState.nombre}
                    onChange={handleInputChange}
                    placeholder="Ej. Juan Pérez González"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-poster-cyan focus:outline-none text-white text-xs sm:text-sm font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    RUT o Pasaporte <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="rut"
                    required
                    value={formDataState.rut}
                    onChange={handleInputChange}
                    placeholder="Ej. 12.345.678-9"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-poster-cyan focus:outline-none text-white text-xs sm:text-sm font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Correo Electrónico <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formDataState.email}
                    onChange={handleInputChange}
                    placeholder="nombre@empresa.cl"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-poster-cyan focus:outline-none text-white text-xs sm:text-sm font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formDataState.telefono}
                    onChange={handleInputChange}
                    placeholder="+56 9 1234 5678"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-poster-cyan focus:outline-none text-white text-xs sm:text-sm font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Institución, Universidad o Empresa
                </label>
                <input
                  type="text"
                  name="institucion"
                  value={formDataState.institucion}
                  onChange={handleInputChange}
                  placeholder="Ej. UACh / Astilleros del Sur / Independiente"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-poster-cyan focus:outline-none text-white text-xs sm:text-sm font-sans"
                />
              </div>

              {/* Summary Bar & Submit */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left w-full sm:w-auto">
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Total a Pagar</div>
                  <div className="text-xl sm:text-2xl font-archivo font-extrabold text-poster-gold">
                    {currentLevel.formattedPrice}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-poster-gold text-poster-midnight text-xs font-bold uppercase tracking-wider hover:bg-poster-goldHover hover:scale-[1.02] transition-all shadow-xl shadow-poster-gold/25 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Registrando...</span>
                    </>
                  ) : (
                    <>
                      <span>Continuar al Pago</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* STEP 2: PANTALLA DE TRANSFERENCIA BANCARIA AUTOMATIZADA */}
        {step === 'transfer' && (
          <div className="animate-fadeIn">
            {/* Header Success */}
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-archivo font-bold uppercase tracking-[0.2em] text-poster-cyan">
                ¡Pre-inscripción Registrada!
              </span>
              <h3 className="font-archivo text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Datos para la Transferencia Bancaria
              </h3>
              <p className="text-xs text-slate-300 font-sans mt-1">
                Orden <span className="font-mono font-bold text-poster-gold bg-poster-gold/10 px-2 py-0.5 rounded-lg border border-poster-gold/30">{orderCode}</span> · Asistente: <span className="text-white font-semibold">{formDataState.nombre}</span>
              </p>
            </div>

            {/* Resumen de Monto */}
            <div className="mb-5 p-4 rounded-2xl bg-poster-midnight/80 border border-poster-cyan/30 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Modalidad</div>
                <div className="font-archivo font-bold text-sm text-white">{currentLevel.name}</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Monto Exacto</div>
                <div className="text-2xl font-archivo font-extrabold text-poster-gold">{currentLevel.formattedPrice}</div>
              </div>
            </div>

            {/* Tarjeta con los Datos Bancarios Oficiales */}
            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2.5 mb-5 font-sans text-xs text-slate-200">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-slate-400">Titular de la Cuenta:</span>
                <span className="font-bold text-white text-sm">{bankData.titular}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-slate-400">RUT:</span>
                <span className="font-mono font-bold text-white text-sm">{bankData.rut}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-slate-400">Banco:</span>
                <span className="font-bold text-white text-sm">{bankData.banco}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-slate-400">Tipo de Cuenta:</span>
                <span className="font-bold text-white">{bankData.tipoCuenta}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-slate-400">N° de Cuenta:</span>
                <span className="font-mono font-bold text-poster-cyan text-sm">{bankData.numeroCuenta}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-slate-400">Giro:</span>
                <span className="font-bold text-white">{bankData.giro}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-1">
                <span className="text-slate-400">Correos para comprobante:</span>
                <span className="font-mono text-xs text-poster-gold">{bankData.correos.join('  ·  ')}</span>
              </div>
            </div>

            {/* Botón Copiar Datos */}
            <button
              onClick={handleCopy}
              className="w-full mb-6 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-bold uppercase tracking-wider text-white transition-all flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">¡Datos bancarios copiados al portapapeles!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-poster-cyan" />
                  <span>Copiar todos los datos de transferencia</span>
                </>
              )}
            </button>

            {/* Aviso importante */}
            <div className="mb-6 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed font-sans text-center">
              ⚠️ <strong className="font-bold">¡IMPORTANTE!</strong> Para validar tu acreditación y asegurar tu cupo, por favor envía el comprobante de pago apenas realices la transferencia.
            </div>

            {/* Botones de acción directa: WhatsApp y Correo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-naval-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20 hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4 text-naval-950" />
                <span>Enviar Comprobante WhatsApp</span>
              </a>

              <a
                href={mailUrl}
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-poster-cyan hover:bg-white text-poster-midnight font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-poster-cyan/20 hover:scale-[1.02]"
              >
                <Mail className="w-4 h-4" />
                <span>Enviar por Correo</span>
              </a>
            </div>

            {/* Botón Volver / Cerrar */}
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={onClose}
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                Entendido, cerrar ventana
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
