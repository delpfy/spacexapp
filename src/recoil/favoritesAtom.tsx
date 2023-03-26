import { atom } from 'recoil'

interface Item{
    id: string;
    name: string;
    description:string;
    image:string;
}

export const favoriteItems = atom<Item[]>({
    key: 'favoriteItems',
    default: [] 
    
})