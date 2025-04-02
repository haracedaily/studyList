$userBtn.addEventListener('click', async function (e) {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    if (email.length == 0) {
        Swal.fire({
            icon: "error",
            title: "입력 실패",
            text: "email 입력은 필수"
        })
            .then(() => {
                document.querySelector("#email").focus();
            })
        return;
    }
    const res = await supabase.from('users').insert([{ name, email }]).select();
    if (res.status == 409) {
        Swal.fire({
            icon: "error",
            title: "중복메일.",
            text: "중복된 메일",
            //   footer: '<a href="#">Why do I have this issue?</a>'
        });
    }else if(res.status == 201){
        Swal.fire({
            title:"저장성공",
            icon:"success",
            draggable:true
        })
    }
})
// $usersDiv.innerHTML = 'asdfasdf';
// $usersDiv.style.backgroundColor = 'rgb(200,100,200)';
// 유저테이블 내용 가져와서 출력하는 함수
async function usersSelect() {
    const res = await supabase.from('users').select().order('created_at,name', { ascending: true })
    let rows = '';
    for (let i = 0; i < res.data.length; i++) {
        rows = rows + `
            <tr onclick="userRowClick(this)">
                <td>${res.data[i].id}</td>
                <td>${res.data[i].name}</td>
                <td>${res.data[i].email}</td>
                <td>${res.data[i].created_at}</td>
                <td>${res.data[i].active}</td>
                <td><button onclick='userDeleteClick(event,"${res.data[i].id}")'>삭제</button></td>
            </tr>
        `;
    }
    let users = `
    <div>
        <table>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>가입날짜</th>
                <th>활성화</th>
            </tr>
            ${rows}
        </table>
    </div>
    `;
    $usersDiv.innerHTML = users;
    $usersDiv.classList.add("show");
}

function userRowClick(trTag){
    const userId = trTag.children[0].innerText;
    console.log(trTag);
    const userName = trTag.children[1].innerText;
    const userEmail = trTag.children[2].innerText;

    const $updateUserId = document.querySelector("#update-user-id");
    const $updateName = document.querySelector("#update-name");
    const $updateEmail = document.querySelector("#update-email");

    $updateUserId.innerHTML=userId;
    $updateName.value=userName;
    $updateEmail.value=userEmail;

    /* for(let i=0;i<trTag.children.length;i++){
        console.log(trTag.children[i]);
    } */
   
   $modal.classList.remove("hidden");
   $modalDiv.classList.remove("hidden");
   $modalDiv2.classList.add("hidden");
}

document.querySelector("#update-button-user").addEventListener("click",async function(){
    const $updateUserId = document.querySelector("#update-user-id");
    const $updateName = document.querySelector("#update-name");
    const $updateEmail = document.querySelector("#update-email");
    let res = await supabase.from("users").update({name:$updateName.value,
        email:$updateEmail.value
    }).eq('id', $updateUserId.innerText).select();
console.log(res);

if(res.status==200){
    await Swal.fire({
        title:"수정성공",
        icon:"success",
        draggable:true
    })
}
usersSelect();
$modal.classList.add("hidden");
$modalDiv.classList.add("hidden");
});

function userDeleteClick(ev,id){
    console.log(ev);
    ev.stopPropagation();
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "확인",
        cancelButtonText: "취소"

    }).then(async (result) => {
        if (result.isConfirmed) {
            await supabase.from("users").delete().eq('id',id);
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });
}