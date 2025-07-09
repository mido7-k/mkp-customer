
export interface AllFilters{
    categories: FilterCategories[];
    products:FilterProduct[];
}

export interface FilterCategories{
   nameAr: string;
   nameEn: string;
   id: number;
}


export interface FilterProduct{
    categoryId: number;
    items: Item[];
}

export interface Item{
    nameAr: string;
    nameEn: string;
    imageUrl: string;
    vendorNameAr: string;
    vendorNameEn: string;
    rating: number;
}