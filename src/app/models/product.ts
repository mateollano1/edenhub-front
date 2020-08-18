import { Images } from './images';
export class Product{
    name: string
    price: string
    description: string
    images: Images
    items: [{
        name: string,
        url: string
    }]
    letSelectedItems: number
}