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
    id: "26_interaktif_mevzuat_atolyesi_ve_studio",
    title: "Etkileşimli Mevzuat Atölyesi: Quiz, Bilgi Kartları, Slaytlar ve Podcast",
    shortTitle: "🧠 Etkileşimli Atölye & Quiz (Studio)",
    category: "Studio & İnteraktif",
    file: "articles/26_interaktif_mevzuat_atolyesi_ve_studio.md"
  }
];

// Uygulama Durumu
const state = {
  currentArticleId: "00_ana_sayfa",
  articlesCache: {},
  theme: localStorage.getItem("wiki_theme") || "light",
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
  }
];

// ================= FLASHCARDS BİLGİ KARTLARI (12 Kart) =================
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
    back: "1163, 1581 ve 4572 sayılı kanunlara tabi kooperatif ve birliklerin Yönetim ve Denetim Kurulu asil üyeleri için zorunludur. Seçimden itibaren 9 ay içinde tamamlanmalıdır."
  },
  {
    front: "Tarım Arazilerinde Kooperatif Hissesiyle Hobi Bahçesi Satışı Neden Geçersizdir?",
    back: "5403 sayılı Kanun m. 23 ve 7584 sayılı Kanun gereği tarım arazilerini bölmeye yönelik hisse satışları mutlak butlanla geçersizdir. Yapılar yıkılır ve TCK m. 184 uygulanır."
  },
  {
    front: "Dış Denetim Kapsamında SBDS 2400 Standardının Rolü Nedir?",
    back: "Bağımsız denetçiler ve birlik dış denetçileri, Kamu Gözetimi Kurumu (KGK) tarafından yayımlanan Sınırlı Bağımsız Denetim Standardı (SBDS 2400) kıyasen uygulama esaslarına göre denetim yapar."
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
    front: "Kooperatiflerde İntibak Yaptırmamanın Sonucu Nedir?",
    back: "1163 sayılı Kanun Geçici 9. madde gereğince yasal sürede örnek anasözleşmeye intibak yaptırmayan kooperatifler kanun gereği kendiliğinden dağılmış (infisah etmiş) sayılır."
  }
];

// Yardımcı: Türkçe Metinleri ASCII Slug'a Dönüştür
function slugify(text) {
  if (!text) return "";
  return text.toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
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

  const rawHash = window.location.hash.replace(/^#/, "").trim();
  
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

  // 2. Durum: Makale + Bölüm Birleşik Hash
  const splitMatch = rawHash.match(/^([0-9]{2}_[a-z0-9_]+)([:/])(.+)$/i);
  if (splitMatch) {
    const targetArtId = splitMatch[1];
    const targetSection = splitMatch[3];
    const art = ARTICLES_REGISTRY.find(a => a.id === targetArtId);
    if (art) {
      loadArticle(art.id, targetSection);
      return;
    }
  }

  // 3. Durum: Sayfa İçi Bölüm Başlığı (TOC veya Anchor)
  const targetElement = document.getElementById(rawHash) || 
                        document.querySelector(`[data-slug="${rawHash}"]`) ||
                        document.querySelector(`[data-slug="${slugify(rawHash)}"]`);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  // 4. Durum: Eşleşmeyen hash
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

    // Varsa Mermaid diyagramlarını render et
    if (window.mermaid) {
      window.mermaid.run({
        nodes: container.querySelectorAll(".mermaid")
      });
    }

    // Bölüme kaydırma veya sayfa başına gitme
    if (scrollToSectionId) {
      setTimeout(() => {
        const target = document.getElementById(scrollToSectionId) ||
                       document.querySelector(`[data-slug="${scrollToSectionId}"]`) ||
                       document.querySelector(`[data-slug="${slugify(scrollToSectionId)}"]`);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 50);
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
      const found = ARTICLES_REGISTRY.find(a => 
        a.id.toLowerCase() === clean ||
        a.title.toLowerCase() === clean || 
        a.shortTitle.toLowerCase() === clean ||
        a.title.toLowerCase().includes(clean)
      );
      target = found ? found.id : "00_ana_sayfa";
    }
    return `<a href="#${target}" class="wiki-internal-link">${text}</a>`;
  });

  if (window.marked) {
    return window.marked.parse(processed);
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
  const headings = container.querySelectorAll("h1, h2, h3, h4");
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
      const targetHash = href.substring(1).trim();
      const isArticle = ARTICLES_REGISTRY.some(a => a.id === targetHash);
      if (isArticle) return;

      l.addEventListener("click", (e) => {
        const targetEl = document.getElementById(targetHash) ||
                         document.querySelector(`[data-slug="${targetHash}"]`) ||
                         document.querySelector(`[data-slug="${slugify(targetHash)}"]`) ||
                         document.querySelector(`[data-unicode-slug="${targetHash}"]`);
        if (targetEl) {
          e.preventDefault();
          state.isNavigatingSection = true;
          window.location.hash = `#${targetHash}`;
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
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
}
