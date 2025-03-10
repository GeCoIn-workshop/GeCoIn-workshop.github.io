document.addEventListener('DOMContentLoaded', function() {
    const twitterScript = document.createElement('script');
    twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    twitterScript.setAttribute('async', 'true');
    twitterScript.setAttribute('charset', 'utf-8');
    document.head.appendChild(twitterScript);
});
