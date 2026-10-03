# Yönetim, Denetim ve Dijitalleşme: KOOPBİS Rejimi

<div class="wiki-infobox">
  <div class="wiki-infobox-title">Kooperatiflerde Yönetim, Denetim ve Dijitalleşme</div>
  <table>
    <tr><th>Merkezi Veri Portalı</th><td>KOOPBİS (Kooperatif Bilgi Sistemi)</td></tr>
    <tr><th>Zorunlu Eğitim</th><td>40 Ders Saati (Yönetmelik 39278)</td></tr>
    <tr><th>Dış Denetim Standartları</th><td>Yönetmelik 39331 & 6434 Sayılı CBK</td></tr>
    <tr><th>E-Genel Kurul</th><td>Yönetmelik 39279 (Güvenli E-İmza)</td></tr>
    <tr><th>Mal Bildirimi</th><td>3628 Sayılı Kanun & Tebliğ 2010/1</td></tr>
    <tr><th>Yetkili Makam</th><td>Ticaret Bakanlığı / Bilgi Teknolojileri Genel Müdürlüğü</td></tr>
  </table>
</div>

**Kooperatiflerde yönetim, denetim ve dijitalleşme rejimi**, 1163 sayılı Kooperatifler Kanunu'na 7339 sayılı Kanun ile eklenen hükümler doğrultusunda hayata geçirilen, geleneksel fiziki kooperatif yönetimini şeffaf, hesap verebilir, merkezi veri tabanına bağlı (KOOPBİS) ve bağımsız denetime açık hale getiren modern idari ve hukuki yapıdır.

---

