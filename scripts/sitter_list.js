console.log('연결')

function sitter_detail(sitter_id) {
    window.location.href = `${frontend_base_url}/pet_sitter_detail.html?sitter_id=${sitter_id}`
}

window.onload = async function loadSitters() {
    sitters = await getSitters()
    console.log(sitters)

    const sitter_list = document.getElementById("sitter_list")
    sitters.forEach(sitter => {
        // 카드 큰 틀
        const newCard = document.createElement("div")
        newCard.setAttribute("class", "card mb-4")
        newCard.setAttribute("id", sitter.id)
        newCard.setAttribute("style", "max-width: 90%;")
        newCard.setAttribute("onclick", `sitter_detail(${sitter.id})`)
        const newRow = document.createElement("div")
        newRow.setAttribute("class", "row g-0")
        newCard.appendChild(newRow)
        // 카드 이미지
        if (sitter.photo) {
            const newImg = document.createElement("div")
            newImg.setAttribute("class", "col-md-4")
            newRow.appendChild(newImg)
            const sitterImg = document.createElement("img")
            sitterImg.setAttribute("src", `${backend_base_url}${sitter.photo}`)
            sitterImg.setAttribute("class", "cardimg rounded-start")
            newImg.appendChild(sitterImg)
        }
        // 사진이 없을 때 기본이미지를 넣을까요? 없앨까요?


        // 카드 글 부분
        const newTxt = document.createElement("div")
        newTxt.setAttribute("class", "col-md-8")
        newRow.appendChild(newTxt)
        const newCardBody = document.createElement("div")
        newCardBody.setAttribute("class", "card-body")
        newTxt.appendChild(newCardBody)

        // 내용 부분
        // 구인 상태
        const newIsReserved = document.createElement("p")
        newIsReserved.setAttribute("class", "card-text")
        newIsReserved.innerText = sitter.is_reserved
        newCardBody.appendChild(newIsReserved)
        // 게시글 제목
        const newTitle = document.createElement("h5")
        newTitle.setAttribute("class", "card-title")
        newTitle.innerText = sitter.title
        newCardBody.appendChild(newTitle)
        // 게시글 내용
        const newContent = document.createElement("p")
        newContent.setAttribute("class", "card-text margin-b")
        newContent.setAttribute("id", "content")
        newContent.innerText = sitter.content
        newCardBody.appendChild(newContent)
        // 예약 날짜
        const newDateTime = document.createElement("p")
        newDateTime.setAttribute("class", "card-text text-start margin-b")
        newCardBody.appendChild(newDateTime)
        const newReserved = document.createElement("small")
        newReserved.setAttribute("class", "text-muted")
        newReserved.innerText = sitter.reservation_start + ' - ' + sitter.reservation_end
        newDateTime.appendChild(newReserved)
        // 위치
        const newLocation = document.createElement("p")
        newLocation.setAttribute("class", "card-text text-start margin-b")
        newCardBody.appendChild(newLocation)
        const newPlace = document.createElement("small")
        newPlace.setAttribute("class", "text-muted")
        newPlace.innerText = sitter.location
        newLocation.appendChild(newPlace)
        // 반려동물 + 요금
        const newFoot = document.createElement("div")
        newFoot.setAttribute("class", "row")
        newCardBody.appendChild(newFoot)
        // 반려동물
        const newSpecies = document.createElement("p")
        newSpecies.setAttribute("class", "card-text col")
        newFoot.appendChild(newSpecies)
        const Species = document.createElement("small")
        Species.setAttribute("class", "text-muted")
        Species.innerText = sitter.species
        newSpecies.appendChild(Species)
        // 가격
        const newPrice = document.createElement("p")
        newPrice.setAttribute("class", "card-text col text-end fs-5 fw-semibold")
        newPrice.innerText = '₩' + sitter.charge
        newFoot.appendChild(newPrice)




        sitter_list.appendChild(newCard)
    });
}