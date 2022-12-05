import { set, ref, onValue, remove } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../Firebase/firebase';
import { imageUpLoad } from './ImageService';

export function upLoad(type, material, color, size, season, inputRef) {
    console.log(inputRef.current.files[0])
    let file = inputRef.current.files[0];
    let newId = uuidv4();
    imageUpLoad(newId, file)
    set(ref(db, `market/${newId}`), {
        type,
        material,
        color,
        size,
        season,
        id: newId
    })
}

export function download(setClothings, url) {
    return onValue(ref(db, `${url}`), (snapshot) => {
        setClothings([]);
        const data = snapshot.val();
        if(data !== null) {
            Object.values(data).map(clothing => {
                return setClothings((oldArray) => [...oldArray, clothing]);
            })
        }
    })
}

export function addToBasket(data){
    set(ref(db, `basket/${data.id}`), {
        type: data.type,
        material: data.material,
        color: data.color,
        size: data.size,
        season: data.season,
        id: data.id
    })
}