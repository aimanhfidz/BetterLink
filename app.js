import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.58.0';

/* ── Config ───────────────────────────────────────────────────────────
   The publishable key is designed to ship in client code. Every table is
   protected by row-level security, so this key can only read published
   pages and append traffic events — never read your private brand data. */
const SUPABASE_URL = 'https://lnhnloppfqgveuhsfiwm.supabase.co';
const SUPABASE_KEY = 'sb_publishable_jcsHIgFGiQd9lLdexwN8Fw_FiBHrMEb';

const sb = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
});

const COLORS = ['dark','lime','pink','blue','yellow','cream','cocoa'];
const ACCENTS = ['pink','lime','blue','yellow'];
const HEX = { dark:'#2A2A2A', lime:'#5CE65C', pink:'#FF52A8', blue:'#2D7FF9', yellow:'#F0EC3D',
              cream:'#EBD7A8', cocoa:'#A2663A' };

const ICONS = {
  link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7L12 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7L12 19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  threads:'<path d="M12 21c4.6 0 8.2-3.3 8.2-8.6C20.2 6.6 16.9 2.8 12.2 2.8 8 2.8 4.7 5.5 4.2 9.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M8.3 13.5c0 1.8 1.6 2.9 3.2 2.9 2.3 0 3.6-1.5 3.6-4.8 0-2.5-1.7-3.8-3.7-3.8-1.6 0-2.8.7-3.3 1.7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M4.2 9.5C3.9 15.6 7 21 12 21" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  instagram:'<rect x="3" y="3" width="18" height="18" rx="5.4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.4" cy="6.6" r="1.3" fill="currentColor"/>',
  x:'<path d="M3 3h4.2l5 6.8L17.6 3H21l-7 8.6L21.4 21H17l-5.3-7.2L5.6 21H2.2l7.4-9L3 3Z" fill="currentColor"/>',
  youtube:'<rect x="2" y="5" width="20" height="14" rx="4.6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10.4 9.2 15 12l-4.6 2.8V9.2Z" fill="currentColor"/>',
  discord:'<path d="M8.6 5.6A14 14 0 0 1 12 5.2c1.2 0 2.3.14 3.4.4l.7-1.2a12 12 0 0 1 3.5 1.5c1.8 3.1 2.7 6.6 2.4 10.2a13 13 0 0 1-4 2 10 10 0 0 1-.9-1.5c.5-.2 1-.4 1.4-.7l-.4-.3a11.6 11.6 0 0 1-11.2 0l-.4.3c.4.3.9.5 1.4.7-.3.5-.6 1-.9 1.5a13 13 0 0 1-4-2C2.7 12.5 3.6 9 5.4 5.9a12 12 0 0 1 3.5-1.5l-.3 1.2Z" fill="currentColor"/><circle cx="9.2" cy="13" r="1.5" fill="#0A0A0A"/><circle cx="14.8" cy="13" r="1.5" fill="#0A0A0A"/>',
  whatsapp:'<path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9.2 8.4c.3-.1.7 0 .9.4l.7 1.3c.1.3 0 .6-.2.8l-.5.5c.5 1 1.4 1.9 2.4 2.4l.5-.5c.2-.2.5-.3.8-.2l1.3.7c.3.2.5.6.4.9-.2.9-1.1 1.5-2 1.3-3-.5-5.4-2.9-5.9-5.9-.1-.9.5-1.7 1.6-1.7Z" fill="currentColor"/>',
  mail:'<rect x="2.5" y="5" width="19" height="14" rx="3.2" fill="none" stroke="currentColor" stroke-width="2"/><path d="m3.5 7.5 7.4 5.1a2 2 0 0 0 2.2 0l7.4-5.1" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  tiktok:'<path d="M14 3h2.7a5.3 5.3 0 0 0 4.3 4.4V10a8 8 0 0 1-4.4-1.4v5.9A5.7 5.7 0 1 1 11 8.9v2.8a2.9 2.9 0 1 0 2.1 2.8L14 3Z" fill="currentColor"/>',
  linkedin:'<rect x="3" y="3" width="18" height="18" rx="4.2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M7.4 10.2V17M7.4 7.3v.1" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M11.4 17v-3.8a2.4 2.4 0 0 1 4.8 0V17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  github:'<path d="M12 2.6a9.4 9.4 0 0 0-3 18.3c.5.1.6-.2.6-.5v-1.7c-2.4.5-3-1.1-3-1.1-.4-1-1-1.3-1-1.3-.9-.6 0-.6 0-.6.9.1 1.4 1 1.4 1 .8 1.4 2.2 1 2.7.8.1-.6.3-1 .6-1.3-2-.2-4-1-4-4.3 0-1 .3-1.8.9-2.4-.1-.2-.4-1.1.1-2.3 0 0 .7-.2 2.4.9a8.4 8.4 0 0 1 4.4 0c1.7-1.1 2.4-.9 2.4-.9.5 1.2.2 2.1.1 2.3.6.6.9 1.4.9 2.4 0 3.4-2 4.1-4 4.3.3.3.6.9.6 1.8v2.7c0 .3.2.6.7.5A9.4 9.4 0 0 0 12 2.6Z" fill="currentColor"/>',
  spotify:'<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M7.6 9.6c2.8-.8 6-.5 8.6 1M8.2 12.6c2.3-.6 4.9-.4 7 .9M8.8 15.4c1.8-.4 3.8-.3 5.5.7" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>',
  substack:'<path d="M4 4h16v2.6H4V4Zm0 4.6h16v2.6H4V8.6ZM4 13.2 12 17l8-3.8V21l-8-3.8L4 21v-7.8Z" fill="currentColor"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="3.4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  cart:'<path d="M3 4h2.2l2.3 10.4a2 2 0 0 0 2 1.6h7.4a2 2 0 0 0 2-1.5L20.5 8H6.2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10" cy="20" r="1.4" fill="currentColor"/><circle cx="17" cy="20" r="1.4" fill="currentColor"/>',
  doc:'<path d="M6 3h7l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M13 3v5h5M8.5 13h7M8.5 16.5h4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  star:'<path d="M12 2c1 8 2 9 10 10-8 1-9 2-10 10-1-8-2-9-10-10 8-1 9-2 10-10Z" fill="currentColor"/>'
};
const ICON_KEYS = Object.keys(ICONS);
const svg = (k, cls) => `<svg viewBox="0 0 24 24" class="${cls || ''}" aria-hidden="true">${ICONS[k] || ICONS.link}</svg>`;

