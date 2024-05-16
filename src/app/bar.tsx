'use client'
import AdminAppbar from '@/components/admin/AdminAppbar';
import Appbar from '@/components/client/Appbar';
import { adminState } from '@/store/atoms/admin';
import { userState } from '@/store/atoms/user';
import { adminEmailState } from '@/store/selectors/adminEmail';
import { userEmailState } from '@/store/selectors/userEmail';
import { whereIsNav } from '@/store/selectors/whereIsNav';
import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil';



const Bar = () => { 

    const isUser = useRecoilValue(whereIsNav); 
    const userEmail = useRecoilValue(userEmailState); 
    const adminEmail = useRecoilValue(adminEmailState); 


    return (

        <>
            {isUser ? <Appbar /> : <AdminAppbar />}
        </>

    )
}

export default Bar; 