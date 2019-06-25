function main() {
  const hostname = getHostName();
  const blockedElements = getBlockedElements(hostname);

  if (blockedElements) {
    blockedElements.forEach(blockedElement => {
      const { selector } = blockedElement;

      const domElements = document.querySelectorAll(selector);

      domElements.forEach(element => {
        element.style.display = "none";
      });
    });
  }
}

/**
 *
 */
function getHostName() {
  return window.location.host;
}

/**
 *
 * @param {string} hostname
 */
function getBlockedElements(hostname) {
  const blockedElements = {
    "twitter.com": [
      {
        name: "Profile Stats",
        selector: ".ProfileCardStats-statList"
      },
      {
        name: "Tweet Stats",
        selector: ".ProfileTweet-actionCountForPresentation"
      },
      {
        name: "Tweet Like Button",
        selector: ".ProfileTweet-action--favorite"
      }
    ]
  };

  return blockedElements[hostname];
}

main();
