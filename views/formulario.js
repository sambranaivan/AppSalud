import t from 'tcomb-form-native';

si_no = t.enums({
    si:"Si",
    no:"No"
})
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
        establecimiento: t.enums({
            publico:"Público",
            privado: "Privado",
        }),
        cue_anexo: t.String,
        rama: t.enums({
            inicial:"Inicial",
            primaria:'Primaria',
            especial:'Especial',
            psicologia:"Psicología",
            secundaria:"Secundaria",
            secundaria_tecnica:"Secundaria Técnica",
            secundaria_agraria_cept:"Secundaria Agraria"
        }),
        nomynum_establecimiento: t.String,
        cargo_informante: t.enums({
            director:"Director/a",
            vicedirector:"Vicedirector/a",
            secretario:"Secretario/a",
            docente:"Docente de mayor puntaje",
            otro:"Otro(especificar)"
        }),
        cargo_otro:t.maybe(t.String),///TODO hidden
        tipo_jornada: t.enums({
            simple:"Simple",
            completa:"Completa",
            extendidad:"extendida"
        }),
        matricula_cantitad: t.Number,
        obtencion_dato: t.enums({
            referenciado:"Referenciado",
            de_registro:"Obtenido de Registro"
        }),
        num_docente_nodocente: t.Number,
        ctrl_sanitario: si_no,
        ctrl_sanitario_detalle: t.maybe(t.String),
        persona_fumando: si_no,
        lugar_fumador: t.enums({
            oficinas:"Oficinas/ sala de maestros",
            pasillos:"Pasillos",
            baños:"Baños",
            escaleras:"Escaleras de emergencia" ,
            patio:"Patio",
            comedor:"Comedor",
            accessos:"Acceso al establecimiento",
            otro:"Otro"
        }),
        lugar_otro:t.maybe(t.String)
    }
)

const seccion_a = t.struct({
    //SECCIÓN A:VENTAS DE ALIMENTOS Y BEBIDAS AL INTERIOR DE LA ESCUELA
punto_comercializacion:si_no,
categoria_comercializacion:t.enums({
cantina:"Kiosco Cantina",
buffet:"Kiosco Buffet",
basico:"Kiosco Básico",
expendedora:"Maquina Expendedora de alimentos"
}),//TODO multiple
})

const seccion_a_2 = t.struct({


    // lista_productos:t.String
    gaseosas: t.maybe(si_no),
    agua_saborizada: t.maybe(si_no),
    jugo_de_frutas: t.maybe(si_no),
    bebidad_energizantes: t.maybe(si_no),
    bebidas_alcohol: t.maybe(si_no),
    galletas_dulces: t.maybe(si_no),
    bizcochos_grasa: t.maybe(si_no),
    agua_con_sin_gas: t.maybe(si_no),
    licuado_frutas: t.maybe(si_no),
    jugos_industrializados: t.maybe(si_no),
    frutos_secos: t.maybe(si_no),
    frutas_disecadas: t.maybe(si_no),
    frutas_frescas: t.maybe(si_no),
    ensalada_frutas: t.maybe(si_no),
    gaseosas_light: t.maybe(si_no),
    agua_saborizada_ligth:t.maybe(si_no),
    galletitas_cereal: t.maybe(si_no),
    barras_cereal: t.maybe(si_no),
    sopas_instantaneas: t.maybe(si_no),
    golosinas_sin_azucar: t.maybe(si_no),
    yogur_entero: t.maybe(si_no),
    alfajores_obleas: t.maybe(si_no),
    chicles_caramelos: t.maybe(si_no),
    careales_azucarados: t.maybe(si_no),
    chocolates_con_azucar: t.maybe(si_no),
    copetin: t.maybe(si_no),
    facturas: t.maybe(si_no),
    tortas_con_crema: t.maybe(si_no),
    hamburguesas_de_carne: t.maybe(si_no),
    panchos: t.maybe(si_no),
    pizzas_sin_verdura: t.maybe(si_no),
    helados: t.maybe(si_no),
    cereales_sin_azucar: t.maybe(si_no),
    galletas_arroz: t.maybe(si_no),
    yogures_sin_azucar: t.maybe(si_no),
    postres_lacteos_sin_azucar: t.maybe(si_no),
    leche_descremada: t.maybe(si_no),
    barras_cereales: t.maybe(si_no),
    semillas_sin_sal: t.maybe(si_no),
    ensalada_vegetales: t.maybe(si_no),
    papas_fritas_naturales: t.maybe(si_no),
    pizza_con_verdura: t.maybe(si_no),
    postres_lacteos: t.maybe(si_no),
    sandwich_de_milanesa: t.maybe(si_no),
    galletas_dulces_sin_relleno: t.maybe(si_no),
    galletitas_de_agua: t.maybe(si_no),
    alfajores_obles_de_arroz: t.maybe(si_no),
    sandwich_magro: t.maybe(si_no),
    budines: t.maybe(si_no),
    tarta_de_verdura: t.maybe(si_no),
    empanadas_al_horno_verdura: t.maybe(si_no),
    empanadas_al_horno_fiambre: t.maybe(si_no),
    sandwich_embutido: t.maybe(si_no),
    empanadas_fritas: t.maybe(si_no)
})


