// Function to check for and click skip intro buttons
function skipIntro() {
    console.log('========skipIntro========');
    // Netflix skip intro button
    // const netflixSkipButton = document.querySelector('.skip-credits');
    const netflixSkipButton = document.querySelector('.watch-video--skip-content-button');
    if (netflixSkipButton) {
        netflixSkipButton.click();
    }

    // YouTube skip intro button (for ads)
    const youtubeSkipButton = document.querySelector('.ytp-ad-skip-button-modern');
    if (youtubeSkipButton) {
        youtubeSkipButton.click();
    }
}

// Run the skip function periodically
setInterval(skipIntro, 1000);

// Also run it when the page loads
document.addEventListener('load', skipIntro); 