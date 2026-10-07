/**
 * Kooperatifler Ansiklopedisi - Dinamik Uygulama, Yönlendirici, Arama Motoru ve Studio Atölyesi
 * Vikipedi Standartlarında Navigasyon, Etkileşimli Test ve Bilgi Kartları
 */

// Makale Veritabanı ve Rotalar (Eksiksiz Külliyat - 26 Ansiklopedik Madde ve Atölye)
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
  },
  {
    id: "25_ornek_anasozlesmeler_kutuphanesi",
    title: "Örnek Anasözleşmeler ve Sektörel Standartlar Kütüphanesi",
    shortTitle: "📜 28+ Tip Anasözleşme Kütüphanesi",
    category: "Mevzuat Külliyatı",
    file: "articles/25_ornek_anasozlesmeler_kutuphanesi.md"
  },
  {
    id: "27_emsal_yargitay_ve_danistay_ictihatlari",
    title: "Yargıtay ve Danıştay Emsal İçtihatları Rehberi",
    shortTitle: "⚖️ Emsal Mahkeme İçtihatları",
    category: "Hukuk & Tarih",
    file: "articles/27_emsal_yargitay_ve_danistay_ictihatlari.md"
  },
  {
    id: "28_kentsel_donusum_ve_sosyal_kooperatifler",
    title: "Kentsel Dönüşüm, Sosyal ve Platform Kooperatifçiliği",
    shortTitle: "🏙️ Kentsel Dönüşüm & Sosyal Koop",
    category: "Tarım Dışı Sektörler",
    file: "articles/28_kentsel_donusum_ve_sosyal_kooperatifler.md"
  },
  {
    id: "29_kooperatif_muhasebesi_ve_belge_sablonlari",
    title: "Kooperatif Muhasebesi ve Resmi Belge Şablonları Kütüphanesi",
    shortTitle: "📊 Muhasebe & Belge Şablonları",
    category: "Maliye ve Vergi",
    file: "articles/29_kooperatif_muhasebesi_ve_belge_sablonlari.md"
  },
  {
    id: "26_interaktif_mevzuat_atolyesi_ve_studio",
    title: "Etkileşimli Mevzuat Atölyesi: Quiz, Bilgi Kartları, Slaytlar ve Podcast",
    shortTitle: "🧠 Etkileşimli Atölye & Quiz (Studio)",
    category: "Studio & İnteraktif",
    file: "articles/26_interaktif_mevzuat_atolyesi_ve_studio.md"
  },
  {
    id: "30_interaktif_hesaplama_ve_karar_destek_araclari",
    title: "Kooperatif Karar Destek, Hesaplama ve Resmi Belge Sihirbazları",
    shortTitle: "🛠️ Hesaplama & Karar Destek",
    category: "Araçlar & Sihirbazlar",
    file: "articles/30_interaktif_hesaplama_ve_karar_destek_araclari.md"
  },
  {
    id: "31_koopdes_hibeler_ve_devlet_destekleri_rehberi",
    title: "KOOP-DES, Kırsal Kalkınma ve Devlet Hibe Destekleri Rehberi",
    shortTitle: "🌱 KOOP-DES & Hibeler",
    category: "Maliye ve Vergi",
    file: "articles/31_koopdes_hibeler_ve_devlet_destekleri_rehberi.md"
  },
  {
    id: "32_kooperatif_tasfiyesi_ve_terkin_yol_haritasi",
    title: "Kooperatif Tasfiyesi, Kapanış ve Sicilden Terkin Yol Haritası",
    shortTitle: "📑 Tasfiye ve Terkin Rehberi",
    category: "Yasal Başvuru",
    file: "articles/32_kooperatif_tasfiyesi_ve_terkin_yol_haritasi.md"
  },
  {
    id: "33_kooperatifler_hukuk_ve_maliye_sozlugu",
    title: "Kooperatifler Hukuk, Maliye ve Uygulama Sözlüğü (A'dan Z'ye)",
    shortTitle: "📖 Terimler Sözlüğü",
    category: "Mevzuat ve Başvuru",
    file: "articles/33_kooperatifler_hukuk_ve_maliye_sozlugu.md"
  },
  {
    id: "34_gunluk_kooperatif_podcast_yayini",
    title: "Kooperatifler Podcast & Sesli Rehber Yayın Merkezi",
    shortTitle: "🎙️ Günlük Podcast",
    category: "Studio & Sesli Rehber",
    file: "articles/34_gunluk_kooperatif_podcast_yayini.md"
  }
];

// Uygulama Durumu
const state = {
  currentArticleId: "00_ana_sayfa",
  articlesCache: {},
  theme: localStorage.getItem("wiki_theme") || "dark",
  fontSize: parseInt(localStorage.getItem("wiki_font_size") || "15", 10),
  isNavigatingSection: false,
  // Quiz State
  quizCurrentIndex: 0,
  quizScore: 0,
  quizAnswered: false,
  // Flashcard State
  flashcardIndex: 0,
  flashcardFlipped: false,
  // Slide State
  currentSlide: 1
};

// ================= QUIZ SORU BANKASI (12 Soru) =================
const QUIZ_QUESTIONS = [
  {
    q: "7579 Sayılı Kanun kapsamında 1163 Sayılı Kooperatifler Kanunu'na eklenen Ek Madde 6 uyarınca, mahalli idarelerin kooperatif kurması hangi makamın iznine tabi kılınmıştır?",
    options: [
      "A. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı",
      "B. İçişleri Bakanlığı",
      "C. Ticaret Bakanlığı",
      "D. Cumhurbaşkanı"
    ],
    answer: 3,
    hint: "700 sayılı KHK ve 7579 sayılı reform ile mahalli idarelerin ortaklığı en üst idari makam onayına bağlanmıştır.",
    explanation: "Doğru Cevap: D. 7579 sayılı Kanun ile 1163 SK Ek Madde 6'ya eklenen hüküm gereğince, mahalli idareler ve bunlara bağlı kuruluşlar ancak Cumhurbaşkanı izniyle kooperatif kurabilir veya ortağı olabilir."
  },
  {
    q: "5520 sayılı Kurumlar Vergisi Kanunu m. 4/1-k uyarınca, aşağıdakilerden hangisi kooperatiflerin kurumlar vergisinden muaf tutulması için aranan zorunlu şartlardan biri DEĞİLDİR?",
    options: [
      "A. Sermaye üzerinden kazanç dağıtılmaması",
      "B. Yönetim kuruluna kâr üzerinden pay verilmemesi",
      "C. Tüm ortakların aynı meslek grubundan olması",
      "D. Münhasıran ortak içi işlemler yapılması"
    ],
    answer: 2,
    hint: "Kurumlar vergisi muafiyetinin 4 altın şartını hatırlayınız.",
    explanation: "Doğru Cevap: C. KVK m. 4/1-k'da 4 altın şart (ortak içi işlem, sermayeye kâr payı vermeme, yönetim kuruluna pay vermeme, yedek akçeleri dağıtmama) aranır; ortakların aynı meslekten olması şartı yoktur."
  },
  {
    q: "1163 sayılı Kooperatifler Kanunu m. 19 ve 80'de yer alan parasal sınır ve muafiyet belirleme yetkileri 700 sayılı KHK ile hangi makama devredilmiştir?",
    options: [
      "A. Cumhurbaşkanı",
      "B. Hazine ve Maliye Bakanlığı",
      "C. Ticaret Bakanlığı",
      "D. Danıştay"
    ],
    answer: 0,
    hint: "Cumhurbaşkanlığı Hükümet Sistemine uyum KHK'sı kapsamında Bakanlar Kurulu yetkilerinin devri.",
    explanation: "Doğru Cevap: A. 700 sayılı KHK ile mülga Bakanlar Kurulu'na ait düzenleme yetkileri doğrudan Cumhurbaşkanlığı makamına devredilmiştir."
  },
  {
    q: "Kooperatif ve Üst Kuruluşları Yönetim ve Denetim Kurulu Üyelerinin Eğitimi Yönetmeliği uyarınca zorunlu eğitim süresi kaç ders saatidir?",
    options: [
      "A. 16 saat",
      "B. 24 saat",
      "C. 40 saat",
      "D. 60 saat"
    ],
    answer: 2,
    hint: "1163, 1581 ve 4572 sayılı kanunlara tabi organ üyeleri için getirilen müfredat süresi.",
    explanation: "Doğru Cevap: C. Yönetmeliğin 7. maddesi uyarınca kooperatif yöneticileri için zorunlu kooperatifçilik eğitimi asgari 40 ders saatidir."
  },
  {
    q: "Yönetim ve denetim kurulu asil üyelerinin seçildikleri tarihten itibaren zorunlu eğitimi tamamlamaları için tanınan azami yasal süre ne kadardır?",
    options: [
      "A. 1 ay",
      "B. 3 ay",
      "C. 6 ay",
      "D. 9 ay"
    ],
    answer: 3,
    hint: "Eğitimi bu süre içinde tamamlamayanların üyeliği kendiliğinden düşer.",
    explanation: "Doğru Cevap: D. Yönetmeliğin 5. maddesi uyarınca üyelerin seçildikleri tarihten itibaren 9 ay içinde eğitimi tamamlayarak sertifikalarını KOOPBİS'e yüklemeleri zorunludur."
  },
  {
    q: "Kooperatifler Bilgi Sistemi (KOOPBİS) verilerinin güncellenmesinden ve sisteme girilmesinden hukuken doğrudan hangi organ sorumludur?",
    options: [
      "A. Denetim Kurulu",
      "B. Genel Kurul Divan Heyeti",
      "C. Yönetim Kurulu",
      "D. Ticaret Sicil Müdürü"
    ],
    answer: 2,
    hint: "Yönetim organının yasal müteselsil sorumluluğu.",
    explanation: "Doğru Cevap: C. 1163 SK Ek Madde 5 ve KOOPBİS Yönetmeliği uyarınca veri girişinden ve doğruluğundan Yönetim Kurulu doğrudan ve müteselsilen sorumludur."
  },
  {
    q: "5403 sayılı Toprak Koruma ve Arazi Kullanımı Kanunu m. 23 ve 7584 sayılı Kanun uyarınca tarım arazilerinde kooperatif hissesi yoluyla hobi bahçesi oluşturulması durumunda hisse devir sözleşmelerinin hukuki niteliği nedir?",
    options: [
      "A. Geçerli bir borç ilişkisidir",
      "B. Askıda hükümsüzdür",
      "C. Kanuna karşı hile sebebiyle mutlak butlanla geçersizdir",
      "D. Paydaşların rızası ile geçerli kılınabilir"
    ],
    answer: 2,
    hint: "Tarım arazilerinin bölünmesini ve izinsiz yapılaşmasını önleyen kamu düzeni kuralı.",
    explanation: "Doğru Cevap: C. 5403 SK m. 23 uyarınca tarım arazilerini bölmeye yönelik hisse satışları kanun gereği mutlak butlanla geçersizdir, yapılar yıkılır ve TCK 184 uygulanır."
  },
  {
    q: "6362 sayılı Sermaye Piyasası Kanunu'nun 16. maddesi uyarınca, pay sahibi / ortak sayısı kaçı aşan kooperatifler kanunen 'Halka Açık Ortaklık' statüsüne tabi olur?",
    options: [
      "A. 100",
      "B. 250",
      "C. 300",
      "D. 500"
    ],
    answer: 3,
    hint: "SPK şeffaflık ve kamuyu aydınlatma eşiği.",
    explanation: "Doğru Cevap: D. SPKn m. 16 gereği ortak sayısı 500'ü aşan kooperatifler halka açık sayılır ve SPK denetimine tabi olur."
  },
  {
    q: "1163 sayılı Kanun'un Geçici 9. maddesi uyarınca anasözleşmelerini Bakanlıkça yayımlanan örnek anasözleşmeye intibak ettirmeyen kooperatiflerin karşılaşacağı hukuki yaptırım nedir?",
    options: [
      "A. Sadece idari para cezası kesilir",
      "B. Kanun gereği kendiliğinden infisah etmiş (dağılmış) sayılırlar",
      "C. Yönetim kurulu görevden alınır",
      "D. Genel kurulları 1 yıl ertelenir"
    ],
    answer: 1,
    hint: "Yasal sürede intibak yaptırmamanın en ağır hukuki sonucu.",
    explanation: "Doğru Cevap: B. Geçici 9. madde uyarınca süresinde intibak ettirmeyen kooperatifler infisah etmiş sayılır ve münfesih statüsüne düşer."
  },
  {
    q: "Kooperatiflerde 'Risturn' (gelir-gider müspet fark iadesi) müessesesi ile anonim şirketlerdeki kâr dağıtımı arasındaki temel hukuki fark nedir?",
    options: [
      "A. Risturn sermayeye göre değil, ortakların kooperatifle yaptığı iş hacmi oranında maliyet iadesidir",
      "B. Risturn sadece yönetim kurulu üyelerine verilir",
      "C. Risturn dağıtımı kurumlar vergisi muafiyetini doğrudan bozar",
      "D. Risturn ancak genel kurulda oybirliği ile verilebilir"
    ],
    answer: 0,
    hint: "Risturn bir kâr dağıtımı değil, maliyet düzeltmesidir.",
    explanation: "Doğru Cevap: A. Risturn, ortakların kooperatifle gerçekleştirdikleri muamele hacmine göre hesaplanan bir fiyat düzeltmesi ve iade mekanizmasıdır."
  },
  {
    q: "Kooperatif ve Üst Kuruluşlarının Dış Denetimi Yönetmeliği (39331) uyarınca dış denetim kapsamına giren bir kooperatifte, dış denetim raporu hazırlanmadan yapılan genel kurul ibra kararları ne hükmündedir?",
    options: [
      "A. Geçerlidir",
      "B. İptal edilebilir niteliktedir",
      "C. Kanunen hükümsüz / batıldır",
      "D. Bakanlık onayı ile geçerlilik kazanır"
    ],
    answer: 2,
    hint: "1163 SK m. 69 ve dış denetim güvencesi.",
    explanation: "Doğru Cevap: C. 1163 SK m. 69 uyarınca dış denetim raporu bulunmayan genel kurullarda alınan ibra kararları kanunen hükümsüzdür."
  },
  {
    q: "3628 sayılı Mal Bildiriminde Bulunulması Kanunu uyarınca, yeni kurulan veya seçilen kooperatif yönetim ve denetim kurulu üyeleri tescilden itibaren ne kadar süre içinde mal bildiriminde bulunmak zorundadır?",
    options: [
      "A. 15 gün",
      "B. 1 ay",
      "C. 3 ay",
      "D. 6 ay"
    ],
    answer: 1,
    hint: "Yolsuzlukla mücadele ve şeffaflık kanunundaki bildirim süresi.",
    explanation: "Doğru Cevap: B. 3628 SK m. 6-7 uyarınca kooperatif yöneticileri tescil ve göreve başlama tarihinden itibaren 1 ay içinde kapalı zarfla bildirimde bulunmalıdır."
  },
  {
    q: "7511 sayılı Kanun ile 1163 sayılı Kanun'un Geçici 9. maddesinde yapılan değişiklik uyarınca kooperatiflerin yeni tip anasözleşmeye intibak ettirilmesi için tanınan kesin son tarih nedir?",
    options: [
      "A. 31 Aralık 2024",
      "B. 1 Mayıs 2025",
      "C. 26 Ekim 2026",
      "D. 1 Ocak 2027"
    ],
    answer: 2,
    hint: "5 yıllık uzatılan intibak süresinin 2026 yılındaki son günü.",
    explanation: "Doğru Cevap: C. 7511 sayılı Kanun ile intibak süresi 5 yıla çıkarılmış ve son tarih 26 Ekim 2026 olarak belirlenmiştir. Bu tarihe kadar intibak yaptırmayan kooperatifler kanun gereği dağılmış (infisah etmiş) sayılır."
  },
  {
    q: "Kooperatif ve Üst Kuruluşlarının Denetimine Dair Yönetmelik (m. 15) uyarınca, faaliyet konusuna bakılmaksızın bir kooperatifin dış denetime tabi olması için yıllık net satış hasılatı asgari kaç TL olmalıdır?",
    options: [
      "A. 10 Milyon TL",
      "B. 20 Milyon TL",
      "C. 50 Milyon TL",
      "D. 100 Milyon TL"
    ],
    answer: 3,
    hint: "Ticaret Bakanlığı'nca 30 milyon TL'den güncellenen ciro eşiği.",
    explanation: "Doğru Cevap: D. Yönetmeliğin 15. maddesi uyarınca faaliyet konusuna bakılmaksızın yıllık net satış hasılatı 100 Milyon TL ve üzeri olan kooperatifler dış denetime tabidir."
  },
  {
    q: "Kooperatifçilik Eğitimi Yönetmeliği uyarınca, kapsamdaki bir kooperatifin yönetim kuruluna seçilen bir Avukat veya Mali Müşavir hakkında aşağıdaki hukuki değerlendirmelerden hangisi doğrudur?",
    options: [
      "A. Diploması sebebiyle 40 saatlik zorunlu kooperatifçilik eğitiminden muaftır",
      "B. Hukuk veya iktisat mezuniyeti otomatik muafiyet sağlamaz; 9 ay içinde eğitimi almak zorundadır",
      "C. Yalnızca 10 saatlik destekleyici eğitimi alması yeterlidir",
      "D. Bakanlıktan yazılı izin alırsa eğitimden muaf tutulur"
    ],
    answer: 1,
    hint: "Lisans diplomasının veya meslek unvanının muafiyet sağlamadığı kuralını hatırlayınız.",
    explanation: "Doğru Cevap: B. Yönetmelikte üniversite diploması veya SMMM/avukatlık unvanına dayalı bir muafiyet yoktur. Kapsamdaki kooperatif yöneticileri eğitimi 9 ayda tamamlamazsa üyeliği kendiliğinden düşer."
  },
  {
    q: "1163 sayılı Kanun m. 45 ve ilgili Tebliğ uyarınca kooperatiflerin olağan genel kurul toplantılarını birleştirebilmeleri için aranan temel şartlar nelerdir?",
    options: [
      "A. Bir üst kuruluşa ortak olmak ve en fazla 3 hesap dönemini birleştirmek",
      "B. Sadece yapı kooperatifi olmak ve 2 yılı birleştirmek",
      "C. Bakanlıktan onay almak ve 5 yılı birleştirmek",
      "D. Ortak sayısının 100'den az olması ve 2 yılı birleştirmek"
    ],
    answer: 0,
    hint: "Üst kuruluş ortaklığı zorunluluğu ve azami hesap dönemi sayısı.",
    explanation: "Doğru Cevap: A. Genel kurulların birleştirilebilmesi için kooperatifin mutlaka bir üst kuruluşa (birlik vb.) ortak olması ve en fazla 3 hesap dönemini kapsaması şarttır."
  }
];

