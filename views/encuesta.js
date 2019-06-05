import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Alert, Platform, Image, Vibration, AsyncStorage, TouchableOpacity, BackHandler} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { Constants, Location, Permissions, MediaLibrary, Camera, FileSystem,  } from 'expo';
import t from 'tcomb-form-native';
// import MultiSelect from 'react-native-multiple-select';
import {
    form1, parte_1,
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
} from './formulario';
import form_options from './options';


const Form = t.form.Form;
var d = new Date()
var camera;
var form_defaults = {
    userid: Constants.installationId,
    latitud: null,
    longitud: null,
    cargo_otro:null,
    fecha_realizacion: d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()
}



export default class Encuesta extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            spinner: false,
            rollGranted: false,
            cameraGranted: false,
            hasCameraPermission: null,
            type: Camera.Constants.Type.front,
            seccion: 'inicio',
            options: form_options , 
            errorMessage: null,
            // loading :false,
            errorMessage_camera: null,
            permissionsGranted: false,
            value: form_defaults,
            selectedItems:[],
            location: null,
            errorMessage: null,
            photos: null,
            status: null,
            status_camera: null,
            count: null,
            newPhotos: false,
            // 
            foto_plato_desayuno:false,
            foto_plato_almuerzo:false,
            foto_plato_merienda:false,
            foto_comedor:false,
            foto_area_elaboracion:false,
            foto_servicio_alimentos:false,
            foto_menu:false,
            foto_bebedero:false,
        };
    }

    ///GEO
    componentWillMount() {
        console.log('Component Did Mount')
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
        
    }

    

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        this.anterior();
        return true;
    }



    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({ maximumAge: 300000 });
        this.setState({ location });
        // console.log("Get LOcation")
        // console.log(location);
    }

    
    
    _updateCount = async () => {
        let count = await AsyncStorage.getItem('count');
        count = parseInt(count) + 1;
        AsyncStorage.setItem('count', count.toString() );
        console.log("update counte");

    }

    anterior = () => {
        switch (this.state.seccion) {
                         
            case 'parte_1':
                this.setState({ seccion: 'inicio' });
                break;
            case 'seccion_a':
                this.setState({ seccion: 'parte_1' });
                break;
          
            case 'seccion_a_2':
                this.setState({ seccion: 'seccion_a' });
                break;
            case 'seccion_a_3':
                this.setState({ seccion: 'seccion_a_2' });
                break;
            case 'seccion_b':
                this.setState({ seccion: 'seccion_a_3' });
                break;
            case 'seccion_c':
                this.setState({ seccion: 'seccion_b' });
                break;
            case 'seccion_d':
                this.setState({ seccion: 'seccion_c' });
                break;
            case 'seccion_e':
                this.setState({ seccion: 'seccion_d' });
                break;
            case 'seccion_f':
                this.setState({ seccion: 'seccion_e' });
                break;
            case 'seccion_g':
                this.setState({ seccion: 'seccion_f' });
                break;
            case 'seccion_h':
                this.setState({ seccion: 'seccion_g' });
                break;
            case 'seccion_i':
                this.setState({ seccion: 'seccion_h' });
                break;
            case 'seccion_j':
                this.setState({ seccion: 'seccion_i' });
                break;
            case 'final':
                this.setState({ seccion: 'seccion_j' });
                break;
            

            default:
                break;
        }
        
        this._scrollToTop();
    }

    siguiente = () => {

        info = this._form.getValue();
        if(true)
        {

            switch (this.state.seccion) 
            {
                case 'inicio':
                    this.setState({seccion:'parte_1'});
                    break;
                case 'parte_1':
                    this.setState({ seccion: 'seccion_a' });
                    break;
                case 'seccion_a':
                    this.setState({ seccion: 'seccion_a_2' });
                    break;
                case 'seccion_a_2':
                    this.setState({ seccion: 'seccion_a_3' });
                    break;
                case 'seccion_a_3':
                    this.setState({ seccion: 'seccion_b' });
                    break;
                case 'seccion_b':
                    this.setState({ seccion: 'seccion_c' });
                    break;
                case 'seccion_c':
                    this.setState({ seccion: 'seccion_d' });
                    break;
                case 'seccion_d':
                    this.setState({ seccion: 'seccion_e' });
                    break;
                    case 'seccion_e':
                    this.setState({ seccion: 'seccion_f' });
                    break;
                case 'seccion_f':
                    this.setState({ seccion: 'seccion_g' });
                    break;
                case 'seccion_g':
                    this.setState({ seccion: 'seccion_h' });
                    break;
                case 'seccion_h':
                    this.setState({ seccion: 'seccion_i' });
                    break;
                case 'seccion_i':
                    this.setState({ seccion: 'seccion_j' });
                    break;
                case 'seccion_j':
                    this.setState({ seccion: 'final' });
                    break;
            
                default:
                    break;
            }
        }
        else{
            alert("Complete todos los campos antes de continuar")
        }
        console.log(this.state.seccion)
        this._scrollToTop();
    }

    saveData = async () => {
        try {
            
            // nuevo = this._form.getValue(); // use that ref to get the form value
            nuevo = this.state.value;
            console.log("Guardando");
            console.log(nuevo);
            let data = await AsyncStorage.getItem('data');
            if (data !== null)//ya hay algo cargado?
            {
                //convierto string a objeto !
                var data = JSON.parse(data);
                //nuevo objeto 
                // var nuevo = { nombre: 'ivan', apellido: 'sambrana' };
                
                //inserto nuevo objeto
                data.push(nuevo);
                //convierto de nuevo a string!
                data = JSON.stringify(data);
                //guardo en el coso locol
                AsyncStorage.setItem('data', data);
                //muestro en consola por la dua
                console.log("data")
                console.log(data);

            }
            else {//es el primero asi que se inicializa
                data = [];
                data.push(nuevo);
                AsyncStorage.setItem('data', JSON.stringify(data));
                console.log("array")
                console.log(data);

            }

            alert("Encuesta Guardada")

            this.setState({ value: null });
            this.setState({count:data.length})
            this._updateCount();
            this.props.navigation.navigate("Home")
        } catch (error) {
            console.log(error)
        }

    }
  
    onChange = (value)=>{
        var update_options = this.state.options;
        
        // como se informo del evento?
        console.log("onchange!!!!!");
        
        // actualizalar los campos foto
        value.foto_plato_desayuno = this.state.foto_plato_desayuno
        value.foto_plato_almuerzo = this.state.foto_plato_almuerzo
        value.foto_plato_merienda = this.state.foto_plato_merienda
        value.foto_comedor = this.state.foto_comedor
        value.foto_area_elaboracion = this.state.foto_area_elaboracion
        value.foto_servicio_alimentos = this.state.foto_servicio_alimentos
        value.foto_menu = this.state.foto_menu
        value.foto_bebedero = this.state.foto_bebedero

        /**
         * CAMPOS CONDICIONALES
         */
        // 1.5 Informante Clave
        if(value.cargo_informante)
        {
            if(value.cargo_informante == "otro")
            {
                update_options = t.update(update_options,{
                    fields:{cargo_otro:{hidden:{'$set':false}}}
                })
            }
            else
            {
                update_options = t.update(update_options, {
                    fields: { cargo_otro: { hidden: { '$set': true } } }
                })
            }
        }
        // 1.9 Control Sanitario
        if (value.ctrl_sanitario) {
            if (value.ctrl_sanitario == "si") {
                update_options = t.update(update_options, {
                    fields: { ctrl_sanitario_detalle: { hidden: { '$set': false } } }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: { ctrl_sanitario_detalle: { hidden: { '$set': true } } }
                })
            }
        }
        // if (value.clase_mix) {
        //     if (value.clase_mix == "no") {
        //         update_options = t.update(update_options, {
        //             fields: { clase_mix_nivel_educativo: { hidden: { '$set': false } } }
        //         })
        //     }
        //     else {
        //         update_options = t.update(update_options, {
        //             fields: { clase_mix_nivel_educativo: { hidden: { '$set': true } } }
        //         })
        //     }
        // }
        // 1.11 lugar fumando
        if (value.lugar_fumador) {
            if (value.lugar_fumador == "otro") {
                update_options = t.update(update_options, {
                    fields: { lugar_otro: { hidden: { '$set': false } } }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: { lugar_otro: { hidden: { '$set': true } } }
                })
            }
        } 
        // A.1 punto de comercializacion y A.2
        if (value.punto_comercializacion) {
            if (value.punto_comercializacion == "si") {
                update_options = t.update(update_options, {
                    fields: { categoria_comercializacion: { hidden: { '$set': false } } }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: { categoria_comercializacion: { hidden: { '$set': true } } }
                })
            }
        } 
        // 
        //A.4 
        if (value.compra_may_men) {
            if (value.compra_may_men == "si") {
                update_options = t.update(update_options, {
                    fields: { compra_may_men_detalle: { hidden: { '$set': false } } }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: { compra_may_men_detalle: { hidden: { '$set': true } } }
                })
            }
        } 
        //A.5
        if (value.capacitacion_comercio) {
            if (value.capacitacion_comercio == "si") {
                update_options = t.update(update_options, {
                    fields: { capacitacion_comercio_detalle: { hidden: { '$set': false } } }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: { capacitacion_comercio_detalle: { hidden: { '$set': true } } }
                })
            }
        } 
        //A.6
        if (value.comercializacion_inmediacion) {
            if (value.comercializacion_inmediacion == "si") {
                update_options = t.update(update_options, {
                    fields: { comercializacion_inmediacion_detalle: { hidden: { '$set': false } } }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: { comercializacion_inmediacion_detalle: { hidden: { '$set': true } } }
                })
            }
        } 
        // B
        // B1 y B3
        if (value.prestacion_servicio_desayuno) {
            if (value.prestacion_servicio_desayuno == "si") {
                update_options = t.update(update_options, {
                    fields: { tipo_gestion_estructurada_desayuno: { hidden: { '$set': false } } }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: { tipo_gestion_estructurada_desayuno: { hidden: { '$set': true } } }
                })
            }
        } 

        if (value.prestacion_servicio_almuerzo) {
            if (value.prestacion_servicio_almuerzo == "si") {
                update_options = t.update(update_options, {
                    fields: {
                        tipo_gestion_estructurada_almuerzo: { hidden: { '$set': false } },
                        acompanan_nino: { hidden: { '$set': false } }    }
                })
            }
            else {

                update_options = t.update(update_options, {
                    fields: { tipo_gestion_estructurada_almuerzo: { hidden: { '$set': true } },
                              acompanan_nino: { hidden: { '$set': true } }   
                
                            }
                })
            }
        } 
        if (value.prestacion_servicio_merienda) {
            if (value.prestacion_servicio_merienda == "si") {
                update_options = t.update(update_options, {
                    fields: { tipo_gestion_estructurada_merienda: { hidden: { '$set': false } } }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: { tipo_gestion_estructurada_merienda: { hidden: { '$set': true } } }
                })
            }
        } 
        //   //B.6
        if (value.lugar_desayuno_merienda) {
            if (value.lugar_desayuno_merienda == "otro") {
                update_options = t.update(update_options, {
                    fields: { lugar_desayuno_merienda_otros: { hidden: { '$set': false } } }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: { lugar_desayuno_merienda_otros: { hidden: { '$set': true } } }
                })
            }
        } 

        //   //B.7
        if (value.lugar_almuerzo) {
            if (value.lugar_almuerzo == "otro") {
                update_options = t.update(update_options, {
                    fields: { lugar_almuerzo_otros: { hidden: { '$set': false } } }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: { lugar_almuerzo_otros: { hidden: { '$set': true } } }
                })
            }
        }  


        //
        //   //B.13
        if (value.menu_especial) {
            if (value.menu_especial == "si") {
                update_options = t.update(update_options, {
                    fields: { menu_especial_otro: { hidden: { '$set': false } } }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: { menu_especial_otro: { hidden: { '$set': true } } }
                })
            }
        }
        //   //B.14
        if (value.alimento_tradicional) {
            if (value.alimento_tradicional == "si") {
                update_options = t.update(update_options, {
                    fields: { alimento_tradicional_detalle: { hidden: { '$set': false } }, 
                    alimento_tradicional_frecuencia: { hidden: { '$set': true } } }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: { alimento_tradicional_detalle: { hidden: { '$set': true } },
                     alimento_tradicional_frecuencia: { hidden: { '$set': true } } }
                })
            }
        }
        // B.15
        if (value.informe_menu) {
            if (value.informe_menu == "si") {
                update_options = t.update(update_options, {
                    fields: { informe_menu_medio: { hidden: { '$set': false } } }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: { informe_menu_medio: { hidden: { '$set': true } } }
                })
            }
        } 
        // B.16
        if (value.durante_comida_jugo_fruta_fresa) {
            if (value.durante_comida_jugo_fruta_fresa == "si") {
                update_options = t.update(update_options, {
                    fields: { durante_comida_jugo_fruta_fresa_agregada: { hidden: { '$set': false } } }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: { durante_comida_jugo_fruta_fresa_agregada: { hidden: { '$set': true } } }
                })
            }
        } 
        // B.16
        if (value.huerta) {
            if (value.huerta == "si") {
                update_options = t.update(update_options, {
                    fields: { huerta_si: { hidden: { '$set': false } } }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: { huerta_si: { hidden: { '$set': true } } }
                })
            }
        } 

        // B.20
        if (value.habitos_comida) {
            if (value.habitos_comida == "si") {
                update_options = t.update(update_options, {
                    fields: { habitos_comida_detalle: { hidden: { '$set': false } } }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: { habitos_comida_detalle: { hidden: { '$set': true } } }
                })
            }
        } 

        //
        // D.1
        // 
        if (value.agua_corriente) {
          
                // por si
                update_options = t.update(update_options, {
                    fields: { 
                        agua_presentacion: { hidden: { '$set': true } },
                        agua_estrategia_segura:{hidden:{'$set':true}},
                        agua_donde_se_obtiene: { hidden: { '$set': true } },
                        agua_donde_se_obtiene_otro: { hidden: { '$set': true } }
                        
                    }
                })
            }
            else {
                // por no
                update_options = t.update(update_options, {

                    fields: { 
                        agua_presentacion: { hidden: { '$set': false } }, 
                        agua_estrategia_segura: { hidden: { '$set': false } },
                        agua_donde_se_obtiene: { hidden: { '$set': false } },
                        agua_donde_se_obtiene_otro: { hidden: { '$set': false } }
                 }
                })
            }

            // subnivel
            if (value.agua_donde_se_obtiene) {
                if (value.agua_donde_se_obtiene == "otro") {
                    update_options = t.update(update_options, {
                        fields: { agua_donde_se_obtiene_otro: { hidden: { '$set': false } } }
                    })
                }
                else {
                    update_options = t.update(update_options, {
                        fields: { agua_donde_se_obtiene_otro: { hidden: { '$set': true } } }
                    })
                }
            }
        
        // D.5
        if (value.hay_bebedero) {
            if (value.hay_bebedero == "si") {
                update_options = t.update(update_options, {
                    fields: { bebedores_cantidad: { hidden: { '$set': false } } }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: { bebedores_cantidad: { hidden: { '$set': true } } }
                })
            }
            
        }


        // Seccion e
        if (value.nino_lavan) {
            if (value.nino_lavan == "si") {
                update_options = t.update(update_options, {
                    fields: { 
                        nino_lavan_donde: { hidden: { '$set': false } },
                        nino_lavan_donde_otro: { hidden: { '$set': false } },
                        nino_lavan_solos: { hidden: { '$set': false } }, 
                    }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: { 
                        nino_lavan_donde: { hidden: { '$set': true } },
                        nino_lavan_donde_otro: { hidden: { '$set': true } },
                        nino_lavan_solos: { hidden: { '$set': false } },
                    }
                })
            }

        }
        // subnivel
        if (value.nino_lavan_donde) {
            if (value.nino_lavan_donde == "otro" && value.nino_lavan == "si") {
                update_options = t.update(update_options, {
                    fields: {
                        
                        nino_lavan_donde_otro: { hidden: { '$set': false } }
                    }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: {
                        
                        nino_lavan_donde_otro: { hidden: { '$set': true } }
                    }
                })
            }

        }
        // cepilla
        // Seccion e
        if (value.nino_cepillan) {
            if (value.nino_cepillan == "si") {
                update_options = t.update(update_options, {
                    fields: {
                        nino_cepillan_donde: { hidden: { '$set': false } },
                        nino_cepillan_donde_otro: { hidden: { '$set': false } },
                        nino_cepillan_solos: { hidden: { '$set': false } },
                    }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: {
                        nino_cepillan_donde: { hidden: { '$set': true } },
                        nino_cepillan_donde_otro: { hidden: { '$set': true } },
                        nino_cepillan_solos: { hidden: { '$set': false } },
                    }
                })
            }

        }
        // subnivel
        if (value.nino_cepillan_donde) {
            if (value.nino_cepillan_donde == "otro" && value.nino_cepillan == "si") {
                update_options = t.update(update_options, {
                    fields: {

                        nino_cepillan_donde_otro: { hidden: { '$set': false } }
                    }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: {

                        nino_cepillan_donde_otro: { hidden: { '$set': true } }
                    }
                })
            }

        }
        // miran tele?
        // Seccion e
        if (value.pantallas_vista) {
            if (value.pantallas_vista !== "nunca" && value.pantallas_vista !== "nosabe") {
                update_options = t.update(update_options, {
                    fields: {
                        pantallas_vista_celular: { hidden: { '$set': false } },
                        pantallas_vista_tele: { hidden: { '$set': false } },
                        pantallas_vista_compu: { hidden: { '$set': false } },
                        pantallas_vista_otro: { hidden: { '$set': false } },
                       

                    }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: {
                        pantallas_vista_celular: { hidden: { '$set': true } },
                        pantallas_vista_tele: { hidden: { '$set': true } },
                        pantallas_vista_compu: { hidden: { '$set': true } },
                        pantallas_vista_otro: { hidden: { '$set': true } },
                       
                    }
                })
            }

        }
        

        // F.1
        if (value.promo_salud) {
            if (value.promo_salud == "si") {
                update_options = t.update(update_options, {
                    fields: { 
                        promo_salud_detalle: { hidden: { '$set': false } }, 
                        promo_tematicas_alimentacion_saludable: { hidden: { '$set': false } }, 
                        prome_tematicas_alimentacion_activida_fisica: { hidden: { '$set': false } }, 
                        promo_tematicas_alimentacion_consumo_alcohol: { hidden: { '$set': false } }, 
                        promo_tematicas_alimentacion_consumo_tabaco: { hidden: { '$set': false } }, 
                        promo_tematicas_alimentacion_consumo_sal: { hidden: { '$set': false } }, 
                        promo_tematicas_observaciones: { hidden: { '$set': false } },
                            promo_tematicas_alimentacion_agua_segura: { hidden: { '$set': false } },
                        promo_tematicas_alimentacion_huertas: { hidden: { '$set': false } },

                    
                    }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: { 
                        promo_salud_detalle: { hidden: { '$set': true } },
                        promo_tematicas_alimentacion_saludable: { hidden: { '$set': true } },
                        prome_tematicas_alimentacion_activida_fisica: { hidden: { '$set': true } },
                        promo_tematicas_alimentacion_consumo_alcohol: { hidden: { '$set': true } },
                        promo_tematicas_alimentacion_consumo_tabaco: { hidden: { '$set': true } },
                        promo_tematicas_alimentacion_consumo_sal: { hidden: { '$set': true } },
                        promo_tematicas_observaciones: { hidden: { '$set': true } },
                        promo_tematicas_alimentacion_agua_segura: { hidden: { '$set': true } },
                        promo_tematicas_alimentacion_huertas:{ hidden: { '$set': true } },
                    }
                })
            }
        }
        // F.3
        if (value.clase_extracurricular) {
            if (value.clase_extracurricular == "si") {
                update_options = t.update(update_options, {
                    fields: { clase_extracurricular_detalle: { hidden: { '$set': false } } }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: { clase_extracurricular_detalle: { hidden: { '$set': true } } }
                })
            }
        }
        // F.4 programas ean
        if (value.programas_ean) {
            if (value.programas_ean == "si") {
                update_options = t.update(update_options, {
                    fields: { 
                        materia_especifica_existente_detalle: { hidden: { '$set': false } },
                        programas_ean_materias: { hidden: { '$set': false } },
                     }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: { 
                        materia_especifica_existente_detalle: { hidden: { '$set': true } },
                        programas_ean_materias: { hidden: { '$set': true } },
                     }
                })
            }
        }
        // G.1
        if (value.publicidad_alimento) {
            if (value.publicidad_alimento == "si") {
                update_options = t.update(update_options, {
                    fields: { 
                        publicidad_alimento_paredes: { hidden: { '$set': false } } ,
                        publicidad_alimento_mobiliario: { hidden: { '$set': false } },
                        publicidad_alimento_mesa: { hidden: { '$set': false } },
                        publicidad_alimento_menu: { hidden: { '$set': false } },
                        publicidad_alimento_fachada: { hidden: { '$set': false } },
                        publicidad_alimento_otro: { hidden: { '$set': false } },
                    
                    }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: {
                        publicidad_alimento_paredes: { hidden: { '$set': true } },
                        publicidad_alimento_mobiliario: { hidden: { '$set': true } },
                        publicidad_alimento_mesa: { hidden: { '$set': true } },
                        publicidad_alimento_menu: { hidden: { '$set': true } },
                        publicidad_alimento_fachada: { hidden: { '$set': true } },
                        publicidad_alimento_otro: { hidden: { '$set': true } },

                    }
                })
            }
        }
        // G.3
        if (value.incentivo_consumo) {
            if (value.incentivo_consumo == "si") {
                update_options = t.update(update_options, {
                    fields: { incentivo_consumo_detalle: { hidden: { '$set': false } } }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: { incentivo_consumo_detalle: { hidden: { '$set': true } } }
                })
            }
        }
         // H.3
        if (value.promueven_espacio_lactiancia) {
            if (value.promueven_espacio_lactiancia == "si") {
                update_options = t.update(update_options, {
                    fields: { promueven_espacio_lactiancia_detalle: { hidden: { '$set': false } } }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: { promueven_espacio_lactiancia_detalle: { hidden: { '$set': true } } }
                })
            }
        }
        // I
        if (value.profe_titulo) {
            if (value.profe_titulo == "si") {
                update_options = t.update(update_options, {
                    fields: { profe_titulo_detalle_no: { hidden: { '$set': false } } }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: { profe_titulo_detalle_no: { hidden: { '$set': true } } }
                })
            }
        }

        if (value.evaluacion_aptitud) {
            if (value.evaluacion_aptitud == "no") {
                update_options = t.update(update_options, {
                    fields: { evaluacion_aptitud_detalle_no: { hidden: { '$set': false } } }
                })
            }
            else {
                update_options = t.update(update_options, {
                    fields: { evaluacion_aptitud_detalle_no: { hidden: { '$set': true } } }
                })
            }
        }

        if (value.apto_medico) {
            if (value.apto_medico == "no") {
                update_options = t.update(update_options, {
                    fields: { apto_medico_detalle_no: { hidden: { '$set': false } } 
                        , detalle_exigencias: { hidden: { "$set": true } }
                        , detalle_normativa: { hidden: { "$set": true } }
                        , detalle_exige_niveles: { hidden: { "$set": true } }
                        , detalle_cuantos_alumnos: { hidden: { "$set": true } }
                        , detalle_porcentajes_alumnos_primaria: { hidden: { "$set": true } }
                        , detalle_porcentajes_alumnos_secundaria: { hidden: { "$set": true } }
                }
                })
            }
            else {
                        update_options = t.update(update_options, {
                        fields: { apto_medico_detalle_no: { hidden: { '$set': true } } 
                            , detalle_exigencias:{hidden:{"$set":false}}
                            ,detalle_normativa:{hidden:{"$set":false}}
                            ,detalle_exige_niveles:{hidden:{"$set":false}}
                            ,detalle_cuantos_alumnos:{hidden:{"$set":false}}
                            ,detalle_porcentajes_alumnos_primaria:{hidden:{"$set":false}}
                            ,detalle_porcentajes_alumnos_secundaria:{hidden:{"$set":false}}
                }
                })
            }
        }

        if(value.rama){
            switch(value.rama)
            {
                case "inicial":
                    update_options = t.update(update_options, {
                        fields: {
                               actividad_fisica_inicial_dias: { hidden: { '$set': false } }
                            ,  actividad_fisica_inicial_minutos: { hidden: { "$set": false } }
                            ,  actividad_fisica_primer_ciclo_dias: { hidden: { "$set": true } }
                            ,  actividad_fisica_primer_ciclo_minutos: { hidden: { "$set": true } }
                            ,  actividad_fisica_segundo_ciclo_dias: { hidden: { "$set": true } }
                            ,  actividad_fisica_segundo_ciclo_minutos: { hidden: { "$set": true } }
                            ,  actividad_fisica_secundaria_ciclo_dias: { hidden: { "$set": true } }
                            ,  actividad_fisica_secundaria_ciclo_minutos: { hidden: { "$set": true } }}})
                break;
                case "primaria":
                    update_options = t.update(update_options, {
                        fields: {
                            actividad_fisica_inicial_dias: { hidden: { '$set': true } }
                            , actividad_fisica_inicial_minutos: { hidden: { "$set": true } }
                            , actividad_fisica_primer_ciclo_dias: { hidden: { "$set": false } }
                            , actividad_fisica_primer_ciclo_minutos: { hidden: { "$set": false } }
                            , actividad_fisica_segundo_ciclo_dias: { hidden: { "$set": false } }
                            , actividad_fisica_segundo_ciclo_minutos: { hidden: { "$set": false } }
                            , actividad_fisica_secundaria_ciclo_dias: { hidden: { "$set": true } }
                            , actividad_fisica_secundaria_ciclo_minutos: { hidden: { "$set": true } }
                        }
                    })
                    break;
                case "secundaria":
                case "secundaria_tecnica":
                case "secundaria_agraria_cept":
                    update_options = t.update(update_options, {
                        fields: {
                            actividad_fisica_inicial_dias: { hidden: { '$set': true } }
                            , actividad_fisica_inicial_minutos: { hidden: { "$set": true } }
                            , actividad_fisica_primer_ciclo_dias: { hidden: { "$set": true } }
                            , actividad_fisica_primer_ciclo_minutos: { hidden: { "$set": true } }
                            , actividad_fisica_segundo_ciclo_dias: { hidden: { "$set": true } }
                            , actividad_fisica_segundo_ciclo_minutos: { hidden: { "$set": true } }
                            , actividad_fisica_secundaria_ciclo_dias: { hidden: { "$set": false } }
                            , actividad_fisica_secundaria_ciclo_minutos: { hidden: { "$set": false } }
                        }
                    })
                    break;
            }
        }












        var d = new Date()
        value.timestamp = Math.floor(d.getTime() / 1000)+""
       
        if (this.state.errorMessage) {
            
                } else if (this.state.location) {
                
                        value.longitud= this.state.location.coords.longitude ;
                        value.latitud =     this.state.location.coords.latitude;
                }


        this.setState({ options: update_options, value: value });
        console.log(value);
    }

    

 

  ///cout
    _getRegCount = async () => {
        let count = 0;
        let data = await AsyncStorage.getItem('data');

        if (data !== null)//ya hay algo cargado?
        {
            data = JSON.parse(data);
            count = data.length;
        }
        else {
            count = 0;
        }

        console.log(count);
        this.setState({ count: count });

    }
    _scrollToTop = () => {
        if (this.scrollview) {
            this.scrollview.scrollTo({ x: 0, y: 0, animated: true });
        }
    }

    abrirCamara = (referencia) =>{
        console.log(referencia)
        this.setState({showCamera:true});
        this.setState({pictureFor:referencia});
    }

    takePicture = async () =>{
        // this.setState({loading:true})
        Vibration.vibrate(100);
        console.log('tpaca');
        const { uri } = await this.camera.takePictureAsync({ skipProcessing: true });
        console.log('uri', uri);
        switch (this.state.pictureFor) {
                case ("foto_plato_desayuno"):
                    this.setState({foto_plato_desayuno:uri})
                    break;
                
                case ("foto_plato_almuerzo"):
                    this.setState({foto_plato_almuerzo:uri})
                    break;
                
                case ("foto_plato_merienda"):
                    this.setState({foto_plato_merienda:uri})
                    break;
                
                case ("foto_comedor"):
                    this.setState({foto_comedor:uri})
                    break;
                
                case ("foto_area_elaboracion"):
                    this.setState({foto_area_elaboracion:uri})
                    break;
                
                case ("foto_servicio_alimentos"):
                    this.setState({foto_servicio_alimentos:uri})
                    break;
                
                case ("foto_menu"):
                    this.setState({foto_menu:uri})
                    break;
                
                case ("foto_bebedero"):
                    this.setState({foto_bebedero:uri})
                    break;
                
            }
            
            this.setState({ showCamera: false });
        // const asset = await MediaLibrary.createAssetAsync(uri);
        
        // // console.log('asset', asset);
        // MediaLibrary.createAlbumAsync('Encuestas', asset)
        //     .then(() => {
        //         Alert.alert('Foto Guardada')
        //         Vibration.vibrate(100);
        //         console.log(this.state)
        //     })
        //     .catch(error => {
        //         // Alert.alert('An Error Occurred!')
        //     });
        
    }



    render() {
        
        return (
           
            <View style={styles.padre}>
                {this.state.showCamera && <View style={{height:"100%",}}>
                    <Camera style={styles.camera} ref={ref => { this.camera = ref; }} > 
                        <View
                            style={styles.bottomBar}>
                            
 
                                
                                <TouchableOpacity style={{
                                    height: 100,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }} onPress={() => this.takePicture()}>
                                    <Image source={require('../assets/images/camera.png')} style={{ height: 100, resizeMode: "contain" }} />
                                </TouchableOpacity>
                                
                            
                        </View>
                </Camera>
                </View>}
                <View style={styles.header}>
                     {/* logo de cabecera */}
                    <Image source={require('../assets/images/header.png')} style={{ height: 50, resizeMode: "contain", flex: 85 }} />
                    {/* botonsito home */}
                    <TouchableOpacity style={{ height: 50, flex: 15, marginLeft: 10,textAlign:"center"}} onPress={() => this.props.navigation.navigate("Home")}
                    >
                        <Image source={require('../assets/images/home.png')} style={{height:"90%",width:"90%"}}/>

                    </TouchableOpacity>
                    
                    
                    <Text style={{ flex: 1 }} >
                    </Text>
                </View>
                
                    {/* <Camera ref={ref => { this.camera = ref; }}
                        style={{
                            flex: 1,
                            height: 600
                        }}
                    /> */}
                
                <ScrollView style={styles.scroll} ref={(scrollview) => { this.scrollview = scrollview }}> 
                    <View style={styles.container}>
                        <Spinner
                            visible={this.state.spinner}
                            textContent={'Cargando...'}
                            textStyle={styles.spinnerTextStyle}
                        />                       
{this.state.seccion == 'inicio' && 
<View>
    <Text style={styles.titulos}>Instrumento de recolección de datos</Text> 
    <Form ref={c => this._form = c} type={form1} options={this.state.options} value={this.state.value} onChange={this.onChange} />
</View>
}
{this.state.seccion == 'parte_1' && 
<View>
                            <Text style={styles.titulos}>PARTE 1: IDENTIFICACIÓN DE LA ESCUELA</Text> 
    <Form ref={c => this._form = c} type={parte_1} options={this.state.options} value={this.state.value} onChange={this.onChange} />
</View>}
{this.state.seccion == 'seccion_a' && 
<View>
                            <Text style={styles.titulos}>SECCIÓN A: VENTAS DE ALIMENTOS Y BEBIDAS AL INTERIOR DE LA ESCUELA</Text> 
    <Form ref={c => this._form = c} type={seccion_a} options={this.state.options} value={this.state.value} onChange={this.onChange}/>
                          
</View>}
{this.state.seccion == 'seccion_a_2' &&
    <View>
        <Text style={styles.titulos}>SECCIÓN A: VENTAS DE ALIMENTOS Y BEBIDAS AL INTERIOR DE LA ESCUELA</Text>
        <Form ref={c => this._form = c} type={seccion_a_2} options={this.state.options} value={this.state.value} onChange={this.onChange} />

    </View>}
{this.state.seccion == 'seccion_a_3' &&
    <View>
        <Text style={styles.titulos}>SECCIÓN A: VENTAS DE ALIMENTOS Y BEBIDAS AL INTERIOR DE LA ESCUELA</Text>
        <Form ref={c => this._form = c} type={seccion_a_3} options={this.state.options} value={this.state.value} onChange={this.onChange} />

    </View>}
{this.state.seccion == 'seccion_b' && 
<View>
                            <Text style={styles.titulos}>SECCIÓN B: COMEDORES, CANTINAS Y BUFETES SALUDABLES – CRITERIOS NUTRICIONALES</Text> 
    <Form ref={c => this._form = c} type={seccion_b} options={this.state.options} value={this.state.value} onChange={this.onChange} />
                            <TouchableOpacity style={this.state.foto_plato_desayuno && styles.buttonSmallCheck || styles.buttonSmall} 
                                    onPress={() => this.abrirCamara('foto_plato_desayuno')}>
                                <Text style={styles.buttonTextSmall}>Tomar Foto del Desayuno</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={this.state.foto_plato_almuerzo && styles.buttonSmallCheck || styles.buttonSmall} 
                                     onPress={() => this.abrirCamara('foto_plato_almuerzo')}>
                                <Text style={styles.buttonTextSmall}>Tomar Foto del Almuerzo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={this.state.foto_plato_merienda && styles.buttonSmallCheck || styles.buttonSmall} 
                                     onPress={() => this.abrirCamara('foto_plato_merienda')}>
                                <Text style={styles.buttonTextSmall}>Tomar Foto del Merienda</Text>
                            </TouchableOpacity>
                            {/*  */}
                            <TouchableOpacity style={this.state.foto_comedor && styles.buttonSmallCheck || styles.buttonSmall} 
                                     onPress={() => this.abrirCamara('foto_comedor')}>
                                <Text style={styles.buttonTextSmall}>Tomar Foto del Comedor</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={this.state.foto_area_elaboracion && styles.buttonSmallCheck || styles.buttonSmall} 
                                     onPress={() => this.abrirCamara('foto_area_elaboracion')}>
                                <Text style={styles.buttonTextSmall}>Tomar Foto del area de elaboracion</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={this.state.foto_servicio_alimentos && styles.buttonSmallCheck || styles.buttonSmall} 
                                     onPress={() => this.abrirCamara('foto_servicio_alimentos')}>
                                <Text style={styles.buttonTextSmall}>Tomar Foto del area de Servicios</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={this.state.foto_menu && styles.buttonSmallCheck || styles.buttonSmall} 
                                     onPress={() => this.abrirCamara('foto_menu')}>
                                <Text style={styles.buttonTextSmall}>Tomar Foto del menú</Text>
                            </TouchableOpacity>
                           
</View>}
{this.state.seccion == 'seccion_c' && 
<View>
                            <Text style={styles.titulos}>SECCIÓN C: COCINEROS/AS Y AYUDANTES DE COCINA</Text> 
    <Form ref={c => this._form = c} type={seccion_c} options={this.state.options} value={this.state.value} onChange={this.onChange} />
</View>}
{this.state.seccion == 'seccion_d' && 
<View>
                            <Text style={styles.titulos}>SECCIÓN D: ACCESO AL AGUA SEGURA</Text> 
    <Form ref={c => this._form = c} type={seccion_d} options={this.state.options} value={this.state.value} onChange={this.onChange} />
    
                            <TouchableOpacity style={this.state.foto_bebedero && styles.buttonSmallCheck || styles.buttonSmall} 
                            onPress={() => this.abrirCamara('foto_bebedero')}>
                            <Text style={styles.buttonTextSmall}>Tomar Foto del Bebedero</Text>
    </TouchableOpacity>
</View>}
{this.state.seccion == 'seccion_e' && 
<View>
                            <Text style={styles.titulos}>SECCIÓN E: COMENSALIDAD Y HÁBITOS</Text> 
    <Form ref={c => this._form = c} type={seccion_e} options={this.state.options} value={this.state.value} onChange={this.onChange}/>
</View>}
{this.state.seccion == 'seccion_f' && 
<View>
                            <Text style={styles.titulos}>SECCIÓN F: PROMOCION DE LA SALUD - EDUCACIÓN ALIMENTARIA Y NUTRICIONAL (EAN)</Text> 
    <Form ref={c => this._form = c} type={seccion_f} options={this.state.options} value={this.state.value} onChange={this.onChange}/>
</View>}
{this.state.seccion == 'seccion_g' && 
<View>
                            <Text style={styles.titulos}>SECCIÓN G: EXPOSICIÓN A PUBLICIDAD DE ALIMENTOS Y BEBIDAS</Text> 
    <Form ref={c => this._form = c} type={seccion_g} options={this.state.options} value={this.state.value} onChange={this.onChange}/>
</View>}
{this.state.seccion == 'seccion_h' && 
<View>
                            <Text style={styles.titulos}>SECCIÓN H: LACTANCIA</Text> 
    <Form ref={c => this._form = c} type={seccion_h} options={this.state.options} value={this.state.value} onChange={this.onChange} />
</View>}
{this.state.seccion == 'seccion_i' && 
<View>
                            <Text style={styles.titulos}>SECCIÓN I: ACTIVIDAD FÍSICA</Text> 
    <Form ref={c => this._form = c} type={seccion_i} options={this.state.options} value={this.state.value} onChange={this.onChange} />
    </View>}
                        {this.state.seccion == 'seccion_j' &&
                            <View>
                            <Text style={styles.titulos}>SECCIÓN J: PRESTACIÓN ALIMENTARIA</Text>
                                <Form ref={c => this._form = c} type={seccion_j} options={this.state.options} value={this.state.value} onChange={this.onChange} />
                            </View>}
                        {this.state.seccion == 'final' &&
                            <View style={{flex:2}}>
                            {this.state.foto_plato_desayuno && <Image  style={{flex:1,resizeMode:'cover',height:100,width:"50%"}} source={{uri:this.state.foto_plato_desayuno}}></Image>}
                            {this.state.foto_plato_almuerzo && <Image style={{ flex: 1, resizeMode: 'cover', height:100, width: "50%" }} source={{ uri: this.state.foto_plato_almuerzo }}></Image>}
                            {this.state.foto_plato_merienda && <Image style={{ flex: 1, resizeMode: 'cover', height:100, width: "50%" }} source={{ uri: this.state.foto_plato_merienda }}></Image>}
                            {this.state.foto_comedor && <Image style={{ flex: 1, resizeMode: 'cover', height:100, width: "50%" }} source={{ uri: this.state.foto_comedor }}></Image>}
                            {this.state.foto_area_elaboracion && <Image style={{ flex: 1, resizeMode: 'cover', height:100, width: "50%" }} source={{ uri: this.state.foto_area_elaboracion }}></Image>}
                            {this.state.foto_servicio_alimentos && <Image style={{ flex: 1, resizeMode: 'cover', height:100, width: "50%" }} source={{ uri: this.state.foto_servicio_alimentos }}></Image>}
                            {this.state.foto_menu && <Image style={{ flex: 1, resizeMode: 'cover', height:100, width: "50%" }} source={{ uri: this.state.foto_menu }}></Image>}
                            {this.state.foto_bebedero && <Image style={{ flex: 1, resizeMode: 'cover', height:100, width: "50%" }} source={{ uri: this.state.foto_bebedero }}></Image>}
                               
                            </View>}

                        {this.state.seccion !== 'inicio' && this.state.seccion !== 'final' &&
                        <View style={{flexDirection:'row',flex:2}}>
                                <TouchableOpacity onPress={this.anterior} style={styles.button}>
                                    <Text style={styles.buttonText}>Atras</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.siguiente} style={styles.button}>
                                    <Text style={styles.buttonText}>Siguiente</Text>
                                </TouchableOpacity></View>
                            }
                            {this.state.seccion == 'inicio' &&
                            <View>
                                <TouchableOpacity onPress={this.siguiente} style={styles.button}>
                                    <Text style={styles.buttonText}>Siguiente</Text>
                                </TouchableOpacity></View>
                            }
                            {
                                this.state.seccion == 'final' &&
                            <View>
                                <TouchableOpacity onPress={this.saveData} style={styles.button}>
                                    <Text style={styles.buttonText}>Guardar</Text>
                                </TouchableOpacity>
                            </View>
                            }
                        
                        
                    </View >
                </ScrollView>
            </View>
        );
    }
}

