import {supabase} from "./supabaseClient.js";

export const getUsers = async () => {
    const { data, error } = await supabase
        .from('members')
        .select('*');
    console.log(data);
    if (error) {
        console.error('Error fetching users:', error);
        return [];
    }
    return data;
}