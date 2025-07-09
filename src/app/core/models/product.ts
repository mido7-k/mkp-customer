export interface Product {
    id: number;
    stockNumber: number;
    rating: number;
    imageUrl: string;
    vendorNameAr: string;
    vendorNameEn: string;
    productNameAr: string;
    productNameEn: string;
    price: number;
    contract? : boolean;
    supplierNameAr: string;
    supplierNameEn: string;
    dateUploaded: string;
  }