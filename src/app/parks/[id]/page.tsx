'use client'

async function getPark (id: string){
    const res = await fetch(`/api/parks/${id}`);
    return res.json();
}

export default function IndParkPage({params: {id}}: {params: {id: string}}) {
    const park = getPark(id);
    return (
        <div>
            <h1>Individual Park Page</h1>
        </div>
    )
}