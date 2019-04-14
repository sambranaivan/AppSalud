import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button,Alert, Platform,Image, AsyncStorage, TouchableOpacity} from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import t from 'tcomb-form-native';
// import MultiSelect from 'react-native-multiple-select';
import {
    form1, parte_1,
    seccion_a,
    seccion_b,
    seccion_c,
    seccion_d,
    seccion_e,
    seccion_f,
    seccion_g,
    seccion_h,
    seccion_i
    ,form_options} from './formulario';


const Form = t.form.Form;
var d = new Date()

var form_defaults = {
    userid: Constants.installationId,
    latitud: null,
    longitud: null,
    fecha_realizacion: d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()
}



export default class Encuesta extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            seccion: 'inicio',
            options: form_options , 
            value: form_defaults,
            selectedItems:[],
            location: null,
            errorMessage: null,
            count:null,
        };
    }

    ///GEO
    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
        console.log('Component Digi Mount')
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
            case 'inicio':
                // this.setState({ seccion: 'parte_1' });
                break;
                
            case 'parte_1':
                this.setState({ seccion: 'inicio' });
                break;
            case 'seccion_a':
                this.setState({ seccion: 'parte_1' });
                break;
            case 'seccion_b':
                this.setState({ seccion: 'seccion_a' });
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
            case 'final':
                this.setState({ seccion: 'seccion_i' });
                break;
            // case 'seccion_i':
            //     this.setState({ seccion: 'final' });
            //     break;

            default:
                break;
        }
    }

    siguiente = () => {

        switch (this.state.seccion) 
        {
            case 'inicio':
                this.setState({seccion:'parte_1'});
                break;
            case 'parte_1':
                this.setState({ seccion: 'seccion_a' });
                break;
            case 'seccion_a':
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
                this.setState({ seccion: 'final' });
                break;
        
            default:
                break;
        }
    }


    saveData = async () => {
        try {
            
            nuevo = this._form.getValue(); // use that ref to get the form value
            ///get current data
            if(!nuevo){
                Alert.alert(
                    'Complete Todos los campos',
                    'Presione Aceptar para continuar',
                    [
                        { text: 'Aceptar', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false },)
                return
            }

            // validar campos opcionales
            // if(opcionales)
            // {
               
            // }
           

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
        
    //    if(value.informo){ if(value.informo == 'otro'){
    //         update_options = t.update(update_options, {
    //             fields: { otros_informo: {  hidden: { '$set': false } } }
    //         });
    //     }
    //     else{
    //         update_options = t.update(update_options, {
    //             fields: { otros_informo: { hidden: { '$set': true }}
    //             }
    //         });
    //     }}

        var d = new Date()
        value.timestamp = Math.floor(d.getTime() / 1000)+""
       
        if (this.state.errorMessage) {
            
                } else if (this.state.location) {
                // text = JSON.stringify(this.state.location);
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

    render() {
        const { selectedItems } = this.state;
        return (

            <View style={styles.padre}>
              
                <View style={styles.header}>
                     {/* logo de cabecera */}
                    <Image source={require('../assets/images/header.png')} style={{ height: 50, resizeMode: "contain", flex: 85 }} />
                    {/* botonsito home */}
                    <TouchableOpacity style={{ height: 50, flex: 15, marginLeft: 10,textAlign:"center"}} onPress={() => this.props.navigation.navigate("Home")}>
                        <Image source={require('../assets/images/home.png')} style={{height:"90%",width:"90%"}}/>

                    </TouchableOpacity>
                    
                    
                    <Text style={{ flex: 1 }} >
                    </Text>
                </View>
                <ScrollView style={styles.scroll}>
                    <View style={styles.container}>
                       {/* <View>
                            <Text style={{
                                fontSize: 17, marginBottom: 10,
        fontWeight: '500'}}>Residencia</Text>
                                
                        
                        </View> */}
                        
{this.state.seccion == 'inicio' && <Form ref={c => this._form = c} type={form1} options={this.state.options} value={this.state.value} onChange={this.onChange} />}
{this.state.seccion == 'parte_1' && <Form ref={c => this._form = c} type={parte_1} options={this.state.options} value={this.state.value} onChange={this.onChange} />}
{this.state.seccion == 'seccion_a' && <Form ref={c => this._form = c} type={seccion_a} options={this.state.options} value={this.state.value} onChange={this.onChange}/>}
{this.state.seccion == 'seccion_b' && <Form ref={c => this._form = c} type={seccion_b} options={this.state.options} value={this.state.value} onChange={this.onChange} />}
{this.state.seccion == 'seccion_c' && <Form ref={c => this._form = c} type={seccion_c} options={this.state.options} value={this.state.value} onChange={this.onChange} />}
{this.state.seccion == 'seccion_d' && <Form ref={c => this._form = c} type={seccion_d} options={this.state.options} value={this.state.value} onChange={this.onChange} />}
{this.state.seccion == 'seccion_e' && <Form ref={c => this._form = c} type={seccion_e} options={this.state.options} value={this.state.value} onChange={this.onChange}/>}
{this.state.seccion == 'seccion_f' && <Form ref={c => this._form = c} type={seccion_f} options={this.state.options} value={this.state.value} onChange={this.onChange}/>}
{this.state.seccion == 'seccion_g' && <Form ref={c => this._form = c} type={seccion_g} options={this.state.options} value={this.state.value} onChange={this.onChange}/>}
{this.state.seccion == 'seccion_h' && <Form ref={c => this._form = c} type={seccion_h} options={this.state.options} value={this.state.value} onChange={this.onChange} />}
{this.state.seccion == 'seccion_i' && <Form ref={c => this._form = c} type={seccion_i} options={this.state.options} value={this.state.value} onChange={this.onChange} />}

                            {this.state.seccion !== 'inicio' &&
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
        // backgroundColor: '#f2f2f0',
        
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
    buttonText: {
        padding: 20,
        fontSize: 24,
        color: 'white'
    }
})

// t.form.Form.stylesheet.textbox.normal.color = 'white';
// t.form.Form.stylesheet.controlLabel.normal.color ="white";
t.form.Form.stylesheet.textbox.normal.backgroundColor = "white";
t.form.Form.stylesheet.select.normal.backgroundColor = "white";

t.form.Form.stylesheet.textbox.error.backgroundColor = "white";
t.form.Form.stylesheet.select.error.backgroundColor = "white";


