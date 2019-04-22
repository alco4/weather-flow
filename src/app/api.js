import { WEATHER_KEY } from './keys'

export default async function consultApi(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}