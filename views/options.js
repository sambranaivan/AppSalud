
var form_options = {
    i18n: {
        optional: '',
        required: ''
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
        cue_anexo:{
            label:"1.2 Cue Anexo"
        },
        establecimiento:{
            label: "1.3 Establecimiento"
        },

        rama: {
            label: "1.4 Rama"
        },
        nomynum_establecimiento:{
            label:"1.5 Nombre y número del establecimiento"
        },
        cargo_informante:{
            label:"1.6 Cargo del informante clave"
        },
        cargo_otro:{
            label:"Especificar Cargo",
            hidden:true,
        },
        tipo_jornada: {
            label:"1.7 Tipo de jornada"
        },
        matricula_cantitad: {
            label:"1.8 ¿Cuál es la matrícula de estudiantes en el establecimiento educativo? \n a-Cantidad:"
        },
        obtencion_dato:{
            label:"b-Forma de obtención del dato:"
        },
        num_docente_nodocente: {
            label:"1.9 ¿Cuál es el N° del personal docente y no docente que trabaja en el establecimiento? \n a-Cantidad"
        },
        ctrl_sanitario: {
            label: "1.10 ¿En la institución se realizan controles sanitarios? \nEspecificar (bacteriológicos, microbiológicos, químicos)"
        },
        ctrl_sanitario_detalle:{
            label:"Especificar cuáles y en qué lugares se realizan",
            hidden:true,
        },
        persona_fumando: {
            label:"1.11 Registrar si el día de la visita identificó o percibió personas fumando dentro o fuera del establecimineto educativo"
        },
        lugar_fumador: {
            label:"1.12 En caso de haber visto personas fumando o haber percibido olor a tabaco, registrar en qué lugar fue"
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
        label: "Papas fritas naturales o platos fritos como bastones de pollo o de queso",
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
    compra_may_men: {
        label:"A.4 ¿Existen acuerdos para comprar por menos y/o mayor de alimentos con industrias, cooperados, tamberos, microemprendedores,etc"
    },
    compra_may_men_detalle:{
        label:"Detallar",
        
        hidden:true
    },//TODO hidden
    capacitacion_comercio:{
        label:"A.5 ¿Se realizan capacitaciones a los encargados de las concesiones de los kioscos saludables?"
    },
    capacitacion_comercio_detalle:{
        label:"¿Sobre que temáticas?",
        
        hidden:true
    },//TODO hidden
    comercializacion_inmediacion: {
        label:"A.6 ¿Se comercializan alimentos y bebidas en las inmediaciones de la escuela?\n (comercios,vendedores ambulantes?)"
    },//TODO cambiar columna
    comercializacion_inmediacion_detalle:{
        label:"cuales?",
        hidde:true
    },//TODO hidden
    prestacion_servicio_desayuno: {
        label:"B.1 Identificar si el establecimiento cuenta con prestaciones ofrecidas como servicio escolar \n Desayuno"
    },
        // multiple
        tipo_gestion_estructurada_desayuno: {
            label: "¿Cómo se gestiona? Detallar a quién/es se realiza la compra de los insumos.",
            hidden:true,
        },
        
    prestacion_servicio_almuerzo: {
        label: "Almuerzo"
    },
        tipo_gestion_estructurada_almuerzo: {
            label: "¿Cómo se gestiona?",
            hidden:true,
        },
        
    prestacion_servicio_merienda: {
    // prestacion_servicio_escola:{
        label: "Merienda"
    },

        tipo_gestion_estructurada_merienda: {
            label: "¿Cómo se gestiona?",
            hidden:true,
        },
    // B2
    // foto_plato: t.maybe(t.String),//TODO hidden
    foto_plato_desayuno: {
        
        hidden:true
    },//TODO nueva columna
    foto_plato_almuerzo: {
        
        hidden:true
    },//TODO nueva columna
    foto_plato_merienda: {
        
        hidden:true
    },//TODO nueva columna
   
    // 
    compra_insumo:{
        label:"Detallar a quién/es se realiza la compra de los insumos"
    },//a quien se le compra lo unsimo
    salon_comedor: {
        label:"B.4 Identificar si el establecimiento cuenta con un salón comedor de usoexclusivo."
    },
    foto_comedor: {
        
        hidden:true,
    },
    foto_area_elaboracion: {
        
        hidden:true,
    },
    foto_servicio_alimentos: {
        
        hidden:true,
    },
    lugar_desayuno_merienda:{
        label:"B.6.Identificar en qué lugar desayunan/meriendan los niñxs?"
    },
    lugar_desayuno_merienda_otros:{
        label:"Cual?",
        
        hidden:true
    },
    lugar_almuerzo: {
        label:"B.7 Identificar en qué lugar almuerzan los niñxs?"
    },
    lugar_almuerzo_otros: {
        label:"Cual?",
        
        hidden:true,
    },
    silla_mesa: {
        label: "B.8. ¿Hay suficiente cantidad de sillas y mesas durante el servicio de lacomida?"
    },
    utensilios: {
        label: "B.9. ¿Hay suficiente cantidad de utensilios durante el servicio de la comida?"
    },
    observaciones:{
        label: "Observaciones"
    },
    ///b.10
    supervicion_menu:{
        label:"B.10.a ¿Quién confecciona y supervisa los menús?"
    },
    recomendaciones_gapa:{
        label:"B.10.b ¿Siguen las recomendaciones de las GAPA (Guía alimentarias para la Población Argentina)?"
    },
    recomendaciones_macro_micronutrientes:{
        label:"B.10.c ¿Cumplen las recomendaciones de macro y micronutrientes según grupo etario?"
    },
    //b11
    menu_vista: {
        label:"B.11 ¿Se encuentra el menú a la vista en el comedor?"
    },
    foto_menu:{
        
        hidden:true,
    },
    //b12
    lugar_preparacion_comida: {
        label:"B.12. ¿La comida se elabora en la escuela o viene preparada de otro lugar?"
    },
    //b13
    
        menu_especial_no: {
            label: "B.13 ¿Se ofrece menú especial?"
        },
        menu_especial_diabetico: {
            label:".. Diabetico"
        },
        menu_especial_celiaco: {
            label:".. Celiaco"
        },
        menu_especial_hipocalorico: {
            label:".. Hipocalórico"
        },
        menu_especial_otro: {
            label:".. Otro menu especial?"
        },
  
    alimento_tradicional:{
        label:"B.14. ¿Se incluyen alimentos tradicionales según región en los menús escolares?"
    },
    alimento_tradicional_detalle: {
        
        hidden:true,
        label:"Cuales?"
    },//TODO si en anterios
    alimento_tradicional_frecuencia: {
        label:"Con que frecuencia?",
        
        hidden:true
    },
    informe_menu: {
        label:"B.15. ¿Se informa a las familias sobre los menús semanales?"
    },
        informe_menu_medio: {
            label: "¿Por qué medio?",
            hidden:true,
        },
    // 
    durante_comida_agua_segura: {
        label:"B.16. ¿Qué bebida/as se ofrece/n durante las comidas? \n Agua Segura"
    },
    durante_comida_gaseosa_azucarada:{
        label:"Bebidas Gaseosas Azucaradas"
    },
    durante_comida_jugo_industrial_para_consumir:{
        label:"Jugos Industrializados listos para consumir"
    },
    durante_comida_jugo_industrial_para_reconstituir:{
        label:"Jugos industrializados para reconstituir"
    },
    durante_comida_agua_saborizada:{
        label:"Aguas saborizadas"
    },
    durante_comida_jugo_fruta_fresa:{
        label: "Jugos de fruta fresca"
    },
        durante_comida_jugo_fruta_fresa_agregada:{
            label:".. Con azúcares agregadas?",
            hidden:true,
        },
    // 
    huerta:{
        label:"B.17.¿Cuenta el establecimiento con huertas propias?"
    },
    huerta_si:{
        label:".. Es llevada adelante sólo por la escuela o en conjunto con otras instituciones?",
        hidden:true,
    },
    sal_libre: {
        label:"B.18. Identifique si la sal se encuentra o no a libre disposición para su consumo. (Incluye todo tipo de presentación)"
    },
    // //  Eliminado
    // sal_presentacion_salero: {
    //     label:"B.19. Registre los formatos en los que se ofrece sal en el punto de comercialización.\n Salero"
    // },
    // sal_presentacion_sobres: {
    //     label:"Sobres de 5gr"
    // },
    // sal_presentacion_sal_baja_sodio: {
    //     label:"Sal baja en sodio"
    // },
   
    // sal_presentacion_otro_detalle:
    // {
    //     label:"Otro",
    //     // hidden:true
    // },
    // // 
    habitos_comida:{
        label: "B.20. ¿Se aprovecha el espacio de las comidas para promocionar hábitos y comportamientos que motiven a los niñxs respecto a la alimentación saludable, comensalidad, convivencia y compañerismo?"
    },
    habitos_comida_detalle:{
        label: "¿Cuales o que tipo de promoción de hábito?",hidden:true
    },


        //SECCIÓN C: COCINEROS/AS Y AYUDANTES DE COCINA
        encargado_alimento:{
            label: "C.1. ¿Quiénes se encargan de la manipulación y preparación de los alimentos?"
        },
        ayudantes: {
            label: "C.2. ¿Cuentan los cocineros/as y/o ayudantes de cocina con libreta sanitaria al día?"
        },
        ayudantes_capacitados: {
            label:"C.3. ¿Los cocineros/as y/o ayudantes de cocina son capacitados periódicamente?"
        },
        ayudantes_capacitados_tematica: {
            label:"Sobre que temáticas?"
        },

    //SECCIÓN D: ACCESO AL AGUA SEGURA
    //d.1
    agua_corriente: {
        label: "D.1. ¿Cuenta la institución con agua corriente?"
    },


    //si es no
    agua_presentacion: {
        label: "D.2. Si la respuesta es no, ¿De qué manera se ofrece el agua?",
        hidden:true,
    },
    agua_estrategia_segura:{
        label:" ¿Qué estrategias utilizan para hacerla segura?",        
        hidden:true
    },
    agua_donde_se_obtiene:{
        label:"¿Cual es la forma de acceder al agua?",
        hidden:true,
    },
     agua_donde_se_obtiene_otro: {
            label: ".. especificar",
            hidden: true,
        },

    // agua_segura_utilizacion:t.String,
    // MULTIPLE
    agua_segura_beber: {
        label:"D.3. ¿Para qué se utiliza el agua segura? \n Beber"
    },
    agua_segura_hacer_hielo: {
        label:"Hacer hielo"
    },
    agua_segura_lavar_alimentos: {
        label:"Lavar alimentos"
    },
    agua_segura_cocinar: {
        label:"Cocinar"
    },
    agua_segura_riego_huerta:{
        label:"Riego de huerta escolar"
    },
    agua_segura_infusiones: {
        label:"Realizar infusiones"
    },
    agua_segura_cepillarse_dientes: {
        label:"Cepillarse los dientes"
    },
    agua_segura_otro_detalle: {
        label:"Otro (Especificar)"
    },
    // 
    // D.4
    procedimiento_limpieza_almacen:{
        label: "D.4. ¿Cuál es el procedimiento de limpieza y almacenamiento de agua segura con el que cuenta el establecimiento?"
    },
    hay_bebedero:{
        label:"D.5. ¿Hay bebederos o bocas de dispendio gratuito de agua, en adecuado estadode funcionamiento?"
    },
    bebedores_cantidad: {
        label: "(Detallar cantidad)",
        hidden:true
    },//TODO hidden
    foto_bebedero: {
        
        hidden:true,
    },
    // D.6 multiple
    lugar_bebedero_patio: {
        label: "D.6. ¿En qué lugar se encuentran situados los bebederos? \n Patios"
    },
    lugar_bebedero_banio: {
        label:"Baños"
    },
    lugar_bebedero_espacio_comun: {
        label:"Espacios comunes abietos"
    },
    lugar_bebedero_otro:{
        label:"Otro (Especificar)"
    },

    //SECCIÓN E: COMENSALIDAD Y HÁBITOS

    // desde hasta y duracion por tipo  
    permanencia_desde_desayuno_merienda:{
        label:"E.1. Registrar la duración (tiempo de permanencia de los niñxs) por tipo de prestación, cuando la misma se ofrece en el aula o el comedor: \n Desayuno/Merienda \n Hora de Inicio"
    },
    permanencia_hasta_desayuno_merienda:{
        label:"Hora de Finalización" 
    },
    permanencia_duracion_desayuno_merienda:{
        label: "Duración (minutos)"
    },
    // 
    permanencia_desde_almuerzo:{
        label: "Almuerzo \n Hora de Incio"
    },
    permanencia_hasta_almuerzo:{
        label: "Hora de Finalización"
    },
    permanencia_duracion_almuerzo:{
        label: "Duración (minutos)"
    },
    // 
    permanencia_otro: {
        label:"Otro (Especificar)"
    },
    permanencia_desde_otro: {
        label:"Hora de Inicio"
    },
    permanencia_hasta_otro: {
        label:"Hora de Finalización"
    },
    permanencia_duracion_otro: {
        label:"Duración (minutos)"
    },
    // 
    // 
    // 
    acompanan_nino:{
        label: "E.2. ¿Quién/es acompañan a los niñxos durante las comidas?"
    },

    nino_lavan: {
        label: "E.3. ¿Los/as niñxos se lavan las manos antes de cada comida?"
    },
        nino_lavan_donde: {
            label: ".. ¿Donde?",
            hidden:true,
        },
            nino_lavan_donde_otro: {
                label: ".. Especificar",
                hidden: true,
            },

        nino_lavan_solos:{
            label:"¿Lo realizan solos o acompañados de un adulto responsable?",
            hidden:true,
        },
        // 
    nino_cepillan: {
        label: "E.4. ¿Los/as niñxos se cepillan los dientes luego  de cada comida?"
    },
        nino_cepillan_donde: {
            label: ".. ¿Donde?",
            hidden: true,
        },
        nino_cepillan_donde_otro: {
            label: ".. Especificar",
            hidden: true,
        },

        nino_cepillan_solos: {
            label: "¿Lo realizan solos o acompañados de un adulto responsable?",
            hidden: true,
        },

    pantallas_vista:{
        label:"E.5. En general, mientras los niñxs comen, ¿miran pantallas de algún dispositivo electrónico como celular, televisión, computadora, etc?"
    },
        pantallas_vista_celular: {
            label:" Celular?",
            hidden:true
         },
        pantallas_vista_tele: {
            label:" Television?",
            hidden:true
         },
        pantallas_vista_compu: {
            label:" Computadora?",
            hidden:true
         },
        pantallas_vista_otro: {
            label:" Otra pantalla?",
            hidden:true
         },

    //SECCIÓN F: PROMOCION DE LA SALUD - EDUCACIÓN ALIMENTARIA Y NUTRICIONAL (EAN)
    promo_salud: {
        label:"F.1. ¿Observa algunas estrategias, recomendaciones o mensajes de promoción de la salud en paredes, puertas, carteleras del interior del establecimiento?"
    },
    promo_salud_detalle: {
        label: "¿Ejemplos de agua segura, alimentos saludables, huertas familiares?",
        
        hidden:true,
    },

    // multiple solo si si
    promo_tematicas_alimentacion_saludable: {
        label:"F.2.Por favor, registre las temáticas que abordan las estrategias, recomendaciones o mensajes de promoción de la salud que observa en el interior del edificio \n Alimentación saludable",
        hidden:true,
    },
    prome_tematicas_alimentacion_activida_fisica: {
        label:"Promoción de actividad física",
        hidden:true,
    },
    promo_tematicas_alimentacion_consumo_alcohol: {
        label: "Consumo de alcohol",
        hidden:true,
    },
    promo_tematicas_alimentacion_consumo_tabaco: {
        label:"Consumo de tabaco",
        hidden:true,
    },
    promo_tematicas_alimentacion_consumo_sal: {
        label: "Consumo de sal",
        hidden:true,
    },
    promo_tematicas_observaciones: {
        label:"Observaciones:",
        hidden:true,
    },
        promo_tematicas_alimentacion_agua_segura: {
            label: "Agua Segura",
            hidden: true,
        },
        promo_tematicas_alimentacion_huertas: {
            label: "Huertas",
            hidden: true,
        },
    // 
    clase_extracurricular: {
        label: "F.3.En el establecimiento, ¿se dictan talleres/cursos/clases extraescolares/extracurricularesde EAN o de alguna temática sobre alimentación saludable? "
    },
    clase_extracurricular_detalle: {
        label:"¿A quién/es están dirigidos?",
        
        hidden:true
    },
    // 
    programas_ean: {
        label: "F.4.¿Cuenta el establecimiento con programas de EAN en la currícula?"
    },
    materia_especifica_existente_detalle:{
        label: "¿Cómo materias específicas o como contenido de otras materias existentes?", 
        hidden: true        
    },
    programas_ean_materias:{
        label:"¿En que Materias?",
        hidden:true,
    },
    //SECCIÓN G: EXPOSICIÓN A PUBLICIDAD DE ALIMENTOS Y BEBIDAS
    publicidad_alimento: {
    // lugar_publico:{
        label: "G.1. Identifique la presencia o no de publicidad de alimentos o bebidas en el punto de comercialización"
    },
    // Multiple
    publicidad_alimento_paredes: {
        label:"G.2. Registre el/los lugar/lugares en los que se encuentran exhibidas las publicidades \n En las paredes"
    },
    publicidad_alimento_mobiliario: {
        label:"Sobre el mobiliario"
    },
    publicidad_alimento_mesa: {
        label:"En los accesorios de mesa"
    },
    publicidad_alimento_menu: {
        label: "En el menú"
    },
    publicidad_alimento_fachada: {
        label:"En la fachada"
    },
    publicidad_alimento_otro: {
        label:"Otro (Especifique)"
    },
    // 
    incentivo_consumo:{
        label:"G.3. Identifique si en el punto de comercialización se incentiva el consumo de productos mediante mensajes, fotos, dibujos, platos exhibidos, etc. Por ejemplo “probá las nuevas medialunas calentitas”, “acompañá tu comida con papas fritas crocantes”, foto de una hamburguesa, etc"
    },
    incentivo_consumo_detalle:{
        label:"Detallar",
        hidden:true
    },

    //SECCIÓN H: LACTANCIA
    alumna_embarazada: {
        label: "H.1. ¿Asisten alumnas embarazadas y/o personal docente y no docente a la escuela?"
    },
    espacio_lactancia: {
        label:"H.2. Identificar si el establecimiento cuenta con un espacio amigo de la lactancia materna."
    },
    promueven_espacio_lactiancia: {
        label: "H.3. ¿Existen estrategias que promuevan la lactancia materna en mujeres que asistan y/o trabajen en la institución y se encuentren en periodo de lactancia?"
    },
    promueven_espacio_lactiancia_detalle: {
        label:"Si (Detallar)",
        hidden:true
    },

    //SECCIÓN I: ACTIVIDAD FÍSICA 	
    // i.1 todo hidden segun rama
    
    actividad_fisica_inicial_dias: {
        hidden:true,
        label: "I.1 ¿Cuántos días y minutos de educación física realizan por semana los alumnos de cada curso? \nEducación Inicial \nDías por Semana"
    },
    actividad_fisica_inicial_minutos:{
        hidden:true,
        label: "Minutos por día"
    },
    actividad_fisica_primer_ciclo_dias: {
        hidden:true,    
        label: "Educación primaria: \nPrimer ciclo(1º, 2º y 3º grado) \nDías por Semana"
    },
    actividad_fisica_primer_ciclo_minutos: {
        hidden:true, 
        label: "Minutos por día"
    },
    actividad_fisica_segundo_ciclo_dias: {
        hidden:true,
        label: "Educación primaria: \nSegundo ciclo(4º, 5º, 6º y 7º)*"
    },
    actividad_fisica_segundo_ciclo_minutos: {
        hidden:true, 
        label: "Minutos por día"
    },
    actividad_fisica_secundaria_ciclo_dias: {
        hidden:true,    
        label: "Educación Secundaria (de 1ro a 5to ó 1º a 6to año) \nDías por Semana"
    },
    actividad_fisica_secundaria_ciclo_minutos: {
        hidden:true, 
        label: "Minutos por día"
    },
    actividad_fisica_aclaracion:{
        
        label: " En el caso de que los minutos destinados a la clase no sean efectivos por traslados u otros motivos por favor aclare."
    },
    // i.2
    profe_titulo: {
        label: "I.2 ¿El docente a cargo de la clase de educación física tiene título de profesor de educación física?"
    },
    profe_titulo_detalle_no: {
        label:"No (Detalle)",
        hidden:true
    },
    // i.3
    evaluacion_aptitud:{
        label: "I.3 ¿Se realizan evaluaciones de la aptitud física anualmente?"
    },
    evaluacion_aptitud_detalle_no: {
        label:"No (detalle)",
        hidden:true
    },
    // i.4
    apto_medico:{
        label:"I.4 ¿Se exige apto médico para iniciar las clases?"
    },
    // por no
    apto_medico_detalle_no: {
        label: "No(detalle si exigen otro documento o ninguno)",
        hidden:true
    },
    // por si 
    detalle_exigencias: {
        label:"I.4.a) Detalle las exigencias del instrumento",
        hidden:true

    },
    detalle_normativa: {
        label:"I.4.b) Detalle si existe normativa jurisdiccional que respalde este pedido por parte de la escuela",
        
        hidden:true
    },
    detalle_exige_niveles: {
        label:"I.4.c) Si se exige en todos los niveles",
        
        hidden:true
    },
    detalle_cuantos_alumnos: {
        label:"I.4.d) ¿Cuántos alumnos no participan a las clases de educación física por la no presentación de este documento?",
        
        hidden:true
    },
    // porcentjes???
    detalle_porcentajes_alumnos_primaria:{
        label:"Escriba en porcentaje sobre el total del alumnado \nen primaria",
        hidden:true
    },
    detalle_porcentajes_alumnos_secundaria: {
        label:"en secundaria",
        hidden:true
    },
    //  i.5

    espacio_activ_fisica: {
        label:"I.5 ¿El establecimiento cuenta con un espacio que favorezca la realización de actividad física durante los recreos?"
    },
    espacio_activ_fisica_detalle:{
        label:"I.5.b Detalle"
    },
    // i.6
        espacio_movimiento_espontaneo:{
        label:"I.6 En caso de que cuente con un espacio disponible, por favor identificar si está permitido el movimiento espontáneo (se permite correr, saltar, hacer juegos activos)."
    },
    espacio_movimiento_espontaneo_detalle:{
        label: "I.6.b Detalle"
    },

    // i.7
    actividad_extracurricular: {
        label: "I.7 ¿La escuela participa de actividades extracurriculares a favor de la actividad física (torneos deportivo-recreativas, campamentos, caminatas?"
    },
    actividad_extracurricular_detalle:{
        label: "I.7.b Detalle"
    },
    // i.8
    propuestas_sociocultural: {
        label: "I.8 ¿La escuela ofrece sus instalaciones para propuestas socioeducativas de promoción de la actividad física, fuera del horario de clases?"
    },
    propuestas_sociocultural_detalle:{
        label:"I.8.b Detalle"
    },
    // i.9
    vestimenta: {
        label:"I.9  ¿La vestimenta recomendada por la escuela favorece la práctica de actividad física diaria?"
    },
    // i.10
    clase_mix: {
        label:"I.10 ¿Las clases de educación física son mixtas?"
    },
    // clase_mix_nivel_educatio:
    // {
    //     label:"Especifique nivel educativo",
    //     hidden:true,
    // },
    // i.11
    enfoque_inclusivo: {
        label: "I.11 ¿ Los espacios promueven la igualdad de oportunidades frente a la práctica de actividad física del todo el alumnado desde un enfoque inclusivo?"
    },
    enfoque_inclusivo_detalle:{
        label: "I.11.b Detalle"
    },
    //  i.12 a
    accesos: {
        label:"I.12.a ¿Los accesos a la escuela son social y físicamente seguros para favorecer el transporte activo de sus alumnos/a?"
    },
    accesos_detalle:{
        label:"Detalle"
    },
    //  i.12 b
    promueve_transporte_activo: {
        label: "I.12.b- ¿La escuela promueve desde sus instalaciones el transporte activo de sus alumnos/as?"
    },
    promueve_transporte_activo_detalle:{
        label:"Detalle"
    },
    // j
    prestacion_servicio:{
        label:"La prestación del servicio proviene de " 
    },
    califica:{
        label: " Del 1 al 5, siendo 1 muy malo y 5 muy bueno ¿Cómo califica la aceptación de los productos por parte de los alumnos? (Entendiendo aceptación como tolerancia al alimento y gusto)",
    }
}
}


export default form_options;