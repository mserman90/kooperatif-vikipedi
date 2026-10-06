# Kooperatif Karar Destek, Hesaplama ve Resmi Belge Sihirbazları

**Kooperatif Karar Destek Merkezi**, kooperatif yönetim ve denetim kurullarının, mali müşavirlerin ve ortakların en sık karşılaştığı idari, mali ve cezai riskleri bertaraf etmek amacıyla geliştirilmiş interaktif araçlar bütünüdür. Aşağıdaki modülleri kullanarak yasal denetim yükümlülüklerinizi sorgulayabilir, genel kurul çağrı takviminizi hatasız oluşturabilir, yasal faiz sınırlarını denetleyebilir ve resmi dilekçelerinizi saniyeler içinde hazırlayabilirsiniz.

---

<div class="wiki-toc">
  <div class="wiki-toc-title">İçindekiler</div>
  <ol>
    <li><a href="#1-dis-denetim-ve-zorunlu-egitim-uygunluk-sihirbazi">Dış Denetim & Zorunlu Eğitim Uygunluk Sihirbazı</a></li>
    <li><a href="#2-genel-kurul-yasal-cagri-ve-sure-takvimi-hesaplayici">Genel Kurul Yasal Çağrı ve Süre Takvimi Hesaplayıcı</a></li>
    <li><a href="#3-yasal-gecikme-zammi-ve-aidat-faizi-hesaplayici">Yasal Gecikme Zammı ve Aidat Faizi Hesaplayıcı (TBK m. 88 & 120)</a></li>
    <li><a href="#4-bakanlik-temsilcisi-talep-dilekcesi-sihirbazi">Bakanlık Temsilcisi (Hükümet Komiseri) Talep Dilekçesi Sihirbazı</a></li>
    <li><a href="#5-ihrac-ihtarnamesi-1-ve-2-ihtar-sihirbazi">1163 SK m. 16 İhraç İhtarnamesi Oluşturucu</a></li>
    <li><a href="#6-yasal-dayanaklar-ve-onemli-hatirlatmalar">Yasal Dayanaklar ve Önemli Hatırlatmalar</a></li>
  </ol>
</div>

---

## 1. Dış Denetim & Zorunlu Eğitim Uygunluk Sihirbazı

Kooperatif ve Üst Kuruluşlarının Denetimine Dair Yönetmelik (m. 15) ve Kooperatifçilik Eğitimi Yönetmeliği uyarınca kooperatifinizin güncel yasal statüsünü anında öğrenin:

<div class="wiki-tool-card" id="audit-wizard-card">
  <div class="wiki-tool-header">
    <div style="font-size: 17px; font-weight: 700; color: var(--wiki-text);">🔍 Yasal Uyum ve Denetim Teşhis Aracı</div>
    <div style="font-size: 13px; color: var(--wiki-text-muted);">Parametreleri giriniz; sistem yasal sonuçları anında üretecektir.</div>
  </div>

  <div class="wiki-form-grid" style="margin-top: 16px;">
    <div class="wiki-form-group">
      <label for="w-coop-type">Kooperatif Türü:</label>
      <select id="w-coop-type" class="wiki-input">
        <option value="yapi">Konut / İşyeri Yapı Kooperatifi</option>
        <option value="tarim">Tarımsal Kalkınma / Sulama / Su Ürünleri</option>
        <option value="eskkk">Esnaf ve Sanatkarlar Kredi ve Kefalet (ESKKK)</option>
        <option value="tarim_kredi">Tarım Kredi / Tarım Satış Kooperatifi</option>
        <option value="ulasim">Motorlu Taşıyıcılar (Ulaşım) Kooperatifi</option>
        <option value="kadin">Kadın Girişimi Üretim ve İşletme Kooperatifi</option>
        <option value="diger">Tüketim / İşletme / Hizmet / Diğer</option>
      </select>
    </div>

    <div class="wiki-form-group">
      <label for="w-member-count">Aktif Ortak Sayısı:</label>
      <input type="number" id="w-member-count" class="wiki-input" placeholder="Örn: 120" value="120" min="1">
    </div>

    <div class="wiki-form-group">
      <label for="w-revenue">Son Hesap Dönemi Net Satış Hasılatı (TL):</label>
      <input type="number" id="w-revenue" class="wiki-input" placeholder="Örn: 25000000" value="25000000" min="0">
    </div>

    <div class="wiki-form-group" id="w-building-permit-group">
      <label for="w-building-permit">İnşaat / Yapı Ruhsatı Durumu (Yapı Kooperatifleri için):</label>
      <select id="w-building-permit" class="wiki-input">
        <option value="yes">Yapı ruhsatı alındı (İnşaat devam ediyor / iskan alınmadı)</option>
        <option value="no">Henüz ruhsat alınmadı veya ferdi mülkiyete geçildi</option>
      </select>
    </div>
  </div>

  <div style="margin-top: 16px;">
    <button id="btn-run-audit-wizard" class="wiki-btn-primary">📊 Uygunluk Durumunu Analiz Et</button>
  </div>

  <div id="audit-wizard-result" style="display: none; margin-top: 20px;" class="wiki-result-panel">
    <!-- Sonuç Dinamik Yüklenir -->
  </div>
