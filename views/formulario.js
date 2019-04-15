import t from 'tcomb-form-native';
const form1 = t.struct(
    {
        latitud: t.maybe(t.Number),///automaticos
        longitud: t.maybe(t.Number),///automaticos
        userid: t.String, 
        timestamp: t.maybe(t.String),
        // Instrumento de recolección de datos
        fecha_realizacion:t.String,
        coordinador:t.String,
        encuestador:t.String
    }
)

const parte_1 = t.struct(
    {
        //PARTE 1: IDENTIFICACIÓN DE LA ESCUELA
        localidad: t.String,
        establecimiento: t.String,
        rama: t.String,
        nomynum_establecimiento: t.String,
        cargo_informante: t.String,
        tipo_jornada: t.String,
        matricula_cantitad: t.Number,
        obtencion_dato: t.String,
        num_docente_nodocente: t.Number,
        ctrl_sanitario: t.String,
        persona_fumando: t.Boolean,
        lugar_fumador: t.String,
    }
)

const seccion_a = t.struct({
    //SECCIÓN A:VENTAS DE ALIMENTOS Y BEBIDAS AL INTERIOR DE LA ESCUELA
punto_comercializacion:t.Boolean,
categoria_comercializacion:t.Boolean,
lista_productos:t.String,
compra_may_men:t.String,
capacitacion_comercio:t.String,
capacitacion_inmediacion:t.String,
})

const seccion_b = t.struct({
    //SECCIÓN B: COMEDORES, CANTINAS Y BUFETES SALUDABLES – CRITERIOS NUTRICIONALES
    prestacion_servicio_escolar: t.String,
    foto_plato: t.maybe(t.String),
    tipo_comida_estructurada: t.String,
    compra_insumo: t.String,
    salon_comedor: t.Boolean,
    foto_comedor: t.maybe(t.String),
    lugar_desayuno_merienda: t.String,
    lugar_admuerzo: t.String,
    silla_mesa: t.Boolean,
    utensilios: t.Boolean,
    observaciones: t.String,
    supervicion_menu: t.String,
    recomendaciones_gapa: t.String,
    recomendaciones_macro_micronutrientes: t.String,
    menu_vista: t.Boolean,
    foto_menu: t.maybe(t.String),
    lugar_preparacion_comida: t.String,
    menu_especial: t.String,
    alimento_tradicional: t.String,
    alimento_tradicional_frecuencia: t.String,
    informe_menu: t.Boolean,
    bebidas: t.String,
    huerta: t.Boolean,
    sal_libre: t.Boolean,
    sal_presentacion: t.String,
    habitos_comida: t.String,
})

const seccion_c = t.struct(
    {
        //SECCIÓN C: COCINEROS/AS Y AYUDANTES DE COCINA
        encargado_alimento: t.String,
        ayudantes: t.Boolean,
        ayudantes_capacitados: t.String,
    }
)

const seccion_d = t.struct({
  //SECCIÓN D: ACCESO AL AGUA SEGURA
agua_corriente:t.Boolean,
agua_presentacion:t.String,
agua_segura:t.String,
agua_segura_utilizacion:t.String,
procedimiento_limpieza_almacen:t.String,
bebedero:t.String,
foto_bebedero:t.maybe(t.String),
lugar_bebedero:t.String,  
})
const seccion_e = t.struct({
  //SECCIÓN E: COMENSALIDAD Y HÁBITOS
duracion_tipo_prestacion:t.String,
acompanan_nino:t.String,
nino_lavan:t.Boolean,
nino_cepillan:t.Boolean,
pantallas_vista:t.String,  
})

const seccion_f = t.struct({
    //SECCIÓN F: PROMOCION DE LA SALUD - EDUCACIÓN ALIMENTARIA Y NUTRICIONAL (EAN)
    promo_salud: t.String,
    tematicas: t.String,
    clase_estracurricular: t.String,
    programas_ean: t.Boolean,
    materia_especifica_existente: t.String,
})
const seccion_g = t.struct({
    //SECCIÓN G: EXPOSICIÓN A PUBLICIDAD DE ALIMENTOS Y BEBIDAS
    publicidad_alimento: t.Boolean,
    lugar_publico: t.String,
    incentivo_consumo: t.String,
})
const seccion_h = t.struct({
    //SECCIÓN H: LACTANCIA
    alumna_embarazada: t.Boolean,
    espacio_lactancia: t.Boolean,
    promueven_espacio_lactiancia: t.String,
})
const seccion_i = t.struct({
    //SECCIÓN I: ACTIVIDAD FÍSICA 	
    educacion_fisica: t.String,
    profe_titulo: t.String,
    evaluacion_aptitud: t.String,
    apto_medico: t.String,
    exigencias: t.String,
    norma_juridiccional: t.String,
    exigencia_niveles: t.String,
    cant_alumnos: t.String,
    porcentaje_total_alumnos: t.String,
    espacio_activ_fisica: t.String,
    movimiento_espontaneo: t.String,
    actividad_extracurricular: t.String,
    propuestas_sociocultural: t.String,
    vestimenta: t.Boolean,
    clase_mix: t.Boolean,
    enfoque_inclusivo: t.String,
    accesos: t.String,
    transporte_activo: t.String
})

var form_options = {
    i18n: {
        optional: ' ',
        required: ' '
    },
    fields: {
        latitud: {
            hidden: true
        },
        longitud: {
            hidden: true
        },
        userid: {
            hidden: true
        },
        timestamp: {
            hidden: true
        },
       uncampoquenoexiteoestaenotroform:{
           label:"probandosi no se rompe"
       }

        // condicionales
        // otro_motivo:
        // {
        //     label: "Cual?", hidden: true
        // },
        // otros_informo: {
        //     label: "Cual?", hidden: true
        // },
        // otro_transporte: {
        //     label: "Cual?", hidden: true
        // },
        // viaje_cantidad: {
        //     label: "Cuantos?", hidden: true, maxLength: 2
        // }

    }
};





export {
    form1,parte_1,
    seccion_a,
    seccion_b,
    seccion_c,
    seccion_d,
    seccion_e,
    seccion_f,
    seccion_g,
    seccion_h,
    seccion_i
    ,form_options}