// ================= FLASHCARDS BİLGİ KARTLARI (16 Kart) =================
const FLASHCARDS_DATA = [
  {
    front: "7579 Sayılı Kanun ile Yapı Kooperatiflerine Getirilen Mülkiyet Devri Kısıtı Nedir?",
    back: "Yapı kooperatiflerinde yapı kullanma izin belgesi (iskan) alınmadan tapuda veya noter kanalıyla hisse/ferdi mülkiyet devri yapılamaz. Mahalli idarelerin kooperatif kurması ise Cumhurbaşkanı iznine bağlanmıştır."
  },
  {
    front: "Kurumlar Vergisi Muafiyetinin '4 Altın Şartı' Nelerdir?",
    back: "1) Yalnızca ortaklarla iş yapılması (münhasıran ortak içi işlem), 2) Sermaye üzerinden kazanç dağıtılmaması, 3) Yönetim ve denetime kârdan pay verilmemesi, 4) Yedek akçelerin ortaklara dağıtılmaması (5520 SK m. 4/1-k)."
  },
  {
    front: "KOOPBİS Sistemine Veri Girişi Yükümlülüğünün Cezai Sorumluluğu Nedir?",
    back: "Veri girişini süresinde ve tam yapmayan yönetim kurulu üyeleri hakkında idari para cezası ve TCK m. 257 (görevi kötüye kullanma) kapsamında adli sorumluluk doğar."
  },
  {
    front: "40 Saatlik Zorunlu Kooperatifçilik Eğitimi Hangi Organlar İçin Geçerlidir?",
    back: "Belirlenen yasal eşikleri (20M TL ciro, 1.000 ortak vb.) aşan kooperatiflerin Yönetim ve Denetim Kurulu asıl üyeleri için zorunludur. Seçimden itibaren 9 ay içinde tamamlanmalıdır."
  },
  {
    front: "Tarım Arazilerinde Kooperatif Hissesiyle Hobi Bahçesi Satışı Neden Geçersizdir?",
    back: "5403 sayılı Kanun m. 23 ve 7584 sayılı Kanun gereği tarım arazilerini bölmeye yönelik hisse satışları mutlak butlanla geçersizdir. Yapılar yıkılır ve TCK m. 184 uygulanır."
  },
  {
    front: "Dış Denetim Kapsamında Güncel Ciro ve Ortak Eşikleri Nelerdir?",
    back: "Yıllık net satış hasılatı 100 Milyon TL ve üstü olanlar, 2.000 ve üzeri ortağı bulunanlar ile yapı ruhsatı almış 100+ ortaklı yapı kooperatifleri doğrudan dış denetime tabidir (Yön. m. 15)."
  },
  {
    front: "Tarımsal Örgütlerin Derecelendirilmesinde (Yön. 40451) Ön Koşul Nedir?",
    back: "Derecelendirmeye başvuracak tarımsal kooperatiflerin vadesi geçmiş vergi ve SGK prim borcunun bulunmaması zorunlu ön şarttır."
  },
  {
    front: "Risturn (Müsbet Fark İadesi) Nedir ve Vergiye Tabi midir?",
    back: "Ortakların kooperatifle yaptıkları iş hacmi oranında yıl sonunda yapılan maliyet iadesidir. Kâr payı niteliğinde olmadığından dağıtılması kurumlar vergisi muafiyetini bozmaz."
  },
  {
    front: "Kadın Girişimi Kooperatifleri Hangi Desteklerden Öncelikli Yararlanır?",
    back: "KOOP-DES hibe programı (makine-ekipman alımı ve nitelikli personel istihdamı) ile Belediye Kanunu m. 75 uyarınca belediyelerle ortak protokol ve bedelsiz yer tahsisi imkânı."
  },
  {
    front: "Su Ürünleri Kooperatiflerinin Balıkçı Barınaklarındaki İhale Avantajı Nedir?",
    back: "1380 ve 2886 sayılı Kanunlar uyarınca balıkçı barınakları ve avlanma sahaları doğrudan pazarlık usulüyle öncelikle yerel su ürünleri kooperatiflerine kiralanır."
  },
  {
    front: "ORKÖY Kooperatiflerinin Orman Kanunu (6831) Kapsamındaki Ayrıcalığı Nedir?",
    back: "Orman köyleri kalkındırma kooperatiflerine dikili ağaç tahsisi (Orman K. m. 34/40) ve 4734 SK m. 3/e uyarınca orman emvali üretiminde ihale istisnası tanınmıştır."
  },
  {
    front: "7511 Sayılı Kanun Uyarınca Anasözleşme İntibakının Son Tarihi Nedir?",
    back: "26 Ekim 2026. Bu tarihe kadar anasözleşmesini yürürlükteki tip anasözleşmeye intibak ettirip tescil ettirmeyen kooperatifler kanun gereği kendiliğinden infisah etmiş (dağılmış) sayılır."
  },
  {
    front: "Hukuk veya İktisat Mezuniyeti Zorunlu Kooperatifçilik Eğitiminden Muafiyet Sağlar mı?",
    back: "HAYIR. Kooperatifçilik Eğitimi Yönetmeliği'nde lisans diplomasına veya meslek unvanına (avukat, SMMM vb.) dayalı bir muafiyet yoktur. Kapsamdaki yöneticiler eğitimi almak zorundadır."
  },
  {
    front: "Kooperatiflerde Ortak Dışı İşlem Yapılması Halinde Muafiyet Kalkar mı? (7061 SK)",
    back: "7061 sayılı Kanun ile KVK m. 4/1-k'ya eklenen hüküm uyarınca kooperatifin muafiyeti kalkmaz; ortak dışı işlemler dolayısıyla bağlı bir 'İktisadi İşletme' oluşmuş kabul edilir ve sadece bu işletme vergilendirilir."
  },
  {
    front: "Kooperatif Genel Kurulları En Fazla Kaç Dönem İçin Birleştirilebilir?",
    back: "Kooperatifin bir üst kuruluşa ortak olması şartıyla, en fazla üç (3) hesap dönemi için olağan genel kurul birleştirilerek yapılabilir (1163 SK m. 45)."
  },
  {
    front: "Kooperatiften İhraç Edilen Ortağın Mahkemeye Dava Açma Süresi Ne Kadardır?",
    back: "İhraç kararının noter tebliğinden itibaren 3 ay içinde Asliye Ticaret Mahkemesinde iptal davası açılmalıdır. Dava açılınca ortaklık sıfatı kesin hükme kadar askıda kalır (1163 SK m. 16)."
  }
];

// Yardımcı: Türkçe Metinleri ASCII Slug'a Dönüştür
function slugify(text) {
  if (!text) return "";
  return text
    .replace(/İ/g, "i")
    .replace(/I/g, "i")
    .replace(/ı/g, "i")
    .replace(/Ğ/g, "g")
    .replace(/ğ/g, "g")
    .replace(/Ü/g, "u")
    .replace(/ü/g, "u")
    .replace(/Ş/g, "s")
    .replace(/ş/g, "s")
    .replace(/Ö/g, "o")
    .replace(/ö/g, "o")
    .replace(/Ç/g, "c")
    .replace(/ç/g, "c")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

// Sayfa Yüklendiğinde
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initSidebar();
  initRouter();
  initSearch();
  initControls();
  initAiAssistant();
});

// Tema Başlatıcı
function initTheme() {
  document.documentElement.setAttribute("data-theme", state.theme);
  document.body.style.fontSize = `${state.fontSize}px`;
  const themeToggle = document.getElementById("theme-toggle-btn");
  if (themeToggle) {
    themeToggle.textContent = state.theme === "light" ? "🌙 Gece" : "☀️ Gündüz";
  }
}

// Sidebar Menüsünü Kategorilere Göre Oluştur
function initSidebar() {
  const listEl = document.getElementById("sidebar-articles-list");
  if (!listEl) return;

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

// Akıllı Başlık ve Bölüm Bulucu (DOM İçinde Esnek Eşleştirme)
function findTargetElement(target) {
  if (!target) return null;
  const cleanTarget = decodeURIComponent(target).replace(/^#/, "").trim();
  if (!cleanTarget) return null;

  // 1. Doğrudan ID eşleşmesi
  let el = document.getElementById(cleanTarget);
  if (el) return el;

  // 2. data-slug veya data-unicode-slug eşleşmesi
  try {
    const escaped = CSS.escape(cleanTarget);
    el = document.querySelector(`[data-slug="${escaped}"]`) ||
         document.querySelector(`[data-unicode-slug="${escaped}"]`) ||
         document.querySelector(`[name="${escaped}"]`);
    if (el) return el;
  } catch (e) {}

  // 3. Slugify edilmiş hedef eşleşmesi
  const targetAscii = slugify(cleanTarget);
  const targetUnicode = cleanTarget
    .replace(/İ/g, "i")
    .replace(/I/g, "i")
    .toLowerCase()
    .replace(/[^a-z0-9ğüşıöç\s-]/gi, "")
    .trim()
    .replace(/\s+/g, "-");

  try {
    el = document.getElementById(targetAscii) ||
         document.querySelector(`[data-slug="${CSS.escape(targetAscii)}"]`) ||
         document.querySelector(`[data-unicode-slug="${CSS.escape(targetUnicode)}"]`);
    if (el) return el;
  } catch (e) {}

  // 4. Sayısal Bölüm Öneki Eşleşmesi (Örn: #1-..., #41-genel-kurul -> 4.1. veya 1.)
  const numMatch = cleanTarget.match(/^([0-9]+(?:[-.][0-9]+)?)/);
  if (numMatch) {
    const rawNum = numMatch[1];
    const dotNum = rawNum.replace("-", ".");
    const flatNum = rawNum.replace(/[-.]/g, "");
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5");
    for (const h of headings) {
      const text = h.textContent.trim();
      if (text.startsWith(dotNum + ".") || text.startsWith(dotNum + " ") || 
          text.startsWith(rawNum + ".") || text.startsWith(rawNum + " ") ||
          text.startsWith(flatNum + ".")) {
        return h;
      }
    }
  }

  // 5. Normalleştirilmiş Alfanümerik Karşılaştırma (Noktalama ve boşluk duyarsız)
  const normTarget = cleanTarget.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (normTarget && normTarget.length > 2) {
    const candidates = document.querySelectorAll("h1, h2, h3, h4, h5, h6, .wiki-tool-card, [id]");
    for (const c of candidates) {
      const cIdNorm = (c.id || "").toLowerCase().replace(/[^a-z0-9]/g, "");
      const cTextNorm = (c.textContent || "").toLowerCase().replace(/[^a-z0-9]/g, "");
      const cSlugNorm = (c.getAttribute("data-slug") || "").toLowerCase().replace(/[^a-z0-9]/g, "");
      const cUniNorm = (c.getAttribute("data-unicode-slug") || "").toLowerCase().replace(/[^a-z0-9]/g, "");

      if (cIdNorm === normTarget || cSlugNorm === normTarget || cUniNorm === normTarget) {
        return c;
      }
      if (cTextNorm.startsWith(normTarget) || normTarget.startsWith(cTextNorm) || (cIdNorm && cIdNorm.includes(normTarget))) {
        return c;
      }
    }
  }

  return null;
}

// Sticky Header Yüksekliğini Dikkate Alan Akıcı Kaydırma
function scrollToElement(targetEl) {
  if (!targetEl) return;
  const header = document.querySelector(".wiki-header");
  const headerHeight = header ? header.offsetHeight : 56;
  const rect = targetEl.getBoundingClientRect();
  const targetTop = window.pageYOffset + rect.top - headerHeight - 16;
  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: "smooth"
  });
}

// Router & Hash Değişimi
function initRouter() {
  window.addEventListener("hashchange", handleRouting);
  handleRouting();
}

function handleRouting() {
  if (state.isNavigatingSection) {
    state.isNavigatingSection = false;
    return;
  }

  const rawHash = decodeURIComponent(window.location.hash.replace(/^#/, "")).trim();
  
  if (!rawHash) {
    loadArticle("00_ana_sayfa");
    return;
  }

  // 1. Durum: Doğrudan Kayıtlı Makale ID'si
  const directMatch = ARTICLES_REGISTRY.find(a => a.id === rawHash);
  if (directMatch) {
    loadArticle(directMatch.id);
    return;
  }

  // 2. Durum: Makale + Bölüm Birleşik Hash (örn: #02_xxx:bolum veya #02_xxx#bolum veya #02_xxx/bolum)
  const splitMatch = rawHash.match(/^([0-9]{2}_[a-z0-9_]+)([:#/])(.+)$/i);
  if (splitMatch) {
    const targetArtId = splitMatch[1];
    const targetSection = splitMatch[3];
    const art = ARTICLES_REGISTRY.find(a => a.id === targetArtId);
    if (art) {
      if (state.currentArticleId === art.id) {
        const targetElement = findTargetElement(targetSection);
        if (targetElement) {
          scrollToElement(targetElement);
        }
      } else {
        loadArticle(art.id, targetSection);
      }
      return;
    }
  }

  // 3. Durum: Sayfa İçi Bölüm Başlığı (TOC veya Anchor)
  const targetElement = findTargetElement(rawHash);
  if (targetElement) {
    scrollToElement(targetElement);
    return;
  }

  // 4. Durum: Eğer geçerli makale zaten yüklüyse, ana sayfaya atma!
  if (state.currentArticleId) {
    return;
  }

  // 5. Durum: Eşleşmeyen hash (Sadece ilk açılışta)
  const fuzzyArt = ARTICLES_REGISTRY.find(a => rawHash.startsWith(a.id));
  if (fuzzyArt) {
    loadArticle(fuzzyArt.id);
  } else {
    loadArticle("00_ana_sayfa");
  }
}

// Makale Yükleyici
async function loadArticle(articleId, scrollToSectionId = null) {
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
        if (!artMeta) throw new Error("Makale meta verisi bulunamadı: " + articleId);
        const res = await fetch(artMeta.file);
        if (!res.ok) throw new Error("Makale dosyası yüklenemedi: " + res.status);
        content = await res.text();
      }
      state.articlesCache[articleId] = content;
    }

    if (typeof content === "object" && content !== null) {
      if (typeof content.value === "string") {
        content = content.value;
      } else {
        content = JSON.stringify(content);
      }
    }
    if (typeof content !== "string") {
      content = String(content || "");
    }

    const artMeta = ARTICLES_REGISTRY.find(a => a.id === articleId) || { title: "Ansiklopedik Madde" };
    titleEl.textContent = artMeta.title;
    document.title = `${artMeta.title} - Kooperatifler Ansiklopedisi`;

    // Dinamik SPA SEO ve Sosyal Paylaşım Meta Etiketleri Güncellemesi
    const pageDesc = artMeta.shortTitle 
      ? `${artMeta.title} (${artMeta.shortTitle}) — 1163 SK, intibak, denetim ve mevzuat rehberi.`
      : `${artMeta.title} — Kooperatifler Ansiklopedisi ve Mevzuat Bilgi Bankası.`;
    const fullArticleUrl = `${window.location.origin}${window.location.pathname}#${articleId}`;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute("content", pageDesc);

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.setAttribute("href", fullArticleUrl);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", `${artMeta.title} - Kooperatifler Ansiklopedisi`);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", pageDesc);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", fullArticleUrl);

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", `${artMeta.title} - Kooperatifler Ansiklopedisi`);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", pageDesc);

    // AI Özet Alanını Sıfırla
    const summaryArea = document.getElementById("article-ai-summary-area");
    if (summaryArea) {
      summaryArea.style.display = "none";
      summaryArea.innerHTML = "";
    }

    // Markdown'ı HTML'e Çevir
    const renderedHtml = renderMarkdown(content);
    container.innerHTML = renderedHtml;

    // İçindekiler Tablosu (TOC) ve Bağlantı İşlemleri
    postProcessContent(container);

    // Eğer Atölye sayfası ise interaktif motorları başlat
    if (articleId === "26_interaktif_mevzuat_atolyesi_ve_studio") {
      initQuizEngine();
      initFlashcardsEngine();
    }

    // Karar Destek & Hesaplama Araçları Sayfası
    if (articleId === "30_interaktif_hesaplama_ve_karar_destek_araclari") {
      initInteractiveToolsEngine();
    }

    // Örnek Anasözleşmeler Kütüphanesi Sayfası
    if (articleId === "25_ornek_anasozlesmeler_kutuphanesi") {
      initBylawsLibraryEngine();
    }

    // Muhasebe ve Resmi Belge Şablonları Kütüphanesi Sayfası
    if (articleId === "29_kooperatif_muhasebesi_ve_belge_sablonlari") {
      initLegalTemplatesEngine();
    }

    // Terimler Sözlüğü Sayfası
    if (articleId === "33_kooperatifler_hukuk_ve_maliye_sozlugu") {
      initGlossaryEngine();
    }

    // Podcast & Sesli Rehber Sayfası
    if (articleId === "34_gunluk_kooperatif_podcast_yayini") {
      initPodcastEngine();
    }

    // Varsa Mermaid diyagramlarını render et
    if (window.mermaid) {
      window.mermaid.run({
        nodes: container.querySelectorAll(".mermaid")
      });
    }

    // Bölüme kaydırma veya sayfa başına gitme
    if (scrollToSectionId) {
      setTimeout(() => {
        const target = findTargetElement(scrollToSectionId);
        if (target) {
          scrollToElement(target);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
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

// Markdown İşleyici
function renderMarkdown(md) {
  if (typeof md !== "string") {
    md = String(md || "");
  }

  let processed = md.replace(/\[\[([^\]]+)\]\]/g, (match, inner) => {
    let text = inner;
    let target = "";

    if (inner.includes("->")) {
      const parts = inner.split("->");
      text = parts[0].trim();
      target = parts[1].trim();
    } else {
      const clean = inner.trim().toLowerCase();
      let found = ARTICLES_REGISTRY.find(a => 
        a.id.toLowerCase() === clean ||
        a.title.toLowerCase() === clean || 
        a.shortTitle.toLowerCase() === clean ||
        a.title.toLowerCase().includes(clean) ||
        a.id.toLowerCase().includes(clean)
      );
      if (!found) {
        // Sayısal eşleşme (örn: "24" -> "24_kooperatif_...")
        const numOnly = clean.replace(/[^0-9]/g, "");
        if (numOnly) {
          const padded = numOnly.padStart(2, "0");
          found = ARTICLES_REGISTRY.find(a => a.id.startsWith(padded + "_"));
        }
      }
      target = found ? found.id : "00_ana_sayfa";
    }
    return `<a href="#${target}" class="wiki-internal-link">${text}</a>`;
  });

  if (window.marked) {
    let html = window.marked.parse(processed);
    // Güvenlik & Dayanıklılık: Eğer herhangi bir wiki bileşeni kaza ile pre/code içine düşerse HTML'e geri çevir
    html = html.replace(/<pre><code[^>]*>(&lt;(?:div|audio)[^>]*class=&quot;wiki-[\s\S]*?)<\/code><\/pre>/gi, (m, code) => {
      return code
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, "&");
    });
    return html;
  }

  return processed
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^\> (.*$)/gim, "<blockquote>$1</blockquote>")
    .replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>")
    .replace(/\*(.*)\*/gim, "<em>$1</em>")
    .replace(/\n\n/gim, "<p></p>")
    .replace(/\n/gim, "<br />");
}

// Başlık ID'leri ve Bağlantı Davranışları
function postProcessContent(container) {
  const headings = container.querySelectorAll("h1, h2, h3, h4, h5");
  headings.forEach(h => {
    const rawText = h.textContent.trim();
    const asciiSlug = slugify(rawText);
    const unicodeSlug = rawText.toLowerCase().replace(/[^a-z0-9ğüşıöç\s-]/gi, "").trim().replace(/\s+/g, "-");

    if (!h.id) {
      h.id = asciiSlug;
    }
    h.setAttribute("data-slug", asciiSlug);
    h.setAttribute("data-unicode-slug", unicodeSlug);
  });

  const links = container.querySelectorAll("a");
  links.forEach(l => {
    const href = l.getAttribute("href");
    if (!href) return;

    if (href.startsWith("http://") || href.startsWith("https://")) {
      l.setAttribute("target", "_blank");
      l.setAttribute("rel", "noopener noreferrer");
      return;
    }

    if (href.startsWith("#")) {
      const targetHash = decodeURIComponent(href.substring(1)).trim();

      // A) Doğrudan Başka Bir Makaleye Bağlantı (#24_kooperatif_kurulusu_ve_anasozlesme_intibak)
      const directArt = ARTICLES_REGISTRY.find(a => a.id === targetHash);
      if (directArt) {
        l.addEventListener("click", (e) => {
          e.preventDefault();
          window.location.hash = `#${directArt.id}`;
        });
        return;
      }

      // B) Makaleler Arası Bölüm Bağlantısı (#02_xxx:section veya #02_xxx#section veya #02_xxx/section)
      const crossMatch = targetHash.match(/^([0-9]{2}_[a-z0-9_]+)[:#/](.+)$/i);
      if (crossMatch && ARTICLES_REGISTRY.some(a => a.id === crossMatch[1])) {
        l.addEventListener("click", (e) => {
          e.preventDefault();
          const artId = crossMatch[1];
          const secId = crossMatch[2];
          if (state.currentArticleId === artId) {
            const el = findTargetElement(secId);
            if (el) scrollToElement(el);
          } else {
            loadArticle(artId, secId);
          }
          history.replaceState(null, null, `#${artId}:${secId}`);
        });
        return;
      }

      // C) Sayfa İçi Bölüm / Çapa Bağlantısı (TOC / Anchor)
      l.addEventListener("click", (e) => {
        e.preventDefault();
        const targetEl = findTargetElement(targetHash);
        if (targetEl) {
          state.isNavigatingSection = true;
          history.replaceState(null, null, `#${state.currentArticleId}:${targetHash}`);
          scrollToElement(targetEl);
        } else {
          console.warn("Hedef başlık bulunamadı:", targetHash);
          // Ana sayfaya atmayı kesinlikle engelle, mevcut makalede kal!
        }
      });
    }
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

// ================= INTERAKTİF QUIZ MOTORU =================
function initQuizEngine() {
  state.quizCurrentIndex = 0;
  state.quizScore = 0;
  renderQuizQuestion();

  const hintBtn = document.getElementById("quiz-hint-btn");
  const nextBtn = document.getElementById("quiz-next-btn");

  if (hintBtn) {
    hintBtn.onclick = () => {
      const hintBox = document.getElementById("quiz-hint-box");
      if (hintBox) {
        const curQ = QUIZ_QUESTIONS[state.quizCurrentIndex];
        hintBox.innerHTML = `<strong>💡 İpucu:</strong> ${curQ.hint}`;
        hintBox.style.display = hintBox.style.display === "none" ? "block" : "none";
      }
    };
  }

  if (nextBtn) {
    nextBtn.onclick = () => {
      if (state.quizCurrentIndex < QUIZ_QUESTIONS.length - 1) {
        state.quizCurrentIndex++;
        renderQuizQuestion();
      } else {
        showQuizResults();
      }
    };
  }
}

function renderQuizQuestion() {
  state.quizAnswered = false;
  const qData = QUIZ_QUESTIONS[state.quizCurrentIndex];
  const qArea = document.getElementById("quiz-question-area");
  const progArea = document.getElementById("quiz-progress");
  const feedArea = document.getElementById("quiz-feedback-area");
  const hintBox = document.getElementById("quiz-hint-box");
  const scoreBadge = document.getElementById("quiz-score-badge");

  if (!qArea) return;

  if (progArea) progArea.textContent = `Soru ${state.quizCurrentIndex + 1} / ${QUIZ_QUESTIONS.length}`;
  if (scoreBadge) scoreBadge.textContent = `Puan: ${state.quizScore} / ${QUIZ_QUESTIONS.length}`;
  if (feedArea) feedArea.style.display = "none";
  if (hintBox) hintBox.style.display = "none";

  let optionsHtml = qData.options.map((opt, idx) => `
    <button class="quiz-option-btn" onclick="handleQuizAnswer(${idx})">${opt}</button>
  `).join("");

  qArea.innerHTML = `
    <div style="font-size: 16px; font-weight: 600; color: var(--wiki-text); line-height: 1.5; margin-bottom: 12px;">
      ${state.quizCurrentIndex + 1}. ${qData.q}
    </div>
    <div class="quiz-options-group">${optionsHtml}</div>
  `;
}

window.handleQuizAnswer = function(selectedIdx) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;

  const qData = QUIZ_QUESTIONS[state.quizCurrentIndex];
  const buttons = document.querySelectorAll(".quiz-option-btn");
  const feedArea = document.getElementById("quiz-feedback-area");
  const scoreBadge = document.getElementById("quiz-score-badge");

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === qData.answer) {
      btn.classList.add("selected-correct");
    } else if (idx === selectedIdx) {
      btn.classList.add("selected-wrong");
    }
  });

  if (selectedIdx === qData.answer) {
    state.quizScore++;
    if (feedArea) {
      feedArea.className = "quiz-feedback-box correct";
      feedArea.innerHTML = `<strong>Tebrikler, Doğru!</strong><br>${qData.explanation}`;
      feedArea.style.display = "block";
    }
  } else {
    if (feedArea) {
      feedArea.className = "quiz-feedback-box wrong";
      feedArea.innerHTML = `<strong>Yanlış Seçenek!</strong><br>${qData.explanation}`;
      feedArea.style.display = "block";
    }
  }

  if (scoreBadge) scoreBadge.textContent = `Puan: ${state.quizScore} / ${QUIZ_QUESTIONS.length}`;
};

function showQuizResults() {
  const container = document.getElementById("interactive-quiz-container");
  if (!container) return;

  const pct = Math.round((state.quizScore / QUIZ_QUESTIONS.length) * 100);
  let evalText = "";
  if (pct >= 85) evalText = "🏆 <strong>Üstün Başarı:</strong> Kooperatif hukuku ve denetim mevzuatına tam hakimsiniz!";
  else if (pct >= 60) evalText = "👍 <strong>Başarılı:</strong> Temel mevzuata hakimsiniz; cezai ve vergi detaylarını tekrar incelemeniz önerilir.";
  else evalText = "📖 <strong>Tekrar Önerilir:</strong> 1163, KOOPBİS ve dış denetim rehberlerini inceleyerek testi yeniden çözünüz.";

  container.innerHTML = `
    <div style="text-align: center; padding: 24px 12px;">
      <div style="font-size: 36px; margin-bottom: 8px;">🎓</div>
      <h3 style="color: var(--wiki-text);">Test Tamamlandı!</h3>
      <div style="font-size: 24px; font-weight: 700; color: var(--wiki-link); margin: 12px 0;">
        Skorunuz: ${state.quizScore} / ${QUIZ_QUESTIONS.length} (%${pct})
      </div>
      <p style="color: var(--wiki-text); max-width: 500px; margin: 0 auto 20px auto;">${evalText}</p>
      <button onclick="initQuizEngine()" class="wiki-btn-icon" style="padding: 10px 24px; font-weight: 600; background: var(--wiki-link); color: #fff;">🔄 Testi Yeniden Başlat</button>
    </div>
  `;
}

// ================= INTERAKTİF FLASHCARDS MOTORU =================
function initFlashcardsEngine() {
  state.flashcardIndex = 0;
  state.flashcardFlipped = false;
  renderFlashcard();
}

function renderFlashcard() {
  const card = FLASHCARDS_DATA[state.flashcardIndex];
  const frontEl = document.getElementById("fc-front-text");
  const backEl = document.getElementById("fc-back-text");
  const counterEl = document.getElementById("fc-counter");
  const cardEl = document.getElementById("flashcard-element");

  if (!frontEl || !backEl) return;

  if (cardEl) cardEl.classList.remove("flipped");
  state.flashcardFlipped = false;

  frontEl.textContent = card.front;
  backEl.textContent = card.back;
  if (counterEl) counterEl.textContent = `Kart ${state.flashcardIndex + 1} / ${FLASHCARDS_DATA.length}`;
}

window.flipFlashcard = function() {
  const cardEl = document.getElementById("flashcard-element");
  if (!cardEl) return;
  state.flashcardFlipped = !state.flashcardFlipped;
  if (state.flashcardFlipped) {
    cardEl.classList.add("flipped");
  } else {
    cardEl.classList.remove("flipped");
  }
};

window.nextFlashcard = function() {
  if (state.flashcardIndex < FLASHCARDS_DATA.length - 1) {
    state.flashcardIndex++;
  } else {
    state.flashcardIndex = 0;
  }
  renderFlashcard();
};

window.prevFlashcard = function() {
  if (state.flashcardIndex > 0) {
    state.flashcardIndex--;
  } else {
    state.flashcardIndex = FLASHCARDS_DATA.length - 1;
  }
  renderFlashcard();
};

// ================= SLIDE DECK GÖRÜNTÜLEYİCİ =================
window.changeSlide = function(delta) {
  const totalSlides = 5;
  let nextSlide = state.currentSlide + delta;
  if (nextSlide > totalSlides) nextSlide = 1;
  if (nextSlide < 1) nextSlide = totalSlides;

  document.querySelectorAll(".wiki-slide").forEach((el, idx) => {
    if (idx + 1 === nextSlide) {
      el.style.display = "block";
      el.classList.add("active-slide");
    } else {
      el.style.display = "none";
      el.classList.remove("active-slide");
    }
  });

  state.currentSlide = nextSlide;
  const ind = document.getElementById("slide-indicator");
  if (ind) ind.textContent = `Slayt ${nextSlide} / ${totalSlides}`;
};

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
          const rawSnippet = fullText.substring(start, end).replace(/[#*`_\[\]]/g, " ");
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

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      resultsBox.style.display = "none";
    } else if (e.key === "Enter") {
      const firstItem = resultsBox.querySelector(".wiki-search-item");
      if (firstItem) {
        const id = firstItem.getAttribute("data-id");
        window.location.hash = `#${id}`;
        resultsBox.style.display = "none";
        searchInput.value = "";
      }
    }
  });

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
      if (state.fontSize < 22) {
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
      const nonHome = ARTICLES_REGISTRY.filter(a => a.id !== "00_ana_sayfa");
      const idx = Math.floor(Math.random() * nonHome.length);
      window.location.hash = `#${nonHome[idx].id}`;
    });
  }

  // Sosyal Paylaşım & Bağlantı Kopyalama Butonu
  const shareBtn = document.getElementById("share-site-btn");
  if (shareBtn) {
    shareBtn.addEventListener("click", async () => {
      const currentArt = ARTICLES_REGISTRY.find(a => a.id === state.currentArticleId);
      const shareTitle = currentArt ? `${currentArt.title} - Kooperatifler Ansiklopedisi` : document.title;
      const shareUrl = window.location.href;
      const shareData = {
        title: shareTitle,
        text: "Kooperatifler Ansiklopedisi — Türkiye'nin Açık Kaynaklı Özgür Kooperatifçilik Bilgi Bankası",
        url: shareUrl
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (e) {
          // Kullanıcı paylaşım penceresini kapattıysa sessizce geç
        }
      } else {
        try {
          await navigator.clipboard.writeText(shareUrl);
          const origText = shareBtn.textContent;
          shareBtn.textContent = "✔️ Kopyalandı!";
          setTimeout(() => { shareBtn.textContent = origText; }, 2200);
        } catch (err) {
          prompt("Sayfa bağlantısını kopyalayabilirsiniz:", shareUrl);
        }
      }
    });
  }
}

