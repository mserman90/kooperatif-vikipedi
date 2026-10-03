/**
 * Kooperatifler Wikipediası - Dinamik Uygulama ve Arama Motoru
 */

// Makale Veritabanı ve Rotalar (Eksiksiz Külliyat - 24 Ansiklopedik Madde)
const ARTICLES_REGISTRY = [
  {
    id: "00_ana_sayfa",
    title: "Ana Sayfa - Kooperatifler Wikipediası",
    shortTitle: "🏠 Ana Sayfa",
    category: "Portal",
    file: "articles/00_ana_sayfa.md"
  },
  {
    id: "01_turkiye_kooperatifcilik_hukuku_ve_tarihcesi",
    title: "Türkiye'de Kooperatifçilik Hukuku ve Tarihsel Gelişimi",
    shortTitle: "📜 Tarihsel Gelişim",
    category: "Hukuk & Tarih",
    file: "articles/01_turkiye_kooperatifcilik_hukuku_ve_tarihcesi.md"
  },
  {
    id: "02_1163_sayili_kooperatifler_kanunu",
    title: "1163 Sayılı Kooperatifler Kanunu",
    shortTitle: "⚖️ 1163 Sayılı Kanun",
    category: "Temel Mevzuat",
    file: "articles/02_1163_sayili_kooperatifler_kanunu.md"
  },
  {
    id: "24_kooperatif_kurulusu_ve_anasozlesme_intibak",
    title: "Kooperatif Kuruluşu ve Anasözleşme İntibak Rehberi",
    shortTitle: "📝 Kuruluş ve İntibak Rehberi",
    category: "Temel Mevzuat",
    file: "articles/24_kooperatif_kurulusu_ve_anasozlesme_intibak.md"
  },
  {
    id: "03_tarim_kooperatifleri_ve_birlikleri",
    title: "Tarım Kooperatifleri ve Birlikleri",
    shortTitle: "🌾 Tarım Kooperatifleri Ana Rehberi",
    category: "Tarım Hukuku",
    file: "articles/03_tarim_kooperatifleri_ve_birlikleri.md"
  },
  {
    id: "10_1581_tarim_kredi_kooperatifleri",
    title: "Tarım Kredi Kooperatifleri ve Birlikleri (1581 SK)",
    shortTitle: "🚜 1581 SK - Tarım Kredi (TKK)",
    category: "Tarım Hukuku",
    file: "articles/10_1581_tarim_kredi_kooperatifleri.md"
  },
  {
    id: "11_4572_tarim_satis_kooperatifleri",
    title: "Tarım Satış Kooperatif ve Birlikleri (4572 SK)",
    shortTitle: "🌻 4572 SK - Tarım Satış Birlikleri",
    category: "Tarım Hukuku",
    file: "articles/11_4572_tarim_satis_kooperatifleri.md"
  },
  {
    id: "19_tarimsal_derecelendirme_ve_destekler",
    title: "Tarımsal Amaçlı Örgütlerin Derecelendirilmesi (Yön. 40451)",
    shortTitle: "🏷️ Tarımsal Derecelendirme (A-B-C)",
    category: "Tarım Hukuku",
    file: "articles/19_tarimsal_derecelendirme_ve_destekler.md"
  },
  {
    id: "20_sulama_su_urunleri_ve_orkoy",
    title: "Sulama, Su Ürünleri ve ORKÖY Kooperatifleri",
    shortTitle: "🌊 Sulama, Su Ürünleri & ORKÖY",
    category: "Tarım Hukuku",
    file: "articles/20_sulama_su_urunleri_ve_orkoy.md"
  },
  {
    id: "23_tarim_arazilerinde_mulkiyet_ve_hobi_bahcesi_kisitlamalari",
    title: "Tarım Arazilerinde Hisseli Satış ve Hobi Bahçesi Kısıtlamaları",
    shortTitle: "⛔ Tarım Arazisi & Hobi Bahçesi Yasağı",
    category: "Tarım Hukuku",
    file: "articles/23_tarim_arazilerinde_mulkiyet_ve_hobi_bahcesi_kisitlamalari.md"
  },
  {
    id: "04_tarim_disi_kooperatifler",
    title: "Tarım Dışı Kooperatifler",
    shortTitle: "🏢 Tarım Dışı Kooperatifler Rehberi",
    category: "Tarım Dışı Sektörler",
    file: "articles/04_tarim_disi_kooperatifler.md"
  },
  {
    id: "12_konut_yapi_kooperatifleri_ve_tapu_mevzuati",
    title: "Konut Yapı Kooperatifleri ve Tapu Mevzuatı (7579 SK)",
    shortTitle: "🏗️ Konut Yapı & 7579 SK Kısıtları",
    category: "Tarım Dışı Sektörler",
    file: "articles/12_konut_yapi_kooperatifleri_ve_tapu_mevzuati.md"
  },
  {
    id: "13_esnaf_kredi_kefalet_kooperatifleri_eskkk",
    title: "Esnaf ve Sanatkâr Kredi ve Kefalet Kooperatifleri (ESKKK)",
    shortTitle: "🤝 ESKKK & Halkbank Kredileri",
    category: "Tarım Dışı Sektörler",
    file: "articles/13_esnaf_kredi_kefalet_kooperatifleri_eskkk.md"
  },
  {
    id: "14_kadin_girisimi_kooperatifleri_ve_koop_des",
    title: "Kadın Girişimi Kooperatifleri ve KOOP-DES Hibeleri",
    shortTitle: "👩‍💼 Kadın Girişimi & KOOP-DES",
    category: "Tarım Dışı Sektörler",
    file: "articles/14_kadin_girisimi_kooperatifleri_ve_koop_des.md"
  },
  {
    id: "22_tedarik_tasima_ve_tuketim_kooperatifleri",
    title: "Tedarik, Taşıma ve Tüketim Kooperatifleri",
    shortTitle: "🚚 Tedarik, Taşıma & Tüketim",
    category: "Tarım Dışı Sektörler",
    file: "articles/22_tedarik_tasima_ve_tuketim_kooperatifleri.md"
  },
  {
    id: "05_kooperatif_mali_ve_vergi_hukuku",
    title: "Kooperatif Mali ve Vergi Hukuku",
    shortTitle: "💰 Maliye ve Vergi Genel Rehberi",
    category: "Maliye ve Vergi",
    file: "articles/05_kooperatif_mali_ve_vergi_hukuku.md"
  },
  {
    id: "18_kurumlar_vergisi_muafiyeti_ve_risturn",
    title: "Kurumlar Vergisi Muafiyeti ve Risturn Müessesesi",
    shortTitle: "🧾 KVK m. 4/1-k & Risturn",
    category: "Maliye ve Vergi",
    file: "articles/18_kurumlar_vergisi_muafiyeti_ve_risturn.md"
  },
  {
    id: "06_yonetim_denetim_ve_dijitallesme_koopbis",
    title: "Yönetim, Denetim ve Dijitalleşme: KOOPBİS Rejimi",
    shortTitle: "💻 KOOPBİS & Denetim Rejimi",
    category: "Yönetim & Dijital",
    file: "articles/06_yonetim_denetim_ve_dijitallesme_koopbis.md"
  },
  {
    id: "15_koopbis_uygulama_rehberi",
    title: "Kooperatif Bilgi Sistemi (KOOPBİS) Uygulama Rehberi",
    shortTitle: "📊 KOOPBİS Uygulama Rehberi",
    category: "Yönetim & Dijital",
    file: "articles/15_koopbis_uygulama_rehberi.md"
  },
  {
    id: "16_zorunlu_kooperatifcilik_egitimi_rehberi",
    title: "Zorunlu Kooperatifçilik Eğitimi Rehberi (40 Saat)",
    shortTitle: "🎓 40 Saatlik Zorunlu Eğitim",
    category: "Yönetim & Dijital",
    file: "articles/16_zorunlu_kooperatifcilik_egitimi_rehberi.md"
  },
  {
    id: "17_dis_denetim_ve_bagimsiz_denetim",
    title: "Dış Denetim ve Bağımsız Denetim Standartları",
    shortTitle: "🔍 Dış Denetim Standartları",
    category: "Yönetim & Dijital",
    file: "articles/17_dis_denetim_ve_bagimsiz_denetim.md"
  },
  {
    id: "21_elektronik_genel_kurul_e_gk_rehberi",
    title: "Elektronik Genel Kurul (e-GK) ve Toplantı Usulleri",
    shortTitle: "🗳️ Elektronik Genel Kurul (e-GK)",
    category: "Yönetim & Dijital",
    file: "articles/21_elektronik_genel_kurul_e_gk_rehberi.md"
  },
  {
    id: "07_uluslararasi_kooperatifcilik_ilkeleri_ica",
    title: "Uluslararası Kooperatifçilik İlkeleri (ICA)",
    shortTitle: "🌍 ICA İlkeleri & Karşılaştırmalı Hukuk",
    category: "Uluslararası Standartlar",
    file: "articles/07_uluslararasi_kooperatifcilik_ilkeleri_ica.md"
  },
  {
    id: "08_mevzuat_kulliyati_ve_dizin",
    title: "Kooperatif Mevzuatı Külliyatı ve Dizin",
    shortTitle: "📑 Mevzuat Külliyatı & Fihrist",
    category: "Mevzuat Külliyatı",
    file: "articles/08_mevzuat_kulliyati_ve_dizin.md"
  }
];

