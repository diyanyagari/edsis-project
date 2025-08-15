export type CategoriesType = 'cold' | 'warm' | 'hot'
export type StatusesType = 'registed' | 'close' | 'pending'

export interface SampleDataType {
    id: string;
    status: string;
    category: CategoriesType;
    branch: string;
    source: string;
    name: string;
    contact: string;
    segmentation: string;
    createdBy: string;
    createdAt: string;
}

export interface InventoryPagination {
    length: number;
    size: number;
    page: number;
    lastPage: number;
    startIndex: number;
    endIndex: number;
}