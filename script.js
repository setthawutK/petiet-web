document.getElementById('search').addEventListener('input', function (e) {
    const searchValue = e.target.value.toLowerCase();
    const members = document.querySelectorAll('.member-card');
    
    members.forEach(member => {
      const name = member.querySelector('h2').textContent.toLowerCase();
      if (name.includes(searchValue)) {
        member.style.display = 'block';
      } else {
        member.style.display = 'none';
      }
    });
  });
  
  document.getElementById('order').addEventListener('change', function (e) {
    const orderBy = e.target.value;
    const membersGrid = document.querySelector('.members-grid');
    const members = Array.from(membersGrid.children);
    
    if (orderBy === 'name') {
      members.sort((a, b) => 
        a.querySelector('h2').textContent.localeCompare(b.querySelector('h2').textContent)
      );
    } else if (orderBy === 'active') {
      // สมมุติคุณมีข้อมูล last active สามารถเพิ่ม logic ได้
      // ตัวอย่างนี้เว้นไว้
    }
  
    members.forEach(member => membersGrid.appendChild(member));
  });