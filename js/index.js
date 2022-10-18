const smallSocialsRow = `
    <div class="d-flex">

        <a class="social social--small social--dark social--vk mr-2" href="https://www.vk.com" aria-label="vk-link">
            <i class="fa-brands fa-vk"></i>
        </a>

        <a class="social social--small social--dark social--facebook mr-2" href="https://www.twitter.com" aria-label="twitter-link">
            <i class="fa-brands fa-twitter fa-sm"></i>
        </a>

        <a class="social social--small social--dark social--twitter mr-2" href="https://www.facebook.com" aria-label="facebook-link">
            <i class="fa-brands fa-facebook-f fa-sm"></i>
        </a>

        <a class="social social--small social--dark social--instagram mr-2" href="https://www.instagram.com"
            aria-label="instagram-link">
            <i class="fa-brands fa-instagram fa-sm"></i>
        </a>

        <a class="social social--small social--dark social--ok" href="https://www.ok.ru" aria-label="ok-link">
            <i class="fa-brands fa-odnoklassniki fa-sm"></i>
        </a>

    </div>`;

const smallSocialsRows = $(".socials-row--small");
smallSocialsRows.replaceWith(smallSocialsRow);