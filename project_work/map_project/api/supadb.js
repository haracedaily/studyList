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

export const fetchReviews = async (id)=>{
    try{
    const {data} = await supabase.from('reviews').select('*').eq("city_id",id);
    return data;
    }catch(e){
        return [];
    }
}

export const postReview = async (obj)=>{
    console.log(obj);
    try{
        const {data,error} = await supabase
            .from('reviews')
            .insert([{
                city_id: obj.city_id,
                user_name:obj.user_name,
                rating:obj.rating,
                comment:obj.comment,
                air_quality_index:obj.air_quality_index,
            }]);
        if(error) throw error;
        console.log(data);
        return 'success';
    }catch(e){
        console.log(e);
        return 'fail';
    }
}