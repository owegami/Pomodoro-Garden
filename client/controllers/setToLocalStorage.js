exports.setToLocalStorage = (userSettingsObj) => {
  let userSettings = JSON.stringify(userSettingsObj);
  if (localStorage.getItem('userSettings') !== undefined) {
    localStorage.removeItem('userSettings');
  }
  localStorage.setItem('userSettings', userSettings);
}