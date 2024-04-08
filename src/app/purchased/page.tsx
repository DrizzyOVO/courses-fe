"use client"
import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import axios from "axios";
import { userState } from "@/store/atoms/user";
import { useSetRecoilState } from "recoil";
import Appbar from "@/components/client/Appbar";


function PurchasedCourses() {
    const [courses, setCourses] = useState<any[]>([]);
    const [email, setEmail] = useState(null); 
    const setUser = useSetRecoilState(userState); 

    const init = async () => {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/purchasedCourses`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setCourses(response.data.courses)
        setEmail(response.data.email); 
        console.log(response.data.courses);
        if(response.data.email){
            setUser({ 
                userEmail: response.data.email, 
                userId: response.data.userId, 
                isLoading: false 
            })
        } else{ 
            setUser({ 
                isLoading: false, 
                userEmail: null, 
                userId: null 
            })
        }
    }

    useEffect(() => {
        init();
    }, []);

    if(courses.length != 0){
        return (
            <>
            <Appbar />
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: '20px'}}> 
                {courses.map(course => {
                    return <Course key={course.id} course={course} />} 
                )}
            </div> 
            </>
        ); 
    } else { 
        return ( 
            <>
            {/* <Appbar />  */}
            <div className="mt-32">
                <h1 style={{ fontSize: "50px", fontWeight: 600, display: "flex", justifyContent: "center" }}>
                    You haven&apos;t purchased any <span className='text-indigo-500'>&nbsp;course&#58;&#40;</span> 
                </h1>
                <h3 style={{ fontSize: "50px", fontWeight: 600, display: "flex", justifyContent: "center" }}>
                    Go to the <span className='text-indigo-500'>&nbsp;courses&nbsp;</span> section and <span className='text-indigo-500'>&nbsp;buy&nbsp;</span> em!!!
                </h3>
            </div> 
            </>
        )
    }


}

//@ts-ignore
export function Course({course}) {
    const router = useRouter();

    return (  
        <div className="z-10" style={{display: "flex", justifyContent: "center", marginTop: 20}}>
        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 m-7">
        <div
            className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
            src={course.imgLink} 
            alt="card-image" />
        </div>
        <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {course.title}
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">  
            {course.description}
            </p>
        </div>
        <div className="p-6 pt-0">
            <button
            onClick={() => {
                router.push("/courses/" + course.id);
            }}
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-indigo-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button">
            View Course
            </button>
        </div>
        </div>
        </div>
    )

}

{/* <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 20
    }}>
        <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
        <div style={{display: "flex", justifyContent: "center", marginTop: 20}}>
            <Button variant="contained" size="large" onClick={() => {
                router.push("http://localhost:3000/courses/" + course.id);
            }}>Buy</Button>
        </div>
    </Card> */}
    {/* <img src={course.imageLink} style={{width: 300}} ></img> */}

export default PurchasedCourses;