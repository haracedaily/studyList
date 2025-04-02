async function post() {
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;
    var file = document.getElementById('file').files[0];
    if (!title) {
        alert('title입력');
        return;
    }
    if (!content) {
        alert('content 입력');
        return;
    }
    if (!file) {
        savePost(title, content);
    } else {
        const fileUrl = await uploadFile(file);
        console.log(fileUrl);
        savePost(title, content, fileUrl);
    }
}
async function savePost(title, content, fileUrl) {
    const user = sessionStorage.getItem('user');
    if (user == null) {
        alert("로그인이 필요합니다.");
        location.href = "./login.html";
        return;
    }
    const user_id = JSON.parse(user).id;
    console.log(fileUrl);
    const res = await supabase.from('post').insert([{ title, content, image_url: fileUrl, user_id }]).select();
    console.log(res);
    if (res.status == 201) {
        Swal.fire({
            title: '저장 성공',
            icon: 'success',
            confirmButtonText: '확인'
        });
        fetchPosts();
    } else {
        Swal.fire({
            title: '저장 실패',
            icon: 'error',
            confirmButtonText: '확인'
        });
    }
}
async function uploadFile(file) {
    let fileNm = crypto.randomUUID();
    fileNm += file.name;
    let res = await supabase.storage.from('ex01').upload(fileNm, file);
    if (res.error) {
        console.log(res.error);
        return;
    } else {
        const res = await supabase.storage.from('ex01').getPublicUrl(fileNm);
        console.log(res);

        return res.data.publicUrl;
    }
}

async function fetchPosts(){
    const res = await supabase.from("post").select('*').order('create_at',{ascending:false});
    console.log(res);
    if(res.error){
        alert('에러발생');
        return;
    }

    const $postList = document.querySelector("#post-list");
    $postList.style.display='grid';
    $postList.style.gridTemplateColumns ='1fr 1fr 1fr';
    $postList.innerHTML = '';
    res.data.forEach(data =>{
        const post = document.createElement('div');
        post.innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.content}</p>
            <img src = '${data.image_url?data.image_url:''}' width='150' height='100'></img>
            <div>
            <button>수정</button>
            <button onclick='deletePost("${data.id}")'>삭제</button>
            </div>
            `;
            $postList.appendChild(post);
            
    })
}

async function deletePost(id){
    const res = await supabase.from('post').delete().eq('id',id);
    console.log(res);
    if(res.error){
        alert('에러 발생 삭제 실패');
    }else{
        Swal.fire('완료','게시글이 삭제되었습니다.','success');
        fetchPosts();
    }
}
document.addEventListener("DOMContentLoaded",fetchPosts);