
interface CategoryFacility {
    text: string;
    iconText: string;
    _id: string;
}   

interface Category {
    _id: string;
    name: string;
    facilities: CategoryFacility[]
}

interface Facility {
    _id: string;
    createdAt: string;
    updatedAt: string;
    categories: Category[]
}

interface RentalObject {
    _id: string; 
    name: string,
    imageURL: string,
    RentalObjectPackage: string[],
    price: number,
    category: string,
    facilities: Facility []
}