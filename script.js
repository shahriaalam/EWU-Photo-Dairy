document.addEventListener("DOMContentLoaded", function () {
    
    // Password Protection
    document.getElementById("login-btn").addEventListener("click", function () {
        const passwordInput = document.getElementById("password").value;
        if (passwordInput === "1") {
            document.getElementById("login-screen").classList.add("hidden");
            document.getElementById("gallery").classList.remove("hidden");
        } else {
            document.getElementById("error-message").innerText = "Incorrect password!";
        }
    });

    // Semester Filtering
    window.filterSemester = function (semester) {
        const photos = document.querySelectorAll(".photo-item");
        photos.forEach(photo => {
            if (semester === "all" || photo.dataset.semester == semester) {
                photo.style.display = "block";
            } else {
                photo.style.display = "none";
            }
        });
    };

    // Lightbox Functionality
    window.openLightbox = function (imgSrc, imgText) {
        document.getElementById("lightbox-img").src = imgSrc;
        document.getElementById("lightbox-text").innerText = imgText;
        document.getElementById("lightbox").classList.remove("hidden");
    };

    window.closeLightbox = function () {
        document.getElementById("lightbox").classList.add("hidden");
    };

    // Dynamically Load Photos
    const photoGallery = document.getElementById("photo-gallery");
    const photos = [
        { src: "images/2nd Semester/S2_1.jpg", semester: 2, text: "First Our Trio meeting" },
        { src: "images/2nd Semester/S2_2.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_3.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_4.jpeg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_5.jpeg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_6.jpeg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_7.jpeg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_8.jpeg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_9.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_10.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_11.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_12.jpeg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_13.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_14.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_15.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_16.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_17.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_18.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_19.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_20.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_21.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_22.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_23.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_23.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_25.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_26.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_27.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_28.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_29.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_30.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_31.jpg", semester: 2, text: "Group study session." },

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

});