## İçindekiler
1. [Kooperatif Bilgi Sistemi (KOOPBİS - Yönetmelik 39276)](#1-kooperatif-bilgi-sistemi-koopbis---yönetmelik-39276)
2. [Yöneticiler İçin 40 Saatlik Zorunlu Eğitim (Yönetmelik 39278)](#2-yöneticiler-için-40-saatlik-zorunlu-eğitim-yönetmelik-39278)
3. [Dış Denetim ve Bağımsız Denetim Sistemi](#3-dış-denetim-ve-bağımsız-denetim-sistemi)
4. [Bağdaşmayan Görevler ve Çıkar Çatışması Yasakları](#4-bağdaşmayan-görevler-ve-çıkar-çatışması-yasakları)
5. [Elektronik Genel Kurul (e-Genel Kurul - Yönetmelik 39279)](#5-elektronik-genel-kurul-e-genel-kurul---yönetmelik-39279)
6. [Bakanlık Temsilcisi Bulundurma Zorunluluğu](#6-bakanlık-temsilcisi-bulundurma-zorunluluğu)
7. [Mal Bildiriminde Bulunulması (3628 Sayılı Kanun)](#7-mal-bildiriminde-bulunulması-3628-sayılı-kanun)
8. [Kaynakça ve Notlar](#8-kaynakça-ve-notlar)

---

## 1. Kooperatif Bilgi Sistemi (KOOPBİS - Yönetmelik 39276)

KOOPBİS, Türkiye genelindeki tüm kooperatiflerin ve üst kuruluşlarının idari, mali ve hukuki verilerinin tek bir merkezi ağ üzerinden izlendiği ulusal veri tabanıdır.

```mermaid
sequenceDiagram
    autonumber
    actor YK as Yönetim Kurulu
    participant KB as KOOPBİS Merkezi Portalı
    participant B as İlgili Bakanlık (Ticaret/Tarım)
    participant O as Ortaklar & Denetçiler

    YK->>KB: Ortak Defteri & Pay Dağılımını Yükleme
    YK->>KB: Yıllık Bilanço & Gelir Tablosunu Girme
    YK->>KB: Genel Kurul Çağrı & Hazirun Evrakını Kaydetme
    KB-->>B: Otomatik Yasal Denetim Alarmı & Risk Taraması
    KB-->>O: Şeffaf Ortak Bilgilendirme Portalı
```

* **Yasal Dayanak:** 1163 SK Ek Madde 5.
* **Yönetim Kurulunun Sorumluluğu:** Ortak kayıtları, finansal tablolar, gayrimenkuller, genel kurul kararları ve hazirun cetvellerinin sisteme işlenmesinden **Yönetim Kurulu asıl üyeleri müteselsilen sorumludur**.
* **Yaptırım:** Belirlenen sürelerde veri girişi yapmayan veya yanıltıcı bilgi giren yöneticiler hakkında adli para cezası ve idari yaptırımlar uygulanır.

---

## 2. Yöneticiler İçin 40 Saatlik Zorunlu Eğitim (Yönetmelik 39278)

<div class="wiki-thumb tright">
  <div class="wiki-thumbinner">
    <img src="assets/images/tarim_yonetim_denetim_standartlari.png" alt="Yönetim, Denetim ve Derecelendirme Standartları" />
    <div class="wiki-caption"><strong>Şekil:</strong> Yönetim kurulunun 40 saatlik zorunlu eğitimi, KOOPBİS veri girişi ve dış denetim mekanizması.</div>
  </div>
</div>

Yönetim ve denetim organlarında görev alan üyelerin kurumsal yönetim kabiliyetlerini artırmak amacıyla **en az 40 ders saatlik** eğitim mecburiyeti getirilmiştir.

* **Kapsam:** 1163, 1581 ve 4572 sayılı Kanunlara tabi kooperatiflerin yönetim ve denetim kurulu asıl ve yedek üyeleri.
* **Müfredat:** Kooperatifler Hukuku, Genel Muhasebe, Finansal Tablolar Analizi, Vergi Hukuku, KOOPBİS Kullanımı ve İdari Sorumluluklar.
* **Hukuki Sonuç (Görevin Kendiliğinden Düşmesi):** Seçimi takip eden yasal süre içerisinde eğitim belgesini temin edip KOOPBİS'e yüklemeyen üyelerin üyelik sıfatları **kanun gereği kendiliğinden sona erer**.

---

## 3. Dış Denetim ve Bağımsız Denetim Sistemi

Geleneksel olarak sadece ortaklar arasından seçilen amatör denetçiler eliyle yürütülen iç denetim, 7339 sayılı Kanun ve **39331 sayılı Yönetmelik** ile profesyonel bir dış denetim zeminine kavuşturulmuştur.

* **Dış Denetim Eşikleri (Yönetmelik 39331):** Yıllık net satış hasılatı, aktif toplamı ve ortak sayısı kriterlerinden en az ikisini aşan kooperatifler dış denetime tabidir.
* **Denetçilerin Nitelikleri:** Dış denetim;
  1. Bağımsız denetçiler,
  2. YMM veya SMMM unvanlı meslek mensupları,
  3. Bakanlıkça denetim yetkisi verilen üst birlikler veya merkez birlikleri tarafından icra edilir.
* **Bağımsız Denetim (CB Kararı 6434):** Kamu Gözetimi Kurumu (KGK) standartlarına göre belirlenen büyük ölçekli kooperatifler ise tam bağımsız denetime tabidir.

---

## 4. Bağdaşmayan Görevler ve Çıkar Çatışması Yasakları

**Tebliğ No: TGM-2011/01 (15071 Sayılı Tebliğ)** uyarınca kooperatif yöneticileri ve denetçileri için katı menfaat çatışması yasakları getirilmiştir:
* Yöneticiler ve denetçiler; kendileri, eşleri ve **üçüncü dereceye kadar (bu derece dahil) kan ve kayın hısımları** ile kooperatif arasında herhangi bir ticari alım-satım, ihale veya kiralama ilişkisine giremezler.
* Kooperatif ile aynı alanda faaliyet gösteren rakip işletmelerde yönetim veya ortaklık görevinde bulunamazlar.

---

## 5. Elektronik Genel Kurul (e-Genel Kurul - Yönetmelik 39279)

Merkezi Kayıt Kuruluşu veya Bakanlıkça onaylı güvenli elektronik altyapılar üzerinden yürütülen genel kurullardır.
1. Toplantı çağrısı ve hazirun listesi Elektronik Genel Kurul Sistemi’ne (EGKS) tanımlanır.
2. Ortaklar, güvenli elektronik imza veya iki faktörlü doğrulama ile sisteme bağlanır.
3. Toplantı esnasında eşzamanlı söz alma, yazılı önerge verme ve güvenli oy kullanma imkânı sunulur.
4. Tutanaklar elektronik ortamda imzalanarak doğrudan KOOPBİS portalına arşivlenir.

---

## 6. Bakanlık Temsilcisi Bulundurma Zorunluluğu

* **Mevzuat Dayanağı:** 39277 sayılı Yönetmelik, 77522 sayılı Tüzük ve 12817 sayılı Tebliğ.
* **Başvuru:** Genel kurul tarihinden en az **15 gün önce** yetkili Bakanlık İl Müdürlüğü'ne yazılı talepte bulunulur.
* **Hukuki Hüküm:** Temsilci talep edilmeksizin veya usulsüzce temsilcisiz yapılan genel kurullarda alınan kararlar **yok hükmündedir (butlan)**.

---

## 7. Mal Bildiriminde Bulunulması (3628 Sayılı Kanun)

Kooperatiflerde şeffaflığı temin etmek amacıyla çıkarılan **3628 sayılı Kanun** ve ilgili Tebliğler (13715, 11801, 6071) uyarınca:
* Yönetim ve denetim kurulu üyeleri göreve seçildikleri tarihten itibaren **1 ay içinde**,
* Görevden ayrıldıkları tarihten itibaren **1 ay içinde**,
* Görev süreleri boyunca sonu **(0) ve (5)** ile biten yılların Şubat ayı sonuna kadar kapalı zarf usulüyle mal bildiriminde bulunmak zorundadır.

---

## 8. Kaynakça ve Notlar
1. 39276 Sayılı Kooperatif Bilgi Sistemi Yönetmeliği, Resmî Gazete.
2. 39278 Sayılı Kooperatifçilik Eğitimi Yönetmeliği.
3. 39331 Sayılı Kooperatif ve Üst Kuruluşlarının Denetimine Dair Yönetmelik.
4. 3628 Sayılı Mal Bildiriminde Bulunulması, Rüşvet ve Yolsuzluklarla Mücadele Kanunu.

---
*Ayrıca bakınız:* [[02_1163_sayili_kooperatifler_kanunu]], [[05_kooperatif_mali_ve_vergi_hukuku]], [[08_mevzuat_kulliyati_ve_dizin]]