// ================= KARAR DESTEK & HESAPLAMA ARAÇLARI MOTORU =================
function initInteractiveToolsEngine() {
  // 1. Uygunluk Sihirbazı
  const btnAudit = document.getElementById("btn-run-audit-wizard");
  const coopTypeSelect = document.getElementById("w-coop-type");
  const buildingPermitGroup = document.getElementById("w-building-permit-group");

  if (coopTypeSelect && buildingPermitGroup) {
    // Sayfa açılışında geçerli seçime göre durum ayarla
    buildingPermitGroup.style.display = coopTypeSelect.value === "yapi" ? "block" : "none";
    coopTypeSelect.addEventListener("change", () => {
      buildingPermitGroup.style.display = coopTypeSelect.value === "yapi" ? "block" : "none";
    });
  }

  if (btnAudit) {
    btnAudit.addEventListener("click", () => {
      const coopType = (document.getElementById("w-coop-type") || {}).value || "yapi";
      const memberCount = parseInt((document.getElementById("w-member-count") || {}).value || "0", 10);
      const revenue = parseFloat((document.getElementById("w-revenue") || {}).value || "0");
      const buildingPermit = (document.getElementById("w-building-permit") || {}).value || "no";
      const resultPanel = document.getElementById("audit-wizard-result");

      // Dış Denetim Değerlendirmesi
      let auditRequired = false;
      const auditReasons = [];

      if (coopType === "eskkk" || coopType === "tarim_kredi") {
        auditRequired = true;
        auditReasons.push("Özel Kanunları ve Denetim Yönetmeliği m. 15/1-d uyarınca faaliyet konusuna bakılmaksızın doğrudan zorunludur.");
      }
      if (coopType === "yapi" && memberCount >= 100 && buildingPermit === "yes") {
        auditRequired = true;
        auditReasons.push("Yapı ruhsatı alınmış ve ortak sayısı 100 veya üzeri olan yapı kooperatifidir (Yön. m. 15/1-c).");
      }
      if (revenue >= 100000000) {
        auditRequired = true;
        auditReasons.push(`Yıllık net satış hasılatı (${revenue.toLocaleString('tr-TR')} TL), yasal eşik olan 100 Milyon TL'yi aşmaktadır (Yön. m. 15/1-a).`);
      }
      if (memberCount >= 2000) {
        auditRequired = true;
        auditReasons.push(`Ortak sayısı (${memberCount}), yasal eşik olan 2.000 kişiyi aşmaktadır (Yön. m. 15/1-b).`);
      }

      // Zorunlu Eğitim Değerlendirmesi
      let trainingRequired = false;
      const trainingReasons = [];

      if (coopType === "eskkk" || coopType === "tarim_kredi") {
        trainingRequired = true;
        trainingReasons.push("Kredi/kefalet ve satış kooperatifi olması sebebiyle organ üyeleri için zorunludur.");
      }
      if ((coopType === "yapi" || coopType === "ulasim") && memberCount >= 50) {
        trainingRequired = true;
        trainingReasons.push(`Yapı veya motorlu taşıyıcılar kooperatifi olup ortak sayısı (${memberCount}) 50 eşiğini aşmaktadır.`);
      }
      if (revenue >= 20000000) {
        trainingRequired = true;
        trainingReasons.push(`Yıllık net satış hasılatı (${revenue.toLocaleString('tr-TR')} TL), 20 Milyon TL eğitim sınırını aşmaktadır.`);
      }
      if (memberCount >= 1000) {
        trainingRequired = true;
        trainingReasons.push(`Ortak sayısı (${memberCount}), 1.000 ortak eşiğini aşmaktadır.`);
      }

      // KOOPBİS Seviyesi
      const koopbisLevel = auditRequired ? "Seviye 2 (Dış Denetçi Raporu ve Finansal Tablo Entegrasyonu Zorunlu)" : "Seviye 1 (Standart Yönetim & Hazirun Veri Girişi)";

      resultPanel.style.display = "block";
      resultPanel.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--wiki-border-light); padding-bottom: 12px; margin-bottom: 16px;">
          <h3 style="margin: 0; color: var(--wiki-text);">📊 Teşhis ve Yasal Uyum Raporu</h3>
          <button id="btn-copy-audit-report" class="wiki-btn-icon" style="font-size: 12px; padding: 4px 10px;">📋 Raporu Kopyala</button>
        </div>

        <div style="margin-bottom: 16px; padding: 12px; border-radius: 6px; background: ${auditRequired ? 'rgba(239, 68, 68, 0.12)' : 'rgba(34, 197, 94, 0.12)'}; border-left: 4px solid ${auditRequired ? '#ef4444' : '#22c55e'};">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <strong style="font-size: 15px;">1. Dış Denetim Durumu:</strong>
            <span class="wiki-badge ${auditRequired ? 'wiki-badge-danger' : 'wiki-badge-success'}">${auditRequired ? 'DIŞ DENETİME TABİ' : 'DIŞ DENETİMDEN MUAF'}</span>
          </div>
          <div style="margin-top: 8px; font-size: 13px; line-height: 1.5;">
            ${auditRequired 
              ? `<ul style="margin-left: 20px; color: ${document.documentElement.getAttribute('data-theme') === 'dark' ? '#fca5a5' : '#b91c1c'};">${auditReasons.map(r => `<li>${r}</li>`).join('')}</ul>
                 <p style="margin-top: 6px; font-weight: 600;">⚖️ Yaptırım: Dış denetim yaptırılmadan genel kurula sunulan bilanço hükümsüzdür. Yöneticiler TCK m. 257 kapsamında görevi kötüye kullanma suçundan yargılanır.</p>
                 <p style="margin-top: 4px; font-size: 12px; color: var(--wiki-text-muted);">Standart: KGK SBDS 2400 kıyasen uygulanır. Yetkili: SMMM/YMM Bağımsız Denetçi veya Üst Birlik Dış Denetçisi.</p>`
              : `<p style="color: ${document.documentElement.getAttribute('data-theme') === 'dark' ? '#86efac' : '#15803d'};">Mevcut kriterlerinize göre dış denetim zorunluluğu bulunmamaktadır. Kooperatif içi denetim kurulu raporu yeterlidir.</p>`
            }
          </div>
        </div>

        <div style="margin-bottom: 16px; padding: 12px; border-radius: 6px; background: ${trainingRequired ? 'rgba(245, 158, 11, 0.12)' : 'rgba(34, 197, 94, 0.12)'}; border-left: 4px solid ${trainingRequired ? '#f59e0b' : '#22c55e'};">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <strong style="font-size: 15px;">2. Zorunlu Kooperatifçilik Eğitimi:</strong>
            <span class="wiki-badge ${trainingRequired ? 'wiki-badge-warning' : 'wiki-badge-success'}">${trainingRequired ? '40 SAAT EĞİTİM ZORUNLU' : 'EĞİTİMDEN MUAF'}</span>
          </div>
          <div style="margin-top: 8px; font-size: 13px; line-height: 1.5;">
            ${trainingRequired
              ? `<ul style="margin-left: 20px; color: ${document.documentElement.getAttribute('data-theme') === 'dark' ? '#fde68a' : '#b45309'};">${trainingReasons.map(r => `<li>${r}</li>`).join('')}</ul>
                 <p style="margin-top: 6px; font-weight: 600;">⚠️ Önemli Kural: Yönetim ve Denetim Kurulu asıl üyeleri seçildikten itibaren 9 ay içinde eğitimi tamamlamalıdır. Hukuk/İktisat fakültesi diploması veya SMMM unvanı MUAFİYET SAĞLAMAZ. Tamamlamayanların üyeliği kendiliğinden düşer.</p>`
              : `<p style="color: ${document.documentElement.getAttribute('data-theme') === 'dark' ? '#86efac' : '#15803d'};">Mevcut ciro ve ortak sayınıza göre yöneticileriniz için 40 saatlik eğitim şartı aranmamaktadır.</p>`
            }
          </div>
        </div>

        <div style="padding: 12px; border-radius: 6px; background: var(--wiki-surface); border: 1px solid var(--wiki-border-light);">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <strong style="font-size: 14px;">3. KOOPBİS Yetkilendirme ve Veri Sorumluluğu:</strong>
            <span class="wiki-badge wiki-badge-info">${koopbisLevel}</span>
          </div>
          <p style="margin-top: 6px; font-size: 13px; color: var(--wiki-text-muted);">
            Tüm ortak bilgileri, yönetim kurulu kararları ve genel kurul hazirun cetvelleri KOOPBİS üzerinden yürütülmelidir. 7511 sayılı Kanun intibak süresi (26 Ekim 2026) takibi zorunludur.
          </p>
        </div>
      `;

      const copyAuditBtn = document.getElementById("btn-copy-audit-report");
      if (copyAuditBtn) {
        copyAuditBtn.addEventListener("click", () => {
          const text = `KOOPERATİF YASAL UYUM VE DENETİM TEŞHİS RAPORU\n` +
            `- Dış Denetim Durumu: ${auditRequired ? 'TABİ (ZORUNLU)' : 'MUAF'}\n` +
            (auditReasons.length ? `  Gerekçeler: ${auditReasons.join('; ')}\n` : '') +
            `- 40 Saatlik Zorunlu Eğitim: ${trainingRequired ? 'ZORUNLU (9 Ay Süre)' : 'MUAF'}\n` +
            (trainingReasons.length ? `  Gerekçeler: ${trainingReasons.join('; ')}\n` : '') +
            `- KOOPBİS Seviyesi: ${koopbisLevel}\n` +
            `- İntibak Son Tarihi: 26 Ekim 2026 (7511 SK)`;
          navigator.clipboard.writeText(text).then(() => {
            copyAuditBtn.textContent = "✅ Kopyalandı!";
            setTimeout(() => { copyAuditBtn.textContent = "📋 Raporu Kopyala"; }, 2000);
          });
        });
      }
    });
  }

  // 2. Genel Kurul Takvim Hesaplayıcı
  const btnGk = document.getElementById("btn-calc-gk-timeline");
  const gkDateInput = document.getElementById("gk-date");
  if (gkDateInput && !gkDateInput.value) {
    const defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() + 60);
    gkDateInput.value = defaultDate.toISOString().split("T")[0];
  }

  if (btnGk) {
    btnGk.addEventListener("click", () => {
      const val = (document.getElementById("gk-date") || {}).value;
      if (!val) return;
      const targetDate = new Date(val);
      const resultPanel = document.getElementById("gk-timeline-result");

      const formatDate = (d) => d.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric", weekday: "long" });
      const addDays = (d, days) => {
        const copy = new Date(d);
        copy.setDate(copy.getDate() + days);
        return copy;
      };

      const datePttCall = addDays(targetDate, -30);
      const dateRepPetition = addDays(targetDate, -15);
      const dateFinancialAudit = addDays(targetDate, -15);
      const dateKoopbisLock = addDays(targetDate, -3);
      const dateRegistration = addDays(targetDate, 30);

      resultPanel.style.display = "block";
      resultPanel.innerHTML = `
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 8px; margin-bottom: 14px;">
          <h3 style="margin: 0;">🗓️ Genel Kurul Yasal Çağrı ve Süreç Takvimi</h3>
          <div style="display: flex; gap: 8px;">
            <button id="btn-copy-timeline" class="wiki-btn-icon" style="font-size: 12px; padding: 4px 10px;">📋 Kopyala</button>
            <button id="btn-download-ics" class="wiki-btn-icon" style="font-size: 12px; padding: 4px 10px;">📅 Takvimi .ICS (iCal) Olarak İndir</button>
          </div>
        </div>

        <div class="wiki-timeline">
          <div class="wiki-timeline-step" style="border-left-color: #ef4444;">
            <div class="wiki-timeline-date">${formatDate(datePttCall)}</div>
            <div class="wiki-timeline-content">
              <strong>📮 Çağrı Mektuplarının PTT'ye Teslim Edileceği Son Gün (En Az 30 Gün Önce)</strong><br>
              1163 SK m. 45 gereği tüm ortaklara taahhütlü mektup gönderilmelidir. Bu tarihten sonra yapılan bildirimler genel kurulun iptali (mutlak butlan) sonucunu doğurur.
            </div>
          </div>

          <div class="wiki-timeline-step" style="border-left-color: #f59e0b;">
            <div class="wiki-timeline-date">${formatDate(dateRepPetition)}</div>
            <div class="wiki-timeline-content">
              <strong>🏛️ Bakanlık Temsilcisi Başvuru Son Günü (En Az 15 Gün Önce)</strong><br>
              Valilik / Ticaret veya Tarım İl Müdürlüğü'ne harç makbuzu, gündem ve çağrı örneği ile resmi talep dilekçesi verilmelidir (1163 SK Ek m. 3).
            </div>
          </div>

          <div class="wiki-timeline-step" style="border-left-color: #3b82f6;">
            <div class="wiki-timeline-date">${formatDate(dateFinancialAudit)}</div>
            <div class="wiki-timeline-content">
              <strong>📑 Bilanço, Gelir Tablosu ve Denetim Raporlarının Ortaklara Açılması</strong><br>
              Mali tablolar, yönetim ve denetim raporları kooperatif merkezinde ve varsa internet sitesinde ortakların tetkikine hazır bulundurulmalıdır.
            </div>
          </div>

          <div class="wiki-timeline-step" style="border-left-color: #8b5cf6;">
            <div class="wiki-timeline-date">${formatDate(dateKoopbisLock)}</div>
            <div class="wiki-timeline-content">
              <strong>💻 KOOPBİS Hazirun Cetvelinin Alınması ve Mühürlenmesi</strong><br>
              Ortaklar listesi doğrudan KOOPBİS üzerinden sistem çıktısı olarak üretilmeli ve toplantı günü Bakanlık temsilcisine onaylatılmalıdır.
            </div>
          </div>

          <div class="wiki-timeline-step" style="border-left-color: #10b981; background: var(--wiki-surface);">
            <div class="wiki-timeline-date" style="color: #10b981; font-size: 15px;">🎯 ${formatDate(targetDate)}</div>
            <div class="wiki-timeline-content">
              <strong style="color: #10b981; font-size: 15px;">🏁 GENEL KURUL TOPLANTI GÜNÜ</strong><br>
              Yoklama, divan seçimi, raporların okunması, ibra oylaması ve yeni organ seçimleri icra edilir.
            </div>
          </div>

          <div class="wiki-timeline-step" style="border-left-color: #6b7280;">
            <div class="wiki-timeline-date">${formatDate(dateRegistration)}</div>
            <div class="wiki-timeline-content">
              <strong>📢 Ticaret Siciline Tescil ve İlan Son Tarihi (En Geç 1 Ay İçinde)</strong><br>
              Alınan genel kurul kararları, divan tutanağı ve yeni yönetim kurulu yetki dağılımı Ticaret Sicil Müdürlüğü'ne tescil ettirilmelidir (1163 SK m. 52).
            </div>
          </div>
        </div>
      `;

      const copyBtn = document.getElementById("btn-copy-timeline");
      if (copyBtn) {
        copyBtn.addEventListener("click", () => {
          const text = `GENEL KURUL SÜREÇ TAKVİMİ (${formatDate(targetDate)}):\n` +
            `- Çağrı Mektupları PTT Son Gün: ${formatDate(datePttCall)}\n` +
            `- Bakanlık Temsilcisi Dilekçe Son Gün: ${formatDate(dateRepPetition)}\n` +
            `- Raporların Tetkike Açılması: ${formatDate(dateFinancialAudit)}\n` +
            `- KOOPBİS Hazirun Çekim: ${formatDate(dateKoopbisLock)}\n` +
            `- GENEL KURUL GÜNÜ: ${formatDate(targetDate)}\n` +
            `- Tescil ve İlan Son Gün: ${formatDate(dateRegistration)}`;
          navigator.clipboard.writeText(text).then(() => {
            copyBtn.textContent = "✅ Kopyalandı!";
            setTimeout(() => { copyBtn.textContent = "📋 Kopyala"; }, 2000);
          });
        });
      }

      const icsBtn = document.getElementById("btn-download-ics");
      if (icsBtn) {
        icsBtn.addEventListener("click", () => {
          const formatIcsDate = (d) => {
            const y = d.getFullYear();
            const m = String(d.getMonth() + 1).padStart(2, "0");
            const day = String(d.getDate()).padStart(2, "0");
            return `${y}${m}${day}`;
          };
          const events = [
            { title: "PTT Cagrı Mektuplari Son Gun", date: datePttCall, desc: "Ortaklara taahhutlu mektuplarin postaya verilecegi son gun (1163 SK m. 45)" },
            { title: "Bakanlik Temsilcisi Dilekce Son Gun", date: dateRepPetition, desc: "Ticaret/Tarim Il Mudurlugune basvuru son gun (1163 SK Ek m. 3)" },
            { title: "Mali Tablolarin Tetkike Acilmasi", date: dateFinancialAudit, desc: "Rapor ve bilancolarin ortaklarin incelemesine acilmasi" },
            { title: "KOOPBIS Hazirun Cetveli Cekimi", date: dateKoopbisLock, desc: "Toplanti hazirun listesinin KOOPBIS uzerinden alinmasi" },
            { title: "GENEL KURUL TOPLANTI GUNU", date: targetDate, desc: "Kooperatif Genel Kurul Toplantisi ve Secimler" },
            { title: "Ticaret Siciline Tescil Son Gun", date: dateRegistration, desc: "Kararlarin tescil ve ilani son gunu (1163 SK m. 52)" }
          ];

          let ics = "BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Kooperatif Vikipedi//GK Takvimi//TR\r\nCALSCALE:GREGORIAN\r\n";
          events.forEach((ev, idx) => {
            const dt = formatIcsDate(ev.date);
            ics += `BEGIN:VEVENT\r\nUID:gk-${dt}-${idx}@kooperatifvikipedi\r\nDTSTAMP:${dt}T090000Z\r\nDTSTART;VALUE=DATE:${dt}\r\nDTEND;VALUE=DATE:${dt}\r\nSUMMARY:${ev.title}\r\nDESCRIPTION:${ev.desc}\r\nEND:VEVENT\r\n`;
          });
          ics += "END:VCALENDAR\r\n";

          const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "kooperatif_genel_kurul_takvimi.ics";
          a.click();
          URL.revokeObjectURL(url);
        });
      }
    });
  }

  // 3. Yasal Aidat Faizi Hesaplayıcı
  const btnInterest = document.getElementById("btn-calc-interest");
  const iDueDate = document.getElementById("i-due-date");
  const iPayDate = document.getElementById("i-pay-date");

  if (iDueDate && !iDueDate.value) {
    const d = new Date();
    d.setMonth(d.getMonth() - 6);
    iDueDate.value = d.toISOString().split("T")[0];
  }
  if (iPayDate && !iPayDate.value) {
    iPayDate.value = new Date().toISOString().split("T")[0];
  }

  if (btnInterest) {
    btnInterest.addEventListener("click", () => {
      const principal = parseFloat((document.getElementById("i-principal") || {}).value || "0");
      const d1 = new Date((document.getElementById("i-due-date") || {}).value);
      const d2 = new Date((document.getElementById("i-pay-date") || {}).value);
      const claimedMonthlyRate = parseFloat((document.getElementById("i-claimed-rate") || {}).value || "0");
      const resultPanel = document.getElementById("interest-calc-result");

      if (isNaN(d1.getTime()) || isNaN(d2.getTime()) || d2 <= d1) {
        alert("Lütfen geçerli bir vade tarihi ve bundan ileri bir ödeme tarihi seçiniz.");
        return;
      }

      const diffTime = Math.abs(d2 - d1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const diffMonths = (diffDays / 30);

      // Yasal Sınır: TBK m. 120 (azami 2 katı = aylık %4.0)
      const LEGAL_MONTHLY_MAX = 4.0;
      const isRateExcessive = claimedMonthlyRate > LEGAL_MONTHLY_MAX;
      const appliedMonthlyRate = isRateExcessive ? LEGAL_MONTHLY_MAX : claimedMonthlyRate;

      const legalInterest = (principal * (appliedMonthlyRate / 100) * diffMonths);
      const claimedInterest = (principal * (claimedMonthlyRate / 100) * diffMonths);
      const totalAmount = principal + legalInterest;

      resultPanel.style.display = "block";
      resultPanel.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--wiki-border-light); padding-bottom: 10px; margin-bottom: 14px;">
          <h3 style="margin: 0;">🧮 Faiz ve Yasal Tavan İnceleme Raporu</h3>
          <button id="btn-copy-interest-calc" class="wiki-btn-icon" style="font-size: 12px; padding: 4px 10px;">📋 Raporu Kopyala</button>
        </div>

        ${isRateExcessive ? `
          <div style="padding: 12px; background: rgba(239, 68, 68, 0.12); border-left: 4px solid #ef4444; border-radius: 4px; margin-bottom: 16px;">
            <strong style="color: ${document.documentElement.getAttribute('data-theme') === 'dark' ? '#fca5a5' : '#991b1b'};">⚠️ FAHİŞ FAİZ UYARISI (TBK m. 120 İhlali):</strong><br>
            <span style="font-size: 13px; color: var(--wiki-text);">
              Talep edilen aylık %${claimedMonthlyRate} faiz oranı, Türk Borçlar Kanunu m. 120'de öngörülen yasal tavanı (yıllık yasal faizin azami 2 katı = aylık %${LEGAL_MONTHLY_MAX}) aşmaktadır. 
              <strong>Yargıtay Hukuk Genel Kurulu kararlarına göre aşan kısım mutlak butlanla geçersizdir.</strong> Hesaplama yasal azami tavan olan %${LEGAL_MONTHLY_MAX} üzerinden yapılmıştır.
            </span>
          </div>
        ` : `
          <div style="padding: 12px; background: rgba(34, 197, 94, 0.12); border-left: 4px solid #22c55e; border-radius: 4px; margin-bottom: 16px;">
            <strong style="color: ${document.documentElement.getAttribute('data-theme') === 'dark' ? '#86efac' : '#166534'};">✅ YASAL SINIRLAR DAHİLİNDE:</strong><br>
            <span style="font-size: 13px; color: var(--wiki-text);">
              Talep edilen aylık %${claimedMonthlyRate} faiz oranı TBK m. 120'deki yasal tavanı aşmamaktadır.
            </span>
          </div>
        `}

        <table class="wiki-table" style="width: 100%; margin-top: 10px;">
          <tr><td><strong>Asıl Alacak Tutarı (Aidat):</strong></td><td style="font-weight: 700;">${principal.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL</td></tr>
          <tr><td><strong>Gecikme Süresi:</strong></td><td>${diffDays} Gün (~${diffMonths.toFixed(1)} Ay)</td></tr>
          <tr><td><strong>Uygulanan Aylık Yasal Faiz Oranı:</strong></td><td>%${appliedMonthlyRate.toFixed(2)}</td></tr>
          <tr><td><strong>Hesaplanan Yasal Faiz Tutarı:</strong></td><td style="color: #ef4444; font-weight: 700;">${legalInterest.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL</td></tr>
          ${isRateExcessive ? `<tr><td><strong>Geçersiz (İptal Edilen) Fazla Faiz:</strong></td><td style="color: #9ca3af; text-decoration: line-through;">${(claimedInterest - legalInterest).toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL</td></tr>` : ''}
          <tr style="background: var(--wiki-surface); font-size: 15px;"><td><strong>TOPLAM TAHSİL EDİLEBİLİR ALACAK:</strong></td><td style="color: var(--wiki-link); font-weight: 800;">${totalAmount.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL</td></tr>
        </table>
      `;

      const copyInterestBtn = document.getElementById("btn-copy-interest-calc");
      if (copyInterestBtn) {
        copyInterestBtn.addEventListener("click", () => {
          const report = `AİDAT GECİKME FAİZİ HESAPLAMA RAPORU (TBK m. 120)\n` +
            `- Asıl Alacak: ${principal.toLocaleString('tr-TR')} TL\n` +
            `- Gecikme: ${diffDays} Gün (~${diffMonths.toFixed(1)} Ay)\n` +
            `- Talep Edilen Oran: Aylık %${claimedMonthlyRate}\n` +
            `- Yasal Azami Oran: Aylık %${appliedMonthlyRate.toFixed(2)}\n` +
            `- Hesaplanan Yasal Faiz: ${legalInterest.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL\n` +
            (isRateExcessive ? `- İptal Edilen Fahiş Faiz: ${(claimedInterest - legalInterest).toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL\n` : '') +
            `- TOPLAM ALACAK: ${totalAmount.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL`;
          navigator.clipboard.writeText(report).then(() => {
            copyInterestBtn.textContent = "✅ Kopyalandı!";
            setTimeout(() => { copyInterestBtn.textContent = "📋 Raporu Kopyala"; }, 2000);
          });
        });
      }
    });
  }

  // 4. Bakanlık Temsilcisi Dilekçe Üretici
  const btnRepPetition = document.getElementById("btn-generate-rep-petition");
  if (btnRepPetition) {
    btnRepPetition.addEventListener("click", () => {
      const ministry = (document.getElementById("p-ministry") || {}).value || "ticaret";
      const city = ((document.getElementById("p-city") || {}).value || "ANKARA").toUpperCase();
      const coopName = ((document.getElementById("p-coop-name") || {}).value || "S.S. KOOPERATİFİ").toUpperCase();
      const regNo = (document.getElementById("p-reg-no") || {}).value || "";
      const mDate = (document.getElementById("p-meeting-date") || {}).value || "";
      const mPlace = (document.getElementById("p-meeting-place") || {}).value || "";
      const output = document.getElementById("petition-rep-output");

      let dirName = "TİCARET İL MÜDÜRLÜĞÜ'NE";
      if (ministry === "tarim") dirName = "TARIM VE ORMAN İL MÜDÜRLÜĞÜ'NE";
      if (ministry === "cevre") dirName = "ÇEVRE, ŞEHİRCİLİK VE İKLİM DEĞİŞİKLİĞİ İL MÜDÜRLÜĞÜ'NE";

      const text = `T.C.\n${city} VALİLİĞİ\n${dirName}\n${city}\n\n` +
        `KONU: Kooperatifimiz Genel Kurul Toplantısına Bakanlık Temsilcisi Görevlendirilmesi Talebi hk.\n\n` +
        `KOOPERATİF UNVANI : ${coopName}\n` +
        `TİCARET SİCİL / MERSİS : ${regNo}\n\n` +
        `Kooperatifimiz Yönetim Kurulu'nun almış olduğu karar uyarınca, 1163 sayılı Kooperatifler Kanunu ve Anasözleşmemiz hükümleri dairesinde aşağıda belirtilen gün, saat ve adreste Olağan Genel Kurul toplantısı icra edilecektir:\n\n` +
        `Toplantı Tarihi ve Saati : ${mDate}\n` +
        `Toplantı Adresi : ${mPlace}\n\n` +
        `1163 sayılı Kooperatifler Kanunu'nun Ek 3. maddesi gereğince toplantımızda hazır bulunmak üzere bir Bakanlık Temsilcisi (Hükümet Komiseri) görevlendirilmesini saygılarımızla arz ve talep ederiz.\n\n` +
        `EK-1: Yönetim Kurulu Genel Kurul Çağrı Kararı Örneği\n` +
        `EK-2: Genel Kurul Gündemi\n` +
        `EK-3: Bakanlık Temsilcisi Ücreti Yatırıldı Banka Dekontu\n` +
        `EK-4: İmza Sirküleri Sureti\n\n` +
        `${coopName}\nYÖNETİM KURULU`;

      output.style.display = "block";
      output.innerHTML = `
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 8px; margin-bottom: 8px;">
          <strong>📄 Resmi Dilekçe Metni (A4 Formatı):</strong>
          <div style="display: flex; gap: 6px;">
            <button id="btn-copy-rep-pet" class="wiki-btn-icon" style="font-size: 12px; padding: 4px 10px;">📋 Kopyala</button>
            <button id="btn-print-rep-pet" class="wiki-btn-icon" style="font-size: 12px; padding: 4px 10px;">🖨️ Yazdır / PDF</button>
            <button id="btn-download-rep-pet" class="wiki-btn-icon" style="font-size: 12px; padding: 4px 10px;">📥 .TXT İndir</button>
          </div>
        </div>
        <div class="wiki-doc-preview" id="preview-rep-pet">${text}</div>
      `;

      const copyBtn = document.getElementById("btn-copy-rep-pet");
      if (copyBtn) {
        copyBtn.addEventListener("click", () => {
          navigator.clipboard.writeText(text).then(() => {
            copyBtn.textContent = "✅ Panoya Kopyalandı!";
            setTimeout(() => { copyBtn.textContent = "📋 Kopyala"; }, 2000);
          });
        });
      }

      const printBtn = document.getElementById("btn-print-rep-pet");
      if (printBtn) {
        printBtn.addEventListener("click", () => {
          printFormattedDoc(text, "Bakanlik_Temsilcisi_Talep_Dilekcesi");
        });
      }

      const dlBtn = document.getElementById("btn-download-rep-pet");
      if (dlBtn) {
        dlBtn.addEventListener("click", () => {
          downloadDocTxt(text, "bakanlik_temsilcisi_talep_dilekcesi.txt");
        });
      }
    });
  }

  // 5. İhraç İhtarnamesi Üretici
  const btnExpNotice = document.getElementById("btn-generate-exp-notice");
  if (btnExpNotice) {
    btnExpNotice.addEventListener("click", () => {
      const stage = (document.getElementById("exp-stage") || {}).value || "first";
      const memberName = (document.getElementById("exp-member-name") || {}).value || "";
      const debtDetail = (document.getElementById("exp-debt-detail") || {}).value || "";
      const iban = (document.getElementById("exp-iban") || {}).value || "";
      const output = document.getElementById("exp-notice-output");

      const title = stage === "first" ? "BİRİNCİ İHTARNAME" : "İKİNCİ (SON) İHTARNAME VE İHRAÇ İHTARI";
      const legalWarning = stage === "first" 
        ? "İşbu ihtarnamenin tarafınıza tebliğ edildiği tarihten itibaren EN GEÇ 1 (BİR) AY içinde yukarıda dökümü yapılan aidat ve yasal gecikme faizi borcunuzu ödemeniz, aksi takdirde 1163 sayılı Kanun m. 16 gereğince ikinci ihtarname keşide edileceği ihtar olunur."
        : "İşbu ikinci ihtarnamenin tarafınıza tebliğ edildiği tarihten itibaren EN GEÇ 1 (BİR) AY içinde borcunuzu ödemediğiniz takdirde, 1163 sayılı Kanun'un 16. maddesi ve Anasözleşmemiz hükümleri gereğince YÖNETİM KURULU KARARIYLA KOOPERATİF ORTAKLIĞINDAN İHRAÇ EDİLECEĞİNİZ hususu kesin ve son olarak İHTAR OLUNUR.";

      const text = `${title}\n\n` +
        `KEŞİDECİ (ALACAKLI) : S.S. KOOPERATİFİ YÖNETİM KURULU\n` +
        `MUHATAP (BORÇLU)     : ${memberName}\n` +
        `KONU                : 1163 Sayılı Kooperatifler Kanunu m. 16 Uyarınca Ödenmemiş Aidat Borçlarının Ödenmesi ve İhraç İhtarı.\n\n` +
        `Sayın Ortak;\n` +
        `Kooperatifimiz ortaklar defterinde kayıtlı bulunmaktasınız. Yapılan hesap ve defter tetkikinde;\n\n` +
        `GECİKEN BORÇ DÖKÜMÜ:\n${debtDetail}\n\n` +
        `tutarındaki anapara aidat ve yasal sınırları aşmayan faiz borcunuzu vadesinde ödemediğiniz tespit edilmiştir.\n\n` +
        `${legalWarning}\n\n` +
        `Ödemenin kooperatifimizin ${iban} numaralı resmi banka hesabına, açıklama kısmına ad-soyad ve borç dönemi yazılarak yapılması; ayrıca işbu noter ihtar masrafının da tarafınızdan karşılanması gerektiği bilvekale ihtar olunur.\n\n` +
        `KEŞİDECİ KOOPERATİF\nYÖNETİM KURULU`;

      output.style.display = "block";
      output.innerHTML = `
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 8px; margin-bottom: 8px;">
          <strong>📜 Noter İhtarnamesi Metni (1163 SK m. 16 Tam Uyumlu):</strong>
          <div style="display: flex; gap: 6px;">
            <button id="btn-copy-exp-notice" class="wiki-btn-icon" style="font-size: 12px; padding: 4px 10px;">📋 Kopyala</button>
            <button id="btn-print-exp-notice" class="wiki-btn-icon" style="font-size: 12px; padding: 4px 10px;">🖨️ Yazdır / PDF</button>
            <button id="btn-download-exp-notice" class="wiki-btn-icon" style="font-size: 12px; padding: 4px 10px;">📥 .TXT İndir</button>
          </div>
        </div>
        <div class="wiki-doc-preview" id="preview-exp-notice">${text}</div>
      `;

      const copyBtn = document.getElementById("btn-copy-exp-notice");
      if (copyBtn) {
        copyBtn.addEventListener("click", () => {
          navigator.clipboard.writeText(text).then(() => {
            copyBtn.textContent = "✅ Panoya Kopyalandı!";
            setTimeout(() => { copyBtn.textContent = "📋 Kopyala"; }, 2000);
          });
        });
      }

      const printBtn = document.getElementById("btn-print-exp-notice");
      if (printBtn) {
        printBtn.addEventListener("click", () => {
          printFormattedDoc(text, "Noter_Ihrac_Ihtarnamesi");
        });
      }

      const dlBtn = document.getElementById("btn-download-exp-notice");
      if (dlBtn) {
        dlBtn.addEventListener("click", () => {
          downloadDocTxt(text, "noter_ihrac_ihtarnamesi.txt");
        });
      }
    });
  }
}

