function replaceDummiesToOriginal(dummyClass, originalElement) {

    const smallSocialsRows = $(`.${dummyClass}`);
    smallSocialsRows.replaceWith(smallSocialsRow);

}

const smallSocialsRow = `
    <div class="d-flex">

        <a class="social social--small social--vk mr-2" href="https://www.vk.com" aria-label="vk-link">
            <i class="fa-brands fa-vk"></i>
        </a>

        <a class="social social--small social--facebook mr-2" href="https://www.twitter.com" aria-label="twitter-link">
            <i class="fa-brands fa-twitter fa-sm"></i>
        </a>

        <a class="social social--small social--twitter mr-2" href="https://www.facebook.com" aria-label="facebook-link">
            <i class="fa-brands fa-facebook-f fa-sm"></i>
        </a>

        <a class="social social--small social--instagram mr-2" href="https://www.instagram.com"
            aria-label="instagram-link">
            <i class="fa-brands fa-instagram fa-sm"></i>
        </a>

        <a class="social social--small social--ok" href="https://www.ok.ru" aria-label="ok-link">
            <i class="fa-brands fa-odnoklassniki fa-sm"></i>
        </a>

    </div>`;

replaceDummiesToOriginal("socials-row--small", smallSocialsRow);

// Sidebar button
function switchSidebar(forceMode) {
    const baseWrapper = $(".base-wrapper");
    const body = $("body");

    if (forceMode == null) {
        baseWrapper.toggleClass("toggled");
        body.toggleClass("overflow-hidden");
        return;
    }

    forceMode ? baseWrapper.addClass("toggled") : baseWrapper.removeClass("toggled");
    forceMode ? body.addClass("overflow-hidden") : body.removeClass("overflow-hidden");
}

$(".sidebar-collapser-btn").on("click", function () {
    switchSidebar();
});

// Disable sidebar for large and bigger screens
let lastWindowWidth;
$(window).resize(function () {
    const currentWindowWidth = window.screen.width;

    if (lastWindowWidth < 991 && currentWindowWidth >= 991) {
        switchSidebar(false);
    }

    lastWindowWidth = window.screen.width;
});
