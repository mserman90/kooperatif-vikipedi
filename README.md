# Kooperatifler Wikipediası (Cooperative Wikipedia)

Türkiye ve Uluslararası Kooperatifçilik Hukuku, Yönetimi ve Finansmanı Açık Bilgi Bankası ve Ansiklopedisi.

---

## 🌟 Proje Mimarisi ve Standartları

Bu proje, MediaWiki ve çağdaş ansiklopedik tasarım standartları (**Wikipedia Vector 2022**) gözetilerek inşa edilmiştir.

### 📚 İçerik Matrisi (`articles/`)
1. **`00_ana_sayfa.md`**: Ansiklopedi Portalı, Haftanın Seçkin Maddesi, Tematik Alanlar ve İstatistikler.
2. **`01_turkiye_kooperatifcilik_hukuku_ve_tarihcesi.md`**: Memleket Sandıkları (1863), Menafi Sandıkları (1883), Ziraat Bankası, Cumhuriyet dönemi yasaları (498, 2834, 2836 SK), 1961/1982 Anayasaları ve 2021 reformları.
3. **`02_1163_sayili_kooperatifler_kanunu.md`**: 1163 sayılı Temel Kanun; organlar, genel kurul, yönetim/denetim, Bakanlık denetimi ve tasfiye.
4. **`03_tarim_kooperatifleri_ve_birlikleri.md`**: 1581 SK (TKK), 4572 SK (TSKB), Sulama (6172/6200), Su Ürünleri (1380), ORKÖY (6831/4734), Tarımsal Derecelendirme (Yön. 40451) ve Hazine faiz sübvansiyonları.
5. **`04_tarim_disi_kooperatifler.md`**: Konut Yapı (7579 SK mülkiyet devri yasağı, TOKİ), ESKKK (4603/5362, Tapu m. 26 ipotek kolaylığı), Kadın Girişimi (KOOP-DES %90 hibe, Belediye K. m. 75), Motorlu Taşıyıcılar ve OSB İştirakçiliği.
6. **`05_kooperatif_mali_ve_vergi_hukuku.md`**: Kurumlar Vergisi (5520 SK m. 4/1-k), 4 muafiyet şartı, Risturn müessesesi, KDV Geçici m. 15, Damga ve Emlak vergisi istisnaları, SPK 500+ ortak eşiği.
7. **`06_yonetim_denetim_ve_dijitallesme_koopbis.md`**: KOOPBİS (Yön. 39276), 40 saatlik zorunlu eğitim (Yön. 39278), Dış Denetim (Yön. 39331), e-Genel Kurul (Yön. 39279) ve 3628 SK Mal Bildirimi.
8. **`07_uluslararasi_kooperatifcilik_ilkeleri_ica.md`**: Rochdale Öncüleri (1844), ICA 1995 Manchester 7 Evrensel İlkesi, Türk Kanunu ile mukayese tablosu, ILO 193 Tavsiye Kararı ve AB SCE Tüzüğü.
9. **`08_mevzuat_kulliyati_ve_dizin.md`**: Yürürlükteki tüm Kanunlar, Cumhurbaşkanı Kararları, Yönetmelikler ve Tebliğlerin normlar hiyerarşisine göre tam fihristi.

---

## 🚀 Çalıştırma ve Kullanım

### 1. Doğrudan Tarayıcıda Açma (Sıfır Kurulum)
`index.html` dosyasına çift tıklayarak herhangi bir tarayıcıda doğrudan açabilirsiniz. `articles_bundle.js` sayesinde internet veya yerel sunucu bağlantısı olmasa bile tüm ansiklopedi tam metin aramasıyla birlikte çalışır.

### 2. Yerel HTTP Sunucusu ile Açma (Önerilen)
PowerShell üzerinden proje dizininde şu komutlardan birini çalıştırabilirsiniz:

```bash
# Python ile:
python -m http.server 8080

# veya Node.js / npx ile:
npx serve .
```
Ardından tarayıcınızda `http://localhost:8080` adresini açınız.

---

## 🎨 Tasarım ve Arayüz Özellikleri
* **Wikipedia Vector Teması:** Bilgi kutuları (Infobox), içindekiler (TOC), ansiklopedik tipografi.
* **Canlı Tam Metin Arama:** Başlıklar ve makale gövdelerinde gerçek zamanlı snippet eşleştirmesi.
* **Dinamik Rota ve Geçmiş (Hash Router):** `#02_1163_sayili_kooperatifler_kanunu` gibi doğrudan bağlantılar ve tarayıcı ileri/geri tuşu desteği.
* **Gece / Gündüz Modu & Yazı Boyutu Ayarı:** Tercihler yerel depolamada (`localStorage`) saklanır.
* **Yazdırma Stili:** Sayfaları doğrudan mevzuat bilgi notu veya PDF olarak yazdırmaya hazır biçimlendirme.
