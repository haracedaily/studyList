document.querySelector("#input-button-order").addEventListener('click',async function(){
    const user = sessionStorage.getItem('user');
    if( user == null){
        if(confirm('로그인하셔야 주문등록 할 수 있습니다.')){
            location.href='./login.html';
        }
        return;
    }
    const product_name = document.querySelector("#product_name").value;
    const price = document.querySelector("#price").value;
    const user_id = JSON.parse(user).id;
    if(price.length==0){
        Swal.fire({
            icon: "error",
            title: "입력 실패",
            text: "price 입력은 필수"
        })
        return;
    }else if(isNaN(price)){ //Number.isNaN x isNaN o
        Swal.fire({
            icon: "error",
            title: "입력 실패",
            text: "가격은 숫자를 입력하셔야합니다."
        })
        return
    }
    const res = await supabase.from('orders').insert([{
        product_name,price,user_id
    }]).select();
    console.log(res);
})

async function orderSelect(){
    const res = await supabase.from('orders').select().order('created_at',{ascending:true});
    console.log(res.data);
    let rows = '';
    for(let i=0;i<res.data.length;i++){
rows+=`
<tr style="cursor:pointer;" onclick="orderRowClick(this)">
<td>${res.data[i].id}</td>
<td>${res.data[i].user_id}</td>
<td>${res.data[i].product_name}</td>
<td>${res.data[i].price}</td>
<td>${res.data[i].created_at}</td>
<td><button onclick='orderDeleteClick(event,"${res.data[i].id}")'>삭제</button></td>
</tr>
`;
    }
    let orders=`
    <div>
    <table>
    <tr>
    <th>id</th>
    <th>userid</th>
    <th>상품명</th>
    <th>가격</th>
    <th>주문날짜</th>
    <th>삭제</th>
    </tr>
    ${rows}
    </table>
    </div>
    `
    $orderDiv.innerHTML=orders;
    $orderDiv.classList.add("show");

}

function orderRowClick(trTag){
    $modal.classList.remove("hidden");
    $modalDiv2.classList.remove("hidden");
    $modalDiv.classList.add("hidden");
    $orderId = trTag.children[0].innerHTML;
    $userId = trTag.children[1].innerHTML;
    $productName=trTag.children[2].innerHTML;
    $price = trTag.children[3].innerHTML;

    const $updateOrderId = document.querySelector("#update-order-id");
    const $updateOrderUserId = document.querySelector("#update-order-user-id");
    const $updateProductName = document.querySelector("#update-product-name");
    const $updatePrice = document.querySelector("#update-price");
    $updateOrderId.innerText = $orderId;
    $updateOrderUserId.innerText = $userId;
    $updateProductName.value = $productName;
    $updatePrice.value = $price;
}

document.querySelector("#update-button-order").addEventListener('click',async function(){
    const $updateOrderId = document.querySelector("#update-order-id");
    const $updateProductName = document.querySelector("#update-product-name");
    const $updatePrice = document.querySelector("#update-price");
    let res = await supabase.from("orders").update({
        product_name:$updateProductName.value,price:$updatePrice.value
    }).eq('id',$updateOrderId.innerHTML).select();
    if(res.status==200){
        await Swal.fire({
            title:"수정성공",
            icon:"success",

        })
    }

    $modal.classList.add("hidden");
    $modalDiv2.classList.add("hidden");
    $modalDiv.classList.add("hidden");

    orderSelect();

})

function orderDeleteClick(ev,id){
    ev.stopPropagation();
    Swal.fire({
        title: "주문을 삭제하시겠습니까?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "확인",
        cancelButtonText: "취소"

    }).then(async (result) => {
        if (result.isConfirmed) {
            await supabase.from("orders").delete().eq('id',id);
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            orderSelect();
        }
    });
}