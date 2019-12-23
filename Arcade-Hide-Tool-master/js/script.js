var getSelectedTab = (tab) => {
  var tabId = tab.id;
  var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);
  document.getElementById('hide').addEventListener('click', () => sendMessage({ action: 'HIDE' }));
  document.getElementById('reset').addEventListener('click', () => sendMessage({ action: 'RESET' }));
  
  document.getElementById('hide_role').addEventListener('click', () => sendMessage({ action: 'Hide_RoleS' }));
  document.getElementById('reset_role').addEventListener('click', () => sendMessage({ action: 'Reset_RoleS' }));

  document.getElementById('hide_childbt1').addEventListener('click', () => sendMessage({ action: 'Hide_Childbt1' }));
  document.getElementById('reset_childbt1').addEventListener('click', () => sendMessage({ action: 'Reset_Childbt1' }));
  
  document.getElementById('mission').addEventListener('click', () => sendMessage({ action: 'Mission' }));

  document.getElementById('test').addEventListener('click', () => sendMessage({ action: 'Test' }));
  document.getElementById('reset_test').addEventListener('click', () => sendMessage({ action: 'Reset_Test' }))

}
chrome.tabs.getSelected(null, getSelectedTab);