
export const idGen = () => {
    let idGenerated =  Math.ceil(Math.random() * 1000000000) + 100;

    return {
        idGenerated
    }
}