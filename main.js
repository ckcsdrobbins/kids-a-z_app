/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/trunk/apps/app.runtime.html
 * @see http://developer.chrome.com/trunk/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
  runApp();
});

/**
 * Listens for the app restarting then re-creates the window.
 *
 * @see http://developer.chrome.com/trunk/apps/app.runtime.html
 */
chrome.app.runtime.onRestarted.addListener(function() {
  runApp();
});

/**
 * Creates the window for the application.
 *
 * @see http://developer.chrome.com/trunk/apps/app.window.html
 */
 
function runApp() {
  chrome.app.window.create('application.html', {
    bounds: {
      'width': 1024,
      'height': 768
    }
  });
}

 /**
 * Maximizes webview content
 *
 */
 
function updateWebviews() {
  var webview = document.querySelector("webview");
  webview.style.height = document.documentElement.clientHeight + "px";
  webview.style.width = document.documentElement.clientWidth + "px";
};

onload = updateWebviews;
window.onresize = updateWebviews;

chrome.storage.local.set({key: value}, function() {
          console.log('Value is set to ' + value);
        });

chrome.storage.local.get(['key'], function(result) {
          console.log('Value currently is ' + result.key);
        });
        
/**
* Listens for the app to request access to audio/video functionality
*/

webview.addEventListener('permissionrequest', function(e) {
  if (e.permission === 'media') {
    e.request.allow();
  }
});