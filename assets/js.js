$(document).ready(function() {
  // Theme Switcher
  $('#theme-switcher-btn').click(function() {
    $('body').toggleClass('light-theme');
    $('body').toggleClass('dark-theme');
  });

  // Server Status
  const serverUrl = 'https://api.mcsrvstat.us/2/bannermc.onthewifi.com:25770'; // Replace with your server's IP or hostname
  const serverStatus = $('#server-status');

  function checkServerStatus() {
    $.ajax({
      url: serverUrl,
      dataType: 'json',
      success: function(data) {
        if (data.online) {
          serverStatus.text(`Online - ${data.players.online} players online`);
        } else {
          serverStatus.text('Offline[maintenance]');
        }
      },
      error: function() {
        serverStatus.text('Error fetching server status');
      }
    });
  }

  checkServerStatus(); // Check server status on page load
  setInterval(checkServerStatus, 5); // Check server status every minute


  
  // Server IP Copying
  $('#copy-server-btn').click(function() {
    const serverIP = "bannersmp.onthewifi.com:19160"
    navigator.clipboard.writeText(serverIP)
      .then(function() {
        alert(`Copied Server IP! Enjoy Playing!`);
      })
      .catch(function() {
        alert('Failed to copy server IP');
      });
  });
});
