async function getPark (id: string){
    const res = await fetch(`http://localhost:3000/api/parks/${id}`)
    
    
    if (!res.ok) {
        throw new Error(res.statusText)
    }
    return res.json();
}