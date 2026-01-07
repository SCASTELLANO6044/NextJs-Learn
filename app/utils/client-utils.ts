import "client-only"

export const clientSideFunctions = () => {
    console.log(
        `use window object,
            use localStorage`
    );
    return "client result";
}