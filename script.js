// 이미지 모달 보여주기
function showImage(src) {
    var modal = document.getElementById("imageModal");
    var fullImage = document.getElementById("fullImage");
    modal.style.display = "block";
    fullImage.src = src;
}

// 이미지 모달 닫기
function closeImage() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// window 객체에 함수 등록
window.showImage = showImage;
window.closeImage = closeImage;