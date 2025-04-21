import { storage, ref, uploadBytes, getDownloadURL } from './firebase.js';

document.getElementById("uploadBtn").addEventListener("click", async () => {
  const itemId = document.getElementById("itemIdInput").value.trim();
  const file = document.getElementById("imageInput").files[0];
  const status = document.getElementById("uploadStatus");
  const container = document.getElementById("uploadedImageContainer");

  if (!itemId || !file) {
    status.textContent = "문항 ID와 이미지를 모두 입력해주세요.";
    return;
  }

  try {
    status.textContent = "업로드 중...";
    const fileRef = ref(storage, `questions/${itemId}_${file.name}`);
    await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);

    status.textContent = "✅ 업로드 완료!";
    container.innerHTML = `
      <h2>업로드된 이미지</h2>
      <p><strong>문항 ID:</strong> ${itemId}</p>
      <img src="${url}" alt="문항 이미지" />
      <p><strong>이미지 URL:</strong> <a href="${url}" target="_blank">${url}</a></p>
    `;
  } catch (error) {
    console.error(error);
    status.textContent = "❌ 업로드 실패";
  }
});
