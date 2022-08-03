import { getStorage, ref, uploadBytes } from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';


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