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

/* supabase-js collapses any non-2xx from a function into "non-2xx status code"
   and hides the body, which is where the useful message lives (a missing API
   key, a quota, a validation error). Dig it back out. */
async function fnError(error){
  try {
    const body = await error?.context?.json?.();
    if (body?.error) return String(body.error);
  } catch {}
  return error?.message || 'Request failed';
}

/* A page can be addressed two ways. /u/<slug> is the canonical pretty form
   (vercel.json rewrites it to index.html); ?u=<slug> is kept working so any
   link already shared stays valid. */
function readSlug(){
  const m = location.pathname.match(/^\/u\/([^/?#]+)\/?$/);
  if (m) return decodeURIComponent(m[1]);
  return new URLSearchParams(location.search).get('u');
}
/* Vercel serves this project on more than one production alias —
   betterlink.vercel.app and betterlink-<account>.vercel.app both point at the
   same deployment. A link you hand to someone should always carry the short
   one, whichever alias the console happens to be open on, so the origin is
   pinned here instead of read out of the address bar. Change this one line if
   the page ever moves to a custom domain. */
const PUBLIC_ORIGIN = 'https://betterlink.vercel.app';
const onLocalhost = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
const publicOrigin = () => onLocalhost ? location.origin : PUBLIC_ORIGIN;
const publicUrlFor = slug => `${publicOrigin()}/u/${encodeURIComponent(slug)}`;

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
  draftFilter: 'draft',   // the studio opens on unposted work, not the archive
  editingDraft: null,
  editingPillar: null,
  viewSlug: null,
  profile: null,          // brand system: voice, positioning, audience
  pillars: [],
  backup: null,          // the spare brand system; at most one, see captureBackup()
  onboard: null,          // in-progress interview, see renderOnboard()
  onboardSkipped: false
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
const THREADS_LIMIT = 1200;  // Aiman's posts run ~700-1200 chars; counter warns past that

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

  /* Once the interview is done, keep the voice visible and reachable — it is
     what every draft is written against. */
  const bp = state.profile;
  $('#draftsNote').innerHTML = bp?.onboarding_completed
    ? `<div class="voice-line">
         <p>${esc(bp.positioning_statement || 'Your brand system is set.')}</p>
         <button data-act="brand">Brand system</button>
       </div>`
    : '';
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
    state.drafts.length ? 'No drafts with this status.' : 'Tap + to write your first draft.'
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
  if (v === 'onboard') renderOnboard();
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
    /* Never derive the slug from the email address: the slug is published in
       the page URL, so an email-derived one leaks the local part of a user's
       address to anyone who sees the link. Random and unguessable instead —
       the user picks a real address in Edit. */
    let created, error;
    for (let attempt = 0; attempt < 5 && !created; attempt++){
      ({ data: created, error } = await sb.from('link_pages')
        .insert({ user_id: uid, slug: 'page-' + Math.random().toString(36).slice(2,10),
                  display_name: '', handle: '', bio: '', published: false })
        .select().single());
      if (error && error.code !== '23505') throw error;   // 23505 = slug collision, retry
    }
    if (!created) throw error || new Error('Could not create your page');
    page = created;
  }
  state.page = page;

  const [{ data: links }, { data: socials }, { data: events }, { data: drafts },
         { data: profile }, { data: pillars }, { data: backup }] = await Promise.all([
    sb.from('links').select('*').eq('page_id', page.id).order('sort_order'),
    sb.from('link_socials').select('*').eq('page_id', page.id).order('sort_order'),
    sb.from('link_events').select('id,kind,link_id,created_at').eq('owner_id', uid)
      .gte('created_at', new Date(Date.now() - 60*864e5).toISOString()).order('created_at', { ascending:false }).limit(5000),
    sb.from('drafts').select('*').order('created_at', { ascending:false }),
    sb.from('profiles').select('*').eq('id', uid).maybeSingle(),
    sb.from('pillars').select('*').eq('user_id', uid).order('sort_order'),
    sb.from('brand_backups').select('*').maybeSingle()
  ]);
  state.links   = links   || [];
  state.socials = socials || [];
  state.events  = events  || [];
  state.drafts  = drafts  || [];
  state.profile = profile || null;
  state.pillars = pillars || [];
  state.backup  = backup  || null;
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
$('#btnThreads').addEventListener('click', () => {
  /* The studio writes in the user's voice, so a first-time user is interviewed
     before they see it. Skipping defers to the next visit rather than marking
     the interview done — the answers are what make drafting worth using. */
  if (!state.profile?.onboarding_completed && !state.onboardSkipped) return show('onboard');
  state.draftFilter = 'draft';   // entering the studio always lands on Drafts
  show('threads');
});
$('#btnBack').addEventListener('click', () => show('links'));

$('#draftFilters').addEventListener('click', e => {
  const b = e.target.closest('[data-filter]'); if (!b) return;
  state.draftFilter = b.dataset.filter;
  state.editingDraft = null;
  renderDrafts();
});

/* ── Brand onboarding ─────────────────────────────────────────────────
   Keys match the generate-brand-system payload exactly; it turns these
   answers into a positioning statement, voice rules and five pillars,
   which generate-draft then reads on every draft it writes. */
const OB_Q = [
  { key:'name', line:true, required:true,
    q:'What name do you write under?',
    hint:'The drafts speak as you, so this is the name they carry.',
    ph:'Aiman Hafidz' },
  /* The audience is asked as four passes over one person rather than one
     question about a category: who they are, what they already do, what they
     say to themselves, and what they follow. The quotes in particular are what
     hooks get built from, so they are worth their own screen. All four are
     stitched back into a single `audience` field — see composeAudience(). */
  { key:'audience', required:true,
    q:'Who is your dream audience?',
    hint:'One person, not a category. Age, where they are, what they do for money, how they actually talk.',
    ph:'Lelaki 25-35, Melayu, baru kahwin, ada anak kecil. Buat RM4k-10k sebulan — café kecil, jual gym gear, atau side hustle frozen food dari rumah. Cakap Melayu campur sikit English.' },
  { key:'audienceBehaviour',
    q:'What are they already trying?',
    hint:'What they have had a go at, what they avoid, where they get stuck. A hook interrupts this, so the more specific the better.',
    ph:'Pernah boost post RM10-50 tapi tak faham result. Takut buka Ads Manager sebab takut bazir budget. Join kelas kalau free dan nampak real.' },
  { key:'audienceTriggers', required:true,
    q:'What do they say to themselves?',
    hint:'Their words, not a summary of them — the line they think at 1am. This is the raw material for hooks.',
    ph:'“Aku pun boleh buat sendiri kalau ada orang ajar simple-simple.” “Kalau rugi RM100, memang tak boleh tidur.” “Aku bukan tak rajin, aku cuma tak nak benda yang draggy.”' },
  { key:'audienceInterests',
    q:'Who and what do they already follow?',
    hint:'Pages, groups, tools, the accounts they quietly copy. It tells you what they already believe before you say anything.',
    ph:'Biz tips kat Threads dan TikTok. Group FB peniaga area sendiri. Guna Canva, Shopee Seller Centre, Meta Business Suite.' },
  { key:'background',
    q:'What have you actually done?',
    hint:'Roles, years, things you built or ran. This is where credibility comes from.',
    ph:'Six years in operations, two of them running a 14-person team…' },
  { key:'businesses',
    q:'What are you running right now?',
    hint:'Real names, and real numbers if you have them. Numbers are what make a post land.',
    ph:'MISU, a handmade tiramisu brand in PJ. Around 120 orders a month…' },
  { key:'failure',
    q:'What went wrong that you would be willing to talk about?',
    hint:'A launch that flopped, money lost, a hire that failed. This is what makes posts human.',
    ph:'Burned RM8k on ads before I understood who was actually buying…' },
  { key:'topics', required:true,
    q:'What do you want to be known for?',
    hint:'The three to five things you could talk about for an hour with no notes.',
    ph:'Ops systems, hiring your first person, selling without being loud.' },
  { key:'voiceNotes', required:true,
    q:'How do you actually talk?',
    hint:'Language, how formal, what you would never say. Write this one exactly how you text.',
    ph:'BM campur English. Straight to the point, no corporate speak, no hype words.' }
];

const obKey = () => `bl.onboard.${state.session?.user?.id || 'anon'}`;
const obLoad = () => { try { return JSON.parse(localStorage.getItem(obKey())) || {} } catch { return {} } };
const obSave = () => { try { localStorage.setItem(obKey(), JSON.stringify(state.onboard.answers)) } catch {} };

function startOnboard(){
  const saved = obLoad();
  const pick = k => saved[k] || '';
  state.onboard = {
    phase: 'intro', step: 0, error: '',
    answers: {
      name: pick('name') || state.page?.display_name || '',
      audience: pick('audience'),
      audienceBehaviour: pick('audienceBehaviour'),
      audienceTriggers: pick('audienceTriggers'),
      audienceInterests: pick('audienceInterests'),
      background: pick('background'),
      businesses: pick('businesses'),
      failure: pick('failure'),
      topics: pick('topics'),
      voiceNotes: pick('voiceNotes')
    }
  };
}

/* The generated system is a starting point, not a verdict, so pillars are
   editable in place. generate-draft reads name, job, description and hooks on
   every draft it writes — editing here changes what the next draft is written
   against, which is why the studio links back to this screen. */
const PILLAR_HOOKS_USED = 3;   // generate-draft reads the first three

function pillarCardHTML(pl, i){
  const hooks = Array.isArray(pl.hooks) ? pl.hooks : [];
  const first = i === 0, last = i === state.pillars.length - 1;

  if (state.editingPillar !== pl.id){
    return `<div class="card ob-pillar" data-plid="${pl.id}">
      <div class="ob-pillar-top">
        <div class="h2">${esc(pl.name) || '<span style="opacity:.4">Untitled pillar</span>'}</div>
        <div class="ob-pillar-side">
          ${pl.job ? `<span class="tag pillar">${esc(pl.job)}</span>` : ''}
          <div class="grip">
            <button data-pact="up" ${first ? 'disabled' : ''} aria-label="Move up">
              <svg viewBox="0 0 24 24"><path d="M6 15l6-6 6 6"/></svg></button>
            <button data-pact="down" ${last ? 'disabled' : ''} aria-label="Move down">
              <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></button>
          </div>
        </div>
      </div>
      ${pl.description ? `<p class="ob-note">${esc(pl.description)}</p>` : ''}
      ${hooks.slice(0, PILLAR_HOOKS_USED).map(h => `<div class="ob-hook">${esc(h)}</div>`).join('')}
      <div class="btn-row"><button class="btn ghost" data-pact="edit">Edit</button></div>
    </div>`;
  }

  return `<div class="card ob-pillar editing" data-plid="${pl.id}">
    <div class="field"><label>Name</label>
      <input class="input" data-pf="name" value="${esc(pl.name)}" placeholder="What this pillar is called"></div>
    <div class="field"><label>Job</label>
      <input class="input" data-pf="job" value="${esc(pl.job)}" placeholder="Credibility, Engagement, Trust, Relatability, or a hybrid"></div>
    <div class="field"><label>Description</label>
      <textarea class="input" data-pf="description" placeholder="One line on what this pillar covers">${esc(pl.description)}</textarea></div>
    <div class="field" style="margin-bottom:4px"><label>Hooks — one per line</label>
      <textarea class="input big" data-pf="hooks" placeholder="Write them the way you actually talk">${esc(hooks.join('\n'))}</textarea></div>
    <p class="ob-optional">Drafting reads the first ${PILLAR_HOOKS_USED}.</p>
    <div class="btn-row">
      <button class="btn lime" data-pact="done">Done</button>
      <button class="btn danger" data-pact="del">Delete</button>
    </div>
  </div>`;
}

function renderOnboard(){
  if (!state.onboard) startOnboard();
  const ob = state.onboard;
  const stage = $('#obStage');

  $('#obTrack').hidden = ob.phase !== 'q';
  $('#obStep').textContent = ob.phase === 'q' ? `${ob.step + 1} / ${OB_Q.length}` : '';
  if (ob.phase === 'q') $('#obBar').style.width = `${((ob.step + 1) / OB_Q.length) * 100}%`;

  if (ob.phase === 'intro'){
    const answered = Object.values(ob.answers).filter(v => v.trim()).length;
    stage.innerHTML = `
      <div class="ob-hero">
        <div class="ob-mark">${svg('star')}</div>
        <h1 class="h1">First — how do<br>you actually sound?</h1>
        <p class="ob-lede">${OB_Q.length} questions about your work, your people, and the way you talk.
          They become your positioning, five content pillars and a set of voice rules, and every
          draft after this is written to them.</p>
        <p class="ob-lede dim">About five minutes. None of it is published — it is only ever
          used to write your drafts.</p>
        <button class="btn lime block" data-ob="start">${answered ? 'Pick up where you left off' : 'Start'}</button>
        <button class="link-btn" data-ob="skip">Skip for now</button>
      </div>`;
    return;
  }

  if (ob.phase === 'busy'){
    stage.innerHTML = `
      <div class="ob-busy">
        <div class="ob-mark spin">${svg('star')}</div>
        <div class="h2">Building your system…</div>
        <p class="ob-lede">Reading your answers, working out what only you can say, and naming
          the five things you will post about.</p>
        <div class="skel" style="height:96px"></div>
        <div class="skel" style="height:140px"></div>
      </div>`;
    return;
  }

  if (ob.phase === 'error'){
    stage.innerHTML = `
      <div class="card ob-error">
        <div class="h2">That didn't go through</div>
        <p class="ai-note err">${esc(ob.error)}</p>
        <p class="ai-note">Your answers are saved — nothing was lost.</p>
        <div class="btn-row">
          <button class="btn lime" data-ob="submit">Try again</button>
          <button class="btn ghost" data-ob="back">Back to answers</button>
        </div>
      </div>`;
    return;
  }

  if (ob.phase === 'done'){
    const p = state.profile || {};
    const rules = (arr, cls) => (Array.isArray(arr) ? arr : [])
      .map(r => `<li class="${cls}">${esc(r)}</li>`).join('');
    /* The answers survive in localStorage, so rebuilding need not mean
       retyping all seven. Only offered when the required ones are still
       there — on a fresh device or after a clear, they are not. */
    const kept = obLoad();
    const canRebuild = OB_Q.filter(q => q.required)
      .every(q => (kept[q.key] || '').trim().length >= 3);
    stage.innerHTML = `
      <div class="ob-hero tight">
        <div class="ob-mark">${svg('star')}</div>
        <h1 class="h1">This is your<br>brand system.</h1>
      </div>
      <div class="card ob-quote">
        <div class="ob-cap">Positioning</div>
        <p class="ob-positioning">${esc(p.positioning_statement || '—')}</p>
        ${p.unfair_advantage ? `<div class="ob-cap" style="margin-top:18px">What makes it hard to copy</div>
          <p class="ob-note">${esc(p.unfair_advantage)}</p>` : ''}
      </div>
      <div class="section-title">Your pillars<span class="count">${state.pillars.length} total</span></div>
      <div class="ob-pillars">${
        state.pillars.map((pl, i) => pillarCardHTML(pl, i)).join('') ||
        `<div class="empty"><strong>No pillars yet</strong>Add one below, or redo the interview to have them written for you.</div>`
      }</div>
      <button class="btn ghost block" data-ob="addpillar" style="margin-top:12px">
        <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg> Add pillar
      </button>
      <div class="section-title">Your voice</div>
      <div class="card">
        <ul class="ob-rules">${rules(p.voice_always, 'yes')}${rules(p.voice_never, 'no')}</ul>
        ${p.language_notes ? `<p class="ob-note" style="margin-top:16px">${esc(p.language_notes)}</p>` : ''}
      </div>
      <div class="section-title">Other brand system<span class="count">${state.backup ? 'spare' : 'none yet'}</span></div>
      ${backupCardHTML()}
      <div class="btn-row ob-finish">
        <button class="btn lime" data-ob="finish">Start writing</button>
        ${canRebuild ? '<button class="btn ghost" data-ob="rebuild">Rebuild from my answers</button>' : ''}
        <button class="btn ghost" data-ob="restart">Redo the interview</button>
      </div>`;
    return;
  }

  const q = OB_Q[ob.step];
  const val = ob.answers[q.key] || '';
  const last = ob.step === OB_Q.length - 1;
  stage.innerHTML = `
    <div class="ob-q">
      <h1 class="h1">${esc(q.q)}</h1>
      <p class="ob-hint">${esc(q.hint)}</p>
      ${q.line
        ? `<input class="input" id="obField" value="${esc(val)}" placeholder="${esc(q.ph)}" autocomplete="off">`
        : `<textarea class="input ob-area" id="obField" placeholder="${esc(q.ph)}">${esc(val)}</textarea>`}
      ${q.required ? '' : '<p class="ob-optional">Optional — leave it blank if it does not apply to you.</p>'}
      <div class="btn-row">
        ${ob.step ? '<button class="btn ghost" data-ob="prev">Back</button>' : ''}
        <button class="btn lime" data-ob="next">${last ? 'Build my system' : 'Next'}</button>
      </div>
    </div>`;
  $('#obField').focus();
}

/* The four audience answers are one idea — who this is written for — so they
   are stitched back into the single `audience` field that generate-brand-system
   takes and profiles.audience stores, which generate-draft then reads on every
   draft. Labelled, because unlabelled the quotes stop reading as quotes. */
const AUDIENCE_PARTS = [
  ['audience', 'Who they are'],
  ['audienceBehaviour', 'What they already do'],
  ['audienceTriggers', 'What they say to themselves'],
  ['audienceInterests', 'What they follow and use']
];
function composeAudience(a){
  return AUDIENCE_PARTS
    .filter(([k]) => (a[k] || '').trim())
    .map(([k, label]) => `${label}: ${a[k].trim()}`)
    .join('\n');
}

/* ── The spare brand system ────────────────────────────────────────────
   Two systems exist at a time: the live one in profiles+pillars, and one spare
   held as jsonb in brand_backups. A primary key on user_id is what caps it at
   two — there is no third slot to fill. Switching swaps them in a single
   Postgres function, because putting the spare live means deleting every
   pillar first and that must not be able to stop half-way. */
const BACKUP_PROFILE_FIELDS = ['display_name','handle','audience','positioning_statement',
  'unfair_advantage','voice_always','voice_never','language_notes','onboarding_completed'];

async function captureBackup(profile, pillars){
  const p = {};
  BACKUP_PROFILE_FIELDS.forEach(k => { p[k] = profile?.[k] ?? null; });
  const { data, error } = await sb.from('brand_backups').upsert({
    user_id: state.session.user.id,
    label: String(profile?.positioning_statement || '').slice(0, 200),
    profile: p,
    pillars: (pillars || []).map((pl, i) => ({
      name: pl.name || '', description: pl.description || '', job: pl.job || '',
      hooks: Array.isArray(pl.hooks) ? pl.hooks : [],
      sort_order: typeof pl.sort_order === 'number' ? pl.sort_order : i
    })),
    saved_at: new Date().toISOString()
  }).select().single();
  if (error) throw error;
  state.backup = data;
  return data;
}

async function reloadBrandSystem(){
  const uid = state.session.user.id;
  const [{ data: profile }, { data: pillars }, { data: backup }] = await Promise.all([
    sb.from('profiles').select('*').eq('id', uid).maybeSingle(),
    sb.from('pillars').select('*').eq('user_id', uid).order('sort_order'),
    sb.from('brand_backups').select('*').maybeSingle()
  ]);
  state.profile = profile || null;
  state.pillars = pillars || [];
  state.backup  = backup  || null;
  state.editingPillar = null;
}

function backupCardHTML(){
  const b = state.backup;
  if (!b) return `<div class="card">
      <p class="ob-note" style="margin-top:0">Two systems are kept at a time: the one you write with, and one spare.
        Save this one and redoing the interview stops being a one-way door — you can switch back to it.</p>
      <div class="btn-row"><button class="btn ghost" data-ob="backup">Save this one as the spare</button></div>
    </div>`;

  const when = new Date(b.saved_at).toLocaleDateString(undefined, { day:'numeric', month:'short', year:'numeric' });
  const n = Array.isArray(b.pillars) ? b.pillars.length : 0;
  return `<div class="card">
      <div class="ob-cap">Saved ${esc(when)} · ${n} pillar${n === 1 ? '' : 's'}</div>
      <p class="ob-note">${esc(b.profile?.positioning_statement || b.label || 'No positioning statement saved.')}</p>
      <div class="btn-row">
        <button class="btn lime" data-ob="swap">Switch to this one</button>
        <button class="btn ghost" data-ob="backup">Replace it with this one</button>
      </div>
    </div>`;
}

async function backupNow(){
  if (!state.profile?.onboarding_completed) return toast('Build a brand system first');
  if (state.backup && !confirm('Replace the spare with the system you are using now? The older spare goes.')) return;
  try {
    await captureBackup(state.profile, state.pillars);
    renderOnboard();
    toast('Saved as the spare');
  } catch (err){
    toast('Could not save: ' + err.message);
  }
}

async function swapBrandSystem(){
  if (!confirm('Switch to the spare system? The one you are using now becomes the spare.')) return;
  const { error } = await sb.rpc('swap_brand_system');
  if (error) return toast('Switch failed: ' + error.message);
  await reloadBrandSystem();
  renderOnboard();
  toast('Switched — your previous system is now the spare');
}

function obCapture(){
  const f = $('#obField');
  if (f && state.onboard?.phase === 'q'){
    state.onboard.answers[OB_Q[state.onboard.step].key] = f.value.trim();
    obSave();
  }
}

async function obSubmit(){
  const ob = state.onboard;
  ob.phase = 'busy';
  renderOnboard();
  try {
    const answers = { ...ob.answers, audience: composeAudience(ob.answers) };
    const { data, error } = await sb.functions.invoke('generate-brand-system', { body: { answers } });
    if (error) throw new Error(await fnError(error));
    if (data?.error) throw new Error(data.error);
    if (!Array.isArray(data?.pillars) || !data.pillars.length) throw new Error('No pillars came back. Try again.');

    /* Keep the system being replaced before anything overwrites it — this is
       what makes redoing the interview reversible. A failed capture is worth a
       warning rather than throwing away the generation the user just waited
       for, so it does not abort the save. */
    if (state.profile?.onboarding_completed){
      try { await captureBackup(state.profile, state.pillars); }
      catch (err){ toast('Could not save a backup: ' + (err.message || 'unknown error')); }
    }

    const uid = state.session.user.id;
    const { data: saved, error: pErr } = await sb.from('profiles').upsert({
      id: uid,
      display_name: ob.answers.name || state.page?.display_name || '',
      handle: state.page?.handle || '',
      audience: answers.audience,
      positioning_statement: data.positioning_statement || '',
      unfair_advantage: data.unfair_advantage || '',
      voice_always: Array.isArray(data.voice_always) ? data.voice_always : [],
      voice_never: Array.isArray(data.voice_never) ? data.voice_never : [],
      language_notes: data.language_notes || '',
      onboarding_completed: true,
      updated_at: new Date().toISOString()
    }).select().single();
    if (pErr) throw pErr;

    /* Replace rather than append: redoing the interview must not leave the old
       pillars behind for generate-draft to choose from. */
    await sb.from('pillars').delete().eq('user_id', uid);
    const { data: made, error: plErr } = await sb.from('pillars').insert(
      data.pillars.slice(0, 5).map((pl, i) => ({
        user_id: uid,
        name: String(pl.name || '').slice(0, 60),
        description: String(pl.description || ''),
        job: String(pl.job || ''),
        hooks: Array.isArray(pl.hooks) ? pl.hooks.slice(0, 3) : [],
        sort_order: i
      }))
    ).select();
    if (plErr) throw plErr;

    state.profile = saved;
    state.pillars = (made || []).sort((a,b) => a.sort_order - b.sort_order);
    state.editingPillar = null;
    obSave();   // keep the answers so redoing the interview is an edit, not a retype
    ob.phase = 'done';
    renderOnboard();
    toast('Brand system saved');
  } catch (err){
    ob.phase = 'error';
    ob.error = err.message || 'Something went wrong.';
    renderOnboard();
  }
}

async function addPillar(){
  const { data, error } = await sb.from('pillars').insert({
    user_id: state.session.user.id,
    name: '', description: '', job: '', hooks: [], sort_order: state.pillars.length
  }).select().single();
  if (error) return toast('Could not add: ' + error.message);
  state.pillars.push(data);
  state.editingPillar = data.id;
  renderOnboard();
  focusPillar(data.id);
}

function focusPillar(id){
  const card = $(`.ob-pillar[data-plid="${id}"]`);
  card?.scrollIntoView({ behavior:'smooth', block:'center' });
  card?.querySelector('[data-pf="name"]')?.focus();
}

async function pillarAction(id, act){
  const i = state.pillars.findIndex(p => p.id === id);
  if (i < 0) return;

  if (act === 'up' || act === 'down'){
    const j = act === 'up' ? i - 1 : i + 1;
    if (j < 0 || j >= state.pillars.length) return;
    [state.pillars[j], state.pillars[i]] = [state.pillars[i], state.pillars[j]];
    /* Order is not cosmetic: generate-draft reads the pillars in this order,
       so the whole list is renumbered and written the way the links editor
       does it, rather than swapping two rows and hoping the rest still line up. */
    state.pillars.forEach((p, idx) => { p.sort_order = idx; });
    renderOnboard();
    setChip('local', 'saving…');
    const results = await Promise.all(state.pillars.map(p =>
      sb.from('pillars').update({ sort_order: p.sort_order }).eq('id', p.id)));
    const failed = results.find(r => r.error);
    if (failed) { setChip('err', 'error'); return toast('Could not reorder: ' + failed.error.message); }
    setChip('live', 'saved');
    return;
  }
  if (act === 'edit'){ state.editingPillar = id; renderOnboard(); return focusPillar(id); }
  if (act === 'done'){ state.editingPillar = null; return renderOnboard(); }
  if (act === 'del'){
    /* Deleting is a real change to what gets written, not just a tidy-up:
       generate-draft picks the pillar for every draft off this list. */
    if (!confirm(`Delete "${state.pillars[i].name || 'this pillar'}"? New drafts stop using it.`)) return;
    const { error } = await sb.from('pillars').delete().eq('id', id);
    if (error) return toast('Delete failed: ' + error.message);
    state.pillars.splice(i, 1);
    state.editingPillar = null;
    renderOnboard();
    toast('Pillar deleted');
  }
}

/* Hooks are a jsonb array in the database but a block of lines in the field —
   blank lines are dropped so a stray return never becomes an empty hook. */
$('#obStage').addEventListener('input', e => {
  const card = e.target.closest('.ob-pillar[data-plid]');
  const f = e.target.dataset.pf;
  if (!card || !f) return;
  const pl = state.pillars.find(p => p.id === card.dataset.plid);
  if (!pl) return;
  const val = f === 'hooks'
    ? e.target.value.split('\n').map(h => h.trim()).filter(Boolean)
    : e.target.value;
  pl[f] = val;
  queueSave('pillars', pl.id, { [f]: val });
});

$('#obStage').addEventListener('click', e => {
  const pcard = e.target.closest('.ob-pillar[data-plid]');
  const pbtn = e.target.closest('[data-pact]');
  if (pcard && pbtn) return pillarAction(pcard.dataset.plid, pbtn.dataset.pact);

  const b = e.target.closest('[data-ob]'); if (!b) return;
  const ob = state.onboard, act = b.dataset.ob;

  if (act === 'skip'){ state.onboardSkipped = true; state.draftFilter = 'draft'; return show('threads'); }
  if (act === 'finish'){ state.draftFilter = 'draft'; return show('threads'); }
  if (act === 'addpillar') return addPillar();
  if (act === 'backup') return backupNow();
  if (act === 'swap') return swapBrandSystem();
  if (act === 'start'){ ob.phase = 'q'; ob.step = 0; return renderOnboard(); }
  if (act === 'prev'){ obCapture(); ob.step--; return renderOnboard(); }
  if (act === 'back'){ ob.phase = 'q'; ob.step = OB_Q.length - 1; return renderOnboard(); }
  if (act === 'submit') return obSubmit();
  if (act === 'restart'){ startOnboard(); state.onboard.phase = 'q'; return renderOnboard(); }
  /* Same generation the interview ends with, run straight off the saved
     answers — this is the way back in once onboarding_completed is set. */
  if (act === 'rebuild'){ startOnboard(); return obSubmit(); }

  if (act === 'next'){
    obCapture();
    const q = OB_Q[ob.step];
    if (q.required && (ob.answers[q.key] || '').length < 3){
      $('#obField').focus();
      return toast('This one shapes every draft — give it a line.');
    }
    if (ob.step === OB_Q.length - 1) return obSubmit();
    ob.step++;
    renderOnboard();
  }
});

$('#obExit').addEventListener('click', () => { obCapture(); show('links'); });

$('#draftsNote').addEventListener('click', e => {
  if (!e.target.closest('[data-act="brand"]')) return;
  startOnboard();
  state.onboard.phase = 'done';
  show('onboard');
});

/* ── AI drafting ──────────────────────────────────────────────────── */
$('#btnAi').addEventListener('click', () => {
  const panel = $('#aiPanel');
  panel.hidden = !panel.hidden;
  $('#btnAi').classList.toggle('on', !panel.hidden);
  if (!panel.hidden) $('#aiTopic').focus();
});

$('#aiGo').addEventListener('click', async () => {
  const topic = $('#aiTopic').value.trim();
  const note = $('#aiNote');
  if (topic.length < 3){ note.className = 'ai-note err'; note.textContent = 'Give it something to work with first.'; return; }

  $('#aiGo').disabled = true;
  $('#aiGo').textContent = 'Writing…';
  note.className = 'ai-note';
  note.textContent = 'Thinking… this takes a few seconds.';

  try {
    /* The key lives on the server; invoke() forwards the session JWT so the
       function can scope voice and quota to this user. */
    const { data, error } = await sb.functions.invoke('generate-draft', { body: { topic } });
    if (error) throw new Error(await fnError(error));
    if (data?.error) throw new Error(data.error);

    const { data: created, error: insErr } = await sb.from('drafts').insert({
      user_id: state.session.user.id,
      pillar: data.pillar || '',
      hook: data.hook || '',
      body: data.body || '',
      status: 'draft'
    }).select().single();
    if (insErr) throw insErr;

    state.drafts.unshift(created);
    state.draftFilter = 'draft';
    state.editingDraft = created.id;
    renderDrafts();
    $('#aiTopic').value = '';
    $('#aiPanel').hidden = true;
    $('#btnAi').classList.remove('on');
    $(`.draft[data-did="${created.id}"]`)?.scrollIntoView({ behavior:'smooth', block:'center' });
    toast(typeof data.remaining_today === 'number'
      ? `Draft ready · ${data.remaining_today} left today`
      : 'Draft ready');
  } catch (err){
    note.className = 'ai-note err';
    note.textContent = err.message || 'Generation failed. Try again.';
  } finally {
    $('#aiGo').disabled = false;
    $('#aiGo').textContent = 'Write a draft';
  }
});

$('#btnAddDraft').addEventListener('click', async () => {
  const { data, error } = await sb.from('drafts').insert({
    user_id: state.session.user.id, pillar: '', hook: '', body: '', status: 'draft'
  }).select().single();
  if (error) return toast('Could not add: ' + error.message);
  state.drafts.unshift(data);
  state.draftFilter = 'draft';
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
    let ok = true;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      /* Clipboard API needs a secure context and permission; the textarea
         fallback keeps one-click copy working where it's unavailable. */
      try {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.cssText = 'position:fixed;top:-1000px;opacity:0';
        document.body.appendChild(ta);
        ta.select();
        ok = document.execCommand('copy');
        ta.remove();
      } catch { ok = false; }
    }
    if (ok){
      const label = btn.textContent;
      btn.textContent = 'Copied ✓';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = label; btn.classList.remove('copied'); }, 1800);
    } else {
      toast('Copy failed');
    }
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

/* ── Theme ────────────────────────────────────────────────────────────
   The inline script in <head> picks the theme before the first paint; this
   only handles changing it. A stored choice pins the theme, so the system
   listener below stops applying once the user has chosen one. */
function applyTheme(t){
  document.documentElement.setAttribute('data-theme', t);
  const m = $('meta[name="theme-color"]');
  if (m) m.setAttribute('content', t === 'light' ? '#FFFFFF' : '#0A0A0A');
  const b = $('#btnTheme');
  if (b) b.setAttribute('aria-label', t === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
}
applyTheme(document.documentElement.getAttribute('data-theme') || 'dark');

$('#btnTheme').addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  applyTheme(next);
  try { localStorage.setItem('bl.theme', next) } catch {}
  toast(next === 'light' ? 'Light mode' : 'Dark mode');
});

matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
  let stored = null;
  try { stored = localStorage.getItem('bl.theme') } catch {}
  if (stored === 'light' || stored === 'dark') return;   // user has decided
  applyTheme(e.matches ? 'light' : 'dark');
});

/* ── Share ────────────────────────────────────────────────────────── */
$('#btnShare').addEventListener('click', async () => {
  const url = state.page?.slug ? publicUrlFor(state.page.slug) : location.href;
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
/* Both the splash CTA and the gate button start the same OAuth hand-off.
   On success the browser navigates to Google, so anything after the await
   means it failed and the user needs a way forward. */
async function signInWithGoogle(){
  const { error } = await sb.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: location.origin + '/' }
  });
  if (!error) return null;
  return error.message.includes('provider')
    ? 'Google sign-in is not enabled on this project yet.'
    : error.message;
}

/* The gate is the fallback surface: it carries the email option and the
   error copy, so failures and "use email instead" both land here. */
function openGate(note, withEmail){
  $('#splash').classList.add('gone');
  $('#gate').classList.add('on');
  if (note) $('#gNote').textContent = note;
  if (withEmail && $('#gEmailBlock').hidden) $('#gToggleEmail').click();
}

$('#gGoogle').addEventListener('click', async () => {
  $('#gGoogle').disabled = true;
  const err = await signInWithGoogle();
  if (err){
    $('#gGoogle').disabled = false;
    $('#gNote').textContent = err;
  }
});