// Uygulama Durumu
const state = {
  currentArticleId: "00_ana_sayfa",
  articlesCache: {},
  theme: localStorage.getItem("wiki_theme") || "light",
  fontSize: parseInt(localStorage.getItem("wiki_font_size") || "15", 10)
};

// Sayfa Yüklendiğinde
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initSidebar();
  initRouter();
  initSearch();
  initControls();
});

// Tema Başlatıcı
function initTheme() {
  document.documentElement.setAttribute("data-theme", state.theme);
  document.body.style.fontSize = `${state.fontSize}px`;
}

// Sidebar Menüsünü Kategorilere Göre Oluştur
function initSidebar() {
  const listEl = document.getElementById("sidebar-articles-list");
  if (!listEl) return;

  // Kategorilere göre grupla
  const categories = {};
  ARTICLES_REGISTRY.forEach(art => {
    const cat = art.category || "Genel";
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(art);
  });

  let html = "";
  for (const [catName, items] of Object.entries(categories)) {
    html += `
      <div style="margin-top: 14px; margin-bottom: 4px; font-size: 11px; font-weight: 700; color: var(--wiki-text-muted); text-transform: uppercase; letter-spacing: 0.5px; padding-left: 6px;">
        ${catName}
      </div>
    `;
    items.forEach(art => {
      html += `
        <li>
          <a href="#${art.id}" class="wiki-nav-link" data-id="${art.id}">
            ${art.shortTitle}
          </a>
        </li>
      `;
    });
  }

  listEl.innerHTML = html;
}