/* ── Helpers ──────────────────────────────────────────────────────── */
const $  = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const today = () => new Date().toISOString().slice(0,10);
const sleep = ms => new Promise(r => setTimeout(r, ms));

/* A page can be addressed two ways. /u/<slug> is the canonical pretty form
   (vercel.json rewrites it to index.html); ?u=<slug> is kept working so any
   link already shared stays valid. */
function readSlug(){
  const m = location.pathname.match(/^\/u\/([^/?#]+)\/?$/);
  if (m) return decodeURIComponent(m[1]);
  return new URLSearchParams(location.search).get('u');
}
const publicUrlFor = slug => `${location.origin}/u/${encodeURIComponent(slug)}`;

function safeURL(u){
  const s = String(u||'').trim();
  if(!s) return '';
  if(/^(https?:|mailto:|tel:)/i.test(s)) return s;
  if(/^[\w.-]+\.[a-z]{2,}(\/|$)/i.test(s)) return 'https://' + s;
  return '';
}
function hostOf(u){ try { return new URL(safeURL(u)).hostname.replace(/^www\./,'') } catch { return '' } }
function initials(n){ return String(n||'?').trim().split(/\s+/).slice(0,2).map(w=>w[0]).join('').toUpperCase() || '?' }
function slugify(s){ return String(s||'').toLowerCase().replace(/[^a-z0-9-]+/g,'-').replace(/^-+|-+$/g,'').slice(0,39) }

let toastTimer;
function toast(msg){
  const t = $('#toast'); t.textContent = msg; t.classList.add('on');
  clearTimeout(toastTimer); toastTimer = setTimeout(()=>t.classList.remove('on'), 2200);
}
function setChip(state, text){
  const c = $('#chip');
  c.className = 'chip ' + state;
  $('#chipText').textContent = text;
}

/* ── State ────────────────────────────────────────────────────────── */
const state = {
  mode: 'owner',      // 'owner' | 'public'
  session: null,
  page: null,
  links: [],
  socials: [],
  events: [],
  drafts: [],
  draftFilter: 'all',
  editingDraft: null,
  viewSlug: null
};

/* ── Rendering: public-facing page ────────────────────────────────── */
function applyAccent(){
  document.documentElement.style.setProperty('--accent', HEX[state.page?.accent] || HEX.pink);
}

function renderProfile(){
  const p = state.page || {};
  applyAccent();
  $('#pName').textContent   = p.display_name || 'Your Name';
  $('#pHandle').textContent = p.handle || '@handle';
  $('#pBio').textContent    = p.bio || '';
  const av = $('#avatar'), url = safeURL(p.avatar_url);
  if (url) av.innerHTML = `<img src="${esc(url)}" alt="" onerror="this.remove()">`;
  else av.textContent = initials(p.display_name);

  $('#socials').innerHTML = state.socials.map(s => {
    const u = safeURL(s.url); if(!u) return '';
    return `<a class="social" href="${esc(u)}" target="_blank" rel="noopener noreferrer"
      title="${esc(s.icon)}" style="color:${HEX[p.accent] || '#fff'}">${svg(s.icon)}</a>`;
  }).join('');
}

function cardHTML(l, feature){
  const u = safeURL(l.url);
  const cls = `link-card c-${COLORS.includes(l.color) ? l.color : 'dark'}${feature ? ' feature' : ''}`;
  const clicks = state.events.filter(e => e.kind === 'click' && e.link_id === l.id).length;
  if (feature){
    const pct = Math.min(100, 12 + clicks * 6);
    return `<a class="${cls}" href="${esc(u)}" target="_blank" rel="noopener noreferrer" data-id="${l.id}">
      <div style="width:100%">
        <div class="feature-top">
          <div style="min-width:0">
            <div class="h2">${esc(l.title || 'Untitled')}</div>
            <div class="feature-meta">${esc(l.subtitle || hostOf(u) || 'Tap to open')}</div>
          </div>
          <div class="lc-icon">${svg(l.icon)}</div>
        </div>
        <div class="bar"><i style="width:${pct}%"></i></div>
      </div></a>`;
  }
  return `<a class="${cls}" href="${esc(u)}" target="_blank" rel="noopener noreferrer" data-id="${l.id}">
    <div class="lc-icon">${svg(l.icon)}</div>
    <div class="lc-body">
      <div class="lc-title">${esc(l.title || 'Untitled')}</div>
      <div class="lc-sub">${esc(l.subtitle || hostOf(u) || '—')}</div>
    </div>
    ${l.badge ? `<span class="pill">${esc(l.badge)}</span>` : ''}
    <span class="lc-arrow"><svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg></span>
  </a>`;
}

function renderLinks(){
  renderProfile();
  const visible = state.mode === 'public' ? state.links.filter(l => l.published) : state.links;
  const feat = visible.filter(l => l.featured);
  const rest = visible.filter(l => !l.featured);

  /* Visitors should never see empty scaffolding: with nothing featured the
     whole section disappears publicly, while the owner keeps the hint that
     explains where featuring happens. */
  const hideFeatured = !feat.length && state.mode === 'public';
  $('#featHead').hidden = hideFeatured;
  $('#featured').hidden = hideFeatured;

  $('#featCount').textContent = feat.length ? '' : 'none yet';
  $('#featured').innerHTML = feat.length
    ? `<div class="links">${feat.map(l => cardHTML(l, true)).join('')}</div>`
    : (state.mode === 'public' ? '' : `<div class="empty">Star a link in <strong style="display:inline">Edit</strong> to feature it up here.</div>`);

  $('#linkCount').textContent = rest.length ? rest.length + ' total' : '';
  $('#links').innerHTML = rest.length
    ? rest.map(l => cardHTML(l, false)).join('')
    : `<div class="empty"><strong>No links yet</strong>${state.mode === 'public' ? 'Check back soon.' : 'Head to Edit and add your first one.'}</div>`;
}

/* ── Rendering: analytics ─────────────────────────────────────────── */
function last14(){
  const out = [];
  for (let i = 13; i >= 0; i--){
    const d = new Date(); d.setDate(d.getDate() - i);
    const k = d.toISOString().slice(0,10);
    out.push({ k, v: state.events.filter(e => e.kind === 'click' && e.created_at.slice(0,10) === k).length });
  }
  return out;
}
function sparkPath(vals, w, h){
  if (!vals.length) return '';
  const max = Math.max(1, ...vals);
  const step = vals.length > 1 ? w/(vals.length-1) : w;
  return vals.map((v,i)=>`${i?'L':'M'}${(i*step).toFixed(1)} ${(h - (v/max)*(h-4) - 2).toFixed(1)}`).join(' ');
}

function renderStats(){
  const clicks = state.events.filter(e => e.kind === 'click');
  const views  = state.events.filter(e => e.kind === 'view');
  const days = last14();
  const week = days.slice(7).reduce((a,d)=>a+d.v,0);
  const prev = days.slice(0,7).reduce((a,d)=>a+d.v,0);
  const delta = prev ? Math.round((week-prev)/prev*100) : (week ? 100 : 0);
  const ctr = views.length ? Math.min(100, Math.round(clicks.length/views.length*100)) : 0;

  $('#statGrid').innerHTML = `
    <div class="stat c-lime">
      <div class="label">Total clicks</div>
      <div><div class="value">${clicks.length}</div><div class="delta">across ${state.links.length} links</div></div>
    </div>
    <div class="stat c-pink">
      <div class="label">Last 7 days</div>
      <div><div class="value">${week}</div><div class="delta">${delta>=0?'▲':'▼'} ${Math.abs(delta)}% vs prior</div></div>
    </div>
    <div class="stat dark wide">
      <div class="label" style="color:var(--ink-dim)">Clicks · last 14 days</div>
      <svg class="spark" viewBox="0 0 300 44" preserveAspectRatio="none">
        <path d="${sparkPath(days.map(d=>d.v),300,44)}" fill="none" stroke="${HEX.lime}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="stat c-blue">
      <div class="label">Page views</div>
      <div><div class="value">${views.length}</div><div class="delta">real visitors</div></div>
    </div>
    <div class="stat c-yellow">
      <div class="label">Click rate</div>
      <div><div class="value">${ctr}%</div><div class="delta">clicks per view</div></div>
    </div>`;

  const counts = new Map();
  clicks.forEach(e => counts.set(e.link_id, (counts.get(e.link_id)||0) + 1));
  const ranked = [...state.links].sort((a,b)=>(counts.get(b.id)||0)-(counts.get(a.id)||0)).slice(0,6);
  const max = Math.max(1, ...ranked.map(l => counts.get(l.id)||0));

  $('#rank').innerHTML = ranked.length ? ranked.map((l,i)=>{
    const n = counts.get(l.id) || 0;
    return `<div class="rank-row" style="display:block">
      <div style="display:flex;align-items:center;gap:11px">
        <div class="rk">${String(i+1).padStart(2,'0')}</div>
        <div class="nm">${esc(l.title||'Untitled')}</div>
        <div class="vl">${n}</div>
      </div>
      <div class="rank-track"><i style="width:${(n/max*100)||2}%;background:${HEX[l.color]||HEX.lime}"></i></div>
    </div>`;
  }).join('') : `<div class="empty">No traffic recorded yet. Share your page and check back.</div>`;
}

/* ── Rendering: Threads drafts ────────────────────────────────────── */
const DAYS = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const THREADS_LIMIT = 500;   // Threads' per-post character ceiling

function draftFilters(){
  const n = k => k === 'all' ? state.drafts.length : state.drafts.filter(d => d.status === k).length;
  $('#draftFilters').innerHTML = [['all','All'],['draft','Drafts'],['posted','Posted']]
    .map(([k,label]) => `<button class="filter${state.draftFilter===k?' on':''}" data-filter="${k}">${label} ${n(k)}</button>`)
    .join('');
}

function visibleDrafts(){
  return state.draftFilter === 'all'
    ? state.drafts
    : state.drafts.filter(d => d.status === state.draftFilter);
}

function renderDrafts(){
  draftFilters();
  const list = visibleDrafts();
  $('#draftCount').textContent = list.length ? list.length + ' shown' : '';

  const unposted = state.drafts.filter(d => d.status === 'draft').length;
  const dot = $('#draftDot');
  dot.hidden = !unposted;
  dot.textContent = unposted > 99 ? '99+' : unposted;

  $('#drafts').innerHTML = list.length ? list.map(d => {
    const editing = state.editingDraft === d.id;
    const len = (d.hook || '').length + (d.body || '').length + 2;
    return `
    <div class="draft${editing?' editing':''}" data-did="${d.id}">
      <div class="draft-top">
        ${d.pillar ? `<span class="tag pillar">${esc(d.pillar)}</span>` : ''}
        ${d.day ? `<span class="tag day">${esc(d.day)}</span>` : ''}
        <span class="tag${d.status === 'posted' ? ' posted' : ''}">${esc(d.status)}</span>
        ${d.posted_date ? `<span class="tag">${esc(d.posted_date)}</span>` : ''}
      </div>
      ${editing ? `
        <div class="meta-row">
          <div class="field"><label>Pillar</label><input class="input" data-df="pillar" value="${esc(d.pillar)}" placeholder="Pillar"></div>
          <div class="field" style="flex:0 0 108px"><label>Day</label>
            <select class="input" data-df="day">
              <option value=""${!d.day?' selected':''}>—</option>
              ${DAYS.map(x=>`<option value="${x}"${x===d.day?' selected':''}>${x}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="field"><label>Hook</label><textarea class="input" data-df="hook" placeholder="The first line that stops the scroll">${esc(d.hook)}</textarea></div>
        <div class="field" style="margin-bottom:4px"><label>Body</label><textarea class="input big" data-df="body" placeholder="The rest of the post">${esc(d.body)}</textarea></div>
        <div class="char${len > THREADS_LIMIT ? ' over' : ''}">${len} / ${THREADS_LIMIT}</div>
        <div class="acts">
          <button class="btn lime" data-act="done">Done</button>
          <button class="btn danger" data-act="del">Delete</button>
        </div>
      ` : `
        <div class="hook">${esc(d.hook) || '<span style="opacity:.4">No hook yet</span>'}</div>
        <div class="body">${esc(d.body)}</div>
        <div class="char${len > THREADS_LIMIT ? ' over' : ''}">${len} / ${THREADS_LIMIT}</div>
        <div class="acts">
          <button class="btn ghost" data-act="copy">Copy</button>
          <button class="btn ghost" data-act="edit">Edit</button>
          <button class="btn ${d.status === 'posted' ? 'ghost' : 'lime'}" data-act="status">
            ${d.status === 'posted' ? 'Unpost' : 'Mark posted'}
          </button>
        </div>
      `}
    </div>`;
  }).join('') : `<div class="empty"><strong>Nothing here</strong>${
    state.draftFilter === 'all' ? 'Tap + to write your first draft.' : 'No drafts with this status.'
  }</div>`;
}

/* ── Rendering: editor ────────────────────────────────────────────── */
const iconOptions = sel => ICON_KEYS.map(k=>`<option value="${k}"${k===sel?' selected':''}>${k}</option>`).join('');

function renderEdit(){
  const p = state.page || {};
  $('#fSlug').value   = p.slug || '';
  $('#fName').value   = p.display_name || '';
  $('#fHandle').value = p.handle || '';
  $('#fBio').value    = p.bio || '';
  $('#fAvatar').value = p.avatar_url || '';
  $('#accentSw').innerHTML = ACCENTS.map(c=>`<button class="sw${c===p.accent?' on':''}" data-c="${c}" aria-label="${c}"></button>`).join('');

  const pub = !!p.published;
  $('#swPublish').classList.toggle('on', pub);
  $('#swPublish').setAttribute('aria-checked', String(pub));
  $('#pubSub').textContent = pub ? 'Live — anyone with the link can see it' : 'Hidden — only you can see it';
  $('#publicUrl').textContent = p.slug ? publicUrlFor(p.slug) : 'Set a page address first';
  $('#editCount').textContent = state.links.length + ' total';
  $('#acctLine').textContent = state.session?.user?.email
    ? `Signed in as ${state.session.user.email}`
    : 'Not signed in.';

  $('#editList').innerHTML = state.links.map((l,i)=>`
    <div class="card" data-id="${l.id}">
      <div class="edit-row">
        <div class="grip">
          <button data-act="up" ${i===0?'disabled':''} aria-label="Move up"><svg viewBox="0 0 24 24"><path d="M6 15l6-6 6 6"/></svg></button>
          <button data-act="down" ${i===state.links.length-1?'disabled':''} aria-label="Move down"><svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></button>
        </div>
        <div class="lc-icon" style="background:${HEX[l.color]};color:${l.color==='dark'?'#fff':'#0A0A0A'}">${svg(l.icon)}</div>
        <div class="lc-body">
          <div class="lc-title">${esc(l.title||'Untitled')}</div>
          <div class="lc-sub" style="opacity:.5">${esc(hostOf(l.url) || 'no link set')}</div>
        </div>
        <button class="icon-btn" data-act="toggle" aria-label="Expand">
          <span class="chev"><svg viewBox="0 0 24 24" style="width:16px;height:16px;stroke:var(--ink);fill:none;stroke-width:2;stroke-linecap:round"><path d="M6 9l6 6 6-6"/></svg></span>
        </button>
      </div>
      <div class="collapse">
        <div class="field"><label>Title</label><input class="input" data-f="title" value="${esc(l.title)}" placeholder="Link title"></div>
        <div class="field"><label>Subtitle</label><input class="input" data-f="subtitle" value="${esc(l.subtitle)}" placeholder="Short description"></div>
        <div class="field"><label>URL</label><input class="input" data-f="url" value="${esc(l.url)}" placeholder="https://…"></div>
        <div class="field"><label>Badge</label><input class="input" data-f="badge" value="${esc(l.badge)}" placeholder="New, Free, 2 left…"></div>
        <div class="field"><label>Icon</label><select class="input" data-f="icon">${iconOptions(l.icon)}</select></div>
        <div class="field"><label>Colour</label>
          <div class="swatches">${COLORS.map(c=>`<button class="sw${c===l.color?' on':''}" data-c="${c}" data-act="color" aria-label="${c}"></button>`).join('')}</div>
        </div>
        <div class="switch-row" style="margin-bottom:6px">
          <div><div class="lbl">Visible</div><div class="sub">Hidden links stay saved but off the page</div></div>
          <button class="switch${l.published?' on':''}" data-act="pub" role="switch" aria-checked="${!!l.published}"><i></i></button>
        </div>
        <div class="btn-row">
          <button class="btn ghost" data-act="feature">${l.featured?'★ Featured':'☆ Feature this'}</button>
          <button class="btn danger" data-act="del">Delete</button>
        </div>
      </div>
    </div>`).join('') || `<div class="empty"><strong>Nothing here yet</strong>Add your first link below.</div>`;

  $('#editSocials').innerHTML = state.socials.map(s=>`
    <div class="card" data-sid="${s.id}" style="padding:12px">
      <div class="edit-row">
        <div class="lc-icon" style="background:var(--surface-2)">${svg(s.icon)}</div>
        <select class="input" data-sf="icon" style="flex:none;width:118px">${iconOptions(s.icon)}</select>
        <input class="input" data-sf="url" value="${esc(s.url)}" placeholder="https://…" style="flex:1;min-width:0">
        <button class="icon-btn" data-act="delsocial" aria-label="Delete">
          <svg viewBox="0 0 24 24"><path d="M5 7h14M10 7V5h4v2M8 7l1 13h6l1-13"/></svg>
        </button>
      </div>
    </div>`).join('') || `<div class="empty">No social icons.</div>`;
}

/* ── View switching ───────────────────────────────────────────────── */
function show(v){
  $$('.view').forEach(x => x.classList.toggle('on', x.id === 'view-' + v));
  $$('.tab').forEach(t => t.classList.toggle('on', t.dataset.view === v));
  $('#screen').scrollTop = 0;
  if (v === 'links')   renderLinks();
  if (v === 'stats')   renderStats();
  if (v === 'edit')    renderEdit();
  if (v === 'threads') renderDrafts();
}
$$('.tab').forEach(t => t.addEventListener('click', () => show(t.dataset.view)));

/* ── Data layer ───────────────────────────────────────────────────── */
async function loadPublicPage(slug){
  const { data: page, error } = await sb.from('link_pages').select('*').eq('slug', slug).maybeSingle();
  if (error) throw error;
  if (!page) return null;
  const [{ data: links }, { data: socials }] = await Promise.all([
    sb.from('links').select('*').eq('page_id', page.id).order('sort_order'),
    sb.from('link_socials').select('*').eq('page_id', page.id).order('sort_order')
  ]);
  state.page = page;
  state.links = links || [];
  state.socials = socials || [];
  return page;
}

async function loadOwnerData(){
  const uid = state.session.user.id;
  let { data: page } = await sb.from('link_pages').select('*').eq('user_id', uid).maybeSingle();

  if (!page){
    const base = slugify(state.session.user.email.split('@')[0]) || 'me';
    const { data: created, error } = await sb.from('link_pages')
      .insert({ user_id: uid, slug: `${base}-${Math.random().toString(36).slice(2,6)}`,
                display_name: '', handle: '', bio: '', published: false })
      .select().single();
    if (error) throw error;
    page = created;
  }
  state.page = page;

  const [{ data: links }, { data: socials }, { data: events }, { data: drafts }] = await Promise.all([
    sb.from('links').select('*').eq('page_id', page.id).order('sort_order'),
    sb.from('link_socials').select('*').eq('page_id', page.id).order('sort_order'),
    sb.from('link_events').select('id,kind,link_id,created_at').eq('owner_id', uid)
      .gte('created_at', new Date(Date.now() - 60*864e5).toISOString()).order('created_at', { ascending:false }).limit(5000),
    sb.from('drafts').select('*').order('created_at', { ascending:false })
  ]);
  state.links   = links   || [];
  state.socials = socials || [];
  state.events  = events  || [];
  state.drafts  = drafts  || [];
}

async function logEvent(kind, link_id){
  if (state.mode !== 'public' || !state.page?.published) return;
  try {
    await sb.from('link_events').insert({
      page_id: state.page.id, owner_id: state.page.user_id,
      link_id: link_id || null, kind,
      referrer: (document.referrer || '').slice(0, 300)
    });
  } catch { /* traffic logging must never block navigation */ }
}

/* Debounced field writes so typing doesn't hammer the database. */
const pending = new Map();
function queueSave(table, id, patch){
  const key = table + ':' + id;
  clearTimeout(pending.get(key)?.t);
  const merged = Object.assign({}, pending.get(key)?.patch, patch);
  const t = setTimeout(async () => {
    pending.delete(key);
    const { error } = await sb.from(table).update(merged).eq('id', id);
    if (error){ toast('Save failed: ' + error.message); setChip('err','error'); }
    else setChip('live','saved');
  }, 600);
  pending.set(key, { t, patch: merged });
  setChip('local','saving…');
}

/* ── Click tracking ───────────────────────────────────────────────── */
document.addEventListener('click', e => {
  const card = e.target.closest('.link-card[data-id]');
  if (!card) return;
  if (!card.getAttribute('href')){ e.preventDefault(); toast('No URL set for this link'); return; }
  logEvent('click', card.dataset.id);
});

/* ── Editor wiring ────────────────────────────────────────────────── */
$('#btnAdd').addEventListener('click', async () => {
  const { data, error } = await sb.from('links').insert({
    page_id: state.page.id, user_id: state.session.user.id,
    title: 'New link', color: COLORS[1 + (state.links.length % 4)],
    sort_order: state.links.length
  }).select().single();
  if (error) return toast('Could not add: ' + error.message);
  state.links.push(data); renderEdit();
  const cards = $$('#editList .card'); const last = cards[cards.length-1];
  last?.querySelector('.collapse').classList.add('open');
  last?.scrollIntoView({ behavior:'smooth', block:'center' });
});

$('#btnAddSocial').addEventListener('click', async () => {
  const { data, error } = await sb.from('link_socials').insert({
    page_id: state.page.id, user_id: state.session.user.id,
    icon: 'link', url: '', sort_order: state.socials.length
  }).select().single();
  if (error) return toast('Could not add: ' + error.message);
  state.socials.push(data); renderEdit();
});

$('#editList').addEventListener('click', async e => {
  const card = e.target.closest('.card[data-id]'); if(!card) return;
  const btn = e.target.closest('[data-act]'); if(!btn) return;
  const id = card.dataset.id;
  const i = state.links.findIndex(l => l.id === id); if (i < 0) return;
  const act = btn.dataset.act;

  if (act === 'toggle'){
    const c = card.querySelector('.collapse');
    c.classList.toggle('open');
    btn.querySelector('.chev').classList.toggle('open', c.classList.contains('open'));
    return;
  }
  if (act === 'up' && i > 0)                       [state.links[i-1], state.links[i]] = [state.links[i], state.links[i-1]];
  else if (act === 'down' && i < state.links.length-1) [state.links[i+1], state.links[i]] = [state.links[i], state.links[i+1]];
  else if (act === 'color'){ state.links[i].color = btn.dataset.c; queueSave('links', id, { color: btn.dataset.c }); }
  else if (act === 'pub'){ state.links[i].published = !state.links[i].published; queueSave('links', id, { published: state.links[i].published }); }
  else if (act === 'feature'){ state.links[i].featured = !state.links[i].featured; queueSave('links', id, { featured: state.links[i].featured }); }
  else if (act === 'del'){
    if (!confirm(`Delete "${state.links[i].title || 'this link'}"?`)) return;
    const { error } = await sb.from('links').delete().eq('id', id);
    if (error) return toast('Delete failed: ' + error.message);
    state.links.splice(i,1); toast('Deleted');
  } else return;

  if (act === 'up' || act === 'down'){
    state.links.forEach((l,idx) => { l.sort_order = idx; });
    await Promise.all(state.links.map(l => sb.from('links').update({ sort_order: l.sort_order }).eq('id', l.id)));
    setChip('live','saved');
  }

  const open = new Set($$('#editList .collapse.open').map(c => c.closest('.card').dataset.id));
  renderEdit();
  open.forEach(oid => {
    const c = $(`#editList .card[data-id="${oid}"]`);
    if (c){ c.querySelector('.collapse').classList.add('open'); c.querySelector('.chev').classList.add('open'); }
  });
});

$('#editList').addEventListener('input', e => {
  const card = e.target.closest('.card[data-id]');
  const f = e.target.dataset.f; if (!card || !f) return;
  const l = state.links.find(x => x.id === card.dataset.id); if (!l) return;
  l[f] = e.target.value;
  if (f === 'title') card.querySelector('.lc-title').textContent = e.target.value || 'Untitled';
  if (f === 'url')   card.querySelector('.edit-row .lc-sub').textContent = hostOf(e.target.value) || 'no link set';
  if (f === 'icon')  card.querySelector('.edit-row .lc-icon').innerHTML = svg(e.target.value);
  queueSave('links', l.id, { [f]: e.target.value });
});

$('#editSocials').addEventListener('input', e => {
  const card = e.target.closest('.card[data-sid]');
  const f = e.target.dataset.sf; if (!card || !f) return;
  const s = state.socials.find(x => x.id === card.dataset.sid); if (!s) return;
  s[f] = e.target.value;
  if (f === 'icon') card.querySelector('.lc-icon').innerHTML = svg(e.target.value);
  queueSave('link_socials', s.id, { [f]: e.target.value });
});

$('#editSocials').addEventListener('click', async e => {
  if (!e.target.closest('[data-act="delsocial"]')) return;
  const card = e.target.closest('.card[data-sid]');
  const { error } = await sb.from('link_socials').delete().eq('id', card.dataset.sid);
  if (error) return toast('Delete failed: ' + error.message);
  state.socials = state.socials.filter(x => x.id !== card.dataset.sid);
  renderEdit();
});

const PROFILE_FIELDS = { fName:'display_name', fHandle:'handle', fBio:'bio', fAvatar:'avatar_url' };
Object.keys(PROFILE_FIELDS).forEach(idf => {
  $('#'+idf).addEventListener('input', e => {
    state.page[PROFILE_FIELDS[idf]] = e.target.value;
    queueSave('link_pages', state.page.id, { [PROFILE_FIELDS[idf]]: e.target.value });
  });
});

$('#fSlug').addEventListener('change', async e => {
  const s = slugify(e.target.value);
  if (s.length < 2) { e.target.value = state.page.slug; return toast('Address needs at least 2 characters'); }
  const { error } = await sb.from('link_pages').update({ slug: s }).eq('id', state.page.id);
  if (error){
    e.target.value = state.page.slug;
    return toast(error.code === '23505' ? 'That address is taken' : 'Could not save: ' + error.message);
  }
  state.page.slug = s; e.target.value = s;
  $('#publicUrl').textContent = publicUrlFor(s);
  toast('Address updated');
});

$('#accentSw').addEventListener('click', e => {
  const b = e.target.closest('.sw'); if(!b) return;
  state.page.accent = b.dataset.c;
  queueSave('link_pages', state.page.id, { accent: b.dataset.c });
  renderEdit(); applyAccent();
});

$('#swPublish').addEventListener('click', async () => {
  const next = !state.page.published;
  if (next && !state.links.some(l => l.published)) {
    if (!confirm('This page has no visible links yet. Publish anyway?')) return;
  }
  const { error } = await sb.from('link_pages').update({ published: next }).eq('id', state.page.id);
  if (error) return toast('Could not save: ' + error.message);
  state.page.published = next; renderEdit();
  toast(next ? 'Page is live' : 'Page hidden');
});

$('#btnCopyUrl').addEventListener('click', async () => {
  if (!state.page?.slug) return toast('Set a page address first');
  try { await navigator.clipboard.writeText(publicUrlFor(state.page.slug)); toast('Public URL copied'); }
  catch { toast('Copy failed'); }
});

$$('[data-collapse]').forEach(h => h.addEventListener('click', () => {
  const c = $('#'+h.dataset.collapse);
  c.classList.toggle('open');
  $('#chev-'+h.dataset.collapse).classList.toggle('open', c.classList.contains('open'));
}));

/* ── Threads drafts wiring ────────────────────────────────────────── */
$('#btnThreads').addEventListener('click', () => show('threads'));
$('#btnBack').addEventListener('click', () => show('links'));

$('#draftFilters').addEventListener('click', e => {
  const b = e.target.closest('[data-filter]'); if (!b) return;
  state.draftFilter = b.dataset.filter;
  state.editingDraft = null;
  renderDrafts();
});

$('#btnAddDraft').addEventListener('click', async () => {
  const { data, error } = await sb.from('drafts').insert({
    user_id: state.session.user.id, pillar: '', hook: '', body: '', status: 'draft'
  }).select().single();
  if (error) return toast('Could not add: ' + error.message);
  state.drafts.unshift(data);
  state.draftFilter = 'all';
  state.editingDraft = data.id;
  renderDrafts();
  $(`.draft[data-did="${data.id}"]`)?.scrollIntoView({ behavior:'smooth', block:'center' });
});

$('#drafts').addEventListener('click', async e => {
  const row = e.target.closest('.draft[data-did]'); if (!row) return;
  const btn = e.target.closest('[data-act]'); if (!btn) return;
  const d = state.drafts.find(x => x.id === row.dataset.did); if (!d) return;
  const act = btn.dataset.act;

  if (act === 'copy'){
    const text = [d.hook, d.body].filter(Boolean).join('\n\n');
    try { await navigator.clipboard.writeText(text); toast('Draft copied'); }
    catch { toast('Copy failed'); }
    return;
  }
  if (act === 'edit'){ state.editingDraft = d.id; renderDrafts(); return; }
  if (act === 'done'){ state.editingDraft = null; renderDrafts(); return; }
  if (act === 'del'){
    if (!confirm('Delete this draft?')) return;
    const { error } = await sb.from('drafts').delete().eq('id', d.id);
    if (error) return toast('Delete failed: ' + error.message);
    state.drafts = state.drafts.filter(x => x.id !== d.id);
    state.editingDraft = null; renderDrafts(); toast('Deleted');
    return;
  }
  if (act === 'status'){
    const next = d.status === 'posted' ? 'draft' : 'posted';
    const patch = { status: next, posted_date: next === 'posted' ? today() : null };
    const { error } = await sb.from('drafts').update(patch).eq('id', d.id);
    if (error) return toast('Could not update: ' + error.message);
    Object.assign(d, patch); renderDrafts();
    toast(next === 'posted' ? 'Marked as posted' : 'Back to draft');
  }
});

$('#drafts').addEventListener('input', e => {
  const row = e.target.closest('.draft[data-did]');
  const f = e.target.dataset.df; if (!row || !f) return;
  const d = state.drafts.find(x => x.id === row.dataset.did); if (!d) return;
  d[f] = e.target.value;
  if (f === 'hook' || f === 'body'){
    const len = (d.hook||'').length + (d.body||'').length + 2;
    const c = row.querySelector('.char');
    c.textContent = `${len} / ${THREADS_LIMIT}`;
    c.classList.toggle('over', len > THREADS_LIMIT);
  }
  queueSave('drafts', d.id, { [f]: e.target.value || (f === 'day' ? null : '') });
});
$('#btnDraftsRefresh').addEventListener('click', async () => {
  const { data } = await sb.from('drafts').select('*').order('created_at', { ascending:false });
  state.drafts = data || []; renderDrafts(); toast('Refreshed');
});
$('#btnRefresh').addEventListener('click', async () => {
  if (!state.session) return;
  const { data } = await sb.from('link_events').select('id,kind,link_id,created_at')
    .eq('owner_id', state.session.user.id)
    .gte('created_at', new Date(Date.now() - 60*864e5).toISOString()).limit(5000);
  state.events = data || []; renderStats(); toast('Refreshed');
});

/* ── Share ────────────────────────────────────────────────────────── */
$('#btnShare').addEventListener('click', async () => {
  const url = state.page?.slug && state.mode === 'owner'
    ? publicUrlFor(state.page.slug) : location.href;
  try {
    if (navigator.share){ await navigator.share({ title:'BetterLink', url }); return; }
    await navigator.clipboard.writeText(url); toast('Link copied');
  } catch { toast('Copy failed — grab it from the address bar'); }
});

$('#btnExport').addEventListener('click', () => {
  const dump = { page: state.page, links: state.links, socials: state.socials, exported_at: new Date().toISOString() };
  const blob = new Blob([JSON.stringify(dump, null, 2)], { type:'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `betterlink-${today()}.json`;
  a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href), 1000);
  toast('Exported');
});

$('#btnSignOut').addEventListener('click', async () => {
  await sb.auth.signOut();
  location.reload();
});

/* ── Auth gate ────────────────────────────────────────────────────── */
$('#gSend').addEventListener('click', async () => {
  const email = $('#gEmail').value.trim();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return toast('Enter a valid email');
  $('#gSend').disabled = true; $('#gSend').textContent = 'Sending…';
  /* Trailing slash matters: Supabase redirect patterns are globs, and a
     bare origin does not reliably match an entry written as ".../**". */
  const { error } = await sb.auth.signInWithOtp({ email, options: { emailRedirectTo: location.origin + '/' } });
  $('#gSend').disabled = false; $('#gSend').textContent = 'Email me a sign-in link';
  if (error) return toast(error.message);
  $('#gNote').textContent = `Check ${email} for a sign-in link. It expires in an hour.`;
  toast('Sign-in link sent');
});
$('#gEmail').addEventListener('keydown', e => { if (e.key === 'Enter') $('#gSend').click(); });

/* ── Splash ───────────────────────────────────────────────────────── */
$('#splashGo').addEventListener('click', () => {
  $('#splash').classList.add('gone');
  try { sessionStorage.setItem('bl.splash','1') } catch {}
});
try { if (sessionStorage.getItem('bl.splash')) $('#splash').classList.add('gone') } catch {}

/* ── Boot ─────────────────────────────────────────────────────────── */
async function boot(){
  const slug = readSlug();

  if (slug){
    /* Public visitor mode: no nav, no editing, no auth required. */
    state.mode = 'public';
    document.body.classList.add('public');
    $('#splash').classList.add('gone');
    $('#made').hidden = false;
    setChip('live','live');
    try {
      const page = await loadPublicPage(slug);
      if (!page){
        $('#links').innerHTML = `<div class="empty"><strong>Page not found</strong>Nothing is published at ${esc(location.pathname + location.search)}</div>`;
        $('#pName').textContent = 'Not found'; $('#pHandle').textContent = '';
        setChip('err','404');
        return;
      }
      document.title = `${page.display_name || page.slug} · BetterLink`;
      renderLinks();
      logEvent('view');
    } catch (err){
      setChip('err','offline');
      $('#links').innerHTML = `<div class="empty"><strong>Couldn't load this page</strong>${esc(err.message)}</div>`;
    }
    return;
  }

  /* Owner console. */
  const { data: { session } } = await sb.auth.getSession();
  state.session = session;

  if (!session){
    $('#splash').classList.add('gone');
    $('#gate').classList.add('on');
    setChip('local','signed out');
    return;
  }

  setChip('local','loading…');
  try {
    await loadOwnerData();
    setChip('live','synced');
    show('links');
  } catch (err){
    setChip('err','error');
    toast('Load failed: ' + err.message);
  }
}

sb.auth.onAuthStateChange((event) => {
  if (event === 'SIGNED_IN' && $('#gate').classList.contains('on')) location.replace(location.pathname);
});

boot();