</div>

---

## 2. Genel Kurul Yasal Çağrı ve Süre Takvimi Hesaplayıcı

1163 sayılı Kanun m. 45 ve ilgili mevzuat uyarınca genel kurul toplantısının iptal edilmemesi için çağrı ve ilan sürelerinin gün gün hatasız işletilmesi şarttır. Hedef toplantı tarihinizi seçiniz:

<div class="wiki-tool-card" id="gk-timeline-card">
  <div class="wiki-tool-header">
    <div style="font-size: 17px; font-weight: 700; color: var(--wiki-text);">📅 Genel Kurul Yasal Süreç ve Geri Sayım Planlayıcı</div>
    <div style="font-size: 13px; color: var(--wiki-text-muted);">Toplantı gününü belirleyiniz; geriye ve ileriye dönük yasal zorunlu takvim üretilsin.</div>
  </div>

  <div class="wiki-form-grid" style="margin-top: 16px;">
    <div class="wiki-form-group">
      <label for="gk-date">Planlanan Genel Kurul Tarihi:</label>
      <input type="date" id="gk-date" class="wiki-input">
    </div>
    <div class="wiki-form-group">
      <label for="gk-type">Toplantı Türü:</label>
      <select id="gk-type" class="wiki-input">
        <option value="olagan">Olağan Genel Kurul (Yıllık)</option>
        <option value="olaganustu">Olağanüstü Genel Kurul</option>
        <option value="birlestirilmis">Birleştirilmiş Genel Kurul (Üst Kuruluşa Ortaklar için Azami 3 Yıl)</option>
      </select>
    </div>
  </div>

  <div style="margin-top: 16px;">
    <button id="btn-calc-gk-timeline" class="wiki-btn-primary">🗓️ Yasal Takvimi Çıkar</button>
  </div>

  <div id="gk-timeline-result" style="display: none; margin-top: 20px;" class="wiki-result-panel">
    <!-- Takvim Dinamik Yüklenir -->
  </div>
</div>

---

## 3. Yasal Gecikme Zammı ve Aidat Faizi Hesaplayıcı

Kooperatif anasözleşmelerinde veya genel kurul kararlarında %5, %10 gibi fahiş aylık gecikme cezaları yazılmış olsa dahi; **Yargıtay Hukuk Genel Kurulu ve 23. Hukuk Dairesi yerleşik içtihatları** gereğince Türk Borçlar Kanunu (TBK) m. 88 ve 120 sınırları emredicidir. Yasal sınırı aşan faizler mutlak butlanla geçersizdir.

<div class="wiki-tool-card" id="interest-calculator-card">
  <div class="wiki-tool-header">
    <div style="font-size: 17px; font-weight: 700; color: var(--wiki-text);">⚖️ Yasal Aidat Gecikme Faizi ve Tavan Denetimi</div>
    <div style="font-size: 13px; color: var(--wiki-text-muted);">TBK m. 88 ve m. 120 (Yasal temerrüt faizinin azami 2 katı) kriterine göre hesaplar.</div>
  </div>

  <div class="wiki-form-grid" style="margin-top: 16px;">
    <div class="wiki-form-group">
      <label for="i-principal">Geciken Aidat / Asıl Alacak Tutarı (TL):</label>
      <input type="number" id="i-principal" class="wiki-input" placeholder="Örn: 5000" value="5000" min="1">
    </div>
    <div class="wiki-form-group">
      <label for="i-due-date">Vade Tarihi (Son Ödeme Günü):</label>
      <input type="date" id="i-due-date" class="wiki-input">
    </div>
    <div class="wiki-form-group">
      <label for="i-pay-date">Fiili Ödeme veya Hesap Tarihi:</label>
      <input type="date" id="i-pay-date" class="wiki-input">
    </div>
    <div class="wiki-form-group">
      <label for="i-claimed-rate">Anasözleşme / Genel Kurulda Kararlaştırılan Aylık Faiz Oranı (%):</label>
      <input type="number" id="i-claimed-rate" class="wiki-input" placeholder="Örn: 5" value="5" step="0.1" min="0">
    </div>
  </div>

  <div style="margin-top: 16px;">
    <button id="btn-calc-interest" class="wiki-btn-primary">🧮 Yasal Faizi ve Tavan Aşımını Hesapla</button>
  </div>

  <div id="interest-calc-result" style="display: none; margin-top: 20px;" class="wiki-result-panel">
    <!-- Faiz Sonucu Dinamik Yüklenir -->
  </div>
