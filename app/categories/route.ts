export const dynamic = "force-static";

export async function GET() {
    
    const catgeroies = [
        {id: 1, name: "Electronics"},
        {id: 2, name: "Books"},
        {id: 3, name: "Clothing"},
        {id: 4, name: "Home & Garden"},
    ]

    return Response.json(catgeroies);
}