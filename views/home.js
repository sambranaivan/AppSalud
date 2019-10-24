import React, { Component } from 'react';
import { StyleSheet, Text, View, NetInfo, Image, TouchableOpacity, BackHandler,AsyncStorage, AppRegistry, Alert, CameraRoll, Button, Share,Clipboard} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { Constants, Location, MediaLibrary, Permissions, Camera, FileSystem} from 'expo';


var camera;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      rollGranted: false,
      cameraGranted: false,
      hasCameraPermission: null,
      type: Camera.Constants.Type.front,
      timestamp: new Date().getTime(),
      spinner:false,
      location:null,
      errorMessage:null,
      errorMessage_camera: null,
      permissionsGranted:false,
      isConnected: null,
      photos:null,
      status:null,
      status_camera: null,
      count:null,
      newPhotos: false,
    }
  }

  // Check internte
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }


 

  handleBackPress = () => {
   console.log("Prevente Back")
   return true
  }

  componentDidMount() 
  {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'encuesta').catch(e => {
      console.log(e, 'Directory exists');
    });
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      this._handleConnectivityChange
    );
    NetInfo.isConnected.fetch().done(
      (isConnected) => { this.setState({ isConnected }); }
    );
    ///inicializo el contador
    this._getRegCount();

    // this._getPhotosAsync().catch(error => {
    //   console.error(error);
    // });

    this.getCameraRollPermissions();
  }

  async getCameraRollPermissions() {
    const { status_camera } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ permissionsGranted: status_camera === 'granted' });
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === 'granted') {
      this.setState({ rollGranted: true });
    } else {
      console.log('Uh oh! The user has not granted us permission.');
      this.setState({ rollGranted: false });
    }
  }

  

  async _getPhotosAsync() {
    let { status_camera } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status_camera !== 'granted') {
      this.setState({
        errorMessage_camera: 'Permission to access location was denied',
      });
    }



    let photos = await CameraRoll.getPhotos({ first: 20 });
    this.setState({ photos });
    // console.log(photos);

    for (let { node: photo } of photos.edges) {
      // console.log(photo.image.uri)
      // console.log(photo.type)
      type = photo.type;
      localUri = photo.image.uri;
      filename = localUri.split('/').pop()+".png";
      this.subirfoto(localUri,filename,type);
      // 
    }

  }

  subirfoto = async (localUri,filename,type) => {
    console.log("subiendo "+localUri);
    formData = new FormData();
    formData.append('photo', { uri: localUri, name: filename, type });

    // console.log(formData);
    // response = await fetch('http://192.168.0.100/test/upload.php', 
    response = await fetch('http://http://13.90.59.76/salud/api/subirfoto', 
    {
      method: 'POST',
      body: formData,
      header: {
        'content-type': 'multipart/form-data',
      },
    }).then(console.log("ok"))
   
  }

  subirAllPhotos = async(data) => {
    console.log("SUBIR ALL PHOTOS")
    this.setState({ spinner: true });
    // primero retomo todo el array y busco las fotos en cada caso?
    colleccion = JSON.parse(data);
    i = 1;
    colleccion.forEach(element => {
      console.log(element)
      i++;
      type = 'image/jpeg';
      if(element.foto_bebedero)
        {
        localUri = element.foto_bebedero;
        filename = localUri.split('/').pop();
        console.log("subiendo"+filename);
        this.subirfoto(localUri, filename, type);
        }
      if (element.foto_plato_desayuno) {
        localUri = element.foto_plato_desayuno;
        filename = localUri.split('/').pop();
        console.log("subiendo"+filename);
        this.subirfoto(localUri, filename, type);
      }
      if (element.foto_plato_almuerzo) {
        localUri = element.foto_plato_almuerzo;
        filename = localUri.split('/').pop();
        console.log("subiendo"+filename);
        this.subirfoto(localUri, filename, type);
      }
      if (element.foto_plato_merienda) {
        localUri = element.foto_plato_merienda;
        filename = localUri.split('/').pop();
        console.log("subiendo"+filename);
        this.subirfoto(localUri, filename, type);
      }
      if (element.foto_comedor) {
        localUri = element.foto_comedor;
        filename = localUri.split('/').pop();
        console.log("subiendo"+filename);
        this.subirfoto(localUri, filename, type);
      }
      if (element.foto_area_elaboracion) {
        localUri = element.foto_area_elaboracion;
        filename = localUri.split('/').pop();
        console.log("subiendo"+filename);
        this.subirfoto(localUri, filename, type);
      }
      if (element.foto_servicio_alimentos) {
        localUri = element.foto_servicio_alimentos;
        filename = localUri.split('/').pop();
        console.log("subiendo"+filename);
        this.subirfoto(localUri, filename, type);
      }
      if (element.foto_menu) {
        localUri = element.foto_menu;
        filename = localUri.split('/').pop();
        console.log("subiendo"+filename);
        this.subirfoto(localUri, filename, type);
      }      
    });
    this.setState({ spinner: false });
  }


  enviar = async () => {
    // check conecttion
    if ( this.state.isConnected )
    {

    
    // let server = "192.168.1.15"//totolink
    // let server = "10.1.17.203"//estadistica
    // let server = "13.90.59.76"//Azure Chamaoke
    // let server = "192.168.0.16/salud"//Azure Chamaoke
      let server = "http://linsse.com.ar/salud"//Azure Chamaoke
    console.log("send data to "+server);
    this.setState({spinner:true});
    
    /**
     * SUBIR FORMULARIO
     */
   try {
     let data = await AsyncStorage.getItem('data');
    
     console.log(data);
     if (data !== null)//ya hay algo cargado?
     {
      // enviar la data

       // http://localhost/apiEncuestoff/public/api/carnaval/send
       const myRequest = new Request('http://linsse.com.ar/salud/api/subir',
         {
           method: 'POST',
           body: data
         });


       fetch(myRequest)
         .then(response => {
           if (response.status === 200) {
             this.setState({ spinner: false });

            Alert.alert(
  'Encuestas Actualizada',
  'Presione Aceptar para continuar',
  [
    {text: 'Aceptar', onPress: () => console.log('OK Pressed')},
  ],
  {cancelable: false},
);
           } else {
            //  console.log(response);
             throw new Error('Something went wrong on api server!');
           }
         })
         .then(response => {
           console.log("Debug")
           console.debug(response);
           // ...
         }).catch(error => {
           console.error(error);
         });

      // fin de envio
       /**
    * Subir fotos si hay
    */
       this.subirAllPhotos(data);

    //  
     }
     else
     {
       this.setState({ spinner: false });
       alert("No Hay Encuestas que Enviar")
     }

     
   } catch (error) {
     alert(error)
   }

   

  }
  else{
    alert("No hay Coneccion a Internet");
  }

  }

 
  


  ViewData = async()=>{
    try {
      let data = await AsyncStorage.getItem('data');
      Clipboard.setString(data);
     alert("Datos Copiados");
    
    } catch (error) {
      alert(error)
    }
  }

  CleanData = async()=>{
    try {
      AsyncStorage.removeItem('data');
      console.log("limpio");
      alert("Encuestas Borradas, contador en 0")
      this.setState({ count: 0 });
    } catch (error) {
      console.log(error)
    }
  }

  Allkeys = async()=>{
    try {
      console.log(AsyncStorage.removeItem('getAllKeys'));
    } catch (error) {
      console.log(error)
    }
  }


  

  

 
  _getRegCount = async () => {
    let count = 0;
    let data = await AsyncStorage.getItem('data');

    if (data !== null)//ya hay algo cargado?
    {
      data = JSON.parse(data);
      count  = data.length;
    }
    else {
      count = 0;
    }
   

    // console.log(count);
    this.setState({count:count});
    AsyncStorage.setItem('count', count.toString());
    // a partir de aca leo las variables internas nomas?
    setInterval(this._updateCount,15000)

  }

  _updateCount = async () =>{
    let data = await AsyncStorage.getItem('count');
    // console.log(data);
    this.setState({ count: data });
  }

  _handleConnectivityChange = (isConnected) => {
    this.setState({
      isConnected,
    });
  };
  // \GEO

  takePicture = async () => 
  {
    // console.log("sacar foto")
    // // console.log(camera)
    // if (this.camera) {
    //   let photo = await this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
    // }
    console.log('tpaca');
    const { uri } = await this.camera.takePictureAsync();
    console.log(uri);
    const asset = await MediaLibrary.createAssetAsync(uri);
    console.log('asset', asset);
    MediaLibrary.createAlbumAsync('Expo', asset)
      .then(() => {
        Alert.alert('Foto Guardada')
      })
      .catch(error => {
        // Alert.alert('An Error Occurred!')
      });
  }

  onPictureSaved = async photo => {
    await FileSystem.copyAsync({
      from: photo.uri,
      to: `${FileSystem.documentDirectory}encuesta/${Date.now()}.jpg`,
    });
    this.setState({ newPhotos: true });
    // console.log(`${FileSystem.documentDirectory}photos/${Date.now()}.jpg`)
    
  }

  share = async () => {
    try {
      let data = await AsyncStorage.getItem('data');
      Clipboard.setString(data);

    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    
    return (
      
      <View style={styles.padre}>
        
        {/* <View style={{
          marginTop: 10,
          height: 300,
         flex:1
        }}>
          <Camera ref={ref => { this.camera = ref; }}
            style={styles.camera}
          />

          </Camera> 
        <Image source={require('../assets/images/carnaval.png')} style={{ height: "100%", resizeMode: "contain",flex:1 }} />
        </View> */}
        <View style={styles.container}>
          <Spinner
            visible={this.state.spinner}
            textContent={'Cargando...'}
            textStyle={styles.spinnerTextStyle}
          />

         
        {/* <View> */}
           {/* <Button title="Limpiar Conteo" onPress={this.CleanData}/> */}
          <Text>{this.state.isConnected ? 'Online' : 'Offline'}</Text>
          <Text style={{fontSize:12}}>Total de Encuestas: ({this.state.count})</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Encuesta")} style={styles.button}>
            <Text style={styles.buttonText}>Nueva Encuesta</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={this.enviar} style={styles.button}>
            <Text style={styles.buttonText}>Subir Encuestas</Text>
            </TouchableOpacity>

          <TouchableOpacity onPress={this.ViewData} style={{
            marginBottom: 30,
            width: 260,
            alignItems: 'center',
            backgroundColor: '#4dbbbd'}}>
            <Text style={styles.buttonText}>Copiar</Text>
          </TouchableOpacity>


          {/* <TouchableOpacity onPress={this.takePicture} style={styles.button}>
            <Text style={styles.buttonText}>Sacar Foto</Text>
          </TouchableOpacity> */}
          {/* </View> */}
        </View>
        <View style={styles.footer}>
          <Text style={{ color: "#9a9a9a"}}>{Constants.installationId}</Text>
        </View>
      


      </View>
    );
  }
}


const styles = StyleSheet.create({
  footer:{
    marginTop: 10,
    height: 30,
    
    flexDirection: 'row',
  },
  padre:{
    flex: 1,
    
    paddingTop: Constants.statusBarHeight,
    // paddingLeft: 100,
    // paddingRight: 100,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#f2f2f0',
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    // paddingLeft: 100,
    // paddingRight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f0',
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#8fbd4d'
  },
  buttonText: {
    padding: 20,
    fontSize:24,
    color: 'white'
  },
   camera: {
    flex: 1,
    height: '100%',
    // justifyContent: 'space-between',
  },
 
})

AppRegistry.registerComponent('NetworkCheck', () => IsConnected);