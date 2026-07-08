function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ── Work list ── */
const workList = document.getElementById('work-list');

function renderWorkList(filter) {
  workList.innerHTML = '';
  const visible = filter === 'all' ? projects : projects.filter(p => p.type === filter);
  visible.forEach(p => {
    const i = projects.indexOf(p);
    const row = document.createElement('div');
    row.className = 'work-item';
    row.style.cssText = 'display:flex; align-items:center; gap:30px; padding:34px 14px; border-bottom:1px solid #e2e2e2; cursor:pointer; transition:padding-left .28s ease, color .2s ease; color:#0e0e0e;';
    row.onclick = () => openCase(i);
    row.innerHTML = `
      <span style="font:900 clamp(34px,4vw,52px)/0.8 'Archivo',sans-serif; color:#dcdcdc; width:84px; flex-shrink:0;">${esc(p.num)}</span>
      <div style="flex:1; min-width:0;">
        <div style="font:800 clamp(26px,3.4vw,42px)/1 'Archivo',sans-serif; letter-spacing:-.025em; margin-bottom:8px;">${esc(p.title)}</div>
        <div style="font:400 15px/1.4 'Archivo',sans-serif; color:#666;">${esc(p.summary)}</div>
      </div>
      <div style="display:flex; flex-direction:column; align-items:flex-end; gap:8px; flex-shrink:0;">
        <span style="font:600 11px/1 'JetBrains Mono',monospace; letter-spacing:.04em; text-transform:uppercase; color:#888;">${esc(p.tag)}</span>
        <span style="font:500 11px/1 'JetBrains Mono',monospace; color:#888;">${esc(p.year)}</span>
      </div>
      <span style="font:400 28px/1 'Archivo',sans-serif; flex-shrink:0;">↗</span>`;
    workList.appendChild(row);
  });
}

renderWorkList('all');

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderWorkList(btn.dataset.tab);
  });
});

/* ── Experience ── */
const expList = document.getElementById('exp-list');
experience.forEach(x => {
  const row = document.createElement('div');
  row.className = 'exp-row';
  row.style.cssText = 'display:grid; grid-template-columns:220px 1fr; gap:40px; padding:40px 0; border-bottom:1px solid #2a2a2a;';
  row.innerHTML = `
    <div>
      <div style="font:600 12px/1.4 'JetBrains Mono',monospace; letter-spacing:.04em; color:oklch(0.7 0.18 25);">${esc(x.range)}</div>
      <div style="font:500 12px/1.4 'JetBrains Mono',monospace; color:#888; margin-top:8px;">${esc(x.loc)}</div>
    </div>
    <div>
      <div style="font:800 32px/1.02 'Archivo',sans-serif; letter-spacing:-.025em;">${esc(x.company)}</div>
      <div style="font:500 15px/1 'Archivo',sans-serif; color:#aaa; margin:8px 0 20px;">${esc(x.role)}</div>
      ${x.bullets.map(b => `
      <div style="display:flex; gap:14px; margin-bottom:12px;">
        <span style="color:oklch(0.66 0.2 25); font-size:14px; line-height:1.55; flex-shrink:0;">—</span>
        <p style="font:400 16px/1.55 'Archivo',sans-serif; margin:0; color:#d4d4d4; max-width:680px;">${esc(b)}</p>
      </div>`).join('')}
    </div>`;
  expList.appendChild(row);
});

/* ── Skills ── */
const skillsList = document.getElementById('skills-list');
skills.forEach(g => {
  const row = document.createElement('div');
  row.className = 'skills-row';
  row.style.cssText = 'display:grid; grid-template-columns:220px 1fr; gap:40px; padding:30px 0; border-bottom:1px solid #e2e2e2; align-items:start;';
  row.innerHTML = `
    <div style="font:700 16px/1.3 'Archivo',sans-serif; letter-spacing:-.01em;">${esc(g.label)}</div>
    <div style="display:flex; flex-wrap:wrap; gap:10px;">
      ${g.items.map(it => `<span style="font:500 13px/1 'JetBrains Mono',monospace; padding:9px 14px; border:1px solid #d0d0d0; border-radius:99px; color:#333;">${esc(it)}</span>`).join('')}
    </div>`;
  skillsList.appendChild(row);
});

/* ── Education ── */
const eduList = document.getElementById('edu-list');
education.forEach(e => {
  const row = document.createElement('div');
  row.style.cssText = 'padding:18px 0; border-top:1px solid #e2e2e2;';
  row.innerHTML = `
    <div style="font:700 18px/1.2 'Archivo',sans-serif; letter-spacing:-.01em;">${esc(e.school)}</div>
    <div style="font:500 14px/1.3 'Archivo',sans-serif; color:#666; margin:4px 0 8px;">${esc(e.sub)}</div>
    <div style="font:400 15px/1.3 'Archivo',sans-serif;">${esc(e.deg)}</div>
    <div style="font:500 12px/1 'JetBrains Mono',monospace; color:oklch(0.6 0.2 25); margin-top:8px;">${esc(e.date)}</div>`;
  eduList.appendChild(row);
});

