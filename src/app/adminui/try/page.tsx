"use client" 
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isUserLoading } from "@/store/selectors/isUserLoading";
import { userEmailState } from "@/store/selectors/userEmail";
import { userState } from "@/store/atoms/user";
import { navState } from "@/store/atoms/navbar";
import { navOpenState } from "@/store/selectors/navIsOpen";
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import axios from "axios";

function Appbar() {
    const navigate = useRouter();
    const userLoading = useRecoilValue(isUserLoading); 
    const userEmail = useRecoilValue(userEmailState); 
    const setUser = useSetRecoilState(userState); 
    const [open, setOpen] = useState(false);

    useEffect(() => {
        async function smth() {

            const someone = await axios.get("http://localhost:5000/user/me", { 
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }); 

            if(someone){ 
                setUser({ 
                    isLoading: false, 
                    userEmail: someone.data.email, 
                    userId: someone.data.userId
                });
            } else { 
                setUser({ 
                    isLoading: false, 
                    userEmail: null, 
                    userId: null
                })
            }
        }
        smth(); 

    }, [setUser]); 

    if (userEmail) {
        // return <div style={{
        //     display: "flex",
        //     justifyContent: "space-between",
        //     padding: 4,
        //     zIndex: 1
        // }}>
        //     <div style={{marginLeft: 10}}>
        //         <h1 
        //             onClick={() => {
        //                 navigate.push("/") 
        //             }}
        //             style={{ cursor: "pointer", fontSize: "30px", fontWeight: 400 }}
        //         >Coursera</h1>
        //     </div>
    
        //     <div style={{display: "flex"}}>
        //         <div style={{marginRight: 10, display: "flex"}}>
        //         <div style={{marginRight: 10}}>
        //                 <Button
        //                     onClick={() => {
        //                         navigate.push("/purchased")  
        //                     }}
        //                 >Purchased</Button>
        //             </div>

        //             <div style={{marginRight: 10}}>
        //                 <Button
        //                     onClick={() => {
        //                         navigate.push("/courses") 
        //                     }}
        //                 >Courses</Button>
        //             </div>

        //             <Button
        //                 variant={"contained"}
        //                 onClick={() => {
        //                     // @ts-ignore 
        //                     localStorage.setItem("token", null);
        //                     setUser({ 
        //                         isLoading: false, 
        //                         userEmail: null, 
        //                         userId: null
        //                     })
        //                     navigate.push("/") 
        //                 }}
        //             >Logout</Button>
        //         </div>
        //     </div>
        // </div>

        return  <div className={`mb-20`}>
        <div className='shadow-md w-full fixed top-0 left-0 pb-10 z-50'>
            <div className='md:flex items-center justify-between bg-gray-100 py-4 md:px-10 px-7'>

            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>

                <svg xmlns="http://www.w3.org/2000/svg" fill="#4f46e5" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
                <span>Coursera</span>

            </div>

            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* z-[-1] */}
            {/* ${open ? 'top-12' : 'top-[-490px]'} */}
            <ul className={`z-[-1] md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in bg-gray-100 ${open ? 'top-12' : 'top-[-490px]'}`}>

                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Button
                            onClick={() => {
                                navigate.push("/purchased")  
                            }}
                        >Purchased</Button>
                    </li>

                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Button
                            onClick={() => {
                                navigate.push("/courses") 
                            }}
                        >Courses</Button>
                    </li>

                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Button
                            variant={"contained"}
                            onClick={() => {
                                // @ts-ignore 
                                localStorage.setItem("token", null);
                                setUser({ 
                                    isLoading: false, 
                                    userEmail: null, 
                                    userId: null
                                })
                                navigate.push("/") 
                            }}
                        >Logout</Button>
                    </li>

            </ul>

            </div>
            </div>
            </div>


    } else {
        // return <div style={{
        //     display: "flex",
        //     justifyContent: "space-between",
        //     padding: 4,
        //     zIndex: 1
        // }}>
        //     <div style={{marginLeft: 10}}>
        //         <Typography variant={"h6"}>Coursera</Typography>
        //     </div>
    
        //     <div style={{display: "flex"}}>
        //         <div style={{marginRight: 10}}>
        //             <Button
        //                 variant={"contained"}
        //                 onClick={() => {
        //                     navigate.push("/signup") 
        //                 }}
        //             >Signup</Button>
        //         </div>
        //         <div>
        //             <Button
        //                 variant={"contained"}
        //                 onClick={() => {
        //                     navigate.push("/signin")
        //                 }}
        //             >Signin</Button>
        //         </div>
        //     </div>
        // </div>

        return ( <div className={`mb-20`}>
    
            <div className='shadow-md w-full fixed top-0 left-0 pb-10 z-50'>
            <div className='md:flex items-center justify-between bg-gray-100 py-4 md:px-10 px-7'>

            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>

                <svg xmlns="http://www.w3.org/2000/svg" fill="#4f46e5" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
                <span>Coursera</span>

            </div>

            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in bg-gray-100 ${open ? 'top-12' : 'top-[-490px]'}`}>
                
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Button
                            variant={"contained"}
                            onClick={() => {
                                navigate.push("/signup") 
                            }}
                        >Signup</Button>
                    </li>

                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Button
                            variant={"contained"}
                            onClick={() => {
                                navigate.push("/signin")
                            }}
                        >Signin</Button>
                    </li>
                
            </ul>

            </div>
            </div>
            </div>
        )

    }



}

export default Appbar;


// #4338ca indigo-700
// #4f46e5 indigo-600 

// const Header = () => {

//     let Links =[
//         {name:"HOME",link:"/"},
//         {name:"SERVICE",link:"/"},
//         {name:"ABOUT",link:"/"},
//         {name:"CONTACT",link:"/"},
//     ];
    


//     let [open, setOpen] = useState(false);
//     const navigate = useRouter();
//     const setUser = useSetRecoilState(userState); 


//     return (

//         <div className={`mb-20 z-10`}>
//         <div className={`shadow-md w-full fixed mb-10 top-0 left-0`}>
//            <div className='md:flex items-center justify-between bg-gray-100 py-4 md:px-10 px-7'>

//             <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>

//                 <svg xmlns="http://www.w3.org/2000/svg" fill="#4f46e5" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
//                 </svg>
//                 <span>Coursera</span>

//             </div>

//             <div onClick={()=> 
//                 setOpen(!open)} 
//                 className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
//                 {
//                     open ? <XMarkIcon/> : <Bars3BottomRightIcon />
//                 }
//             </div>

//             <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in bg-gray-100 ${open ? 'top-12' : 'top-[-490px]'}`}>
//                 {
//                     Links.map((link) => (
//                     <li className='md:ml-8 md:my-0 my-7 font-semibold'>
//                         <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
//                     </li>))
//                 }
//                     <li className='md:ml-8 md:my-0 my-7 font-semibold'>
//                     <Button
//                         variant={"contained"}
//                         onClick={() => {
//                             // @ts-ignore 
//                             localStorage.setItem("token", null);
//                             setUser({ 
//                                 isLoading: false, 
//                                 userEmail: null, 
//                                 userId: null
//                             })
//                             navigate.push("/") 
//                         }}
//                     >Logout</Button>
//                     </li>

//                 <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Get Started</button>
//             </ul>

//            </div>
//         </div>
//         </div>
//     );
// };

// export default Header;

// ${open ? 'my-96' : 'pb-20'}