// alert('hello its workin');
console.log("working");
function bannerAds() {
  setInterval(function() {
    let closeBtn = $("button[class*='ytp-ad-overlay-close-button']");
    closeBtn.click();
  }, 1000);
}

function fullPageAds() {
  setInterval(() => {
    let skipBtn = $("button[class*='videoAdUiSkipButton']");
    if (skipBtn) {
      skipBtn.trigger("click");
    }
  }, 1000);
}

function blackAdd() {
  setInterval(() => {
    let ad = $(
      "div[class*='ad-container ad-container-single-media-element-annotations ad-overlay']"
    );
    if (ad) {
      ad.hide();
    }
  }, 1000);
}

bannerAds();
fullPageAds();
blackAdd();

// https://www.youtube.com/watch?v=RArD1WtzxqM