/* ── Case study overlay ── */
function openCase(i) {
  const p = projects[i];
  document.body.style.overflow = 'hidden';
  document.getElementById('overlay-label').textContent = `Case Study / ${p.num}`;
  document.getElementById('overlay-content').innerHTML = `
    <div style="font:600 12px/1 'JetBrains Mono',monospace; letter-spacing:.08em; text-transform:uppercase; color:oklch(0.6 0.2 25); margin-bottom:24px;">${esc(p.tag)}</div>
    <h1 style="font:900 clamp(44px,7vw,92px)/0.92 'Archivo',sans-serif; letter-spacing:-.04em; margin:0 0 24px;">${esc(p.title)}</h1>
    <p style="font:400 22px/1.45 'Archivo',sans-serif; margin:0; max-width:680px; color:#333;">${esc(p.summary)}</p>

    <div class="case-meta-grid" style="display:grid; grid-template-columns:repeat(3,1fr); gap:30px; margin:48px 0; padding:30px 0; border-top:2px solid #0e0e0e; border-bottom:1px solid #e2e2e2;">
      <div>
        <div style="font:500 11px/1 'JetBrains Mono',monospace; letter-spacing:.08em; text-transform:uppercase; color:#888; margin-bottom:10px;">Role</div>
        <div style="font:600 16px/1.3 'Archivo',sans-serif;">${esc(p.role)}</div>
      </div>
      <div>
        <div style="font:500 11px/1 'JetBrains Mono',monospace; letter-spacing:.08em; text-transform:uppercase; color:#888; margin-bottom:10px;">Year</div>
        <div style="font:600 16px/1.3 'Archivo',sans-serif;">${esc(p.year)}</div>
      </div>
      <div>
        <div style="font:500 11px/1 'JetBrains Mono',monospace; letter-spacing:.08em; text-transform:uppercase; color:#888; margin-bottom:10px;">Stack</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px;">
          ${p.stack.map(s => `<span style="font:500 11px/1 'JetBrains Mono',monospace; padding:6px 10px; border:1px solid #d0d0d0; border-radius:99px; color:#333;">${esc(s)}</span>`).join('')}
        </div>
      </div>
    </div>

    <div class="case-body-grid" style="display:grid; grid-template-columns:1fr 1.3fr; gap:50px; margin-bottom:60px;">
      <div>
        <h3 style="font:600 12px/1 'JetBrains Mono',monospace; letter-spacing:.1em; text-transform:uppercase; color:oklch(0.6 0.2 25); margin:0 0 16px;">The Problem</h3>
        <p style="font:400 18px/1.5 'Archivo',sans-serif; margin:0; color:#333;">${esc(p.problem)}</p>
      </div>
      <div>
        <h3 style="font:600 12px/1 'JetBrains Mono',monospace; letter-spacing:.1em; text-transform:uppercase; color:oklch(0.6 0.2 25); margin:0 0 16px;">Approach</h3>
        ${p.approach.map(a => `
        <div style="display:flex; gap:14px; margin-bottom:16px;">
          <span style="color:oklch(0.6 0.2 25); font-size:15px; line-height:1.5; flex-shrink:0;">—</span>
          <p style="font:400 17px/1.5 'Archivo',sans-serif; margin:0; color:#333;">${esc(a)}</p>
        </div>`).join('')}
      </div>
    </div>

    <h3 style="font:600 12px/1 'JetBrains Mono',monospace; letter-spacing:.1em; text-transform:uppercase; margin:0 0 24px;"><span style="color:oklch(0.6 0.2 25);">→</span> Impact</h3>
    <div class="impact-grid" style="display:grid; grid-template-columns:repeat(4,1fr); gap:24px;">
      ${p.impact.map(m => `
      <div style="border-top:2px solid #0e0e0e; padding-top:18px;">
        <div style="font:800 clamp(30px,4vw,46px)/0.9 'Archivo',sans-serif; letter-spacing:-.03em;">${esc(m.stat)}</div>
        <div style="font:500 12px/1.3 'JetBrains Mono',monospace; color:#888; margin-top:10px;">${esc(m.label)}</div>
      </div>`).join('')}
    </div>`;

  const overlay = document.getElementById('case-overlay');
  overlay.style.display = 'block';
  overlay.style.animation = 'none';
  overlay.scrollTop = 0;
  requestAnimationFrame(() => { overlay.style.animation = 'ovIn .42s cubic-bezier(.2,.7,.2,1)'; });
}

function closeCase() {
  document.body.style.overflow = '';
  document.getElementById('case-overlay').style.display = 'none';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCase(); });