function printFormattedDoc(text, title) {
  const printWin = window.open("", "_blank");
  if (!printWin) {
    alert("Yazdırma penceresi açılamadı. Lütfen açılır pencerelere izin veriniz.");
    return;
  }
  printWin.document.write(`
    <!DOCTYPE html>
    <html lang="tr">
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
      <style>
        body {
          font-family: 'Times New Roman', Times, serif;
          font-size: 12pt;
          line-height: 1.6;
          margin: 30mm 25mm 25mm 25mm;
          color: #000;
          background: #fff;
        }
        pre {
          white-space: pre-wrap;
          font-family: inherit;
          margin: 0;
        }
        @media print {
          @page { margin: 25mm; }
        }
      </style>
    </head>
    <body>
      <pre>${text.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>
      <script>
        window.onload = function() {
          window.print();
        };
      <\/script>
    </body>
    </html>
  `);
  printWin.document.close();
}

function downloadDocTxt(text, filename) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// ================= TERİMLER SÖZLÜĞÜ ARAMA MOTORU =================
function initGlossaryEngine() {
  const filterInput = document.getElementById("glossary-filter-input");
  if (!filterInput) return;

  filterInput.addEventListener("input", () => {
    const q = filterInput.value.trim().toLowerCase();
    const items = document.querySelectorAll(".wiki-glossary-item");
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(q) ? "block" : "none";
    });
  });
}

