import { atom } from "recoil"; 

export interface User { 
    isLoading: Boolean, 
    userEmail: String | null, 
    userId: Number | null
}

export const userState = atom<User>({  
    key: 'userState', 
    default: {
        isLoading: true, 
        userEmail: null, 
        userId: null 
    }, 
}); 