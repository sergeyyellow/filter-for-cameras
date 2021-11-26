export const filter = async () => {
    try {
        const response = await fetch('https://getlens-master.stage.dev.family/api/pages/obektivy?brands[]=1&brands[]=9')
            .then(res => res.json())
            .then(data => data);

        return response;
    } catch (err) {
        throw new Error('Server access error');
    }
}