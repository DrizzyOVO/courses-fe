import React from 'react'

const page = () => {
    return <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>

        {/* <div style={{display: "flex", justifyContent: "center", marginTop: 20}}>     */}

            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

        {/* </div> */}

    </div>
}


const Card = () => {
  return (
    <div style={{display: "flex", justifyContent: "center", marginTop: 20}} >
        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 m-7">
        <div
            className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
            alt="card-image" />
        </div>
        <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            UI/UX Review Check
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">  
            The place is close to Barceloneta Beach and bus stop just 2 min by walk
            and near to &quot;Naviglio&quot; where you can enjoy the main night life in
            Barcelona.
            </p>
        </div>
        <div className="p-6 pt-0">
            <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-indigo-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button">
            View Course
            </button>
        </div>
        </div>
    </div>
  )
}

export default page

// bg-gray-900