import { atom } from "recoil"; 

export interface Admin { 
    isLoading: Boolean, 
    adminEmail: String | null, 
    adminId: Number | null
}

export const adminState = atom<Admin>({  
    key: 'adminState', 
    default: {
        isLoading: true, 
        adminEmail: null,  
        adminId: null 
    }, 
}); 