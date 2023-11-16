export interface RentalObject {
    _id:         string; 
    name:        string; 
    description: string;
    price:       number;
    // price per weeek, or days??
    imageURL:    string;
    // imageURL Array?
    // address: lat long
    saved:       string;
    category:    string;
    rating:      string; 
}