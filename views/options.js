
var form_options = {
    i18n: {
        optional: ' ',
        required: '*'
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
        // 
        coordinador:{
            label: "Coordinador"
        },
        encuestador:{
            label: "Encuestador"
        },
        localidad:{
            label: "1.1 Localidad"
        },
        establecimiento:{
            label: "1.2 Establecimiento"
        },
        rama: {
            label: "1.3 Rama"
        },
        nomynum_establecimiento:{
            label:"1.4 Nombre y número del establecimiento"
        },
        cargo_informante:{
            label:"1.5 Cargo del informante clave"
        },
        cargo_otro:{
            label:"Especificar Cargo",
            hidden:true,
        },
        tipo_jornada: {
            label:"1.6 Tipo de jornada"
        },
        matricula_cantitad: {
            label:"1.7 ¿Cuál es la matrícula de estudiantes en el establecimiento educativo? \n a-Cantidad:"
        },
        obtencion_dato:{
            label:"b-Forma de obtención del dato:"
        },
        num_docente_nodocente: {
            label:"1.8 ¿Cuál es el N° del personal docente y no docente que trabaja en el establecimiento? \n a-Cantidad"
        },
        ctrl_sanitario: {
            label:"1.9 ¿En la institución se realizan controles sanitarios?"
        },
        ctrl_sanitario_detalle:{
            label:"Especificar cuáles y en qué lugares se realizan",
            hidden:true,
        },
        persona_fumando: {
            label:"1.10 Registrar si el día de l avisita identificó o percibió personas fumando dentro o fuera del establecimineto educativo"
        },
        lugar_fumador: {
            label:"1.11 En caso de haber visto personas fumando o haber percibido olor a tabaco, registrar en qué lugar fue"
        },
        lugar_otro:{
            label:"Especifique lugar",
            hidden:true,
        }
    ,
    //SECCIÓN A:VENTAS DE ALIMENTOS Y BEBIDAS AL INTERIOR DE LA ESCUELA
    punto_comercializacion: {
        label:"A.1 ¿Existe punto de comercialización en el establecimiento?"
    },
    categoria_comercializacion: { //TODO hacer opcional esto en el formulario
        label:"A.2 Identifique a qué categoría se asemeja más el punto de comercialización",
        hidden:true,
    },   

    // lista_productos:t.String
    gaseosas: {
        label:"A.3 Del siguiente listado de productos, registre si se encuesta a la venta en el punto de comercialización que corresponda \n Gaseosas Azucaradas"
    },
    agua_saborizada:{
        label: "Agua saborizada con azúcar",
    },
    jugo_de_frutas:{
        label: "Jugos de frutas azucarados industrializados",
    },
    bebidad_energizantes:{
        label:"Bebidas energizantes/ deportivas",
    },
    bebidas_alcohol:{
        label:"Bebidas con alcohol",
    },
    galletas_dulces:{
        label:"Galletas dulces rellenas",
    },
    bizcochos_grasa:{
        label:"Bizcochos de grasa",
    },
    agua_con_sin_gas:{
        label:"Agua con y sin gas",
    },
    licuado_frutas:{
        label: "Jugos y licuados naturales 100% frutas",
    },
    jugos_industrializados:{
        label: "Jugos industrializados 100% frutas (exceptuando Citric kids)",
    },
    frutos_secos:{
        label:"Frutos secos",
    },
    frutas_disecadas:{
        label:"Frutas disecadas",
    },
    frutas_frescas:{
        label: "Frutas frescas enteras, en compota o en trozos",
    },
    ensalada_frutas:{
        label: " Ensaladas de frutas natural",
    },
    gaseosas_light:{
        label:"Gaseosas light",
    },
    agua_saborizada_ligth:{ //TODO agregar al formulario
        label:"Aguas saborizadas light"
    },
    galletitas_cereal:{
        label: "Galletitas con cereales",
    },
    barras_cereal:{
        label: "Barras de cereal con azúcar o cobertura de chocolate",
    },
    sopas_instantaneas:{
        label: "Sopas instáneas light",
    },
    golosinas_sin_azucar:{
        label: "Golosinas sin azúcar",
    },
    yogur_entero:{
        label:"Yogur entero",
    },
    alfajores_obleas:{
            label: "Alfajores/ obleas con cobertura de chocolate(exceptuando alfajores de arroz, maicena y fruta sin cobertura)",
    },
    chicles_caramelos:{
        label: "Chicles, caramelos, chupetines con azúcar",
    },
    careales_azucarados:{
        label: "Cereales azucarados",
    },
    chocolates_con_azucar:{
        label: "Chocolates con azúcar",
    },
    copetin:{
        label: "Productos de copetín (papas fritas, palitos, chizitos, maní, etc)",
    },
    facturas:{
        label: "Medialunas/facturas",
    },
    tortas_con_crema:{
        label:"Tortas con dulce/crema/chocolate",
    },
    hamburguesas_de_carne:{
        label:"Hamburguesas de carne",
    },
    panchos:{
        label:"Panchos",
    },
    pizzas_sin_verdura:{
        label: "Pizzas sin verduras",
    },
    helados:{
        label:"Helados/Mousse",
    },
    cereales_sin_azucar:{
        label:"Cereales sin azúcar (con o sin frutas secas)",
    },
    galletas_arroz:{
        label:"Galletas de arroz",
    },
    yogures_sin_azucar:{
        label: "Yogures(solo, con cereales o con frutas) sin azúcar agregada",
    },
    postres_lacteos_sin_azucar:{
        label:"Postres lácteos sin azúcar agregada",
    },
    leche_descremada:{
        label:"Leche descremada",
    },
    barras_cereales:{
        label:"Barras de cereales sin azúcar agregada",
    },
    semillas_sin_sal:{
        label: "Semillas sin sal agregada con o sin frutas disecadas",
    },
    ensalada_vegetales:{
        label: "Ensalada de vegetales",
    },
    papas_fritas_naturales:{
        label: "Papas fritas naturales u platos fritos como bastones de pollo o de queso",
    },
    pizza_con_verdura:{
        label: "Pizza con verduras",
    },
    postres_lacteos:{
        label: "Postres lácteos con azúcar envasados",
    },
    sandwich_de_milanesa:{
        label:"Sandwich de milanesa frita",
    },
    galletas_dulces_sin_relleno:{
        label: "Galletas dulces sin relleno",
    },
    galletitas_de_agua:{
        label:"Galletitas de agua",
    },
    alfajores_obles_de_arroz:{
        label: "Alfajor u oblea de arroz con cobertura de chocolate",
    },
    sandwich_magro:{
        label: "Sandwich de cortes magros de carne con agregado de vegetales",
    },
    budines:{
        label: "Budines, madalenas, muffins, bizcochuelo simple",
    },
    tarta_de_verdura:{
        label:"Tarta de verdura",
    },
    empanadas_al_horno_verdura:{
        label: "Empanadas al horno de verdura",
    },
    empanadas_al_horno_fiambre:{
        label:"Empanadas al horno con fiambre",
    },
    sandwich_embutido:{
        label: "Sandwich de embutidos sin agregado de vegetales",
    },
    empanadas_fritas:{
        label:"Empanadas fritas",
    }
,
    compra_may_men: si_no,
    compra_may_men_detalle:{
        label:
    },//TODO hidden
    capacitacion_comercio: si_no,
    capacitacion_comercio_detalle:{
        label:
    },//TODO hidden
    comercializacion_inmediacion: si_no,//TODO cambiar columna
    comercializacion_inmediacion_detalle:{
        label:
    },//TODO hidden
})