// Router & Hash Değişimi
function initRouter() {
  window.addEventListener("hashchange", handleRouting);
  handleRouting();
}

function handleRouting() {
  const hash = window.location.hash.replace("#", "") || "00_ana_sayfa";
  const matched = ARTICLES_REGISTRY.find(a => a.id === hash);
  if (matched) {
    loadArticle(matched.id);
  } else {
    loadArticle("00_ana_sayfa");
  }
}

// Makale Yükleyici
async function loadArticle(articleId) {
  state.currentArticleId = articleId;
  updateActiveNavLink(articleId);

  const container = document.getElementById("article-render-area");
  const titleEl = document.getElementById("page-title");
  const loadingEl = document.getElementById("article-loading");

  if (loadingEl) loadingEl.style.display = "block";

  try {
    let content = state.articlesCache[articleId];
    if (!content) {
      if (window.WIKI_ARTICLES_BUNDLE && window.WIKI_ARTICLES_BUNDLE[articleId]) {
        content = window.WIKI_ARTICLES_BUNDLE[articleId];
      } else {
        const artMeta = ARTICLES_REGISTRY.find(a => a.id === articleId);
        const res = await fetch(artMeta.file);
        if (!res.ok) throw new Error("Makale yüklenemedi: " + res.status);
        content = await res.text();
      }
      state.articlesCache[articleId] = content;
    }

    const artMeta = ARTICLES_REGISTRY.find(a => a.id === articleId);
    titleEl.textContent = artMeta.title;
    document.title = `${artMeta.title} - Kooperatifler Ansiklopedisi`;

    // Markdown'ı HTML'e Çevir
    const renderedHtml = renderMarkdown(content);
    container.innerHTML = renderedHtml;

    // İçindekiler Tablosu (TOC) ve Wiki Bağlantıları Entegrasyonu
    postProcessContent(container);

    // Varsa Mermaid diyagramlarını çiz
    if (window.mermaid) {
      window.mermaid.run({
        nodes: container.querySelectorAll('.mermaid')
      });
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (err) {
    container.innerHTML = `
      <div style="padding: 20px; background: #fee2e2; border-left: 4px solid #ef4444; border-radius: 4px; color: #991b1b;">
        <strong>Hata:</strong> Makale yüklenirken bir problem oluştu. Lütfen dosya yolunu veya sunucu bağlantınızı kontrol ediniz.
        <br><small>${err.message}</small>
      </div>
    `;
  } finally {
    if (loadingEl) loadingEl.style.display = "none";
  }
}

// Markdown İşleyici (marked.js varsa kullanır, yoksa yerleşik basit dönüştürücü)
function renderMarkdown(md) {
  // Wiki içi çift köşeli parantez bağlantılarını normal bağlantıya çevir: [[Madde Adı -> id]] veya [[Madde Adı]]
  let processed = md.replace(/\[\[([^\]]+)\]\]/g, (match, inner) => {
    let text = inner;
    let target = "";

    if (inner.includes("->")) {
      const parts = inner.split("->");
      text = parts[0].trim();
      target = parts[1].trim();
    } else {
      // Başlıktan eşleşen makale bul
      const clean = inner.trim().toLowerCase();
      const found = ARTICLES_REGISTRY.find(a => 
        a.title.toLowerCase().includes(clean) || 
        a.shortTitle.toLowerCase().includes(clean) ||
        a.id.includes(clean)
      );
      target = found ? found.id : "00_ana_sayfa";
    }
    return `<a href="#${target}" class="wiki-internal-link">${text}</a>`;
  });

  if (window.marked) {
    return window.marked.parse(processed);
  }

  // Fallback Basit Markdown Parser
  return processed
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*)\*/gim, '<em>$1</em>')
    .replace(/\n\n/gim, '<p></p>')
    .replace(/\n/gim, '<br />');
}

