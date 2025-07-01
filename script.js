// 🔘 Hamburger Toggle
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
  if (sidebar.style.display === 'block') {
    sidebar.style.display = 'none';
  } else {
    sidebar.style.display = 'block';
  }
});

// 🔁 Button Actions for Each Section
document.querySelectorAll('.card').forEach((card) => {
  const btnGroup = card.querySelector('.btn-group');
  
  // Hidden file input
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.style.display = 'none';
  card.appendChild(fileInput);

  // Upload
  btnGroup.querySelector('button:nth-child(1)').addEventListener('click', () => {
    fileInput.click();
    fileInput.onchange = () => {
      const fileName = fileInput.files[0]?.name || '';
      if (fileName) {
        alert(`✅ Uploaded: ${fileName}`);
      }
    };
  });

  // Edit
  btnGroup.querySelector('button:nth-child(2)').addEventListener('click', () => {
    const current = card.textContent.trim();
    const updated = prompt('✏️ Edit content:', current);
    if (updated) {
      const icon = card.querySelector('i');
      icon.nextSibling.textContent = ' ' + updated;
    }
  });

  // Remove
  btnGroup.querySelector('button:nth-child(3)').addEventListener('click', () => {
    if (confirm('❌ Are you sure you want to delete this section?')) {
      card.parentElement.remove();
    }
  });

  // Rename
  btnGroup.querySelector('button:nth-child(4)').addEventListener('click', () => {
    const current = card.textContent.trim();
    const renamed = prompt('📝 Rename section:', current);
    if (renamed) {
      const icon = card.querySelector('i');
      icon.nextSibling.textContent = ' ' + renamed;
    }
  });
});