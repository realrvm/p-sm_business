document.addEventListener("DOMContentLoaded", () => {
    const before1 = ".before_after__images-left-before1";
    const before2 = ".before_after__images-left-before2";
    const after1 = ".before_after__images-left-after1";
    const after2 = ".before_after__images-left-after2";

    // magnific pop plugin в before-after section
    const beforeAfter = [before1, before2, after1, after2];

    for (const elem of beforeAfter) {
        $(elem).magnificPopup({
            type: "image",
            closeOnContentClick: true,
            mainClass: "mfp-img-mobile",
            image: {
                verticalFit: true,
            },
        });
    }

    // slider в myjob section
    $(".myjob__slider").slick({
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
        ],
    });

    // выпадающие списки в faq section
    $(".faq__question-answer").hide()
    $(".faq__question-title").click(function() {
        $(this).parent().find('.faq__question-answer').slideToggle(200);
        $(this).parent().find(".faq__question-title-plus").toggleClass("faq__plus-rotate")
        return false;
    })

});
