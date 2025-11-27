const KEY = '617f0bddb27348cc819181434251811';

const fetchData = async (city) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

    const fetchResponse = await fetch(url);
    const data = await fetchResponse.json();

    return data;
};

export default fetchData;