const seccion_b = t.struct({
    //SECCIÓN B: COMEDORES, CANTINAS Y BUFETES SALUDABLES – CRITERIOS NUTRICIONALES
    // multiple B1
    prestacion_servicio_desayuno: si_no,
    prestacion_servicio_almuerzo: si_no,
    prestacion_servicio_merienda: si_no,
    // prestacion_servicio_escolar:{
        label:
    },
    // B2
    // foto_plato: t.maybe(t.String),//TODO hidden
    foto_plato_desayuno: t.maybe(t.String),//TODO nueva columna
    foto_plato_almuerzo: t.maybe(t.String),//TODO nueva columna
    foto_plato_merienda: t.maybe(t.String),//TODO nueva columna
    // multiple
    tipo_gestion_estructurada_desayuno:{
        label:
    },
    tipo_gestion_estructurada_almuerzo:{
        label:
    },
    tipo_gestion_estructurada_merienda:{
        label:
    },
    // 
    compra_insumo:{
        label:
    },//a quien se le compra lo unsimo
    salon_comedor: si_no,
    foto_comedor: t.maybe(t.String),
    foto_area_elaboracion: t.maybe(t.String),//TODO nueva columna
    foto_servicio_alimentos: t.maybe(t.String),//TODO nueva columna
    lugar_desayuno_merienda: t.enums({
        aula: "Aula", comedor: "Comedor", otro: "Otros"
    }),
    lugar_desayuno_merienda_otros: t.maybe(t.String),//TODO hidden
    lugar_almuerzo: t.enums({
        aula: "Aula", comedor: "Comedor", otro: "Otros"
    }),
    lugar_almuerzo_otros: t.maybe(t.String),//TODO hidden
    silla_mesa: si_no,
    utensilios: si_no,
    observaciones:{
        label:
    },
    ///b.10
    supervicion_menu:{
        label:
    },
    recomendaciones_gapa:{
        label:
    },
    recomendaciones_macro_micronutrientes:{
        label:
    },
    //b11
    menu_vista: t.Boolean,
    foto_menu: t.maybe(t.String),
    //b12
    lugar_preparacion_comida: si_no,
    //b12
    menu_especial: t.enums({
        no: "No Ofrece",
        diabetico: "Diabético",
        celiaco: "Celiaco",
        hipocalorico: "Hipocalórico",
        otro: "Otro (Especificar)"
    }),
    menu_especial_otro: t.maybe(t.String),//TODO hidden

    alimento_tradicional: si_no,
    alimento_tradicional_detalle: t.maybe(t.String),//TODO si en anterios
    alimento_tradicional_frecuencia: t.maybe(t.String),//TODO si en anterios
    informe_menu: si_no,
    // 
    durante_comida_agua_segura: si_no,
    durante_comida_gaseosa_azucarada: si_no,
    durante_comida_jugo_industrial_para_consumir: si_no,
    durante_comida_jugo_industrial_para_reconstituir: si_no,
    durante_comida_agua_saborizada: si_no,
    durante_comida_jugo_fruta_fresa: si_no,
    // 
    huerta: si_no,
    sal_libre: si_no,
    //  multiple
    sal_presentacion_salero: si_no,
    sal_presentacion_sobres: si_no,
    sal_presentacion_sal_baja_sodio: si_no,
    sal_presentacion_otro: si_no,//TODO nuevo caluma
    sal_presentacion_otro_detalle: t.maybe(t.String),//TODO hidden
    // 
    habitos_comida:{
        label:
    },
})