const seccion_a_3 = t.struct({
compra_may_men:si_no,
compra_may_men_detalle: t.maybe(t.String),//TODO hidden
capacitacion_comercio:si_no,
capacitacion_comercio_detalle:t.maybe(t.String),
comercializacion_inmediacion:si_no,//TODO cambiar columna
comercializacion_inmediacion_detalle:t.maybe( t.String)
})


const seccion_b = t.struct({
    //SECCIÓN B: COMEDORES, CANTINAS Y BUFETES SALUDABLES – CRITERIOS NUTRICIONALES
    // multiple B1
    prestacion_servicio_desayuno: si_no,
    tipo_gestion_estructurada_desayuno: t.maybe(t.String),
    prestacion_servicio_almuerzo: si_no,
    tipo_gestion_estructurada_almuerzo: t.maybe(t.String),
    prestacion_servicio_merienda: si_no,
    // multiple
    tipo_gestion_estructurada_merienda: t.maybe(t.String),
    // 
    // prestacion_servicio_escolar: t.String,
    // B2
    
    
    foto_plato_desayuno: t.maybe(t.String),//TODO nueva columna
    foto_plato_almuerzo: t.maybe(t.String),//TODO nueva columna
    foto_plato_merienda: t.maybe(t.String),//TODO nueva columna
    compra_insumo: t.String,//a quien se le compra lo unsimo
    salon_comedor: si_no,
    foto_comedor: t.maybe(t.String),
    foto_area_elaboracion: t.maybe(t.String),//TODO nueva columna
    foto_servicio_alimentos: t.maybe(t.String),//TODO nueva columna
    lugar_desayuno_merienda: t.enums({
        aula:"Aula",comedor:"Comedor",otro:"Otros"
    }),
    lugar_desayuno_merienda_otros: t.maybe(t.String),//TODO hidden
    lugar_almuerzo: t.enums({
        aula: "Aula", comedor: "Comedor", otro: "Otros"
    }),
    lugar_almuerzo_otros: t.maybe(t.String),//TODO hidden
    silla_mesa: si_no,
    utensilios: si_no,
    observaciones: t.String,
    ///b.10
    supervicion_menu: t.String,
    recomendaciones_gapa: t.String,
    recomendaciones_macro_micronutrientes: t.String,
    //b11
    menu_vista: si_no,
    foto_menu: t.maybe(t.String),
    //b12
    lugar_preparacion_comida: t.enums({
        escuela:"Se elabora en la escuela",
        otro_lugar:"Viene preparada de otro lugar"
    }),
    //b13
    
        menu_especial_no:si_no,
        menu_especial_diabetico:si_no,
        menu_especial_celiaco:si_no,
        menu_especial_hipocalorico:si_no,
        menu_especial_otro:t.maybe(si_no),//TODO nueva tabla

    alimento_tradicional: si_no,
    alimento_tradicional_detalle: t.maybe(t.String),//TODO si en anterios
    alimento_tradicional_frecuencia: t.maybe(t.String),//TODO si en anterios
    informe_menu: si_no,//TODO por que medio
    informe_menu_medio:t.maybe(t.String),
    // 
    durante_comida_agua_segura:si_no,
    durante_comida_gaseosa_azucarada:si_no,
    durante_comida_jugo_industrial_para_consumir:si_no,
    durante_comida_jugo_industrial_para_reconstituir:si_no,
    durante_comida_agua_saborizada:si_no,
    durante_comida_jugo_fruta_fresa:si_no,
    durante_comida_jugo_fruta_fresa_agregada: t.maybe(si_no),
    // // 
    huerta: si_no,
    huerta_si:t.maybe(t.enums({
        solo_escuela:"Solo escuela",
        otra_institucion:"Junto a otras instituciones"
    })),
    sal_libre: si_no,
   
    habitos_comida: si_no,
    habitos_comida_detalle: t.maybe(t.String)
})

