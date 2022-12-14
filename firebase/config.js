import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';

export const firebaseConfig = {

  apiKey: "AIzaSyDDQ-UeNFuTT06DYwthUY0-QmvQan62Vms",
  authDomain: "fir-crud-3ad81.firebaseapp.com",
  projectId: "fir-crud-3ad81",
  storageBucket: "fir-crud-3ad81.appspot.com",
  messagingSenderId: "1019325828014",
  appId: "1:1019325828014:web:22df141226f061c87e563f",
  measurementId: "G-RJG59PTCQR"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}


export default function imageBrowse() {

  const [image,setimage] =useState(null)
 useEffect(() => {
   (async () => {
     if (Platform.OS !== 'web') {
       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
       if (status !== 'granted') {
         alert('Sorry, we need camera roll permissions to make this work!');
       }
     }
   })();
 }, []);

 const pickImage = async () => {
   let result = await ImagePicker.launchImageLibraryAsync({
     media: 'photo',
     //allowsEditing: true,
     aspect: [4, 3],
     quality: 1,
   });
   //console.log(result) ;

   if (!result.cancelled) {
     setimage(result.uri)
     const storage = getStorage(); //the storage itself
     let link = result.uri
     let s=(link).substring(link.lastIndexOf('/')+1) ;
    
     const refi = ref(storage,s); //how the image will be addressed inside the storage
     
     //convert image to array of bytes
     const img = fetch(result.uri);
     const bytes = img.blob();

     await uploadBytes(refi, bytes); //upload images
   }
 };
}


export {firebase}