</div>

---

## 4. Bakanlık Temsilcisi Talep Dilekçesi Sihirbazı

1163 sayılı Kanun ek 3. maddesi gereğince genel kurul toplantısından **en az 15 gün önce** ilgili Bakanlık İl Müdürlüğü'ne yazılı müracaat yapılarak temsilci istenmesi zorunludur. Temsilcisiz yapılan genel kurullar kanun gereği yok hükmündedir.

<div class="wiki-tool-card" id="petition-rep-card">
  <div class="wiki-tool-header">
    <div style="font-size: 17px; font-weight: 700; color: var(--wiki-text);">🏛️ Bakanlık Temsilcisi İsteme Dilekçesi Üretici</div>
    <div style="font-size: 13px; color: var(--wiki-text-muted);">Bilgileri doldurunuz; resmi dilekçe anında A4 formatında oluşturulacaktır.</div>
  </div>

  <div class="wiki-form-grid" style="margin-top: 16px;">
    <div class="wiki-form-group">
      <label for="p-ministry">İlgili Bakanlık İl Müdürlüğü:</label>
      <select id="p-ministry" class="wiki-input">
        <option value="ticaret">Ticaret İl Müdürlüğü (Konut/İşyeri Yapı, Tüketim, ESKKK, Ulaşım vb.)</option>
        <option value="tarim">Tarım ve Orman İl Müdürlüğü (Tarımsal Kalkınma, Sulama, Su Ürünleri)</option>
        <option value="cevre">Çevre, Şehircilik ve İklim Değişikliği İl Müdürlüğü (Yapı Koop. İskan Aşaması)</option>
      </select>
    </div>
    <div class="wiki-form-group">
      <label for="p-city">İl / Valilik:</label>
      <input type="text" id="p-city" class="wiki-input" placeholder="Örn: ANKARA" value="ANKARA">
    </div>
    <div class="wiki-form-group">
      <label for="p-coop-name">Kooperatif Tam Ticaret Unvanı:</label>
      <input type="text" id="p-coop-name" class="wiki-input" placeholder="Örn: S.S. ÖRNEK KONUT YAPI KOOPERATİFİ" value="S.S. ÖRNEK KONUT YAPI KOOPERATİFİ">
    </div>
    <div class="wiki-form-group">
      <label for="p-reg-no">Ticaret Sicil No & MERSİS No:</label>
      <input type="text" id="p-reg-no" class="wiki-input" placeholder="Sicil: 123456 / MERSİS: 0123456789000001" value="Sicil: 123456 / MERSİS: 0123456789000001">
    </div>
    <div class="wiki-form-group">
      <label for="p-meeting-date">Toplantı Tarihi ve Saati:</label>
      <input type="text" id="p-meeting-date" class="wiki-input" placeholder="Örn: 20 Haziran 2026 Cumartesi Saat: 14:00" value="20 Haziran 2026 Cumartesi Saat: 14:00">
    </div>
    <div class="wiki-form-group">
      <label for="p-meeting-place">Toplantı Adresi / Yeri:</label>
      <input type="text" id="p-meeting-place" class="wiki-input" placeholder="Örn: Kooperatif Merkezi Toplantı Salonu (Adres No: 15 Çankaya/Ankara)" value="Kooperatif Merkezi Toplantı Salonu (Adres No: 15 Çankaya/Ankara)">
    </div>
  </div>

  <div style="margin-top: 16px;">
    <button id="btn-generate-rep-petition" class="wiki-btn-primary">📝 Resmi Dilekçeyi Oluştur</button>
  </div>

  <div id="petition-rep-output" style="display: none; margin-top: 20px;" class="wiki-result-panel">
    <!-- Dilekçe Metni Dinamik Yüklenir -->
  </div>
</div>

