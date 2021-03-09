import { ProductCard } from "./components/productCard.component";


export class ProductCategory {

    get products(): ProductCard[] {
        return $$('div.product-layout').map(el => new ProductCard(el))
    }

}