"use client" 
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'
import { useSetRecoilState } from 'recoil';
import { adminState } from '@/store/atoms/admin';
import { toast } from 'react-toast';

function Signup() {
    const router = useRouter(); 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [code, setCode] = useState("")
    const setAdmin = useSetRecoilState(adminState); 

    return <div>
         <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">

                    <div className="mt-12 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold">
                            Welcome to Coursera Admin
                        </h1>
                        <h1 className="text-2xl xl:text-3xl font-extrabold mt-3">
                            Sign up
                        </h1>
                        <div className="w-full flex-1 mt-8">

                            <div className="mx-auto max-w-xs">
                                <input
                                    onChange={(evant11) => {
                                        let elemt = evant11.target;
                                        setEmail(elemt.value);
                                    }}
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="email" placeholder="Email" />
                                <input
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password" placeholder="Password" />

                                <input
                                    onChange={(e) => {
                                        setCode(e.target.value);
                                    }}
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="" placeholder="Secret code" />

                                <button

                                    onClick={async() => {

                                        toast.success("Please hold on, while we connect to our backend"); 

                                        const response = await axios.post(`${process.env.BACKEND_URL}/admin/signup`, {
                                            email: email,
                                            password: password, 
                                            secretCode: code
                                        })
                                        
                                        if (response) { 

                                            if(response.data.message == "Admin logged in"){  
                                                localStorage.setItem("token", response.data.token);
                                                setAdmin({ 
                                                    isLoading: false, 
                                                    adminEmail: response.data.email,  
                                                    adminId: response.data.adminId  
                                                })
                                                router.push("/adminui");
                                            } else if (response.data.message == "Incorrect password") {

                                                toast.error("Incorrect password")
                                                setAdmin({ 
                                                    isLoading: false, 
                                                    adminEmail: null,   
                                                    adminId: null  
                                                }); 

                                            } else if (response.data.message == "wrong code") { 

                                                toast.error("Wrong secret code")
                                                setAdmin({ 
                                                    isLoading: false, 
                                                    adminEmail: null,   
                                                    adminId: null  
                                                }); 

                                            } else { 
                                                toast.error("Server may be down, pls try again.")
                                                setAdmin({ 
                                                    isLoading: false, 
                                                    adminEmail: null,   
                                                    adminId: null  
                                                }); 
                                            }

                                        } else { 
                                            setAdmin({ 
                                                isLoading: false, 
                                                adminEmail: null,   
                                                adminId: null  
                                            })
                                            console.log("No data bro");
                                        }
                                    }}

                                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="ml-3">
                                        Sign Up
                                    </span>
                                </button>

                                <p className="mt-6 mb-0 leading-normal text-sm text-center">Already have an account? <a href={"/adminui/signin"} className="font-bold text-indigo-700 cursor-pointer">Sign in</a></p> 
                                {/* onClick={() => {router.push("/signin")}} */}
                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    I agree to abide by Coursera&apos;s
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                    &nbsp;Terms of Service
                                    </a>
                                    &nbsp;and its
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                    &nbsp;Privacy Policy
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')"}}>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Signup;

// onClick={async() => {
//     const response = await axios.post("http://localhost:5000/admin/signup", {
//         email: email,
//         password: password, 
//         secretCode: code
//     })
    
//     if (response.data) { 

//         if(response.data.message == "Admin logged in"){  
//             console.log("Admin loggddddddddddd");
//             localStorage.setItem("token", response.data.token);
//             setAdmin({ 
//                 isLoading: false, 
//                 adminEmail: response.data.email,  
//                 adminId: response.data.userId   
//             })
//             router.push("http://localhost:4000");
//         } else if (response.data.message == "wrong code") { 

//             window.alert("Wrong secret code");  
//             setAdmin({ 
//                 isLoading: false, 
//                 adminEmail: null,   
//                 adminId: null  
//             }); 

//         } else { 
//             window.alert("Server may be down, pls try again."); 
//             setAdmin({ 
//                 isLoading: false, 
//                 adminEmail: null,   
//                 adminId: null  
//             }); 
//         }

//     } else { 
//         setAdmin({ 
//             isLoading: false, 
//             adminEmail: null,   
//             adminId: null  
//         })
//         console.log("No data bro");
//     }
// }}