---

## 5. 1163 SK m. 16 İhraç İhtarnamesi Oluşturucu

Kooperatiften ortak ihracında en çok yapılan usul hatası, borcun dökümlü yazılmaması ve iki ayrı 1'er aylık ödeme süresinin tek ihtarda veya usulsüz sürelerle verilmesidir. Aşağıdaki sihirbaz ile Yargıtay'ın iptal etmeyeceği **1. İhtarname** ve **2. İhtarname** metinlerini üretebilirsiniz:

<div class="wiki-tool-card" id="expulsion-wizard-card">
  <div class="wiki-tool-header">
    <div style="font-size: 17px; font-weight: 700; color: var(--wiki-text);">⚠️ Noter İhraç İhtarnamesi Sihirbazı (1163 SK m. 16)</div>
    <div style="font-size: 13px; color: var(--wiki-text-muted);">Yasal süreler, faiz sınırları ve ihraç uyarılarını eksiksiz içeren resmi ihtar metni.</div>
  </div>

  <div class="wiki-form-grid" style="margin-top: 16px;">
    <div class="wiki-form-group">
      <label for="exp-stage">İhtar Aşaması:</label>
      <select id="exp-stage" class="wiki-input">
        <option value="first">1. İhtarname (Ödemeye Davet ve 1 Aylık Yasal Süre)</option>
        <option value="second">2. İhtarname (Son 1 Aylık Kesin Süre ve İhraç İhtarı)</option>
      </select>
    </div>
    <div class="wiki-form-group">
      <label for="exp-member-name">Muhatap Ortağın Adı Soyadı & TC Kimlik No:</label>
      <input type="text" id="exp-member-name" class="wiki-input" placeholder="Örn: Ahmet YILMAZ (TC: 12345678901)" value="Ahmet YILMAZ (TC: 12345678901)">
    </div>
    <div class="wiki-form-group">
      <label for="exp-debt-detail">Ödenmemiş Aidat Dönemleri ve Asıl Borç (TL):</label>
      <input type="text" id="exp-debt-detail" class="wiki-input" placeholder="Örn: 2026 Ocak, Şubat, Mart ayları aidatı toplamı: 15.000 TL" value="2026 Ocak, Şubat, Mart ayları aidatı toplamı: 15.000 TL">
    </div>
    <div class="wiki-form-group">
      <label for="exp-iban">Kooperatif Resmi Banka Hesap Numarası / IBAN:</label>
      <input type="text" id="exp-iban" class="wiki-input" placeholder="Örn: TR12 0001 0000 0000 0000 0000 00 (Ziraat Bankası)" value="TR12 0001 0000 0000 0000 0000 00 (Ziraat Bankası)">
    </div>
  </div>

  <div style="margin-top: 16px;">
    <button id="btn-generate-exp-notice" class="wiki-btn-primary">📜 Noter İhtarnamesini Oluştur</button>
  </div>

  <div id="exp-notice-output" style="display: none; margin-top: 20px;" class="wiki-result-panel">
    <!-- İhtar Metni Dinamik Yüklenir -->
  </div>
</div>

---

## 6. Yasal Dayanaklar ve Önemli Hatırlatmalar

> [!IMPORTANT]
> **Emredici Kural Hatırlatması:**
> 1. **Dış Denetim:** Kapsamda olup da dış denetim yaptırmayan kooperatiflerin yönetim kurulu üyeleri Türk Ceza Kanunu m. 257 (görevi kötüye kullanma) ve 1163 SK ek m. 2 kapsamında cezai sorumluluk altındadır. Dış denetim raporu genel kurula sunulmadan bilanço ve gelir tablosu ibra edilemez.
> 2. **Zorunlu Eğitim:** Şartları taşıyan kooperatiflerin yönetim ve denetim kurulu üyeleri, seçildikleri tarihten itibaren **en geç 9 ay içinde** 40 saatlik eğitimi tamamlamalıdır. Tamamlamayanların üyeliği kanun gereği kendiliğinden düşer.
> 3. **Bakanlık Temsilcisi:** 1163 sayılı Kanun ek 3. maddesi uyarınca Bakanlık temsilcisi katılmaksızın yapılan genel kurul toplantılarında alınan kararlar **hükümsüzdür (mutlak butlan)**.
> 4. **Anasözleşme İntibakı (7511 SK):** Son tarih **26 Ekim 2026**'dır. İntibak yaptırmayan kooperatifler münfesih sayılarak doğrudan tasfiyeye girecektir.
