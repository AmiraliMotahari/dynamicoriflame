async function fetchData(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();

        return data;
    } catch (error) {
        alert("something went wrong!");
    }
}

export default fetchData;