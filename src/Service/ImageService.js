import { getDownloadURL, ref, uploadBytes, list, get, listAll } from 'firebase/storage';
import { storage } from '../Firebase/firebase';

export function imageUpLoad(newId, file) {
    const imageRef = ref(storage, `${newId}`);
    uploadBytes(imageRef, file)
}

export function imageDownload(setImgUrl) {
    let storRef = ref(storage, "");
    listAll(storRef).then(response => {
        response.items.forEach(dataRef => {
            getDownloadURL(dataRef).then(imgRef => {
                return setImgUrl((imgPathArray) => [...imgPathArray,[dataRef._location.path,[imgRef] ]])
            })
        })        
    })
}