// ================= ÖRNEK ANASÖZLEŞMELER METİN BANKASI =================
const BYLAWS_TEXTS = {
  konut_yapi: `S.S. ................................................. KONUT YAPI KOOPERATİFİ ANASÖZLEŞMESİ
(1163 Sayılı Kooperatifler Kanunu, 7339 ve 7579 Sayılı Kanun Hükümlerine Uyarlanmış Örnek Tip Anasözleşme)

BÖLÜM I: KURULUŞ, UNVAN, MERKEZ VE SÜRE
Madde 1 - Kuruluş: Bu anasözleşmede adları, soyadları, T.C. kimlik numaraları ve yerleşim yerleri yazılı kurucular tarafından 1163 sayılı Kooperatifler Kanunu hükümlerine göre değişir ortaklı ve değişir sermayeli bir Konut Yapı Kooperatifi kurulmuştur.
Madde 2 - Unvan: Kooperatifin unvanı "Sınırlı Sorumlu ................................................. Konut Yapı Kooperatifi"dir.
Madde 3 - Merkez: Kooperatifin merkezi ................................................. ilindedir.
Madde 4 - Süre: Kooperatifin süresi kuruluşunun ticaret siciline tescil edildiği tarihten itibaren ..... yıldır. Ancak bu süre Genel Kurul kararı ve Bakanlık izni ile uzatılabilir veya kısaltılabilir.

BÖLÜM II: AMAÇ VE ÇALIŞMA KONULARI
Madde 5 - Amaç: Kooperatifin amacı; ortaklarının konut ihtiyaçlarını karşılamak, sağlıklı, güvenli ve fen kurallarına uygun meskenler inşa etmek veya ettirmek ve bu amaçla arsa/arazi temin etmektir.
Madde 6 - Çalışma Konuları:
1. İmar planlarına uygun arsa ve arazi satın alır, parselasyon, ifraz ve tevhit işlemlerini yürütür.
2. Ortakları için konut inşa eder, taşeronluk veya anahtar teslimi yapım ihaleleri düzenler.
3. Altyapı, çevre düzenlemesi, yol, su, kanalizasyon ve elektrik tesisatlarını kurar veya kurdurur.
4. ÖNEMLİ YASAL KISITLAMA (7579 SK): Yapı kullanma izin belgesi (iskan) alınmadan bağımsız bölümlerin ortaklar adına tapuda devri yapılamaz; noter satış vaadi veya harici hisse devri yoluyla mülkiyet aktarılamaz.
5. Mahalli idarelerin kooperatife ortak olması veya arsa tahsis etmesi Cumhurbaşkanı iznine tabidir (1163 SK Ek m. 6).

BÖLÜM III: SERMAYE VE PAYLAR
Madde 7 - Sermaye: Kooperatifin sermayesi değişkendir ve ortakların taahhüt ettikleri payların toplamından oluşur.
Madde 8 - Paylar: Bir ortaklık payının değeri 100 (yüz) Türk Lirası'dır. Her ortak en az 1 pay taahhüt etmek zorundadır. Ortaklar eşit oranda konut edinme hakkına ve mali katılım yükümlülüğüne sahiptir.
Madde 9 - Pay Devri: Ortaklık payı, yönetim kurulunun yazılı onayı ile diğer bir ortağa veya ortaklık şartlarını taşıyan üçüncü bir kişiye devredilebilir.

BÖLÜM IV: ORTAKLIK SIFATININ KAZANILMASI VE KAYBEDİLMESİ
Madde 10 - Ortak Olma Şartları: Medeni hakları kullanma ehliyetine sahip olmak ve aynı kooperatifte başka bir ortaklık payı üzerinde konut tahsis hakkı bulunmamak.
Madde 11 - Ortaklıktan Çıkma (İstifa): Her ortak, hesap dönemi sonundan en az 6 ay önce yönetim kuruluna yazılı bildirimde bulunarak ortaklıktan çıkabilir.
Madde 12 - Ortaklıktan Çıkarılma (İhraç - 1163 SK m. 16):
Ortakların parasal yükümlülüklerini yerine getirmemeleri halinde ihraç prosedürü:
a) Aidat borcunu vadesinde ödemeyen ortağa, en az 1'er aylık süre verilerek noter aracılığıyla 2 ayrı ihtarname gönderilir.
b) İkinci ihtarnamenin tebliğinden itibaren 1 ay içinde borç ödenmezse Yönetim Kurulu kararıyla ihraç edilir.
c) İhraç kararı ortağa noterden tebliğ edilir; ortağın 3 ay içinde Asliye Ticaret Mahkemesinde iptal davası açma hakkı saklıdır.

BÖLÜM V: GENEL KURUL
Madde 13 - Görev ve Yetkiler: Genel kurul, bütün ortakların katılımıyla toplanan en yetkili organdır. Bilanço, gelir-gider farkı hesapları, yönetim ve denetim kurullarının ibrası, gayrimenkul alım-satım sınırlarının belirlenmesi ve ihraç itirazları genel kurulun devredilemez yetkilerindendir.
Madde 14 - Toplantı Zamanı ve Çağrı: Olağan genel kurul, hesap dönemini takip eden ilk 6 ay içinde (Ocak-Haziran) toplanır. Çağrı, toplantıdan EN AZ 30 GÜN ÖNCE taahhütlü mektupla ve KOOPBİS sistemi üzerinden yapılır.
Madde 15 - Bakanlık Temsilcisi Şartı: Genel kurul toplantılarında 1163 sayılı Kanun Ek m. 3 uyarınca Bakanlık Temsilcisinin hazır bulunması şarttır. Temsilcisiz genel kurullar hükümsüzdür.
Madde 16 - Hazirun Listesi: Toplantıya katılacak ortaklar cetveli doğrudan KOOPBİS sistemi üzerinden üretilir.

BÖLÜM VI: YÖNETİM KURULU
Madde 17 - Seçimi ve Süresi: Genel kurulca ortaklar arasından en az 3 asıl, 3 yedek üye olarak en fazla 4 yıl için seçilir.
Madde 18 - Zorunlu Kooperatifçilik Eğitimi: Ortak sayısı 50 ve üzeri olan yapı kooperatiflerinde Yönetim Kurulu üyeleri, seçimden itibaren 9 AY İÇİNDE 40 saatlik zorunlu kooperatifçilik eğitimini tamamlamak zorundadır. Eğitimi tamamlamayanların üyeliği kendiliğinden düşer.
Madde 19 - KOOPBİS Yükümlülüğü: Yönetim kurulu, ortaklık bilgilerini, mali tabloları ve genel kurul kararlarını KOOPBİS'e eksiksiz işlemekle yükümlüdür (TCK m. 257 adli sorumluluğu).

BÖLÜM VII: DENETİM KURULU VE DIŞ DENETİM
Madde 20 - Denetim Kurulu: Genel kurulca en az 2 asıl, 2 yedek üye olarak seçilir.
Madde 21 - Dış Denetim: Yapı ruhsatı alınmış ve 100 veya üzeri ortağı bulunan kooperatiflerde finansal tablolar, bağımsız dış denetçi tarafından KGK SBDS 2400 standardına göre incelenmek zorundadır. Rapor genel kurula sunulmadan ibra yapılamaz.

BÖLÜM VIII: DAĞILMA VE TASFİYE
Madde 22 - Dağılma Sebepleri: Konutların tamamlanıp kat mülkiyeti tapularının tescili, genel kurulun 2/3 oyu ile tasfiye kararı veya intibak süresinin (26 Ekim 2026) kaçırılması.
Madde 23 - Tasfiye Usulü: TTSG'de birer hafta arayla 3 defa alacaklılara çağrı yapılır. 3. ilandan itibaren 6 aylık yasal bekleme süresi geçmedikçe kalan malvarlığı dağıtılamaz. Defterler TTK m. 82 uyarınca 10 yıl saklanır.`,

  kadin_girisimi: `S.S. ................................................. KADIN GİRİŞİMİ ÜRETİM VE İŞLETME KOOPERATİFİ ANASÖZLEŞMESİ
(Ticaret Bakanlığı Onaylı Tip Anasözleşme - KOOP-DES ve Belediye Protokolleri Uyumlu)

BÖLÜM I: KURULUŞ, UNVAN VE MERKEZ
Madde 1 - Kuruluş: Kadın emeğinin değerlendirilmesi, kadınların ekonomik ve sosyal hayata katılımının artırılması amacıyla 1163 sayılı Kooperatifler Kanunu hükümlerine göre kurulmuştur.
Madde 2 - Unvan: "Sınırlı Sorumlu ................................................. Kadın Girişimi Üretim ve İşletme Kooperatifi"dir.
Madde 3 - Merkez: Kooperatifin merkezi ................................................. ilidir.

BÖLÜM II: AMAÇ VE ÇALIŞMA KONULARI
Madde 4 - Amaç: Ortaklarının ekonomik, mesleki ve sosyal menfaatlerini korumak; ortakların ürettiği el sanatları, tarımsal gıda, tekstil, sanayi ve hizmet ürünlerini pazarlamak, kadın istihdamını desteklemek ve ortaklarına düzenli gelir sağlamaktır.
Madde 5 - Faaliyet Alanları:
1. Üretim atölyeleri, mutfaklar, paketleme ve etiketleme tesisleri kurmak ve işletmek.
2. Ticaret Bakanlığı KOOP-DES hibe programından yararlanarak makine, ekipman ve nitelikli istihdam hibesi temin etmek.
3. 5393 sayılı Belediye Kanunu m. 75 uyarınca yerel yönetimlerle ortak hizmet projeleri yürütmek, satış stantları ve büfe kiralamak.
4. E-ticaret platformları kurmak, ulusal ve uluslararası fuarlarda stant açarak doğrudan satış yapmak.
5. Ortaklarına mesleki eğitim, kooperatifçilik ve finansal okuryazarlık eğitimleri vermek.

BÖLÜM III: ORTAKLIK ŞARTLARI VE SERMAYE
Madde 6 - Ortaklık Şartları: Fiil ehliyetine sahip olmak ve kadın girişimci niteliği taşımak. Kooperatif ortaklarının en az %90'ı kadınlardan oluşur.
Madde 7 - Sermaye ve Paylar: Bir ortaklık payı 100 TL'dir. Ortaklar eşit haklara sahip olup tek oy ilkesi geçerlidir.
Madde 8 - Sermaye Koyma Borcu: Ortaklar taahhüt ettikleri pay bedellerini nakit veya anasözleşmede kabul edilen ayni sermaye olarak ifa ederler.

BÖLÜM IV: VERGİ VE MALİ REJİM (KVK m. 4/1-k)
Madde 9 - Muafiyet Şartları:
Kooperatif, Kurumlar Vergisi Kanunu m. 4/1-k kapsamındaki muafiyet şartlarını korur:
a) Sermaye üzerinden kazanç dağıtılmaz.
b) Yönetim ve denetim organlarına kâr üzerinden hisse verilmez.
c) Yedek akçeler ortaklara paylaştırılamaz.
d) Faaliyetler münhasıran ortaklarla yürütülür; ortak dışı işlemler ayrı bir iktisadi işletme olarak muhasebeleştirilir (7061 SK).
Madde 10 - Risturn: Gelir-gider olumlu farkı, ortakların kooperatife teslim ettikleri ürün veya emek hacmi oranında iade edilir. Bu iade kâr dağıtımı sayılmaz.

BÖLÜM V: ORGANLAR VE YÖNETİM
Madde 11 - Yönetim Kurulu: Ortaklar arasından 3 veya 5 üyeden oluşur, en fazla 4 yıl süreyle seçilir.
Madde 12 - Denetim Kurulu: 2 asıl üyeden oluşur. Yıllık denetim raporu düzenleyerek genel kurula ve KOOPBİS sistemine sunar.
Madde 13 - KOOPBİS Entegrasyonu: Tüm ortaklık hareketleri, genel kurul tutanakları ve mali tablolar KOOPBİS'e tescil edilir.`,

  tarimsal_kalkinma: `S.S. ................................................. TARIMSAL KALKINMA KOOPERATİFİ ANASÖZLEŞMESİ
(Tarım ve Orman Bakanlığı Onaylı Tip Anasözleşme - KKYDP ve IPARD Uyumlu)

BÖLÜM I: KURULUŞ, UNVAN VE ÇALIŞMA BÖLGESİ
Madde 1 - Kuruluş: Tarım ve Orman Bakanlığı izni ile 1163 sayılı Kooperatifler Kanunu hükümlerine göre kurulmuştur.
Madde 2 - Unvan: "Sınırlı Sorumlu ................................................. Tarımsal Kalkınma Kooperatifi"dir.
Madde 3 - Çalışma Bölgesi: ................................................. ili ve ilçesi mülki sınırlarıdır.

BÖLÜM II: AMAÇ VE FAALİYET KONULARI
Madde 4 - Amaç: Ortaklarının tarımsal ve hayvansal üretimini artırmak, verimliliği yükseltmek, ürünlerini doğrudan değerlendirerek aracıları azaltmak ve ortakların gelir seviyesini yükseltmektir.
Madde 5 - Faaliyet Konuları:
1. Ortaklar için kaliteli tohum, fidan, gübre, karma yem, zirai ilaç ve tarım makinelerini toptan temin etmek.
2. Çiğ süt toplama merkezleri, soğuk hava depoları, zeytinyağı sıkım ve hububat eleme-paketleme tesisleri kurmak.
3. Kırsal Kalkınma Yatırımları (KKYDP %50 hibe) ve AB IPARD III fonlarına proje hazırlamak.
4. 5957 sayılı Kanun uyarınca toptancı hallerinde üretici örgütü sıfatıyla doğrudan satış yeri edinmek.
5. HOBİ BAHÇESİ YASAĞI (5403 SK m. 23 & 7584 SK): Kooperatif, tarım arazilerini fiilen bölerek ortaklarına hobi bahçesi olarak tahsis edemez, hisse devri yapamaz. Bu nitelikteki sözleşmeler mutlak butlanla geçersizdir.

BÖLÜM III: ORTAKLIK VE PAYLAR
Madde 6 - Ortak Olma Şartları: Çiftçi Kayıt Sistemi'ne (ÇKS) kayıtlı olmak veya çalışma bölgesinde fiilen tarımsal üretimle iştigal etmek.
Madde 7 - Ürün Teslim Yükümlülüğü: Ortaklar, sözleşmeli tarım ve genel kurul kararları kapsamında ürettikleri ürünlerin belirlenen asgari oranını kooperatife teslim etmekle yükümlüdür.
Madde 8 - Paylar: Bir pay 100 TL'dir. Tarımsal derecelendirmede A ve B sınıfı kooperatif ortakları destekleme primlerinden ilave puan alır.

BÖLÜM IV: RİSTURN VE YEDEK AKÇELER
Madde 9 - Risturn: Ortak içi işlemlerden doğan müspet gelir-gider farkı, ortakların teslim ettiği ürün miktarı ve satın aldığı girdi hacmine göre risturn olarak dağıtılır.
Madde 10 - Fonlar: Net müspet farkın %10'u kanuni yedek akçeye, %5'i tarımsal geliştirme ve eğitim fonuna aktarılır. Yedek akçeler ortaklara paylaştırılamaz.

BÖLÜM V: ORGANLAR VE DENETİM
Madde 11 - Yönetim Kurulu: 5 asıl üyeden oluşur. 20M TL ciro veya 1.000 ortak eşiğini aşarsa yöneticiler 40 saatlik zorunlu eğitimi tamamlamak zorundadır.
Madde 12 - Denetim ve KOOPBİS: Bilanço ve ortaklar cetveli KOOPBİS sistemi üzerinden Bakanlığa bildirilir.`,

  motorlu_tasiyicilar: `S.S. ................................................. MOTORLU TAŞIYICILAR KOOPERATİFİ ANASÖZLEŞMESİ
(Karayolu Taşıma Kanunu ve 1163 SK Uyumlu Tip Anasözleşme)

BÖLÜM I: KURULUŞ, UNVAN VE MERKEZ
Madde 1 - Kuruluş: Karayoluyla yük ve yolcu taşımacılığı yapan esnaf ve sanatkârların güçlerini birleştirmek amacıyla 1163 sayılı Kanuna göre kurulmuştur.
Madde 2 - Unvan: "Sınırlı Sorumlu ................................................. Motorlu Taşıyıcılar Kooperatifi"dir.
Madde 3 - Merkez: ................................................. ilindedir.

BÖLÜM II: AMAÇ VE ÇALIŞMA KONULARI
Madde 4 - Amaç: Ortaklarının karayolu taşımacılık faaliyetlerini koordine etmek, hat, durak ve güzergah düzenini sağlamak, akaryakıt ve yedek parça maliyetlerini düşürmektir.
Madde 5 - Faaliyet Alanları:
1. Ulaştırma ve Altyapı Bakanlığı'ndan ilgili yetki belgelerini (K1, D1, D4 vb.) temin etmek ve ortaklarına kullandırmak.
2. Şehir içi ve şehirlerarası yolcu ve yük taşıma sıralarını (rotasyon) hakkaniyetle düzenlemek.
3. Garaj, terminal, bakım-onarım istasyonu ve akaryakıt pompası kurarak ortakların işletme giderlerini azaltmak.
4. Ortakların araçlarının kasko ve zorunlu trafik sigortalarını havuz indirimiyle yaptırmak.

BÖLÜM III: ORTAKLIK VE ARAÇ ŞARTLARI
Madde 6 - Ortaklık Şartları: Adına kayıtlı ticari taşıtı bulunmak veya hat/plaka tahsis hakkına sahip olmak, SRC ve psikoteknik belgelerine haiz olmak.
Madde 7 - Araç Devri ve Hat Hakkı: Taşıtını devreden ortağın hat ve sıra hakkı yönetim kurulunun onayı ile yeni malike devredilebilir.
Madde 8 - Ortak Sayısı Eşiği: Ortak sayısı 50 ve üzeri olduğunda Yönetim ve Denetim Kurulu asıl üyeleri 9 ay içinde 40 saatlik Zorunlu Kooperatifçilik Eğitimini tamamlamak mecburiyetindedir.

BÖLÜM IV: YÖNETİM VE MALİ REJİM
Madde 9 - Taşıma Gelirlerinin Dağıtımı: Ortak havuz sisteminde toplanan navlun ve bilet gelirleri, yapılan sefer ve kilometre esasına göre hak sahiplerine aktarılır.
Madde 10 - KOOPBİS Bildirimi: Tüm ortak plaka kayıtları ve yetki belgeleri KOOPBİS sistemine işlenir.`,

  sulama: `S.S. ................................................. SULAMA KOOPERATİFİ ANASÖZLEŞMESİ
(Tarım ve Orman Bakanlığı Onaylı Tip Anasözleşme - DSİ ve KKYDP Uyumlu)

BÖLÜM I: KURULUŞ VE AMAÇ
Madde 1 - Kuruluş: 1163 sayılı Kooperatifler Kanunu ve 6172 sayılı Sulama Birlikleri Kanunu ilkeleri dairesinde kurulmuştur.
Madde 2 - Amaç: Çalışma bölgesindeki tarım arazilerinin verimli, planlı ve tasarruflu şekilde sulanmasını sağlamak, yeraltı ve yerüstü su tesislerini işletmek.
Madde 3 - Çalışma Konuları:
1. DSİ veya mülki idarece inşa edilen derin kuyu, pompa istasyonu, baraj ve gölet sulama tesislerini devralıp işletmek.
2. Basınçlı borulu şebeke, damla ve yağmurlama sistemleri kurarak su israfını önlemek.
3. Sulama pompalarının elektrik giderlerini karşılamak üzere Güneş Enerjisi Santrali (GES) yatırımları yapmak.
4. Sayaçlı su kullanım tarifesi belirlemek ve su kullanım bedellerini tahsil etmek.

BÖLÜM II: ORTAKLIK VE SU HAKKI
Madde 4 - Ortaklık Şartları: Sulama sahası içinde tapulu veya kira sözleşmeli tarım arazisine sahip olmak.
Madde 5 - Su Kullanım Yükümlülüğü: Ortaklar kooperatif su dağıtım planına ve münavebe cetveline uymak, su israfından kaçınmakla yükümlüdür.
Madde 6 - Tesislerin Korunması: Sulama kanallarına veya boru hatlarına zarar veren ortaklar zararı tazmin eder ve su hakkı geçici olarak durdurulur.`,

  tuketim: `S.S. ................................................. TÜKETİM KOOPERATİFİ ANASÖZLEŞMESİ
(Ticaret Bakanlığı Onaylı Tip Anasözleşme - KVK 4/1-k Uyumlu)

BÖLÜM I: KURULUŞ VE AMAÇ
Madde 1 - Unvan: "Sınırlı Sorumlu ................................................. Tüketim Kooperatifi"dir.
Madde 2 - Amaç: Ortaklarının gıda, giyim, yakacak ve dayanıklı tüketim malları ihtiyaçlarını en uygun fiyatla, kaliteli ve güvenilir biçimde karşılamaktır.
Madde 3 - Çalışma Konuları:
1. Tüketim maddelerini doğrudan üreticiden veya toptancıdan aracısız satın alarak tanzim satış mağazaları açmak.
2. Ortaklarına peşin veya vadeli satış kartları tanımlamak.
3. E-market ve mobil sipariş ağı kurarak adrese teslimat sağlamak.

BÖLÜM II: VERGİ MUAFİYETİ VE RİSTURN
Madde 4 - Ortak İçi Satış Kuralı: Kooperatif satışlarını münhasıran ortaklarına yapar. Ortak dışı üçüncü kişilere satış yapılması halinde 7061 sayılı Kanun uyarınca ayrı bir iktisadi işletme tescil edilir.
Madde 5 - Risturn İadesi: Yıl sonu maliyet farkları ortakların yaptıkları alışveriş tutarı oranında risturn olarak iade edilir. Sermaye üzerinden kazanç dağıtılamaz.`,

  site_isletme: `S.S. ................................................. TOPLU YAPI VE SİTE İŞLETME KOOPERATİFİ ANASÖZLEŞMESİ
(Ticaret Bakanlığı Onaylı Tip Anasözleşme - 634 SK Kat Mülkiyeti Entegrasyonu)

BÖLÜM I: KURULUŞ VE AMAÇ
Madde 1 - Amaç: Konut veya işyeri yapımı tamamlanmış toplu yapı ve sitelerin ortak kullanım alanlarını, sosyal tesislerini, teknik altyapısını ve çevre düzenini yönetmek ve işletmektir.
Madde 2 - Faaliyet Konuları:
1. Güvenlik, temizlik, peyzaj, havuz, otopark ve ısıtma/soğutma hizmetlerini yürütmek veya taşere etmek.
2. 634 sayılı Kat Mülkiyeti Kanunu hükümlerine uygun olarak işletme projesi hazırlamak ve genel kurul onayına sunmak.
3. Aidat ve ortak gider avanslarını tahakkuk ettirmek, geciken aidatlara yasal sınırlar dahilinde faiz uygulamak.
4. Gayrimenkul bakım, onarım ve yenileme ihaleleri düzenlemek.

BÖLÜM II: ORTAKLIK VE AİDAT
Madde 3 - Ortaklık: Toplu yapıdaki bağımsız bölüm malikleri veya intifa hakkı sahipleri ortak olabilir.
Madde 4 - İcra Takip Yetkisi: Vadesinde ödenmeyen aidat ve gider payları için Yönetim Kurulu 634 SK ve İcra ve İflas Kanunu hükümlerine göre doğrudan icra takibi yapmaya yetkilidir.`,

  yenilenebilir_enerji: `S.S. ................................................. YENİLENEBİLİR ENERJİ ÜRETİM KOOPERATİFİ ANASÖZLEŞMESİ
(Ticaret Bakanlığı ve EPDK Lisanssız Elektrik Mevzuatı Uyumlu)

BÖLÜM I: KURULUŞ VE AMAÇ
Madde 1 - Amaç: Güneş (GES), rüzgar (RES), biyokütle veya jeotermal kaynaklardan lisanssız elektrik üretmek ve üretilen elektriği ortakların tüketimleriyle mahsuplaştırmaktır.
Madde 2 - Faaliyet Alanları:
1. EPDK Elektrik Piyasasında Lisanssız Elektrik Üretim Yönetmeliği uyarınca çağrı mektubu ve bağlantı anlaşması almak.
2. Güneş tarlaları ve çatı tipi GES santralleri kurmak.
3. Görevli tedarik şirketi ve TEİAŞ ile mahsuplaşma protokolleri imzalamak.
4. Üretilen enerjiyi ortakların abone numaraları üzerinden tüketim oranlarına göre takas etmek; fazlasını şebekeye satarak gelir elde etmek.`
};

