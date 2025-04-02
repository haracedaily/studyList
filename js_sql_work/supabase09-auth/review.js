async function selectReview(){

    const params = new URLSearchParams(window.location.search);
    console.log(params);

    const pageNum = params.get("pageNum");
    console.log(pageNum);

    const res = await supabase.from("review").select();
    console.log(res);

    const $review_list = document.getElementById("review_list");
    $review_list.innerHTML = "";
    res.data.forEach((elem) => {
        const reviewDiv = document.createElement("div");
        reviewDiv.style.display="flex";
        reviewDiv.style.border="1px solid black";
        reviewDiv.style.borderCollapse="collapse";
        if(elem.file_url === null){
            reviewDiv.innerHTML = ``
        }
        reviewDiv.innerHTML = `
<h3>${elem.title}</h3>
<img src="${elem.file_url}">`;
        $review_list.appendChild(reviewDiv);
    })
}