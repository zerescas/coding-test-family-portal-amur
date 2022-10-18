const smallSocialsRow = `
    <div class="d-flex">

        <a class="social social--small social--vk  mr-1" href="https://www.vk.com">
            <img src="img/social/logo/vk.svg" alt="vk-icon">
        </a>

        <a class="social social--small social--facebook mr-1" href="https://www.twitter.com">
            <img src="img/social/logo/twitter.svg" alt="twitter-icon">
        </a>

        <a class="social social--small social--twitter mr-1" href="https://www.facebook.com">
            <img src="img/social/logo/facebook.svg" alt="facebook-icon">
        </a>

        <a class="social social--small social--instagram mr-1" href="https://www.instagram.com">
            <img src="img/social/logo/instagram.svg" alt="instagram-icon">
        </a>

        <a class="social social--small social--ok" href="https://www.ok.ru">
            <img src="img/social/logo/ok.svg" alt="ok-icon">
        </a>

    </div>`;

const smallSocialsRows = $(".socials-row--small");
smallSocialsRows.replaceWith(smallSocialsRow);