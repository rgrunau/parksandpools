'use client'

async function getPark (id: string){
    const res = await fetch(`http:localhost:3000/api/parks/${id}`);
    return res.json();
}

export default function Page({params}: {params: {id: string}}) {
    debugger;
    const id = params.id;
    // const park = getPark(id);
    return (
        <div>
            My park: {params.id}
        </div>
    )
}