/**
 * CSS
 */
const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: "#7aba48",
        flexDirection: 'row',

    },
    scroll: {

    },
    padre: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        // backgroundColor: '#8fbd4d'

    },
    container: {
        // justifyContent: 'center',
        // flex:1,
        // marginTop: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#f2f2f0',
        
        // backgroundColor: '#ffffff',
    },
    titulo: {
        // justifyContent:'center',
        textAlign: 'center',
        fontWeight: 'bold',
        color: "white",
        fontSize: 30,
        fontWeight: 'bold',
        flex: 9
    },
    button: {
        marginBottom: 30,
        // width: 260,
        alignItems: 'center',
        backgroundColor: '#8fbd4d',
        flex:1,
    },
    buttonSmall: {
        marginBottom: 30,
        // width: 260,
        // height:30,
        alignItems: 'center',
        backgroundColor: '#1d8dff',
        flex: 1,
    },
    buttonSmallCheck: {
        marginBottom: 30,
        // width: 260,
        // height:30,
        alignItems: 'center',
        backgroundColor: '#00cc00',
        flex: 1,
    },
    buttonText: {
        padding: 20,
        fontSize: 24,
        color: 'white'
    },
    buttonTextSmall: {
        padding: 20,
        fontSize: 18,
        color: 'white'
    },
    spinnerTextStyle: {
        color: '#FFF'
    },
    titulos:{
        fontSize: 17, marginBottom: 10,
        fontWeight: '500'
    },
    bottomBar: {
        paddingBottom: 5,
        // backgroundColor: 'red',
        // alignSelf: 'flex-end',
        marginTop: '120%',
        height: 100,
        // justifyContent: 'space-between',
        justifyContent: 'center',
        // flex: 0.12,
        flexDirection: 'row',
    },
    bottomButton: {
        flex: 0.3,
        height: 58,
        justifyContent: 'center',
        alignItems: 'center',
    },
    camera:{
        flex: 1,
        // justifyContent: 'space-between',
    }
})

// t.form.Form.stylesheet.textbox.normal.color = 'white';
// t.form.Form.stylesheet.controlLabel.normal.color ="white";
t.form.Form.stylesheet.textbox.normal.backgroundColor = "white";
t.form.Form.stylesheet.select.normal.backgroundColor = "white";

t.form.Form.stylesheet.textbox.error.backgroundColor = "white";
t.form.Form.stylesheet.select.error.backgroundColor = "white";