// ================= ÖRNEK ANASÖZLEŞMELER KÜTÜPHANESİ MOTORU =================
function initBylawsLibraryEngine() {
  const selectEl = document.getElementById("bylaw-select");
  const container = document.getElementById("bylaw-text-container");
  const copyBtn = document.getElementById("btn-copy-bylaw");
  const printBtn = document.getElementById("btn-print-bylaw");
  const downloadBtn = document.getElementById("btn-download-bylaw");
  const searchInput = document.getElementById("bylaw-search-input");

  if (!selectEl || !container) return;

  function loadText(type) {
    const raw = BYLAWS_TEXTS[type] || "Seçilen türe ait anasözleşme metni hazırlanıyor...";
    container.textContent = raw;
  }

  // Başlangıç yüklemesi
  loadText(selectEl.value);

  selectEl.addEventListener("change", () => {
    loadText(selectEl.value);
    if (searchInput) searchInput.value = "";
  });

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const text = container.textContent;
      navigator.clipboard.writeText(text).then(() => {
        copyBtn.textContent = "✅ Metin Kopyalandı!";
        setTimeout(() => { copyBtn.textContent = "📋 Tüm Metni Kopyala"; }, 2000);
      });
    });
  }

  if (printBtn) {
    printBtn.addEventListener("click", () => {
      const win = window.open("", "_blank");
      if (!win) return;
      const title = selectEl.options[selectEl.selectedIndex].text;
      const htmlContent = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>' + title + '</title>' +
        '<style>body { font-family: "Times New Roman", serif; padding: 40px; font-size: 13px; line-height: 1.6; color: #111; }' +
        'h2 { text-align: center; font-size: 16px; margin-bottom: 24px; text-transform: uppercase; }' +
        'pre { white-space: pre-wrap; font-family: inherit; }' +
        '@media print { body { padding: 0; } }</style></head><body>' +
        '<h2>' + title + '</h2>' +
        '<pre>' + container.textContent + '</pre>' +
        '<script>window.onload = function() { window.print(); };<' + '/script></body></html>';
      win.document.write(htmlContent);
      win.document.close();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      const type = selectEl.value;
      const content = container.textContent;
      const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = type + "_ornek_anasozlesmesi.txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const q = searchInput.value.trim().toLowerCase();
      const currentFullText = BYLAWS_TEXTS[selectEl.value] || "";
      if (!q) {
        container.textContent = currentFullText;
        return;
      }
      const paragraphs = currentFullText.split("\n\n");
      const matched = paragraphs.filter(p => p.toLowerCase().includes(q));
      if (matched.length > 0) {
        container.textContent = matched.join("\n\n----------------------------------------\n\n");
      } else {
        container.textContent = 'Arama sonucu: "' + q + '" ifadesi metinde bulunamadı.';
      }
    });
  }
}

// ================= RESMİ BELGE VE DİLEKÇE ŞABLONLARI KÜTÜPHANESİ =================
const LEGAL_TEMPLATES_TEXTS = {
  intibak_gundem: `S.S. ................................................. KOOPERATİFİ
OLAĞAN / OLAĞANÜSTÜ GENEL KURUL TOPLANTI GÜNDEMİ
(1163 Sayılı Kooperatifler Kanunu Geçici 9. Madde ve 7511 Sayılı Kanun Uyumlu)

Toplantı Tarihi : ... / ... / 2026 Saat: ...:...
Toplantı Yeri   : ........................................................................
Bakanlık İzni   : Ticaret / Tarım İl Müdürlüğü .../.../2026 Tarih ve ..... Sayılı Onayı

GÜNDEM MADDELERİ:
1. Açılış ve Toplantı Başkanlığı (Divan Heyeti) seçimi.
2. Genel kurul toplantı tutanaklarının imzalanması hususunda Divan Başkanlığı'na yetki verilmesi.
3. Yönetim Kurulu yıllık çalışma raporu ile Denetim Kurulu raporunun okunması ve müzakeresi.
4. Bilanço ve Gelir-Gider farkı hesaplarının okunması, müzakeresi ve onaylanması.
5. Yönetim Kurulu üyeleri ve Denetim Kurulu üyelerinin ayrı ayrı ibrası.
6. 1163 sayılı Kooperatifler Kanunu'nun Geçici 9. maddesi ve 7511 sayılı Kanun reformu uyarınca; ilgili Bakanlık tarafından yürürlüğe konulan güncel Tip Anasözleşme metnine kooperatif anasözleşmesinin tüm maddeleriyle intibak ettirilmesi hususunun görüşülmesi ve karara bağlanması (Karar Nisabı: Toplantıda mevcut oyların 2/3 çoğunluğu).
7. Kabul edilen anasözleşme intibak metninin Ticaret Sicili Müdürlüğü'ne tescil ve ilanı işlemleri için Yönetim Kurulu'na yetki verilmesi.
8. Gelecek dönem tahmini bütçesinin görüşülmesi, aylık aidat miktarlarının ve gecikme faizi oranının belirlenmesi.
9. Görev süresi sona eren Yönetim ve Denetim Kurulu asıl ve yedek üyelerinin seçimi.
10. Dilek, temenniler ve kapanış.

YÖNETİM KURULU (İmza / Kaşe)`,

  ihrac_ihtari: `T.C. ................................. 1. NOTERLİĞİ'NE

İHTARNAME
(1163 Sayılı Kooperatifler Kanunu m. 16 Uyarınca Ödeme İhtarı ve İhraç Uyarısı)

KEŞİDECİ (ALACAKLI) : S.S. ................................................. KOOPERATİFİ YÖNETİM KURULU
MERKEZ ADRESİ       : ........................................................................
VEKİLİ              : Av. ....................................................................

MUHATAP (BORÇLU)    : ........................................................................
T.C. KİMLİK NO      : ..................... (Kooperatif Ortak No: .....)
TEBLİGAT ADRESİ     : ........................................................................

KONU : Kooperatif aidat ve parasal yükümlülük borçlarının ödenmesi ihtarı ve 1163 sayılı Kanun m. 16 gereğince ortaklıktan ihraç uyarısıdır.

AÇIKLAMALAR:
1. Kooperatifimiz ortaklar defterinde kayıtlı bulunmaktasınız.
2. Kooperatifimiz Genel Kurulu tarafından kararlaştırılan ve vadesi gelen parasal yükümlülükleriniz çerçevesinde yapılan defter tetkikinde:
   a) ... Yılı ... Ayı Aidat Asıl Alacağı : ........... TL
   b) ... Yılı ... Ayı Aidat Asıl Alacağı : ........... TL
   c) Yasal Gecikme Zammı (TBK m. 120)    : ........... TL
   TOPLAM BORÇ TUTARI                     : ........... TL olarak tahakkuk etmiştir.
3. İşbu ihtarnamenin tarafınıza tebliğinden itibaren EN GEÇ 30 (OTUZ) GÜN İÇİNDE yukarıda dökümü yapılan toplam borcunuzu kooperatifimizin ..................... IBAN no'lu banka hesabına ödemeniz;
4. Verilen 30 günlük yasal mehil içinde borcunuzu ödemediğiniz takdirde, kanun gereği tarafınıza ikinci bir ihtarname keşide edileceği, ikinci ihtar süresi sonunda da temerrüdün devamı halinde Yönetim Kurulu kararıyla ortaklıktan İHRAÇ EDİLECEĞİNİZ hususu 1163 sayılı Kanun m. 16 gereğince İHTAR OLUNUR.

KEŞİDECİ KOOPERATİF YÖNETİM KURULU`,

  temsilci_talep: `T.C.
.................... VALİLİĞİ
TİCARET İL MÜDÜRLÜĞÜ'NE / TARIM VE ORMAN İL MÜDÜRLÜĞÜ'NE
....................

KONU : Genel Kurul Toplantısına Bakanlık Temsilcisi Görevlendirilmesi Talebidir.
DAYANAK : 1163 Sayılı Kooperatifler Kanunu Ek Madde 3 ve İlgili Yönetmelik (RG: 31719)

KOOPERATİF UNVANI       : S.S. ................................................. KOOPERATİFİ
TİCARET SİCİL NO / İL   : ..................... / .....................
MERSİS NUMARASI         : .................................................
İLETİŞİM / TELEFON      : .................................................

Müdürlüğünüz görev alanı içerisinde faaliyet gösteren kooperatifimizin ... yılı Olağan / Olağanüstü Genel Kurul Toplantısı aşağıdaki gün, saat ve adreste yapılacaktır:

Toplantı Tarihi ve Saati : ... / ... / 2026 Saat: ...:...
Toplantı Adresi          : ........................................................................
Toplantı Türü            : Fiziki Toplantı (Varsa: E-Genel Kurul Eşzamanlı)

Toplantımızda hazır bulunmak üzere 1163 sayılı Kanun Ek 3. maddesi gereğince bir Bakanlık Temsilcisi görevlendirilmesini saygılarımızla arz ve talep ederiz.

EKLER:
1. Yönetim Kurulu Genel Kurul Çağrı Kararı Sureti
2. Genel Kurul Toplantı Gündemi
3. Bakanlık Temsilcisi Ücreti Yatırıldı Banka Dekontu
4. KOOPBİS Sistem Çıktısı Hazirun Cetveli Taslağı
5. İmza Sirküleri Sureti

S.S. ................................................. KOOPERATİFİ YÖNETİM KURULU
(Yetkili İmzalar ve Kaşe)`,

  yk_faaliyet_raporu: `S.S. ................................................. KOOPERATİFİ
... DÖNEMİ YÖNETİM KURULU ÇALIŞMA VE FAALİYET RAPORU
(Genel Kurul Tetkikine ve Onayına Sunulan Resmi Rapor)

1. GENEL BİLGİLER
Kooperatif Ticaret Unvanı : S.S. ................................................. Kooperatifi
Merkez Adresi             : ........................................................................
Sicil / MERSİS No         : ..................... / .....................
Hesap Dönemi              : 01.01.2025 - 31.12.2025

2. YÖNETİM VE DENETİM ORGANI ÇALIŞMALARI
Dönem içinde Yönetim Kurulu toplam ..... adet toplantı yapmış ve ..... adet karar almıştır. Alınan kararlar noter onaylı Karar Defteri'ne ve eşzamanlı olarak KOOPBİS sistemine işlenmiştir.
Yönetim Kurulu asıl üyelerimizin Kooperatifçilik Eğitimi Yönetmeliği kapsamındaki 40 saatlik zorunlu eğitim sertifikaları alınmış ve sisteme yüklenmiştir.

3. ORTAKLIK HAREKETLERİ
Dönem Başı Ortak Sayısı  : .....
Dönem İçi Yeni Ortaklar  : .....
İstifa / İhraç Edenler   : .....
Dönem Sonu Ortak Sayısı  : .....

4. MALİ VE İKTİSADİ DURUM ÖZETİ
Toplam Gelirler          : ..................... TL
Toplam Giderler          : ..................... TL
Banka Mevcutları         : ..................... TL
Ortaklardan Alacaklar    : ..................... TL
Üçüncü Kişilere Borçlar  : ..................... TL
Dönem Net Farkı          : ..................... TL (Müspet / Menfi)

5. İNTİBAK VE DİJİTALLEŞME FAALİYETLERİ
7511 sayılı Kanun uyarınca anasözleşme intibak tasarısı hazırlanmış, ilgili Bakanlık İl Müdürlüğü'nden onay alınarak işbu genel kurul gündeminin 6. maddesine eklenmiştir.

6. GELECEK DÖNEM HEDEFLERİ VE TAHMİNİ BÜTÇE
Önümüzdeki hesap döneminde kooperatifimizin amaçlarının gerçekleştirilmesi için öngörülen tahmini bütçe ekte sunulmuştur.
Faaliyetlerimizi takdirlerinize arz eder, yönetim kurulumuzun ibrasını saygıyla dileriz.

YÖNETİM KURULU (İsim - İmza)`,

  dk_denetim_raporu: `S.S. ................................................. KOOPERATİFİ
... DÖNEMİ DENETİM KURULU RAPORU
(1163 Sayılı Kooperatifler Kanunu m. 66-69 Uyarınca Genel Kurula Sunulur)

Sayın Ortaklar;
Kooperatifimizin ... yılı hesap dönemine ait defter, belge, kayıt ve işlemleri tarafımızdan mevzuat, anasözleşme ve genel kurul kararları çerçevesinde incelenmiş olup tespitlerimiz aşağıdadır:

1. DEFTER VE BELGELERİN İNCELENMESİ
Kooperatifin Yevmiye, Defteri Kebir, Envanter, Karar Defteri ve Ortaklar Pay Defteri tetkik edilmiş; açılış ve kapanış noter tasdiklerinin zamanında yapıldığı tespit edilmiştir.

2. KASA VE BANKA MEVCUTLARININ TETKİKİ
Hesap dönemi içinde periyodik olarak yapılan 4 denetimde kasa sayımı yapılmış, kasa limitlerine uyulduğu, banka ekstreleri ile muhasebe kayıtlarının tam mutabık olduğu görülmüştür. 31/12/2025 tarihi itibarıyla banka bakiyesi ........... TL'dir.

3. GELİR-GİDER FARKI VE BİLANÇO İNCELEMESİ
Düzenlenen 31/12/2025 tarihli Bilanço ve Gelir-Gider Cetveli muhasebe standartlarına uygundur. Yapılan harcamaların tamamının yönetim kurulu kararlarına ve fatura/belgelere dayandığı belirlenmiştir.

4. DIŞ DENETİM DURUMU
Kooperatifimiz Denetim Yönetmeliği m. 15 eşiklerini taşımadığından (veya: eşikleri taşıdığından bağımsız dış denetçi raporu alınmış ve olumlu görüş verilmiştir).

5. SONUÇ VE KANAAT
Yönetim Kurulu'nun yasalara, anasözleşmeye ve genel kurul talimatlarına uygun çalıştığı kanaatine varılmış olup; Bilanço ve Gelir Tablosunun onaylanmasını ve Yönetim Kurulu üyelerinin ibra edilmesini Genel Kurulun onayına saygıyla arz ederiz.

DENETİM KURULU ÜYELERİ (İsim - İmza)`,

  olaganustu_gk_cagri: `S.S. ................................................. KOOPERATİFİ YÖNETİM KURULU'NDAN
ORTAKLARA OLAĞANÜSTÜ GENEL KURUL TOPLANTISI ÇAĞRI İLANI
(1163 Sayılı Kanun m. 43-45 Uyarınca Taahhütlü Mektup ve İlan Metni)

Sayın Ortağımız;
Kooperatifimiz ortaklarının 1/10'unun noter kanalıyla yazılı talebi üzerine (veya: Yönetim Kurulumuzun .../.../2026 tarih ve ..... sayılı kararı gereğince), aşağıdaki gündem maddelerini görüşmek üzere Olağanüstü Genel Kurul Toplantısı icra edilecektir.

Toplantı Tarihi : ... / ... / 2026 Günü Saat: ...:...
Toplantı Yeri   : ........................................................................
(Çoğunluk sağlanamadığı takdirde 2. Toplantı: .../.../2026 aynı yer ve saatte yapılacaktır.)

GÜNDEM:
1. Açılış ve Divan Heyeti Seçimi.
2. Divan Başkanlığı'na toplantı tutanaklarını imzalama yetkisi verilmesi.
3. 7511 sayılı Kanun Geçici 9. maddesi gereğince Anasözleşme İntibakının görüşülmesi ve karara bağlanması.
4. Yönetim Kurulu ve Denetim Kurulu üyelerinin azli ve yeni üyelerin seçimi.
5. Kapanış.

ÖNEMLİ HATIRLATMALAR:
- Toplantıya katılacak ortaklar cetveli doğrudan KOOPBİS sistemi üzerinden alınmıştır.
- Genel kurula asaleten katılacak ortaklarımızın T.C. Kimlik Kartlarını yanlarında bulundurmaları şarttır.
- Ortaklığı temsil yetkisi anasözleşme uyarınca ancak eş veya birinci derece kan hısımlarına noter vekaletnamesiyle verilebilir.

S.S. ................................................. KOOPERATİFİ YÖNETİM KURULU`,

  pay_devir_sozlesmesi: `KOOPERATİF ORTAKLIK PAYI DEVİR SÖZLEŞMESİ
(1163 Sayılı Kooperatifler Kanunu m. 14 Uyarınca Ortaklık ve Hak Devir Protokolü)

DEVREDEN (ESKİ ORTAK) :
Adı Soyadı / Unvanı   : .................................................
T.C. Kimlik Numarası  : .....................
Kooperatif Ortak No   : .....

DEVRALAN (YENİ ORTAK) :
Adı Soyadı / Unvanı   : .................................................
T.C. Kimlik Numarası  : .....................
İkametgah Adresi      : .................................................

DEVRE KONU KOOPERATİF : S.S. ................................................. Kooperatifi
DEVREDİLEN PAY MİKTARI: ..... Adet Ortaklık Payı (Tahsisli Bağımsız Bölüm No: .....)
DEVİR BEDELİ          : ........... TL (Türk Lirası)

SÖZLEŞME ŞARTLARI:
1. Devreden, kooperatif nezdindeki tüm ortaklık paylarını, haklarını ve konut/işyeri tahsis hakkını hiçbir kısıtlama olmaksızın devralana devretmiştir.
2. Devralan, kooperatif anasözleşmesindeki tüm hüküm ve yükümlülükleri, birikmiş veya doğacak tüm aidat borçlarını aynen kabul ettiğini beyan eder.
3. İşbu devir sözleşmesi 1163 sayılı Kanun m. 14 gereğince Kooperatif Yönetim Kurulu'nun onaylaması ve Ortaklar Pay Defteri'ne işlenmesi ile hukuki geçerlilik kazanır.
4. Harçlar Kanunu m. 59/c uyarınca kooperatif pay devirleri tapu harcından muaftır.

DEVREDEN (İmza)                                 DEVRALAN (İmza)

--------------------------------------------------------------------------------
KOOPERATİF YÖNETİM KURULU ONAY ŞERHİ:
Yönetim Kurulumuzun .../.../2026 tarih ve ..... sayılı kararı ile yukarıdaki pay devri onaylanmış ve devralan ..... ortak numarası ile kooperatif ortaklığına kabul edilmiştir.
YÖNETİM KURULU (İmza - Kaşe)`,

  istifa_protokolu: `S.S. ................................................. KOOPERATİFİ YÖNETİM KURULU BAŞKANLIĞI'NA

ORTAKLIKTAN ÇIKMA (İSTİFA) DİLEKÇESİ VE SERMAYE İADE PROTOKOLÜ
(1163 Sayılı Kooperatifler Kanunu m. 10, 11, 17 Uyarınca Düzenlenmiştir)

TALEP EDEN ORTAK :
Adı Soyadı       : .................................................
T.C. Kimlik No   : .....................
Ortak No         : .....
İletişim Tel     : .....................
Adres            : .................................................

AÇIKLAMALAR:
1. Kooperatifiniz ortaklar defterinin ..... numarasında kayıtlı ortağınız bulunmaktayım.
2. 1163 sayılı Kooperatifler Kanunu'nun 10. ve 11. maddeleri ile kooperatif anasözleşmesi hükümleri çerçevesinde, kendi serbest irademle kooperatif ortaklığından ÇIKMAK (İSTİFA ETMEK) istiyorum.
3. Ortaklıktan çıkışımın kabul edilerek Ortaklar Pay Defteri'ne ve KOOPBİS sistemine işlenmesini arz ederim.

PARASAL HAKLARIN İADESİ ŞARTLARI (1163 SK m. 17):
- Ortaklıktan çıkan ortağın kooperatif malvarlığından talep edebileceği tutar, ayrıldığı yılın bilançosuna göre hesaplanan ödemiş olduğu sermaye payıdır. Kooperatif yedek akçeleri üzerinde hak iddia edilemez.
- Genel kurul kararı uyarınca kooperatifin mevcudiyetini tehlikeye düşürmemek amacıyla iade ödemesi azami 3 yıl süreyle geciktirilebilir.
- Varsa birikmiş aidat borçlarım iade tutarından takas ve mahsup edilecektir.
- Kalan net alacağımın tarafıma ait TR..... IBAN no'lu banka hesabına ödenmesini talep ederim.

TARİH : ... / ... / 2026
ORTAKLIKTAN ÇIKAN ORTAK (İsim - İmza)

--------------------------------------------------------------------------------
YÖNETİM KURULU KABUL VE TESCİL BİLGİSİ:
İstifa dilekçesi .../.../2026 tarihinde tebellüğ edilmiş, Yönetim Kurulu'nun .../.../2026 tarih ve ..... sayılı kararı ile çıkış işlemi onaylanarak KOOPBİS'e işlenmiştir.
YÖNETİM KURULU (İmza - Kaşe)`
};

