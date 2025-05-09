import {SupabaseClient} from "@supabase/supabase-js";
import axios from "axios";

const supabase = new SupabaseClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const fetchCities = async () => {
    const res = await supabase.from('cities').select('*');
    if(res.error)
    return [];
    else
    return res.data;
}

export async function fetchApi(lat,lng){
    const res = await axios.get(`${import.meta.env.VITE_AIR_API_URL}:${lat};${lng}/?token=${import.meta.env.VITE_AIR_API_KEY}`);
    console.log(res);
    if(res.status==200){
        return res.data.data;
    }else{
        throw new Error('fetchApi failed');
    }
}