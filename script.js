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

    // Scroll to Section
    window.scrollToSection = function (sectionId) {
        const section = document.getElementById(sectionId);
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


    const sections = [
        {
            name: "Our Family", 
            photos: [
            { src: "images/1st Semester/1.jpg", semester: 1, text: "Sidratul Moontaha (2021-3-60-048)" },
            { src: "images/1st Semester/2.jpg", semester: 1, text: "B. M. Shahria Alam (2021-3-60-016)" },
            { src: "images/1st Semester/3.jpg", semester: 1, text: "Tasmiah Rahman Orpa (2021-3-60-021)" },
            { src: "images/1st Semester/4.jpg", semester: 1, text: "Mohammad Tahmid Noor (2021-3-60-026)" },
            { src: "images/1st Semester/5.jpg", semester: 1, text: "Umma Habiba Ahmed (2021-3-60-047)" },
            { src: "images/1st Semester/6.jpg", semester: 1, text: "Mahjabin Tasnim (2021-3-60-271)" },
            { src: "images/1st Semester/7.jpg", semester: 1, text: "Ishrat Jahan Momo (2021-3-60-049)" },
            { src: "images/1st Semester/8.jpeg", semester: 1, text: "Shaila Afroz Anika (2021-3-60-045)" },
            { src: "images/1st Semester/9.jpg", semester: 1, text: "Rafsun Islam (2021-3-60-024)" },
            { src: "images/1st Semester/10.jpg", semester: 1, text: "Golam Kibria (2021-3-60-215)" },
              
            ]
        },
        {
            name: "Semester 2", 
            photos:[
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
        { src: "images/2nd Semester/S2_45.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_46.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_47.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_48.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_49.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_50.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_51.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_53.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_54.png", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_55.jpeg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_56.jpeg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_57.jpeg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_58.jpeg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_59.jpeg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_60.jpeg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_61.jpeg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_62.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_63.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_64.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_65.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_66.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_67.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_68.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_69.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_70.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_71.jpg", semester: 2, text: "Group study session." },
        { src: "images/2nd Semester/S2_72.jpg", semester: 2, text: "Group study session." },
        ]
        },
        {
            name: "Semester 3", 
            photos: [
            { src: "images/3rd Semester/S3_1.JPG", semester: 3, text: "Our First Presentation" },
            { src: "images/3rd Semester/S3_2.JPG", semester: 3, text: "First Our Trio meeting" },
            { src: "images/3rd Semester/S3_3.JPG", semester: 3, text: "Group study session." },
            { src: "images/3rd Semester/S3_4.JPG", semester: 3, text: "Group study session." },
            { src: "images/2nd Semester/S2_44.jpg", semester: 3, text: "Group study session." },
        ]
        },
        {   name: "Semester 4", 
            photos: [
            { src: "images/4th Semester/S4_1.JPG", semester: 4, text: "Our First Presentation" },
            { src: "images/4th Semester/S4_2.JPG", semester: 4, text: "Our First Presentation" },
            { src: "images/4th Semester/S4_3.JPG", semester: 4, text: "Our First Presentation" },
            { src: "images/4th Semester/S4_4.JPG", semester: 4, text: "Our First Presentation" },
            { src: "images/4th Semester/S4_5.JPG", semester: 4, text: "Our First Presentation" },
            { src: "images/4th Semester/S4_6.JPG", semester: 4, text: "Our First Presentation" },
            { src: "images/4th Semester/S4_7.JPG", semester: 4, text: "Our First Presentation" },
            { src: "images/4th Semester/S4_8.JPG", semester: 4, text: "Our First Presentation" },
            { src: "images/4th Semester/S4_9.JPG", semester: 4, text: "Our First Presentation" },
            { src: "images/4th Semester/S4_10.JPG", semester: 4, text: "Our First Presentation" },
            { src: "images/4th Semester/S4_11.JPG", semester: 4, text: "Our First Presentation" },
            { src: "images/4th Semester/S4_12.JPG", semester: 4, text: "Our First Presentation" },
            { src: "images/4th Semester/S4_13.JPG", semester: 4, text: "Our First Presentation" },
            
        ]
        },
        {
            name: "Semester 5", 
            photos:[
            { src: "images/5th Semester/S5_1.JPG", semester: 5, text: "Our First Presentation" },
            { src: "images/5th Semester/S5_2.jpg", semester: 5, text: "Our First Presentation" },
            { src: "images/5th Semester/S5_3.jpg", semester: 5, text: "Our First Presentation" },
            { src: "images/5th Semester/S5_4.jpg", semester: 5, text: "Our First Presentation" },
            { src: "images/5th Semester/S5_5.jpg", semester: 5, text: "Our First Presentation" },
            { src: "images/5th Semester/S5_6.jpg", semester: 5, text: "Our First Presentation" },
            { src: "images/5th Semester/S5_7.PNG", semester: 5, text: "Our First Presentation" },
        ]
        },
        {
            name: "Semester 6", 
            photos: [
            { src: "images/6th Semester/S6_1.JPG", semester: 6, text: "Our First Presentation" },
            { src: "images/6th Semester/S6_2.JPG", semester: 6, text: "Our First Presentation" },
            { src: "images/6th Semester/S6_3.JPG", semester: 6, text: "Our First Presentation" },
            { src: "images/6th Semester/S6_4.JPG", semester: 6, text: "Our First Presentation" },
            { src: "images/6th Semester/S6_5.JPG", semester: 6, text: "Our First Presentation" },
            { src: "images/6th Semester/S6_6.JPG", semester: 6, text: "Our First Presentation" },
            { src: "images/6th Semester/S6_7.JPG", semester: 6, text: "Our First Presentation" },
            { src: "images/6th Semester/S6_8.JPG", semester: 6, text: "Our First Presentation" },
            { src: "images/6th Semester/S6_9.jpg", semester: 6, text: "Our First Presentation" },
            { src: "images/6th Semester/S6_10.jpg", semester: 6, text: "Our First Presentation" },
            { src: "images/6th Semester/S6_11.jpg", semester: 6, text: "Our First Presentation" },
            { src: "images/6th Semester/S6_12.jpg", semester: 6, text: "Our First Presentation" },
            { src: "images/6th Semester/S6_13.jpg", semester: 6, text: "Our First Presentation" },
            { src: "images/6th Semester/S6_14.jpg", semester: 6, text: "Our First Presentation" },
            { src: "images/6th Semester/S6_15.jpg", semester: 6, text: "Our First Presentation" },
            { src: "images/6th Semester/S6_16.jpg", semester: 6, text: "Our First Presentation" },
            { src: "images/6th Semester/S6_17.jpg", semester: 6, text: "Our First Presentation" },
            { src: "images/6th Semester/S6_18.jpg", semester: 6, text: "Our First Presentation" },
            { src: "images/6th Semester/S6_19.jpg", semester: 6, text: "Our First Presentation" },
            { src: "images/6th Semester/S6_20.jpg", semester: 6, text: "Our First Presentation" },
            { src: "images/6th Semester/S6_21.jpg", semester: 6, text: "Our First Presentation" },
            { src: "images/6th Semester/S6_22.jpg", semester: 6, text: "Our First Presentation" },
            { src: "images/6th Semester/S6_23.jpg", semester: 6, text: "Our First Presentation" },

        ]
        },
        {   name: "Semester 7", 
            photos:[
            { src: "images/7th Semester/S7_1.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_2.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_3.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_4.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_5.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_6.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_7.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_8.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_9.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_10.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_11.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_12.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_13.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_14.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_15.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_16.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_17.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_18.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_19.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_20.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_21.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_22.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_23.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_24.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_25.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_26.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_27.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_28.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_29.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_30.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_31.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_32.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_33.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_34.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_35.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_36.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_37.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_38.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_39.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_40.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_41.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_42.jpg", semester: 7, text: "Our First Presentation" },
            { src: "images/7th Semester/S7_43.jpg", semester: 7, text: "Our First Presentation" },
            
        ]
        },
        {   name: "Semester 8", 
            photos:
            [
            { src: "images/8th Semester/S8_1.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_2.jpeg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_3.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_4.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_5.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_6.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_7.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_8.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_9.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_10.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_11.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_12.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_13.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_14.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_15.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_16.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_17.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_18.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_19.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_20.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_21.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_22.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_23.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_24.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_25.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_26.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_27.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_28.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_29.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_30.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_31.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_32.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_33.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_34.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_35.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_36.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_37.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_38.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_39.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_40.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_41.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_42.jpg", semester: 8, text: "Our First Presentation" },
            { src: "images/8th Semester/S8_43.jpg", semester: 8, text: "Our First Presentation" }
            
        ]
        },
        {
            name: "Semester 9", 
            photos:[
            { src: "images/9th Semester/S9_1.jpeg", semester: 9, text: "Our First Presentation" },
            { src: "images/9th Semester/S9_2.jpg", semester: 9, text: "Our First Presentation" },
            { src: "images/9th Semester/S9_3.jpg", semester: 9, text: "Our First Presentation" },
            
        ]
        },
        {
            name: "Semester 10", 
            photos: [
            { src: "images/1st Semester/S1_1.jpg", text: "First Day at University" },
            { src: "images/1st Semester/S1_2.jpg", text: "Lab Session" }
        ]
        },

        {
            name: "Semester 11", 
            photos:[
            { src: "images/11th Semester/S11_1.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_2.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_3.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_4.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_5.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_6.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_7.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_8.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_9.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_10.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_11.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_12.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_13.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_14.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_15.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_16.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_17.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_18.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_19.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_20.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_21.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_22.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_23.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_24.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_25.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_26.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_27.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_28.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_29.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_30.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_31.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_32.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_33.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_34.jpg", semester: 11, text: "Our First Presentation" },
            { src: "images/11th Semester/S11_35.jpeg", semester: 11, text: "Our First Presentation" },
        ]
        },
        {
            name: "Semester 12", 
            photos: [
            { src: "images/1st Semester/S1_1.jpg", text: "First Day at University" },
            { src: "images/1st Semester/S1_2.jpg", text: "Lab Session" }
        ]
        }
        // Add up to 12 semesters
    ];

    const photoGallery = document.getElementById("photo-gallery");

    // Generate Sections Dynamically
    sections.forEach((section, index) => {
        let sectionDiv = document.createElement("div");
        sectionDiv.classList.add("semester-section");
        sectionDiv.id = `section-${index + 1}`;

        // Create the title of the section
        let title = document.createElement("h2");
        title.classList.add("semester-title");
        title.innerText = section.name;
        sectionDiv.appendChild(title);

        // Create the photo grid
        let grid = document.createElement("div");
        grid.classList.add("photo-grid");

        section.photos.forEach(photo => {
            let img = document.createElement("img");
            img.src = photo.src;
            img.onclick = () => openLightbox(photo.src, photo.text);
            grid.appendChild(img);
        });

        sectionDiv.appendChild(grid);
        photoGallery.appendChild(sectionDiv);
    });
});