function initLegalTemplatesEngine() {
  const selectEl = document.getElementById("template-select");
  const container = document.getElementById("template-content-view");
  const copyBtn = document.getElementById("btn-copy-template");
  const printBtn = document.getElementById("btn-print-template");
  const downloadBtn = document.getElementById("btn-download-template");
  const searchInput = document.getElementById("template-filter-input");

  if (!selectEl || !container) return;

  function loadTemplate(key) {
    const text = LEGAL_TEMPLATES_TEXTS[key] || "Şablon metni bulunamadı.";
    container.textContent = text;
    if (searchInput) searchInput.value = "";
  }

  loadTemplate(selectEl.value);

  selectEl.addEventListener("change", () => {
    loadTemplate(selectEl.value);
  });

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const text = container.textContent;
      navigator.clipboard.writeText(text).then(() => {
        copyBtn.textContent = "✅ Şablon Kopyalandı!";
        setTimeout(() => { copyBtn.textContent = "📋 Şablonu Kopyala"; }, 2000);
      });
    });
  }

  if (printBtn) {
    printBtn.addEventListener("click", () => {
      const title = selectEl.options[selectEl.selectedIndex].text;
      printFormattedDoc(container.textContent, title);
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      const type = selectEl.value;
      const content = container.textContent;
      downloadDocTxt(content, type + "_sablonu.txt");
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const q = searchInput.value.trim().toLowerCase();
      const currentFullText = LEGAL_TEMPLATES_TEXTS[selectEl.value] || "";
      if (!q) {
        container.textContent = currentFullText;
        return;
      }
      const paragraphs = currentFullText.split("\n\n");
      const matched = paragraphs.filter(p => p.toLowerCase().includes(q));
      if (matched.length > 0) {
        container.textContent = matched.join("\n\n----------------------------------------\n\n");
      } else {
        container.textContent = 'Arama sonucu: "' + q + '" ifadesi metinde bulunamadı.';
      }
    });
  }
}

// ================= PODCAST & SESLİ REHBER MOTORU =================
const PODCAST_EPISODES = {
  ep1: {
    title: "Bölüm 1: 7511 SK İntibak Reformu ve 26 Ekim 2026 Geri Sayımı",
    audioSrc: "assets/audio/bolum_1.mp3",
    dialogs: [
      { speaker: "Avukat Deniz Hanım", text: "Can Bey merhaba, bugün Türkiye genelindeki 50 bini aşkın kooperatifi ve 8 milyondan fazla ortağı doğrudan ilgilendiren, adeta saatli bomba gibi yaklaşan bir tarihi konuşuyoruz: 26 Ekim 2026. Bildiğiniz gibi 7511 sayılı Kanun ile anasözleşme intibak süresi son kez 5 yıla uzatıldı. Neden bu kadar kritik?" },
      { speaker: "Mali Müşavir Can Bey", text: "Deniz Hanım, sahadaki en büyük yanılgı daha vakit var, son günlerde hallederiz düşüncesi. Ancak bu bir vergi beyannamesi uzatması gibi değil. Kanun metni çok açık: 26 Ekim 2026 tarihine kadar anasözleşmesini Ticaret veya Tarım Bakanlığı'nın güncel tip anasözleşmesine intibak ettirip tescil ettirmeyen kooperatifler kanun gereği kendiliğinden dağılmış sayılacak!" },
      { speaker: "Avukat Deniz Hanım", text: "Yani mahkeme kararına veya bakanlık yazısına gerek kalmaksızın, tüzel kişilik doğrudan tasfiye haline girecek. Peki Can Bey, intibak için olağan genel kurul mu beklenmeli yoksa olağanüstü genel kurul yapılabilir mi?" },
      { speaker: "Mali Müşavir Can Bey", text: "Kesinlikle olağanüstü genel kurul toplanabilir ve beklenmemelidir. Hatta 2026 yılı Haziran ayındaki olağan genel kurullarda bu madde mutlaka gündeme alınmalı. MERSİS üzerinden anasözleşme tadil tasarısı hazırlanıyor, İl Müdürlüğü'nden onay alınıyor ve genel kurulda oylanıyor. Karar nisabı ise toplantıda mevcut ortakların 2 bölü 3 çoğunluğudur." }
    ]
  },
  ep2: {
    title: "Bölüm 2: Dış Denetim ve 40 Saatlik Zorunlu Eğitim Eşikleri (100M TL & 2000 Ortak)",
    audioSrc: "assets/audio/bolum_2.mp3",
    dialogs: [
      { speaker: "Mali Müşavir Can Bey", text: "Deniz Hanım, yöneticilerin en çok ceza aldığı konulardan biri de dış denetim. 1 Şubat 2022 tarihli Yönetmeliğin 15. maddesi güncellendi. Artık faaliyet konusuna bakılmaksızın yıllık net satış hasılatı 100 Milyon TL olan veya ortak sayısı 2.000'i aşan her kooperatif bağımsız dış denetime tabidir." },
      { speaker: "Avukat Deniz Hanım", text: "Ayrıca yapı kooperatiflerinde de yapı ruhsatı alınmış ve 100 ortağı varsa ciroya bakılmaksızın doğrudan dış denetim şartı var. Dış denetim yaptırılmadan sunulan bilanço genel kurulda ibra edilirse ne olur?" },
      { speaker: "Mali Müşavir Can Bey", text: "O ibra kararı kanunen yok hükmündedir! Üstelik yönetim kurulu üyeleri Türk Ceza Kanunu m. 257 kapsamında görevi kötüye kullanma suçlamasıyla ceza mahkemesinde yargılanır. Denetim de sıradan bir rapor değil; Kamu Gözetimi Kurumu'nun SBDS 2400 standardına göre bağımsız denetçilerce hazırlanmalıdır." },
      { speaker: "Avukat Deniz Hanım", text: "Peki 40 saatlik zorunlu kooperatifçilik eğitimi? Hukuk veya İktisat mezunu yöneticiler bundan muaf mı?" },
      { speaker: "Mali Müşavir Can Bey", text: "Asla! Sahadaki en büyük mit bu. Yönetmelikte hiçbir üniversite diplomasına veya avukatlık/mali müşavirlik unvanına dayalı muafiyet yoktur. Seçimden itibaren 9 ay içinde 40 saatlik akredite eğitimi almayan yöneticinin üyeliği kendiliğinden düşer." }
    ]
  },
  ep3: {
    title: "Bölüm 3: 7579 SK İskansız Tapu Devri Yasağı ve İnşaat Güvencesi",
    audioSrc: "assets/audio/bolum_3.mp3",
    dialogs: [
      { speaker: "Avukat Deniz Hanım", text: "Can Bey, inşaatı devam eden yapı kooperatiflerinde geçmişte yaşanan suiistimaller 7579 sayılı Kanun ile kökten kesildi. Artık Yapı Kullanma İzin Belgesi alınmadan tapuda veya noter satış vaadiyle ortaklara mülkiyet devri yapılması kesinlikle yasaklandı." },
      { speaker: "Mali Müşavir Can Bey", text: "Harika bir güvence oldu. Çünkü kaba inşaat halindeyken hisse devredilip kooperatif borç içinde bırakılıyordu. Şimdi iskan alınmadan ferdi mülkiyete geçilemiyor. Ayrıca belediyelerin kooperatif kurması da Cumhurbaşkanı onayına bağlandı." }
    ]
  },
  ep4: {
    title: "Bölüm 4: Vergi Muafiyetinin 4 Altın Şartı ve Risturn Dağıtımı",
    audioSrc: "assets/audio/bolum_4.mp3",
    dialogs: [
      { speaker: "Mali Müşavir Can Bey", text: "Kooperatiflerin kurumlar vergisi muafiyetinde 5520 sayılı Kanun m. 4/1-k'daki 4 şart emredicidir: Sermayeye kâr dağıtmama, yöneticilere pay vermeme, yedek akçeleri bölüşmeme ve yalnızca ortaklarla işlem yapma." },
      { speaker: "Avukat Deniz Hanım", text: "Can Bey, kooperatif ortak olmayan biriyle işlem yaparsa muafiyeti tamamen biter mi?" },
      { speaker: "Mali Müşavir Can Bey", text: "Eskiden biterdi, ancak 7061 sayılı Kanun reformu ile bu değişti. Artık kooperatifin genel muafiyeti bozulmuyor; yalnızca ortak dışı işlemler dolayısıyla bağlı bir İktisadi İşletme doğmuş sayılıyor ve sadece o kısım kurumlar vergisine tabi oluyor." }
    ]
  },
  ep5: {
    title: "Bölüm 5: Yapı Kooperatiflerinde Ferdi Mülkiyet, Şerefiye ve Tapu Harcı",
    audioSrc: "assets/audio/bolum_5.mp3",
    dialogs: [
      { speaker: "Avukat Deniz Hanım", text: "Can Bey, yapı kooperatiflerinde inşaat bittiğinde en çok ihtilaf yaşanan safha ferdi mülkiyete geçiş ve şerefiye bedelleridir. Bir daire 5. katta deniz manzaralı, diğeri zemin katta kuzey cepheli. Bu adalet nasıl sağlanır?" },
      { speaker: "Mali Müşavir Can Bey", text: "Deniz Hanım, 1163 sayılı Kanun Ek m. 2 gereğince genel kurulda bir Şerefiye Komisyonu veya SPK lisanslı gayrimenkul değerleme uzmanı görevlendirilir. Her bağımsız bölümün konumu, katı, cephesi ve kullanım alanına göre bir değer farkı raporu hazırlanır. Ortaklar bu farkları kooperatife öder veya alacaklı çıkar." },
      { speaker: "Avukat Deniz Hanım", text: "Peki şerefiye raporuna itiraz süresi nedir?" },
      { speaker: "Mali Müşavir Can Bey", text: "Şerefiye cetveli ortaklara tebliğ edilir veya genel kurulda onaylanır. Ortakların bildirimden itibaren 15 gün içinde itiraz etme, genel kurul onayından itibaren 1 ay içinde ise mahkemede tespit ve uyarlama davası açma hakkı vardır." },
      { speaker: "Avukat Deniz Hanım", text: "Harç boyutu da ortaklar için büyük avantaj sağlıyor değil mi?" },
      { speaker: "Mali Müşavir Can Bey", text: "Kesinlikle! 492 sayılı Harçlar Kanunu m. 59/c uyarınca yapı kooperatiflerinin ortaklarına yapacağı ilk konut veya işyeri tahsis ve tapu devirleri Tapu Harcından tamamen Muaftır. Normal satışlardaki binde 20 artı 20 harç ödenmez, yalnızca maktu döner sermaye bedeli tahsil edilir." }
    ]
  },
  ep6: {
    title: "Bölüm 6: Kırsal Kalkınma ve Kadın Kooperatiflerinde KOOP-DES & Hibeler",
    audioSrc: "assets/audio/bolum_6.mp3",
    dialogs: [
      { speaker: "Avukat Deniz Hanım", text: "Can Bey, son yıllarda kadın emeğini değerlendiren üretim kooperatifleri hızla çoğalıyor. Devletin kadın kooperatiflerine sunduğu en cazip finansal destekler nelerdir?" },
      { speaker: "Mali Müşavir Can Bey", text: "Ticaret Bakanlığı'nın KOOP-DES programı tam bir can suyu. Ortaklarının en az yüzde 90'ı kadınlardan oluşan kooperatiflere, kalkınmada öncelikli yörelerde yüzde 90, diğer illerde yüzde 75 oranında hibe veriliyor. Tamamen geri ödemesiz!" },
      { speaker: "Avukat Deniz Hanım", text: "Bu hibe hangi harcamalar için kullanılabiliyor?" },
      { speaker: "Mali Müşavir Can Bey", text: "Üretim ve paketleme makineleri, soğuk hava depoları, e-ticaret altyapısı, laboratuvar test cihazları ve en önemlisi 2 nitelikli personele kadar 1 yıllık maaş desteği doğrudan hibe kapsamındadır. Üstelik belediyelerle 5393 sayılı Kanun m. 75 kapsamında ortak hizmet protokolleri de yapılabiliyor." },
      { speaker: "Avukat Deniz Hanım", text: "Yani kadın kooperatifleri sıfır sermaye riskiyle modern üretim tesisleri kurabiliyor." }
    ]
  },
  ep7: {
    title: "Bölüm 7: Kooperatif Tasfiyesi, Alacaklılara 3 TTSG Çağrısı ve Kapanış",
    audioSrc: "assets/audio/bolum_7.mp3",
    dialogs: [
      { speaker: "Avukat Deniz Hanım", text: "Can Bey, amacına ulaşan ya da faaliyetini sonlandırmak isteyen kooperatiflerde tasfiye süreci nasıl işler? Genel kurulda kapattık demekle tüzel kişilik sona erer mi?" },
      { speaker: "Mali Müşavir Can Bey", text: "Asla ermez Deniz Hanım! Kooperatif tüzel kişiliği ancak tasfiye süreci tamamlanıp Ticaret Sicilinden kaydı silindiğinde son bulur. 1163 sayılı Kanun m. 81 ve TTK m. 536 uyarınca tasfiye memurları atanır ve unvana Tasfiye Halinde ibaresi eklenir." },
      { speaker: "Avukat Deniz Hanım", text: "Alacaklılara çağrı ilanları neden bu kadar katı kurallara bağlı?" },
      { speaker: "Mali Müşavir Can Bey", text: "Çünkü alacaklıların hakkını korumak zorunludur. Türkiye Ticaret Sicili Gazetesi'nde birer hafta arayla 3 defa alacaklılara çağrı ilanı yayımlanmalıdır. Kanun gereği 3. ilanın yayımından itibaren en az 6 ay geçmedikçe kalan malvarlığı ortaklar arasında paylaştırılamaz!" },
      { speaker: "Avukat Deniz Hanım", text: "Tasfiye bittikten sonra defterler ve belgeler ne kadar süre saklanmalı?" },
      { speaker: "Mali Müşavir Can Bey", text: "TTK m. 82 uyarınca kooperatifin yevmiye, kebir, envanter, karar ve ortaklar defterleri ile mali evrakları 10 yıl süreyle saklanmak zorundadır." }
    ]
  }
};

let currentTtsIndex = 0;
let isTtsPlaying = false;

function initPodcastEngine() {
  const epSelect = document.getElementById("podcast-episode-select");
  const audioEl = document.getElementById("podcast-audio-element");
  const audioSrc = document.getElementById("podcast-audio-source");
  const titleEl = document.getElementById("podcast-playing-title");
  const ttsPlayBtn = document.getElementById("btn-tts-play");
  const ttsStopBtn = document.getElementById("btn-tts-stop");
  const rateSelect = document.getElementById("tts-rate-select");

  if (!epSelect) return;

  function loadEpisode(key) {
    const ep = PODCAST_EPISODES[key];
    if (!ep) return;
    if (titleEl) titleEl.textContent = ep.title;
    if (audioSrc && audioEl) {
      audioSrc.src = ep.audioSrc;
      audioEl.load();
    }
    stopTtsPlayback();
  }

  epSelect.addEventListener("change", () => {
    loadEpisode(epSelect.value);
  });

  if (ttsPlayBtn) {
    ttsPlayBtn.addEventListener("click", () => {
      const epKey = epSelect.value;
      const ep = PODCAST_EPISODES[epKey];
      if (!ep) return;

      if (!window.speechSynthesis) {
        alert("Tarayıcınız Web Speech API ses özelliğini desteklemiyor.");
        return;
      }

      stopTtsPlayback();
      isTtsPlaying = true;
      currentTtsIndex = 0;
      ttsPlayBtn.textContent = "⏳ Seslendiriliyor...";

      const rate = rateSelect ? parseFloat(rateSelect.value || "1.0") : 1.0;
      playNextTtsLine(ep.dialogs, rate, () => {
        isTtsPlaying = false;
        ttsPlayBtn.textContent = "🔊 Canlı Seslendir (Web Speech API)";
      });
    });
  }

  if (ttsStopBtn) {
    ttsStopBtn.addEventListener("click", () => {
      stopTtsPlayback();
      if (ttsPlayBtn) ttsPlayBtn.textContent = "🔊 Canlı Seslendir (Web Speech API)";
    });
  }

  // AI Podcast Stüdyosu Motorunu Başlat
  initPodcastAiStudio();
}

function stopTtsPlayback() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  isTtsPlaying = false;
}

function playNextTtsLine(dialogs, rate = 1.0, onComplete) {
  if (!isTtsPlaying || currentTtsIndex >= dialogs.length) {
    if (onComplete) onComplete();
    return;
  }

  const item = dialogs[currentTtsIndex];
  const u = new SpeechSynthesisUtterance(item.speaker + " diyor ki: " + item.text);
  u.lang = "tr-TR";
  u.rate = rate || 1.0;

  u.onend = () => {
    currentTtsIndex++;
    playNextTtsLine(dialogs, rate, onComplete);
  };

  u.onerror = () => {
    currentTtsIndex++;
    playNextTtsLine(dialogs, rate, onComplete);
  };

  window.speechSynthesis.speak(u);
}