const seccion_c = t.struct(
    {
        //SECCIÓN C: COCINEROS/AS Y AYUDANTES DE COCINA
        encargado_alimento:{
            label:
        },
        ayudantes: si_no,
        ayudantes_capacitados: si_no,
        ayudantes_capacitados_tematica: t.maybe(t.String),
    }
)

const seccion_d = t.struct({
    //SECCIÓN D: ACCESO AL AGUA SEGURA
    //d.1
    agua_corriente: si_no,


    //si es no
    agua_presentacion: t.maybe(t.String),//TODO HIDDEN
    agua_estrategia_segura: t.maybe(t.String),//TODO HIDDEN

    // agua_segura_utilizacion:t.String,
    // MULTIPLE
    agua_segura_beber: si_no,
    agua_segura_hacer_hielo: si_no,
    agua_segura_lavar_alimentos: si_no,
    agua_segura_cocinar: si_no,
    agua_segura_infusiones: si_no,
    agua_segura_cepillarse_dientes: si_no,
    agua_segura_cepillarse_otro_detalle: t.maybe(t.String),
    // 
    // D.4
    procedimiento_limpieza_almacen:{
        label:
    },
    hay_bebedero: si_no,
    bebedores_cantidad: t.maybe(t.Number),//TODO hidden
    foto_bebedero: t.maybe(t.String),
    // D.6 multiple
    lugar_bebedero_patio: si_no,
    lugar_bebedero_banio: si_no,
    lugar_bebedero_espacio_comun: si_no,
    lugar_bebedero_otro: t.maybe(t.String),
})
const seccion_e = t.struct({
    //SECCIÓN E: COMENSALIDAD Y HÁBITOS

    // desde hasta y duracion por tipo  
    permanencia_desde_desayuno_merienda:{
        label:
    },
    permanencia_hasta_desayuno_merienda:{
        label:
    },
    permanencia_duracion_desayuno_merienda:{
        label:
    },
    // 
    permanencia_desde_almuerzo:{
        label:
    },
    permanencia_hasta_almuerzo:{
        label:
    },
    permanencia_duracion_almuerzo:{
        label:
    },
    // 
    permanencia_otro: t.maybe(t.String),
    permanencia_desde_otro: t.maybe(t.String),
    permanencia_hasta_otro: t.maybe(t.String),
    permanencia_duracion_otro: t.maybe(t.String),

    // 
    acompanan_nino:{
        label:
    },
    nino_lavan: si_no,
    nino_cepillan: si_no,
    pantallas_vista: t.enums({
        nunca: "No, Nunca",
        algunas_veces: "Algunas Veces",
        frecuentemente: "Frecuentemente",
        siempre: "Siempre",
        nosabe: "NS/NC"
    }),
})

