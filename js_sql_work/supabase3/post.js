async function postSelect(){
    const res = await supabase.from('post').select();
    let rows='';
    console.log(res);
    if(res.data.length>0){
        res.data.map(el=>{
            rows+=`
            <tr>
            <td>${el.id}</td>
            <td>${el.user_id}</td>
            <td>${el.post}</td>
            <td>${el.create_at}</td>
            </tr>
            `;
        })
    }
    $postDiv.innerHTML=`
    <table>
    <tr>
    <th>id</th>
    <th>user_id</th>
    <th>post</th>
    <th>created_at</th>
    </tr>
    ${rows}
    </table>
    `;
    $postDiv.classList.add("show");
}


document.querySelector("#input-button-post").addEventListener('click',async function(){
    const post=document.querySelector("#post").value;
    if(!!$userName.value){
        const userRes = await supabase.from('users').select().ilike('name',`%${$userName.value}%`);
        console.log(userRes);
        const res = await supabase.from('post').insert([{user_id:userRes.data[0].id,post}]).select();
        if(res.status==201){
            Swal.fire({
                icon: "success",
                title: "정상 등록",
            })
            return;
        }else{
            Swal.fire({
                icon: "fail",
                title: "등록 실패",
                text: res.error
            })
            return;
        }
    }
    const res = await supabase.from('post').insert([{post}]).select();
        if(res.status==201){
            Swal.fire({
                icon: "success",
                title: "정상 등록",
            })
            return;
        }else{
            Swal.fire({
                icon: "fail",
                title: "등록 실패",
                text: res.error
            })
            return;
        }
})