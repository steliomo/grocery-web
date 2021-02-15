import { GroceryDTO } from "src/app/groceries/grocery-dto";
import { ServiceDescriptionDTO } from "src/app/services/service-description/service-description-dto";

export class ServiceItemDTO {
    serviceDescriptionDTO: ServiceDescriptionDTO;
    unitDTO: GroceryDTO;
    salePrice: number;
    name: string;
}