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

    // Scroll to Semester Section
    window.scrollToSemester = function (semesterId) {
        const section = document.getElementById(semesterId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
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

    // Dynamically Load Photos into Semester Sections
    const photoGallery = document.getElementById("photo-gallery");

    const semesters = {
        1: [
            { src: "images/1st Semester/S1_1.jpg", text: "First Day at University" },
            { src: "images/1st Semester/S1_2.jpg", text: "Lab Session" }
        ],
        2: [
        { src: "images/2nd Semester/S2_1.1.png", semester: 2, text: "Our First Presentation" },
        { src: "images/2nd Semester/S2_1.jpg", semester: 2, text: "First Our Trio meeting" },
        { src: "images/2nd Semester/S2_2.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_3.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_4.jpeg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_5.jpeg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_6.jpeg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_7.jpeg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_8.jpeg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_52.jpg", semester: 2, text: "Group study session." },
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
        { src: "images/2nd Semester/S2_24.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_25.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_26.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_27.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_28.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_29.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_30.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_31.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_32.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_33.jpeg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_34.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_35.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_36.jpeg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_37.jpeg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_38.jpeg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_39.jpeg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_40.jpeg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_41.jpeg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_42.jpeg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_43.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_44.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_45.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_46.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_47.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_48.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_49.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_50.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_51.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_53.jpg", semester: 2, text: "Group study session." },
        ],
        3: [
            { src: "images/1st Semester/S1_1.jpg", text: "First Day at University" },
            { src: "images/1st Semester/S1_2.jpg", text: "Lab Session" }
        ],
        4: [
            { src: "images/1st Semester/S1_1.jpg", text: "First Day at University" },
            { src: "images/1st Semester/S1_2.jpg", text: "Lab Session" }
        ],
        5: [
            { src: "images/1st Semester/S1_1.jpg", text: "First Day at University" },
            { src: "images/1st Semester/S1_2.jpg", text: "Lab Session" }
        ],
        6: [
            { src: "images/1st Semester/S1_1.jpg", text: "First Day at University" },
            { src: "images/1st Semester/S1_2.jpg", text: "Lab Session" }
        ],
        7: [
            { src: "images/1st Semester/S1_1.jpg", text: "First Day at University" },
            { src: "images/1st Semester/S1_2.jpg", text: "Lab Session" }
        ],
        8: [
            { src: "images/1st Semester/S1_1.jpg", text: "First Day at University" },
            { src: "images/1st Semester/S1_2.jpg", text: "Lab Session" }
        ],
        9: [
            { src: "images/1st Semester/S1_1.jpg", text: "First Day at University" },
            { src: "images/1st Semester/S1_2.jpg", text: "Lab Session" }
        ],
        10: [
            { src: "images/1st Semester/S1_1.jpg", text: "First Day at University" },
            { src: "images/1st Semester/S1_2.jpg", text: "Lab Session" }
        ],
        11: [
            { src: "images/1st Semester/S1_1.jpg", text: "First Day at University" },
            { src: "images/1st Semester/S1_2.jpg", text: "Lab Session" }
        ],
        12: [
            { src: "images/1st Semester/S1_1.jpg", text: "First Day at University" },
            { src: "images/1st Semester/S1_2.jpg", text: "Lab Session" }
        ],
        // Add up to 12 semesters
    };

    Object.keys(semesters).forEach(semester => {
        let section = document.createElement("div");
        section.classList.add("semester-section");
        section.id = `semester-${semester}`;

        let title = document.createElement("h2");
        title.classList.add("semester-title");
        title.innerText = `Semester ${semester}`;
        section.appendChild(title);

        let grid = document.createElement("div");
        grid.classList.add("photo-grid");

        semesters[semester].forEach(photo => {
            let img = document.createElement("img");
            img.src = photo.src;
            img.onclick = () => openLightbox(photo.src, photo.text);
            grid.appendChild(img);
        });

        section.appendChild(grid);
        photoGallery.appendChild(section);
    });

});




