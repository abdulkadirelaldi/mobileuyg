# 🏥 Sağlık İzleme Mobil Uygulaması - React Native & Expo

Modern, kullanıcı dostu bir sağlık izleme mobil uygulaması. Kan şekeri takibi, fiziksel aktivite kaydı ve beslenme değerlendirmesi için tasarlanmış, görüntülere göre özelleştirilmiş şık bir arayüz.

## 📱 QR Kod ile Uygulamayı Açma

### Uygulamayı Çalıştırma

1. Projeyi klonlayın veya indirin
2. `npm install` ile bağımlılıkları yükleyin
3. `npm start` ile uygulamayı başlatın
4. Terminalde görünen **QR kodu** Expo Go ile tarayın

### Expo Go Uygulaması

Uygulamayı telefonunuzda test etmek için önce **Expo Go** uygulamasını indirin:

| Platform | QR Kod | Direkt Link |
|----------|--------|-------------|
| **iOS** | ![Expo Go iOS](https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://apps.apple.com/app/expo-go/id982107779) | [App Store'dan İndir](https://apps.apple.com/app/expo-go/id982107779) |
| **Android** | ![Expo Go Android](https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://play.google.com/store/apps/details?id=host.exp.exponent) | [Play Store'dan İndir](https://play.google.com/store/apps/details?id=host.exp.exponent) |

### GitHub Repository

Projeyi hızlıca erişmek için QR kodu tarayın:

![GitHub Repo](https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://github.com/abdulkadirelaldi/mobileuyg)

## 📱 Proje Açıklaması

Bu proje, React Native ve Expo kullanılarak geliştirilmiş, hackathon/challenge kriterlerine tam uyumlu bir sağlık izleme mobil uygulamasıdır. Uygulama, kullanıcıların sağlık verilerini takip etmesine, kaydetmesine ve yönetmesine olanak tanır.

### ✨ Özellikler

- **Ana Sayfa**: Hoş geldin mesajı ve modül kartları (Formlar, Eğitimler, Günlük Hedefler, vb.)
- **Formlar Ekranı**: Kan Şekeri İzlem, Fiziksel Aktivite, Beslenme Değerlendirme modülleri
- **Kan Şekeri İzlem**: Kan şekeri değerlerini kaydetme ve görüntüleme
- **Fiziksel Aktiviteler**: Aktivite kayıtları ve takibi
- **Beslenme**: Besin ekleme ve kalori takibi
- **Mock API**: Gerçekçi veri simülasyonu ile 1.5-2.5 saniye arası yükleme süresi
- **State Yönetimi**: Loading, Empty ve Error state'leri ile kapsamlı durum yönetimi
- **Modern UI/UX**: Görüntülere göre özelleştirilmiş tasarım dili

## 🛠 Kullanılan Teknolojiler

- **React Native** (0.74.5) - Mobil uygulama framework'ü
- **Expo** (~51.0.0) - Geliştirme ve build platformu
- **React Navigation** (@react-navigation/native, @react-navigation/native-stack) - Navigasyon yönetimi
- **React Hooks** (useState, useEffect) - State ve lifecycle yönetimi
- **StyleSheet** - Native stil yönetimi

## 🚀 Hızlı Başlangıç

### Git Repository Kurulumu

Projeyi Git ile yönetmek için:

```bash
# Otomatik kurulum (önerilen)
bash setup-git.sh

# Veya manuel kurulum
# Detaylar için QUICK_START_GIT.md dosyasına bakın
```

## 📦 Kurulum

### Gereksinimler

- Node.js (v14 veya üzeri)
- npm veya yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go uygulaması (iOS/Android cihazınızda) veya iOS Simulator / Android Emulator

### Adımlar

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

2. **Uygulamayı başlatın:**
   ```bash
   npm start
   # veya
   expo start
   ```

3. **Cihazınızda çalıştırın:**
   - iOS için: `npm run ios` veya Expo Go uygulamasında QR kodu tarayın
   - Android için: `npm run android` veya Expo Go uygulamasında QR kodu tarayın
   - Web için: `npm run web`

## 📁 Proje Yapısı

```
mobileuyg/
├── App.js                      # Ana uygulama giriş noktası
├── package.json                 # Bağımlılıklar ve scriptler
├── app.json                    # Expo yapılandırması
├── babel.config.js             # Babel yapılandırması
├── README.md                   # Proje dokümantasyonu
└── src/
    ├── constants/
    │   └── colors.js           # Renk paleti tanımlamaları
    ├── navigation/
    │   └── AppNavigator.js     # Navigasyon yapılandırması
    ├── screens/
    │   ├── HomeScreen.js       # Ana sayfa
    │   ├── FormsScreen.js      # Formlar ekranı
    │   ├── BloodSugarScreen.js # Kan şekeri izlem ekranı
    │   ├── PhysicalActivityScreen.js # Fiziksel aktiviteler ekranı
    │   ├── NutritionScreen.js  # Beslenme ekranı
    │   └── FoodSelectionScreen.js # Besin seçim ekranı
    ├── components/
    │   ├── Button.js           # Yeniden kullanılabilir buton
    │   ├── SkeletonLoader.js   # Yükleme animasyonu
    │   ├── EmptyState.js       # Boş durum komponenti
    │   └── ErrorState.js       # Hata durumu komponenti
    └── data/
        └── mockData.js         # Mock API ve veri
```

## 🎨 Tasarım ve Renk Paleti

### Renk Paleti

- **Ana Arka Plan**: `#FF6B6B` (Koral/Pembe) - Ana sayfa ve form ekranları
- **Kırmızı Header**: `#EE3A4C` - Kan şekeri izlem ekranı header'ı
- **Mavi Butonlar**: `#4169E1` (Koyu Mavi) ve `#64B5F6` (Açık Mavi)
- **Turuncu Butonlar**: `#FF9800` - Besin seçim butonu
- **Yeşil**: `#3CB371` - Fiziksel aktivite kartları için
- **Beyaz**: `#FFFFFF` - Kartlar ve form alanları
- **Metin Renkleri**: 
  - Ana metin: `#1A1A1A` (Koyu Gri)
  - İkincil metin: `#6B7280` (Gri)
  - Beyaz metin: `#FFFFFF` (Header ve butonlar)

### Tasarım Prensipleri

1. **Border Radius**: 12-16px arası yuvarlatılmış köşeler
2. **Shadow/Elevation**: Kartlar ve butonlarda hafif gölgeler
3. **Typography**: 
   - Başlıklar: 700 ağırlığı, büyük font boyutları
   - Alt metinler: 400-500 ağırlığı, gri renkler
4. **Spacing**: Tutarlı padding ve margin değerleri
5. **Animasyonlar**: Skeleton loader'da shimmer efekti, butonlarda activeOpacity

## 🚦 Navigasyon Akışı

```
Home Screen (Ana Sayfa)
    ├── Formlar kartına tıkla → Forms Screen
    │   ├── Kan Şekeri İzlem → BloodSugar Screen
    │   ├── Fiziksel Aktivite → PhysicalActivity Screen
    │   └── Beslenme Değerlendirme → Nutrition Screen
    │       └── Besin Seçimine Git → FoodSelection Screen
    └── Diğer kartlar (yakında eklenecek)
```

## 📝 Mock Data Yapısı

Mock data dosyası (`src/data/mockData.js`) şu özellikleri içerir:

- **Kan Şekeri Verileri**: Öğün, açlık durumu, tarih, saat, kan şekeri değeri, insülin dozu
- **Fiziksel Aktivite Verileri**: Aktivite türü, süre, durum, tarih-saat
- **Beslenme Verileri**: Besin adı, kalori, ölçüm birimi, açıklama
- **Formlar ve Ana Sayfa Kartları**: Modül listeleri

## 🎯 Ekranlar

### 1. Ana Sayfa (HomeScreen)
- Koral/pembe arka plan
- Hoş geldin kartı
- Grid düzeninde modül kartları (Formlar, Eğitimler, Günlük Hedefler, vb.)

### 2. Formlar Ekranı (FormsScreen)
- 3 ana modül kartı
- Kan Şekeri İzlem, Fiziksel Aktivite, Beslenme Değerlendirme

### 3. Kan Şekeri İzlem Ekranı (BloodSugarScreen)
- Kırmızı header
- Tarih seçim çubuğu
- Mavi "Ekle" butonu
- Beyaz kartlarda veri gösterimi

### 4. Fiziksel Aktiviteler Ekranı (PhysicalActivityScreen)
- Koral arka plan
- Mavi "Ekle" butonu
- Yeşil/kırmızı kenarlıklı aktivite kartları
- Aktivite detayları

### 5. Beslenme Ekranı (NutritionScreen)
- Koral arka plan
- Gebelik haftası ve öğün seçimi
- Turuncu "Besin Seçimine Git" butonu
- Toplam kalori gösterimi

### 6. Besin Seçim Ekranı (FoodSelectionScreen)
- Besin detay kartı
- Miktar girişi
- Açık mavi "Listeye Kaydet" butonu

## 🔄 State Yönetimi

### Loading State
- Veri yüklenirken SkeletonLoader komponenti gösterilir
- ActivityIndicator ile basit yükleme göstergesi
- 1.5-2.5 saniye arası simüle edilmiş gecikme

### Empty State
- Liste boş olduğunda EmptyState komponenti gösterilir
- Kullanıcıyı yönlendiren mesajlar

### Error State
- Hata durumunda ErrorState komponenti gösterilir
- "Tekrar Dene" butonu ile yeniden deneme imkanı
- %10 şansla simüle edilmiş hata durumları

## 🎓 Hackathon Kriterleri Karşılanması

✅ **Proje Yapısı ve Navigasyon**: React Navigation ile çoklu ekran yapısı  
✅ **Mock API**: Fake Promise yapısı ile simüle edilmiş API çağrıları  
✅ **State Yönetimi**: Loading, Empty ve Error state'leri  
✅ **Tasarım**: Görüntülere göre özelleştirilmiş modern UI/UX  
✅ **Dokümantasyon**: Kapsamlı README.md dosyası  

## 🔮 Gelecek Geliştirmeler

- [ ] Gerçek API entegrasyonu
- [ ] Veri kaydetme ve silme işlevleri
- [ ] Grafik ve istatistik görüntüleme
- [ ] Bildirimler sistemi
- [ ] Kullanıcı profili
- [ ] Eğitimler modülü
- [ ] Günlük hedefler takibi
- [ ] Dark mode

## 📸 Ekran Görüntüleri

<!-- Screenshot'lar eklenecek -->
- Ana Sayfa
- Kan Şekeri İzlem Ekranı
- Fiziksel Aktiviteler
- Beslenme Formu

## 🤝 Katkıda Bulunma

Katkıda bulunmak isterseniz lütfen [CONTRIBUTING.md](.github/CONTRIBUTING.md) dosyasını okuyun.

## 📄 Lisans

Bu proje hackathon/challenge amaçlı geliştirilmiştir.

## 📊 Değerlendirme Raporu

Projenin değerlendirme kriterlerine göre detaylı analizi için [EVALUATION_REPORT.md](EVALUATION_REPORT.md) dosyasına bakabilirsiniz.

## 🔍 Kod İnceleme

Profesyonel kod inceleme raporu için [CODE_REVIEW.md](CODE_REVIEW.md) dosyasına bakabilirsiniz.

---

**Geliştirici Notu**: Bu uygulama, görüntülere göre özelleştirilmiş modern React Native best practice'lerini takip ederek geliştirilmiştir. Kod yapısı modüler, yeniden kullanılabilir ve bakımı kolaydır.