const seccion_c = t.struct(
    {   
        //SECCIÓN C: COCINEROS/AS Y AYUDANTES DE COCINA
        encargado_alimento: t.String,
        ayudantes: si_no,
        ayudantes_capacitados: si_no,
        ayudantes_capacitados_tematica:t.maybe(t.String),
    }
)

// const seccion_b = t.struct(
//     {
//         //SECCIÓN C: COCINEROS/AS Y AYUDANTES DE COCINA
//         encargado_alimento: t.String,
//         ayudantes: si_no,
//         ayudantes_capacitados: si_no,
//         ayudantes_capacitados_tematica: t.maybe(t.String),
//     }
// )

const seccion_d = t.struct({
  //SECCIÓN D: ACCESO AL AGUA SEGURA
  //d.1
agua_corriente:si_no,
//si es no

    agua_presentacion: t.maybe(t.String),//
    agua_donde_se_obtiene: t.maybe(t.enums({
        perforacion:"Agua de Perforación",
        pozo:"Agua de Pozo",
        pastillas:"Pastillas potabilizadoras",
        rio:"Rio" ,
        arroyo:"Arroyo",
        laguna:"Laguna",
        otro:"Otro (especificar)"
    })),//
    agua_donde_se_obtiene_otro: t.maybe(t.String),
    agua_estrategia_segura: t.maybe(t.String),//

// agua_segura_utilizacion:t.String,
// MULTIPLE
    agua_segura_beber:si_no,
    agua_segura_hacer_hielo: si_no,
    agua_segura_lavar_alimentos: si_no,
    agua_segura_cocinar: si_no,
    agua_segura_infusiones: si_no,
    agua_segura_cepillarse_dientes: si_no,
    agua_segura_riego_huerta: si_no,//TODO nuevo campo
    agua_segura_otro_detalle: t.maybe(t.String),
// 
    // D.4
    procedimiento_limpieza_almacen:t.String,
    hay_bebedero:si_no,
    bebedores_cantidad:t.maybe(t.Number),
    foto_bebedero:t.maybe(t.String),
    // D.6 multiple
    lugar_bebedero_patio:si_no,
    lugar_bebedero_banio:si_no,
    lugar_bebedero_espacio_comun:si_no,
    lugar_bebedero_otro:t.maybe(t.String),
})
const seccion_e = t.struct({
  //SECCIÓN E: COMENSALIDAD Y HÁBITOS

// desde hasta y duracion por tipo  
   permanencia_desde_desayuno_merienda:t.String,
   permanencia_hasta_desayuno_merienda: t.String,
   permanencia_duracion_desayuno_merienda: t.String,
    // 
   permanencia_desde_almuerzo: t.String,
   permanencia_hasta_almuerzo: t.String,
   permanencia_duracion_almuerzo: t.String, 
    // 
   permanencia_otro:t.maybe(t.String),
   permanencia_desde_otro: t.maybe(t.String),
   permanencia_hasta_otro: t.maybe(t.String),
   permanencia_duracion_otro: t.maybe(t.String), 

// 
acompanan_nino:t.String,
nino_lavan:si_no,
    nino_lavan_donde:t.maybe(t.enums({
        baño:"Baño",
        patio: "Patio",
        otro:"Otro (Especificar)"
    })),
        nino_lavan_donde_otro:t.maybe(t.String),
    nino_lavan_solos:t.maybe(t.enums({
        solos:"Solos",
        adulto:"En compañia de un adulto",
    })),
nino_cepillan:si_no,
    nino_cepillan_donde: t.maybe(t.enums({
        baño: "Baño",
        patio: "Patio",
        otro: "Otro (Especificar)"
    })),
    nino_cepillan_donde_otro: t.maybe(t.String),
    nino_cepillan_solos: t.maybe(t.enums({
        solos: "Solos",
        adulto: "En compañia de un adulto",
    })),
pantallas_vista:t.enums({
    nunca:"No, Nunca",
    algunas_veces:"Algunas Veces",
    frecuentemente:"Frecuentemente",
    siempre:"Siempre",
    nosabe:"NS/NC"
}),  

    pantallas_vista_celular:t.maybe(si_no),
    pantallas_vista_tele:t.maybe(si_no),
    pantallas_vista_compu:t.maybe(si_no),
    pantallas_vista_otro:t.maybe(t.String),



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
    promo_tematicas_alimentacion_agua_segura: t.maybe(si_no),
    promo_tematicas_alimentacion_huertas: t.maybe(si_no),
    promo_tematicas_observaciones:t.maybe(t.String),
    // 
    clase_extracurricular: si_no,
    clase_extracurricular_detalle: t.maybe(t.String),
    // 
    programas_ean: si_no,
  
    materia_especifica_existente_detalle: t.maybe(t.String),
    programas_ean_materias:t.maybe(t.String),
})
const seccion_g = t.struct({
    //SECCIÓN G: EXPOSICIÓN A PUBLICIDAD DE ALIMENTOS Y BEBIDAS
    publicidad_alimento: si_no,
    // lugar_publico: t.String,
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
    // educacion_fisica: t.String,
    actividad_fisica_inicial_dias:t.maybe(t.Number),
    actividad_fisica_inicial_minutos: t.maybe(t.Number),
    actividad_fisica_primer_ciclo_dias: t.maybe(t.Number),
    actividad_fisica_primer_ciclo_minutos: t.maybe(t.Number),
    actividad_fisica_segundo_ciclo_dias:t.maybe(t.Number),
    actividad_fisica_segundo_ciclo_minutos: t.maybe(t.Number),
    actividad_fisica_secundaria_ciclo_dias: t.maybe(t.Number),
    actividad_fisica_secundaria_ciclo_minutos: t.maybe(t.Number),
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
    apto_medico_detalle_no:t.maybe(t.String),
    // por si 
    detalle_exigencias: t.maybe(t.String),
    detalle_normativa:t.maybe(t.String),
    detalle_exige_niveles:t.maybe(t.String),
    detalle_cuantos_alumnos:t.maybe(t.Number),
    // porcentjes???
    detalle_porcentajes_alumnos_primaria:t.maybe(t.Number),
    detalle_porcentajes_alumnos_secundaria: t.maybe(t.Number),
    //  i.5
   
    espacio_activ_fisica: si_no,
    espacio_activ_fisica_detalle: t.maybe(t.String),
    // i.6
    espacio_movimiento_espontaneo: si_no,
    espacio_movimiento_espontaneo_detalle: t.maybe(t.String),
    // i.7
    actividad_extracurricular: si_no,
    actividad_extracurricular_detalle:t.maybe( t.String),
    // i.8
    propuestas_sociocultural: si_no,
    propuestas_sociocultural_detalle: t.maybe(t.String),
    // i.9
    vestimenta: si_no,
    // i.10
    clase_mix: t.enums({
        no:"No",
        genero:"Mixtas en cuanto a Género",
        nivel_educativo: "Mixtas en cuanto a Nivel Educativo",
        ambos: "Mixtas Génera & Nivel Educativo ",


    }),
    // clase_mix_nivel_educativo: t.maybe(t.String),
    // i.11
    enfoque_inclusivo: si_no,
    enfoque_inclusivo_detalle: t.String,
    //  i.12 a
    accesos: si_no,
    accesos_detalle: t.String,
    //  i.12 b
    promueve_transporte_activo: si_no,
    promueve_transporte_activo_detalle: t.String,

    // nuevas preguntas
   

})


// j.1
const seccion_j = t.struct({
prestacion_servicio: t.enums({
    teknofood: "TeknoFood",
    shonko: "Shonko"
}),
    califica: t.enums({
        1: '1 (Muy Malo)',
        2: "2",
        3: "3",
        4: "4",
        5: "5 (Muy Bueno)",
    })
})




export {
    form1,parte_1,
    seccion_a,
    seccion_a_2,
    seccion_a_3,
    seccion_b,
    seccion_c,
    seccion_d,
    seccion_e,
    seccion_f,
    seccion_g,
    seccion_h,
    seccion_i,
    seccion_j
}