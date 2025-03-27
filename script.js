// Password Protection
function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    if (passwordInput === "Amra sobai pagol") {
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("gallery").classList.remove("hidden");
    } else {
        document.getElementById("error-message").innerText = "Incorrect password!";
    }
}

// Semester Filtering
function filterSemester(semester) {
    const photos = document.querySelectorAll(".photo-item");
    photos.forEach(photo => {
        if (semester === "all" || photo.dataset.semester == semester) {
            photo.style.display = "block";
        } else {
            photo.style.display = "none";
        }
    });
}

// Lightbox Functionality
function openLightbox(imgSrc, imgText) {
    document.getElementById("lightbox-img").src = imgSrc;
    document.getElementById("lightbox-text").innerText = imgText;
    document.getElementById("lightbox").classList.remove("hidden");
}

function closeLightbox() {
    document.getElementById("lightbox").classList.add("hidden");
}

// Dynamically Load Photos
const photoGallery = document.getElementById("photo-gallery");
const photos = [
    { src: "images/semester1_pic1.jpg", semester: 1, text: "First day at university!" },
    { src: "images/semester2_pic1.jpg", semester: 2, text: "Group study session." },
    // Add more photos here
];

photos.forEach(photo => {
    let imgElement = document.createElement("img");
    imgElement.src = photo.src;
    imgElement.classList.add("photo-item");
    imgElement.dataset.semester = photo.semester;
    imgElement.onclick = () => openLightbox(photo.src, photo.text);
    photoGallery.appendChild(imgElement);
});