// ================= AI PODCAST SENARYO ATÖLYESİ (NOTEBOOKLM ENTEGRATÖRÜ) =================
function initPodcastAiStudio() {
  const presetSelect = document.getElementById("ai-podcast-preset");
  const notesTextarea = document.getElementById("ai-podcast-notes");
  const btnGenerate = document.getElementById("btn-generate-podcast-script");
  const btnStudioTtsPlay = document.getElementById("btn-studio-tts-play");
  const btnCopyPrompt = document.getElementById("btn-copy-notebooklm-prompt");
  const btnDownloadTxt = document.getElementById("btn-download-script-txt");
  const resultBox = document.getElementById("ai-podcast-result-box");
  const scriptContent = document.getElementById("ai-podcast-script-content");
  const rateSelect = document.getElementById("tts-rate-select");

  if (!btnGenerate) return;

  const PRESETS = {
    gk_iptal: "Konu: Genel Kurul Kararlarının İptali Davaları (1163 SK m. 53). 1 aylık hak düşürücü süre, muhalefet şerhinin tutanağa işletilmesi şartı, çağrı usulsüzlüğü halleri ve butlan/yokluk farkı.",
    tarim_derece: "Konu: Tarımsal Amaçlı Örgütlerin Derecelendirilmesi (Yön. 40451). A, B ve C grubu sertifikasyonu, sübvansiyonlu Ziraat Bankası kredi faiz indirimleri, hibe öncelikleri ve derecelendirme kriterleri.",
    yonetim_sorumluluk: "Konu: Kooperatif Yönetim Kurulu Üyelerinin Hukuki ve Cezai Sorumluluğu. TCK m. 257 görevi kötüye kullanma, TTK m. 553 özen yükümlülüğü, KOOPBİS'e veri girmemenin adli sonuçları ve şahsi malvarlığıyla sorumluluk.",
    egk_genkop: "Konu: Kooperatiflerde Elektronik Genel Kurul (GENKOP) Uygulaması. E-imza ile katılım, güvenli oy kullanma sistemi, fiziki ve hibrit toplantı protokolleri ve Ticaret Bakanlığı denetimi."
  };

  if (presetSelect) {
    presetSelect.addEventListener("change", () => {
      const val = presetSelect.value;
      if (PRESETS[val]) {
        notesTextarea.value = PRESETS[val];
      } else if (val === "custom") {
        notesTextarea.value = "";
      }
    });
  }

  let generatedDialogs = [];

  btnGenerate.addEventListener("click", async () => {
    const rawNotes = (notesTextarea && notesTextarea.value.trim()) || "";
    if (!rawNotes) {
      alert("Lütfen bir konu seçiniz veya NotebookLM notlarınızı yapıştırınız.");
      return;
    }

    btnGenerate.disabled = true;
    btnGenerate.textContent = "⏳ Senaryo Yazılıyor...";
    if (resultBox) resultBox.style.display = "block";
    if (scriptContent) scriptContent.innerHTML = "<em>Yapay zeka kooperatif uzmanları (Avukat Deniz Hanım ve SMMM Can Bey) için diyalog senaryosu hazırlıyor...</em>";

    const prompt = `Aşağıdaki kooperatif konusunu veya notlarını kullanarak, bir podcast programı için Avukat Deniz Hanım ve SMMM Can Bey arasında geçen profesyonel, akıcı, Türk mevzuatına (1163 sayılı Kanun ve ilgili yönetmelikler) dayanan bir diyalog senaryosu yaz.

Metin tam olarak şu formatta olmalıdır:
Av. Deniz Hanım: [Açılış ve soru]
SMMM Can Bey: [Cevap ve mevzuat analizi]
Av. Deniz Hanım: [Kritik detay veya risk sorusu]
SMMM Can Bey: [Cezai yaptırımlar, süreler veya pratik çözüm]
Av. Deniz Hanım: [Kapanış ve özet]

Kaynak Notlar:
${rawNotes}`;

    let scriptText = "";
    try {
      if (window.puter && window.puter.ai && typeof window.puter.ai.chat === "function") {
        const res = await window.puter.ai.chat(prompt, { model: "gpt-4o-mini" });
        scriptText = (res && res.message && res.message.content) || (res && res.text) || String(res);
      } else {
        scriptText = generateLocalPodcastScript(rawNotes);
      }
    } catch (e) {
      scriptText = generateLocalPodcastScript(rawNotes);
    }

    btnGenerate.disabled = false;
    btnGenerate.textContent = "🪄 Podcast Senaryosu Oluştur";

    if (scriptContent) scriptContent.textContent = scriptText;
    if (btnStudioTtsPlay) btnStudioTtsPlay.style.display = "inline-flex";
    if (btnCopyPrompt) btnCopyPrompt.style.display = "inline-flex";
    if (btnDownloadTxt) btnDownloadTxt.style.display = "inline-flex";

    generatedDialogs = parseScriptToDialogs(scriptText);
  });

  if (btnStudioTtsPlay) {
    btnStudioTtsPlay.addEventListener("click", () => {
      if (!window.speechSynthesis) {
        alert("Tarayıcınız ses sentezini desteklemiyor.");
        return;
      }
      if (generatedDialogs.length === 0) return;

      stopTtsPlayback();
      isTtsPlaying = true;
      currentTtsIndex = 0;
      btnStudioTtsPlay.textContent = "⏳ Seslendiriliyor...";

      const rate = rateSelect ? parseFloat(rateSelect.value || "1.0") : 1.0;
      playNextTtsLine(generatedDialogs, rate, () => {
        isTtsPlaying = false;
        btnStudioTtsPlay.textContent = "🔊 Üretilen Senaryoyu Seslendir";
      });
    });
  }

  if (btnCopyPrompt) {
    btnCopyPrompt.addEventListener("click", () => {
      const promptText = `Lütfen aşağıdaki kooperatif hukuku diyalog metnini ve araştırma notlarını kullanarak, iki uzman sunucunun (Avukat Deniz Hanım ve SMMM Can Bey) derinlemesine tartıştığı, 1163 sayılı Kooperatifler Kanunu'na tam uyumlu bir Türkçe 'Audio Overview / Sesli Genel Bakış' oluştur:\n\n` + (scriptContent ? scriptContent.textContent : "");
      navigator.clipboard.writeText(promptText).then(() => {
        btnCopyPrompt.textContent = "✅ Kopyalandı (NotebookLM'e Yapıştırın)";
        setTimeout(() => { btnCopyPrompt.textContent = "📋 NotebookLM Studio Promptunu Kopyala"; }, 2500);
      });
    });
  }

  if (btnDownloadTxt) {
    btnDownloadTxt.addEventListener("click", () => {
      const blob = new Blob([scriptContent ? scriptContent.textContent : ""], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "kooperatif_podcast_senaryosu.txt";
      a.click();
      URL.revokeObjectURL(url);
    });
  }
}

function parseScriptToDialogs(text) {
  const lines = text.split("\n").filter(l => l.trim().length > 0);
  const dialogs = [];
  lines.forEach(l => {
    if (l.toLowerCase().includes("deniz") || l.startsWith("Av.")) {
      dialogs.push({ speaker: "Avukat Deniz Hanım", text: l.replace(/^[^:]+:\s*/, "") });
    } else if (l.toLowerCase().includes("can") || l.startsWith("SMMM")) {
      dialogs.push({ speaker: "Mali Müşavir Can Bey", text: l.replace(/^[^:]+:\s*/, "") });
    } else if (l.trim().length > 10) {
      dialogs.push({ speaker: "Uzman Yorumu", text: l });
    }
  });
  return dialogs.length > 0 ? dialogs : [
    { speaker: "Avukat Deniz Hanım", text: text.slice(0, 300) }
  ];
}

function generateLocalPodcastScript(notes) {
  return "Av. Deniz Hanım: Can Bey merhaba, bugün kooperatif camiasında çok merak edilen bu konuyu ele alıyoruz: " + notes.slice(0, 100) + "...\n\n" +
    "SMMM Can Bey: Deniz Hanım gerçekten çok önemli bir başlık. 1163 sayılı Kooperatifler Kanunu ve güncel mevzuat hükümleri çerçevesinde yöneticilerin ve denetçilerin bu kurallara harfiyen uyması gerekiyor.\n\n" +
    "Av. Deniz Hanım: Peki Can Bey, sahada yapılan en kritik hata nedir ve yasal yaptırımı nasıl işliyor?\n\n" +
    "SMMM Can Bey: En büyük hata yasal hak düşürücü sürelerin kaçırılması ve kararların usulüne uygun tescil ettirilmemesidir. Bu durum hem genel kurul kararlarının hükümsüzlüğüne hem de yöneticilerin TCK m. 257 kapsamında cezai sorumluluğuna yol açabilir.\n\n" +
    "Av. Deniz Hanım: Çok teşekkür ederiz Can Bey, bir sonraki yayınımızda yeni bir kooperatif reformunu incelemeye devam edeceğiz.";
}

// ================= ÜCRETSİZ & KEYLESS YAPAY ZEKA ASİSTANI (AI & RAG) =================
function initAiAssistant() {
  const fab = document.getElementById("wiki-ai-fab");
  const modal = document.getElementById("wiki-ai-modal");
  const closeBtn = document.getElementById("wiki-ai-modal-close");
  const sendBtn = document.getElementById("wiki-ai-send-btn");
  const input = document.getElementById("wiki-ai-input");
  const messagesBox = document.getElementById("wiki-ai-messages");
  const chips = document.querySelectorAll(".wiki-ai-prompt-chip");
  const summarizeBtn = document.getElementById("btn-ai-summarize-article");

  if (!fab || !modal) return;

  fab.addEventListener("click", () => {
    modal.style.display = modal.style.display === "none" ? "flex" : "none";
    if (modal.style.display === "flex" && input) {
      input.focus();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const p = chip.getAttribute("data-prompt");
      if (p && input) {
        input.value = p;
        handleSendMessage();
      }
    });
  });

  if (sendBtn) {
    sendBtn.addEventListener("click", handleSendMessage);
  }

  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    });
  }

  if (summarizeBtn) {
    summarizeBtn.addEventListener("click", handleSummarizeArticle);
  }

  async function handleSendMessage() {
    const query = input.value.trim();
    if (!query) return;

    appendMessage("user", query);
    input.value = "";

    const loadingId = "ai-msg-loading-" + Date.now();
    appendMessage("bot", '<div style="display:flex; align-items:center; gap:8px;"><span>⚡</span> <em>Kooperatif mevzuatı taranıyor ve yapay zeka yanıtlıyor...</em></div>', loadingId);

    try {
      const answer = await askAiLegalAdvisor(query);
      const loadingEl = document.getElementById(loadingId);
      if (loadingEl) {
        loadingEl.innerHTML = formatAiResponse(answer);
      }
    } catch (err) {
      const loadingEl = document.getElementById(loadingId);
      if (loadingEl) {
        loadingEl.innerHTML = formatAiResponse(generateLocalRagAnswer(query));
      }
    }

    if (messagesBox) messagesBox.scrollTop = messagesBox.scrollHeight;
  }

  function appendMessage(role, content, id = null) {
    if (!messagesBox) return;
    const msg = document.createElement("div");
    msg.className = `wiki-ai-msg ${role}`;
    if (id) msg.id = id;
    msg.innerHTML = content;
    messagesBox.appendChild(msg);
    messagesBox.scrollTop = messagesBox.scrollHeight;
  }
}

function formatAiResponse(text) {
  if (window.marked && typeof window.marked.parse === "function") {
    return window.marked.parse(text);
  }
  return String(text).replace(/\n/g, "<br>");
}

async function handleSummarizeArticle() {
  const currentId = state.currentArticleId;
  const currentArt = ARTICLES_REGISTRY.find(a => a.id === currentId) || { title: "Makale" };
  const summaryArea = document.getElementById("article-ai-summary-area");
  if (!summaryArea) return;

  summaryArea.style.display = "block";
  summaryArea.innerHTML = `
    <div class="wiki-ai-summary-banner">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
        <strong style="color: #6d28d9; font-size: 14px;">✨ Yapay Zeka Yönetici Özeti: ${currentArt.title}</strong>
        <span style="font-size: 11px; color: var(--wiki-text-muted);">Ücretsiz & Keyless AI</span>
      </div>
      <div id="ai-summary-text" style="font-size: 13px; line-height: 1.6;">
        <em>⚡ Makale analiz ediliyor ve kilit hukuki noktalar çıkarılıyor...</em>
      </div>
    </div>
  `;

  const rawArticleContent = (window.WIKI_ARTICLES_BUNDLE && window.WIKI_ARTICLES_BUNDLE[currentId]) || "";
  const prompt = `Aşağıdaki Türk kooperatifçilik ansiklopedi makalesini yöneticiler ve denetçiler için 3-4 kilit maddede, net, yasal süreleri ve cezai riskleri vurgulayarak özetle:\n\nBaşlık: ${currentArt.title}\n\nİçerik:\n${rawArticleContent.slice(0, 3000)}`;

  try {
    let summary = "";
    if (window.puter && window.puter.ai && typeof window.puter.ai.chat === "function") {
      const res = await window.puter.ai.chat(prompt, { model: "gpt-4o-mini" });
      summary = (res && res.message && res.message.content) || (res && res.text) || String(res);
    } else {
      summary = generateLocalSummary(rawArticleContent, currentArt.title);
    }
    const textEl = document.getElementById("ai-summary-text");
    if (textEl) {
      textEl.innerHTML = formatAiResponse(summary);
    }
  } catch (err) {
    const textEl = document.getElementById("ai-summary-text");
    if (textEl) {
      textEl.innerHTML = formatAiResponse(generateLocalSummary(rawArticleContent, currentArt.title));
    }
  }
}

async function askAiLegalAdvisor(query) {
  const context = buildRagContext(query);
  const systemPrompt = "Sen Türkiye Kooperatifler Ansiklopedisi'nin yapay zeka hukuk danışmanısın. " +
    "Kullanıcının sorusuna Türk kooperatif mevzuatı (1163 sayılı Kooperatifler Kanunu, 7339 ve 7579 sayılı reformlar, 7511 sayılı intibak kanunu, KOOPBİS, dış denetim, vergi muafiyeti KVK 4/1-k, Yargıtay emsal kararları) ışığında net, güvenilir, maddeler halinde ve yasal süreleri belirterek Türkçe yanıt ver.\n\n" +
    "Referans Mevzuat Bilgileri:\n" + context;

  // 1. Puter.js
  if (window.puter && window.puter.ai && typeof window.puter.ai.chat === "function") {
    try {
      const res = await window.puter.ai.chat(systemPrompt + "\n\nKullanıcı Sorusu: " + query, { model: "gpt-4o-mini" });
      const txt = (res && res.message && res.message.content) || (res && res.text) || (typeof res === "string" ? res : "");
      if (txt && txt.trim().length > 20) return txt;
    } catch (e) {
      console.warn("Puter AI çağrısı başarısız, alternatif deneniyor:", e);
    }
  }

  // 2. Pollinations.ai
  try {
    const fetchRes = await fetch("https://text.pollinations.ai/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: query }
        ],
        model: "openai"
      })
    });
    if (fetchRes.ok) {
      const json = await fetchRes.json();
      const txt = json.content || (typeof json === "string" ? json : "");
      if (txt && txt.trim().length > 20) return txt;
    }
  } catch (e) {
    console.warn("Pollinations AI çağrısı başarısız, yerel RAG motoruna geçiliyor:", e);
  }

  // 3. Yerel RAG Güvenlik Ağı
  return generateLocalRagAnswer(query);
}

function buildRagContext(query) {
  if (!window.WIKI_ARTICLES_BUNDLE) return "";
  const qLower = query.toLowerCase();
  const keys = ["intibak", "dış denetim", "dis denetim", "ihraç", "ihrac", "aidat", "7579", "iskan", "vergi", "risturn", "koopbis", "eğitim", "egitim", "tasfiye"];
  let matchedSnippets = [];

  for (const [id, content] of Object.entries(window.WIKI_ARTICLES_BUNDLE)) {
    if (typeof content !== "string") continue;
    const cLower = content.toLowerCase();
    for (const k of keys) {
      if (qLower.includes(k) && cLower.includes(k)) {
        const paragraphs = content.split("\n\n");
        for (const p of paragraphs) {
          if (p.toLowerCase().includes(k) && p.length > 80 && p.length < 800) {
            matchedSnippets.push(p);
            if (matchedSnippets.length >= 3) break;
          }
        }
      }
      if (matchedSnippets.length >= 3) break;
    }
    if (matchedSnippets.length >= 3) break;
  }
  return matchedSnippets.join("\n\n---\n\n");
}

function generateLocalRagAnswer(query) {
  const q = query.toLowerCase();

  if (q.includes("intibak") || q.includes("son tarih")) {
    return "### 🚨 Anasözleşme İntibakı Yasal Durumu (7511 Sayılı Kanun)\n\n" +
      "1. **Yasal Son Tarih:** **26 Ekim 2026**. (7511 sayılı Kanun ile 5 yıla uzatılmıştır).\n" +
      "2. **Yasal Yaptırım:** Bu tarihe kadar yürürlükteki tip anasözleşmeye intibak yaptırmayan kooperatifler ve üst kuruluşlar **kanun gereği kendiliğinden dağılmış (münfesih)** sayılır ve tasfiyeye girer (1163 SK Geçici m. 9).\n" +
      "3. **Genel Kurul Nisabı:** İntibak kararı genel kurulda toplantıda mevcut oyların **2/3 çoğunluğu** ile alınır.\n" +
      "4. **Prosedür:** MERSİS üzerinden anasözleşme değişiklik tasarısı oluşturulur, Bakanlık izni alınır ve tescil/ilan ettirilir.\n\n" +
      "Detaylı bilgi için: [[24_kooperatif_kurulusu_ve_anasozlesme_intibak]] maddesini inceleyebilirsiniz.";
  }

  if (q.includes("dış denetim") || q.includes("dis denetim") || q.includes("bağımsız denetim")) {
    return "### 🔍 Kooperatif Dış Denetim Kriterleri (Yönetmelik m. 15)\n\n" +
      "Aşağıdaki şartlardan **herhangi birini** taşıyan kooperatifler dış denetime tabidir:\n" +
      "1. **Satış Hasılatı:** Faaliyet konusuna bakılmaksızın yıllık net satış hasılatı **100 Milyon TL ve üzeri** olanlar.\n" +
      "2. **Ortak Sayısı:** Faaliyet konusuna bakılmaksızın ortak sayısı **2.000 ve üzeri** olanlar.\n" +
      "3. **Yapı Kooperatifleri:** Yapı ruhsatı alınmış ve ortak sayısı **100 veya üzeri** olan konut ve işyeri yapı kooperatifleri.\n" +
      "4. **Özel Kuruluşlar:** Kredi/kefalet (ESKKK), tarım satış ve tarım kredi kooperatifleri doğrudan tabidir.\n\n" +
      "**Standart & Yaptırım:** Denetim KGK'nın SBDS 2400 standardına göre yapılır. Dış denetim yaptırmayan yönetim kurulu üyeleri hakkında TCK m. 257 (görevi kötüye kullanma) kapsamında adli sorumluluk doğar ve bilanço genel kurulca ibra edilemez.\n\n" +
      "Detaylı bilgi için: [[17_dis_denetim_ve_bagimsiz_denetim]] maddesini inceleyebilirsiniz.";
  }

  if (q.includes("ihraç") || q.includes("çıkar") || q.includes("aidat")) {
    return "### ⚠️ Ortak İhracı ve Aidat Tahsili Usulü (1163 SK m. 16)\n\n" +
      "Aidat borcunu ödemeyen ortağın kooperatiften çıkarılabilmesi için emredici yasal prosedür:\n" +
      "1. **İki Ayrı Noter İhtarı:** Borcunu ödemeyen ortağa noter kanalıyla en az **1'er aylık süre** verilerek **2 ayrı ihtarname** gönderilmelidir.\n" +
      "2. **Borç Dökümü Zorunluluğu:** İhtarnamede borcun dönemleri, anapara ve yasal faiz ayrımı açıkça gösterilmeli; ihtar masrafları eklenmelidir.\n" +
      "3. **Yasal Faiz Tavanı:** TBK m. 120 uyarınca aidat gecikme faizi yasal temerrüt faizinin 2 katını aşamaz (Yargıtay HGK kararları).\n" +
      "4. **Yönetim Kurulu Kararı:** İkinci ihtardan sonraki 1 aylık süre dolmadan ihraç kararı alınamaz.\n" +
      "5. **Mahkeme İptal Davası:** İhraç edilen ortağın kararın tebliğinden itibaren **3 ay içinde** Asliye Ticaret Mahkemesinde iptal davası açma hakkı vardır. Dava süresince ortaklık hakları askıda kalır.\n\n" +
      "Dilekçe ve ihtar şablonu için: [[30_interaktif_hesaplama_ve_karar_destek_araclari]] bölümünü kullanabilirsiniz.";
  }

  if (q.includes("7579") || q.includes("iskan") || q.includes("tapu devri") || q.includes("mülkiyet")) {
    return "### 🏗️ 7579 Sayılı Kanun Reformu: İskansız Tapu Devri Yasağı\n\n" +
      "1. **Mülkiyet Devri Kısıtı:** Yapı kooperatiflerinde **Yapı Kullanma İzin Belgesi (İskan)** alınmadan noter satış vaadi veya tapuda ferdi mülkiyet devri yapılması KESİNLİKLE YASAKTIR.\n" +
      "2. **Mahalli İdareler Kısıtı:** Belediyelerin ve bağlı kuruluşlarının kooperatif kurması veya ortak olması **Cumhurbaşkanı iznine** bağlanmıştır (1163 SK Ek m. 6).\n" +
      "3. **Hobi Bahçesi Satış Yasağı:** 5403 SK m. 23 ve 7584 SK gereği tarım arazilerinin kooperatif hissesi devriyle hobi bahçesi olarak bölünmesi mutlak butlanla geçersizdir; kaçak yapılar yıkılır ve TCK m. 184 uygulanır.\n\n" +
      "Detaylı bilgi için: [[12_konut_yapi_kooperatifleri_ve_tapu_mevzuati]] maddesini inceleyebilirsiniz.";
  }

  if (q.includes("eğitim") || q.includes("egitim") || q.includes("40 saat")) {
    return "### 🎓 Zorunlu Kooperatifçilik Eğitimi (40 Saat)\n\n" +
      "1. **Kapsam:** Yıllık 20M TL ciro, 1.000 ortak eşiğini aşan kooperatifler ile 50+ ortaklı yapı ve motorlu taşıyıcı kooperatiflerinin Yönetim ve Denetim Kurulu asıl üyeleri.\n" +
      "2. **Süre:** Seçildikleri tarihten itibaren en geç **9 ay içinde** 40 saatlik eğitimi tamamlamalıdırlar.\n" +
      "3. **YALANLANAN EFSANE (Muafiyet Yoktur):** Üniversitelerin Hukuk veya İktisat fakültelerinden mezun olmak ya da Avukat/SMMM olmak **MUAFİYET SAĞLAMAZ**.\n" +
      "4. **Yaptırım:** 9 ayda eğitimi tamamlamayanların yöneticilik sıfatı kanun gereği kendiliğinden düşer.\n\n" +
      "Detaylı bilgi için: [[16_zorunlu_kooperatifcilik_egitimi_rehberi]] maddesini inceleyebilirsiniz.";
  }

  if (q.includes("vergi") || q.includes("muafiyet") || q.includes("risturn") || q.includes("kurumlar")) {
    return "### 💰 Kooperatiflerde Kurumlar Vergisi Muafiyetinin 4 Altın Şartı (KVK m. 4/1-k)\n\n" +
      "1. Sermaye üzerinden kazanç dağıtılmaması.\n" +
      "2. Yönetim ve denetim kurulu üyelerine kazanç üzerinden pay verilmemesi.\n" +
      "3. Yedek akçelerin ortaklara dağıtılmaması.\n" +
      "4. Münhasıran ortaklarla iş yapılması (ortak içi işlem kuralı).\n\n" +
      "**7061 Sayılı Kanun Reformu:** Kooperatif ortak dışı işlem yapsa dahi tüm muafiyetini kaybetmez; yalnızca ortak dışı işlemler dolayısıyla bağlı bir **İktisadi İşletme** nezdinde vergilendirilir.\n\n" +
      "Detaylı bilgi için: [[18_kurumlar_vergisi_muafiyeti_ve_risturn]] maddesini inceleyebilirsiniz.";
  }

  return "Sorunuzla ilgili mevzuat taraması yapılmıştır. Türk kooperatifçilik hukukunda (1163 SK, 7339 SK ve ilgili yönetmelikler):\n" +
    "- Yönetim ve denetim kurullarının aldığı kararların kanunun emredici hükümlerine ve tip anasözleşmeye uygun olması şarttır.\n" +
    "- KOOPBİS sistemine kayıt ve bildirim yükümlülüklerinin ihmali TCK m. 257 kapsamında idari ve adli sorumluluk doğurur.\n" +
    "- Konuyla ilgili detaylı rehberlerimize sol menüden veya üst arama kutusundan doğrudan ulaşabilirsiniz.";
}

function generateLocalSummary(content, title) {
  return "### 📌 " + title + " - Yönetici Özeti\n\n" +
    "- **Temel Yasal Kapsam:** 1163 sayılı Kooperatifler Kanunu ve ilgili Bakanlık yönetmelikleri çerçevesinde emredici kuralları içerir.\n" +
    "- **Kritik Süreç ve Süreler:** İlgili organ kararları, bildirimler ve tescil işlemleri için yasal hak düşürücü sürelere dikkat edilmelidir.\n" +
    "- **Cezai ve İdari Yaptırımlar:** Yükümlülüklerin yerine getirilmemesi durumunda görevi kötüye kullanma (TCK m. 257) ve kararların mutlak butlanla hükümsüzlüğü riski bulunmaktadır.";
}