// İçindekiler Tablosu ve Bağlantı İyileştirmeleri
function postProcessContent(container) {
  // Başlıklara otomatik ID ver
  const headings = container.querySelectorAll("h2, h3");
  headings.forEach(h => {
    if (!h.id) {
      h.id = h.textContent.toLowerCase()
        .replace(/[^a-z0-9ğüşıöç ]/gi, "")
        .replace(/\s+/g, "-");
    }
  });

  // Wiki içi linklere tıklama dinleyicisi
  const links = container.querySelectorAll("a[href^='#']");
  links.forEach(l => {
    l.addEventListener("click", (e) => {
      const href = l.getAttribute("href");
      if (href.startsWith("#0")) {
        // Makale geçişi
        e.preventDefault();
        window.location.hash = href;
      }
    });
  });
}

function updateActiveNavLink(articleId) {
  document.querySelectorAll(".wiki-nav-link").forEach(link => {
    if (link.getAttribute("data-id") === articleId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Canlı Arama Motoru
function initSearch() {
  const searchInput = document.getElementById("wiki-search-input");
  const resultsBox = document.getElementById("wiki-search-dropdown");
  if (!searchInput || !resultsBox) return;

  searchInput.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (q.length < 2) {
      resultsBox.style.display = "none";
      return;
    }

    const matches = [];
    ARTICLES_REGISTRY.forEach(art => {
      let score = 0;
      let snippet = "";
      const titleLower = art.title.toLowerCase();
      const shortLower = art.shortTitle.toLowerCase();
      
      if (titleLower.includes(q) || shortLower.includes(q)) {
        score += 10;
        snippet = `<strong>${art.category}</strong> alanında başlık eşleşmesi`;
      }

      if (window.WIKI_ARTICLES_BUNDLE && window.WIKI_ARTICLES_BUNDLE[art.id]) {
        const fullText = window.WIKI_ARTICLES_BUNDLE[art.id];
        const textLower = fullText.toLowerCase();
        const foundIdx = textLower.indexOf(q);
        if (foundIdx !== -1) {
          score += 5;
          const start = Math.max(0, foundIdx - 40);
          const end = Math.min(fullText.length, foundIdx + q.length + 60);
          const rawSnippet = fullText.substring(start, end).replace(/[#*`_\[\]]/g, ' ');
          snippet = `...${rawSnippet}...`;
        }
      }

      if (score > 0) {
        matches.push({ ...art, score, snippet });
      }
    });

    matches.sort((a, b) => b.score - a.score);

    if (matches.length === 0) {
      resultsBox.innerHTML = `<div style="padding: 12px; font-size: 13px; color: var(--wiki-text-muted);">Eşleşen madde veya içerik bulunamadı.</div>`;
      resultsBox.style.display = "block";
      return;
    }

    resultsBox.innerHTML = matches.slice(0, 7).map(m => `
      <div class="wiki-search-item" data-id="${m.id}">
        <span class="wiki-search-item-title">${m.title}</span>
        <span class="wiki-search-item-snippet">${m.snippet}</span>
      </div>
    `).join("");

    resultsBox.style.display = "block";

    resultsBox.querySelectorAll(".wiki-search-item").forEach(item => {
      item.addEventListener("click", () => {
        const id = item.getAttribute("data-id");
        window.location.hash = `#${id}`;
        resultsBox.style.display = "none";
        searchInput.value = "";
      });
    });
  });

  // Dışarı tıklandığında aramayı kapat
  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !resultsBox.contains(e.target)) {
      resultsBox.style.display = "none";
    }
  });
}

// Tema ve Yazı Boyutu Kontrolleri
function initControls() {
  const themeToggle = document.getElementById("theme-toggle-btn");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("wiki_theme", state.theme);
      document.documentElement.setAttribute("data-theme", state.theme);
      themeToggle.textContent = state.theme === "light" ? "🌙 Gece" : "☀️ Gündüz";
    });
  }

  const fontInc = document.getElementById("font-increase");
  const fontDec = document.getElementById("font-decrease");

  if (fontInc) {
    fontInc.addEventListener("click", () => {
      if (state.fontSize < 20) {
        state.fontSize += 1;
        document.body.style.fontSize = `${state.fontSize}px`;
        localStorage.setItem("wiki_font_size", state.fontSize);
      }
    });
  }

  if (fontDec) {
    fontDec.addEventListener("click", () => {
      if (state.fontSize > 12) {
        state.fontSize -= 1;
        document.body.style.fontSize = `${state.fontSize}px`;
        localStorage.setItem("wiki_font_size", state.fontSize);
      }
    });
  }

  const randomBtn = document.getElementById("random-article-btn");
  if (randomBtn) {
    randomBtn.addEventListener("click", () => {
      const idx = Math.floor(Math.random() * ARTICLES_REGISTRY.length);
      window.location.hash = `#${ARTICLES_REGISTRY[idx].id}`;
    });
  }
}