$('#gToggleEmail').addEventListener('click', () => {
  const block = $('#gEmailBlock');
  block.hidden = !block.hidden;
  $('#gToggleEmail').textContent = block.hidden ? 'Use email instead' : 'Use Google instead';
  if (!block.hidden) $('#gEmail').focus();
});

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

/* ── Splash ───────────────────────────────────────────────────────────
   The splash is the front door: it is what a signed-out visitor sees first,
   and "Go ahead!" takes them straight to Google. Someone already signed in
   has been through that door, so for them it steps aside on load. */
$('#splashGo').addEventListener('click', async () => {
  if (state.session){
    $('#splash').classList.add('gone');
    try { sessionStorage.setItem('bl.splash','1') } catch {}
    return;
  }
  const btn = $('#splashGo');
  btn.disabled = true;
  btn.textContent = 'Taking you to Google…';
  const err = await signInWithGoogle();
  if (err){
    btn.disabled = false;
    btn.textContent = 'Go ahead!';
    openGate(err, true);
  }
});

$('#splashEmail').addEventListener('click', () => openGate(null, true));

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
    /* The pre-paint script may have hidden the splash on the strength of a
       stored token that turns out to be dead, and signing out reloads with
       bl.splash still set — either way, show the front door rather than an
       empty console. The gate opens only on request or on failure. */
    document.documentElement.classList.remove('no-splash');
    $('#splash').classList.remove('gone');
    try { sessionStorage.removeItem('bl.splash') } catch {}
    setChip('local','signed out');
    return;
  }

  /* Already signed in: the front door has served its purpose. */
  $('#splash').classList.add('gone');
  try { sessionStorage.setItem('bl.splash','1') } catch {}

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
  if (event !== 'SIGNED_IN' || state.session) return;
  if (!/[?&#](code|access_token)=/.test(location.search + location.hash)) return;
  location.replace(location.pathname);
});

boot();