const seccion_f = t.struct({
    //SECCIÓN F: PROMOCION DE LA SALUD - EDUCACIÓN ALIMENTARIA Y NUTRICIONAL (EAN)
    promo_salud: si_no,
    promo_salud_detalle: t.maybe(t.String),

    // multiple solo si si
    promo_tematicas_alimentacion_saludable: t.maybe(si_no),
    prome_tematicas_alimentacion_activida_fisica: t.maybe(si_no),
    promo_tematicas_alimentacion_consumo_alcohol: t.maybe(si_no),
    promo_tematicas_alimentacion_consumo_tabaco: t.maybe(si_no),
    promo_tematicas_alimentacion_consumo_sal: t.maybe(si_no),
    promo_tematicas_observaciones: t.maybe(t.String),
    // 
    clase_extracurricular: si_no,
    clase_extracurricular_detalle: t.maybe(t.String),
    // 
    programas_ean: si_no,

    materia_especifica_existente: si_no,
    materia_especifica_existente_detalle: t.maybe(t.String),
})
const seccion_g = t.struct({
    //SECCIÓN G: EXPOSICIÓN A PUBLICIDAD DE ALIMENTOS Y BEBIDAS
    publicidad_alimento: si_no,
    // lugar_publico:{
        label:
    },
    // Multiple
    publicidad_alimento_paredes: si_no,
    publicidad_alimento_mobiliario: si_no,
    publicidad_alimento_mesa: si_no,
    publicidad_alimento_menu: si_no,
    publicidad_alimento_fachada: si_no,
    publicidad_alimento_otro: t.maybe(t.String),
    // 
    incentivo_consumo: si_no,
    incentivo_consumo_detalle: t.maybe(t.String),//TODO hidden
})
const seccion_h = t.struct({
    //SECCIÓN H: LACTANCIA
    alumna_embarazada: si_no,
    espacio_lactancia: si_no,
    promueven_espacio_lactiancia: si_no,
    promueven_espacio_lactiancia_detalle: t.maybe(t.String),
})
const seccion_i = t.struct({
    //SECCIÓN I: ACTIVIDAD FÍSICA 	
    // i.1
    // educacion_fisica:{
        label:
    },
    actividad_fisica_inicial_dias: t.number,
    actividad_fisica_inicial_minutos: t.number,
    actividad_fisica_primer_ciclo_dias: t.number,
    actividad_fisica_primer_ciclo_minutos: t.number,
    actividad_fisica_segundo_ciclo_dias: t.number,
    actividad_fisica_segundo_ciclo_minutos: t.number,
    actividad_fisica_segundo_ciclo_dias: t.number,
    actividad_fisica_segundo_ciclo_minutos: t.number,
    actividad_fisica_aclaracion: t.maybe(t.String),
    // i.2
    profe_titulo: si_no,
    profe_titulo_detalle_no: t.maybe(t.String),
    // i.3
    evaluacion_aptitud: si_no,
    evaluacion_aptitud_detalle_no: t.maybe(t.String),
    // i.4
    apto_medico: si_no,
    // por no
    apto_medico_detalle_no: t.maybe(t.string),
    // por si 
    detalle_exigencias: t.maybe(t.string),
    detalle_normativa: t.maybe(t.string),
    detalle_exige_niveles: t.maybe(t.string),
    detalle_cuantos_alumnos: t.maybe(t.number),
    // porcentjes???
    detalle_porcentajes_alumnos_primaria: t.maybe(t.number),
    detalle_porcentajes_alumnos_secundaria: t.maybe(t.number),
    //  i.5

    espacio_activ_fisica: si_no,
    espacio_activ_fisica_detalle:{
        label:
    },
    // i.6
    espacio_activ_fisica: si_no,
    espacio_activ_fisica_detalle:{
        label:
    },

    // i.7
    actividad_extracurricular: si_no,
    actividad_extracurricular_detalle:{
        label:
    },
    // i.8
    propuestas_sociocultural: si_no,
    propuestas_sociocultural: t.maybe(t.String),
    // i.9
    vestimenta: si_no,
    // i.10
    clase_mix: si_no,
    // i.11
    enfoque_inclusivo: si_no,
    enfoque_inclusivo_detalle:{
        label:
    },
    //  i.12 a
    accesos: si_no,
    accesos:{
        label:
    },
    //  i.12 b
    promueve_transporte_activo: si_no,
    promueve_transporte_activo_detalle:{
        label:
    }
})

        // 
    }
}