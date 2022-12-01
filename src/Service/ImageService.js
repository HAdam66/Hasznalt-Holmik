import { getDownloadURL, ref, uploadBytes, list, get, listAll } from 'firebase/storage';
import { storage } from '../Firebase/firebase';

export function imageUpLoad(newId, file) {
    const imageRef = ref(storage, `${newId}`);
    uploadBytes(imageRef, file)
    console.log(Object.keys(uploadBytes(imageRef, file)))
}

export function imageDownload(clothings, setImgUrl) {
    let storRef = ref(storage, "");
    let imgPathArray = [];
    listAll(storRef).then(response => {
        response.items.forEach(dataRef => {
            console.log(dataRef._location)
            getDownloadURL(dataRef).then(imgRef => {
                console.log(imgRef)
                return setImgUrl((imgPathArray) => [...imgPathArray,[dataRef._location.path,[imgRef] ]])
            })
        })        
    })
}