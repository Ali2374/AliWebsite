(function(){
  const toggleBtn = document.getElementById('toggle-edit');
  const saveBtn = document.getElementById('save');
  const loadBtn = document.getElementById('load');
  const exportBtn = document.getElementById('export');
  let editing = false;

  function setEditing(on){
    editing = on;
    document.querySelectorAll('[data-editable="true"]').forEach(el=>{
      el.contentEditable = on;
      if(on) el.setAttribute('data-editing','true'); else el.removeAttribute('data-editing');
    });
    toggleBtn.textContent = on? 'Exit edit' : 'Edit';
  }

  function save(){
    const data = {};
    document.querySelectorAll('[data-editable="true"]').forEach((el, idx)=>{
      const key = el.id || (`editable_`+idx);
      data[key] = el.innerHTML;
    });
    localStorage.setItem('sampatt_template_saved', JSON.stringify(data));
    alert('Saved to localStorage.');
  }

  function load(){
    const raw = localStorage.getItem('sampatt_template_saved');
    if(!raw){ alert('No saved content found.'); return; }
    const data = JSON.parse(raw);
    document.querySelectorAll('[data-editable="true"]').forEach((el, idx)=>{
      const key = el.id || (`editable_`+idx);
      if(data[key]) el.innerHTML = data[key];
    });
    alert('Loaded saved content.');
  }

  function exportHTML(){
    const docClone = document.documentElement.cloneNode(true);
    // remove toolbar before export
    const toolbar = docClone.querySelector('.toolbar');
    if(toolbar) toolbar.remove();
    const html = '<!doctype html>\n'+docClone.outerHTML;
    const blob = new Blob([html], {type:'text/html'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sampatt-template.html';
    a.click();
    URL.revokeObjectURL(url);
  }

  toggleBtn.addEventListener('click', ()=> setEditing(!editing));
  saveBtn.addEventListener('click', save);
  loadBtn.addEventListener('click', load);
  exportBtn.addEventListener('click', exportHTML);

  // auto-load if present
  if(localStorage.getItem('sampatt_template_saved')){
    // don't auto-load into view, but enable quick load
    console.log('Saved template found in localStorage. Click Load to apply.');
  }
})();
