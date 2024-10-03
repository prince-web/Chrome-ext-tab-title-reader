document.getElementById('captureTitleBtn').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var currentTab = tabs[0];
      var tabTitle = document.getElementById('tabTitle');
      tabTitle.textContent = currentTab.title;
    });
  });