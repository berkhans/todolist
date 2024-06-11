document.addEventListener('DOMContentLoaded', function()
 {
    // Fonksiyon içeriği buraya geleceklistItems.forEach(function(item) {
    const closeButton = document.createElement('btn');
    closeButton.textContent = 'x';
    closeButton.className = 'close';
    closeButton.onclick = function() {
      item.parentElement.removeChild(item);
    };
    item.appendChild(closeButton);
  });

document.getElementById('btn').addEventListener('click', function() {
    const input = document.getElementById('task');
    const inputValue = input.value.trim();
    const listItems = document.querySelectorAll('#liste li');

  
    if (inputValue === '') {
      // Boş ekleme yapamazsınız uyarısını göster
    $('#errorToast').toast('show');
    } else {
      const list = document.getElementById('liste');
      const listItem = document.createElement('li');
  
      listItem.textContent = inputValue;
  
      // Silme düğmesini oluştur ve ekle
      const closeButton = document.createElement('btn');
      closeButton.textContent = 'x';
      closeButton.className = 'close';
      closeButton.onclick = function() {
        list.removeChild(listItem);
      };
      listItem.appendChild(closeButton);
  
      list.appendChild(listItem);
  
      // Input kutusunu temizle
      input.value = '';
    }
  });