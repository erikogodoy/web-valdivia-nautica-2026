-- Schema de Supabase para Valdivia Náutica (Proyecto: GV Databases)
-- Copia y ejecuta este script en el SQL Editor de Supabase en el proyecto "GV Databases"

-- 1. Tabla para formulario de contacto general y prensa
CREATE TABLE IF NOT EXISTS valdivianautica_contactos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nombre TEXT NOT NULL,
    email TEXT NOT NULL,
    tipo_consulta TEXT NOT NULL, -- Exponer, Auspiciar, Prensa, Consulta General
    empresa TEXT,
    mensaje TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Tabla para postulaciones de expositores (stands / ferias)
CREATE TABLE IF NOT EXISTS valdivianautica_expositores (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nombre_empresa TEXT NOT NULL,
    contacto_nombre TEXT NOT NULL,
    email TEXT NOT NULL,
    telefono TEXT,
    rubro TEXT NOT NULL, -- Industria Naval, Pesca Artesanal, Turismo Fluvial, Deporte, Oficios, etc.
    descripcion_propuesta TEXT,
    estado TEXT DEFAULT 'pendiente', -- pendiente, revisado, aprobado, rechazado
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Tabla para solicitudes de sponsors / auspicios
CREATE TABLE IF NOT EXISTS valdivianautica_sponsors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    empresa TEXT NOT NULL,
    contacto_nombre TEXT NOT NULL,
    email TEXT NOT NULL,
    telefono TEXT,
    nivel_interes TEXT NOT NULL, -- Cadmio, Niquel, Manganeso, Cobalto, Litio
    comentarios TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Habilitar Row Level Security (RLS) en todas las tablas
ALTER TABLE valdivianautica_contactos ENABLE ROW LEVEL SECURITY;
ALTER TABLE valdivianautica_expositores ENABLE ROW LEVEL SECURITY;
ALTER TABLE valdivianautica_sponsors ENABLE ROW LEVEL SECURITY;

-- Políticas de inserción pública para Server Actions (Anon key)
DROP POLICY IF EXISTS "Permitir insercion publica contactos" ON valdivianautica_contactos;
CREATE POLICY "Permitir insercion publica contactos" ON valdivianautica_contactos FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Permitir insercion publica expositores" ON valdivianautica_expositores;
CREATE POLICY "Permitir insercion publica expositores" ON valdivianautica_expositores FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Permitir insercion publica sponsors" ON valdivianautica_sponsors;
CREATE POLICY "Permitir insercion publica sponsors" ON valdivianautica_sponsors FOR INSERT WITH CHECK (true);
