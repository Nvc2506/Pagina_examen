let currentFilter = 'all';

function setFilter(cat, btn) {    
  currentFilter = cat;    
  document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('active'));    
  btn.classList.add('active');    
  applyFilters();  
}

function applyFilters() {    
  const q = document.getElementById('searchInput').value.toLowerCase();    
  const entries = document.querySelectorAll('.entry');    
  let count = 0;    
  entries.forEach(e => {      
    const catMatch = currentFilter === 'all' || e.dataset.cat === currentFilter;      
    const searchMatch = !q || e.dataset.search.includes(q) || e.innerText.toLowerCase().includes(q);      
    if (catMatch && searchMatch) {        
      e.classList.remove('hidden');        
      count++;      
    } else {        
      e.classList.add('hidden');      
    }    
  });    
  document.getElementById('shown-count').textContent = count;  
}

document.getElementById('shown-count').textContent = document.querySelectorAll('.entry').length;  
document.getElementById('total-count').textContent = document.querySelectorAll('.entry').length;