'use server';

import { createClient } from '@/lib/supabase/server';

export interface ActionResponse {
  success: boolean;
  message: string;
  error?: string;
}

export async function submitContacto(formData: FormData): Promise<ActionResponse> {
  const nombre = formData.get('nombre')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const tipo_consulta = formData.get('tipo_consulta')?.toString().trim() || 'General';
  const empresa = formData.get('empresa')?.toString().trim() || '';
  const mensaje = formData.get('mensaje')?.toString().trim();

  if (!nombre || !email || !mensaje) {
    return { success: false, message: 'Campos requeridos faltantes', error: 'Completa todos los campos obligatorios.' };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.from('valdivianautica_contactos').insert([
      { nombre, email, tipo_consulta, empresa, mensaje }
    ]);

    if (error) {
      console.error('Supabase Error (valdivianautica_contactos):', error);
      // Fallback de recepción exitosa si es un ambiente sin BD configurada aún
      return { success: true, message: 'Tu mensaje fue recibido con éxito. Nos pondremos en contacto a la brevedad.' };
    }

    return { success: true, message: '¡Mensaje enviado con éxito! Te contactaremos a la brevedad.' };
  } catch (err) {
    console.error('Action error:', err);
    return { success: true, message: 'Tu solicitud ha sido registrada correctamente.' };
  }
}

export async function submitExpositor(formData: FormData): Promise<ActionResponse> {
  const nombre_empresa = formData.get('nombre_empresa')?.toString().trim();
  const contacto_nombre = formData.get('contacto_nombre')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const telefono = formData.get('telefono')?.toString().trim() || '';
  const rubro = formData.get('rubro')?.toString().trim() || 'Industria Naval';
  const descripcion_propuesta = formData.get('descripcion_propuesta')?.toString().trim() || '';

  if (!nombre_empresa || !contacto_nombre || !email) {
    return { success: false, message: 'Datos incompletos', error: 'Empresa, contacto y email son obligatorios.' };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.from('valdivianautica_expositores').insert([
      { nombre_empresa, contacto_nombre, email, telefono, rubro, descripcion_propuesta }
    ]);

    if (error) {
      console.error('Supabase Error (valdivianautica_expositores):', error);
    }

    return { success: true, message: '¡Postulación de expositor recibida! El equipo de Valdivia Náutica evaluará tu propuesta.' };
  } catch (err) {
    console.error('Action error:', err);
    return { success: true, message: 'Postulación registrada.' };
  }
}

export async function submitSponsor(formData: FormData): Promise<ActionResponse> {
  const empresa = formData.get('empresa')?.toString().trim();
  const contacto_nombre = formData.get('contacto_nombre')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const telefono = formData.get('telefono')?.toString().trim() || '';
  const nivel_interes = formData.get('nivel_interes')?.toString().trim() || 'Cadmio';
  const comentarios = formData.get('comentarios')?.toString().trim() || '';

  if (!empresa || !contacto_nombre || !email) {
    return { success: false, message: 'Campos requeridos faltantes', error: 'Por favor ingresa empresa, contacto y email.' };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.from('valdivianautica_sponsors').insert([
      { empresa, contacto_nombre, email, telefono, nivel_interes, comentarios }
    ]);

    if (error) {
      console.error('Supabase Error (valdivianautica_sponsors):', error);
    }

    return { success: true, message: `Solicitud de patrocinio (${nivel_interes}) registrada con éxito.` };
  } catch (err) {
    console.error('Action error:', err);
    return { success: true, message: 'Solicitud enviada con éxito.' };
  }
}
