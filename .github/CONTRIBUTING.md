# 🤝 Katkıda Bulunma Rehberi

Bu projeye katkıda bulunmak istediğiniz için teşekkürler! Bu rehber, katkı sürecini kolaylaştırmak için hazırlanmıştır.

## 📋 İçindekiler

- [Kod Stili](#kod-stili)
- [Commit Mesajları](#commit-mesajları)
- [Pull Request Süreci](#pull-request-süreci)
- [Geliştirme Ortamı](#geliştirme-ortamı)

## 💻 Kod Stili

### Genel Kurallar
- ESLint kurallarına uyun
- Prettier formatlaması kullanın
- Fonksiyon ve değişken isimleri açıklayıcı olsun
- Her component için PropTypes veya TypeScript types kullanın

### Component Yapısı
```javascript
// 1. Import'lar
import React from 'react';
import { View, Text } from 'react-native';

// 2. Component tanımı
const MyComponent = ({ prop1, prop2 }) => {
  // 3. Hooks
  const [state, setState] = useState();
  
  // 4. Fonksiyonlar
  const handlePress = () => {
    // ...
  };
  
  // 5. Render
  return (
    <View>
      <Text>Content</Text>
    </View>
  );
};

// 6. Styles
const styles = StyleSheet.create({
  // ...
});

// 7. Export
export default MyComponent;
```

## 📝 Commit Mesajları

### Conventional Commits Formatı

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type'lar
- `feat`: Yeni özellik
- `fix`: Hata düzeltmesi
- `docs`: Dokümantasyon
- `style`: Kod formatlama
- `refactor`: Kod refactoring
- `test`: Test ekleme
- `chore`: Build, config değişiklikleri

### Örnekler
```bash
feat(screens): Add blood sugar tracking screen
fix(validation): Fix insulin dose validation logic
docs(readme): Update installation instructions
style(components): Format button component
refactor(hooks): Extract API logic to custom hook
```

## 🔀 Pull Request Süreci

1. **Branch Oluştur**
   ```bash
   git checkout -b feature/yeni-ozellik
   ```

2. **Değişiklikleri Yap**
   - Kod yaz
   - Test et
   - Dokümantasyonu güncelle

3. **Commit Et**
   ```bash
   git add .
   git commit -m "feat: yeni özellik eklendi"
   ```

4. **Push Et**
   ```bash
   git push origin feature/yeni-ozellik
   ```

5. **Pull Request Oluştur**
   - GitHub'da PR aç
   - Template'i doldur
   - Review bekleyin

## 🛠 Geliştirme Ortamı

### Gereksinimler
- Node.js v14+
- npm veya yarn
- Expo CLI
- iOS Simulator veya Android Emulator

### Kurulum
```bash
# Repository'yi klonla
git clone <repo-url>
cd mobileuyg

# Bağımlılıkları yükle
npm install

# Uygulamayı başlat
npm start
```

### Test
```bash
# Testleri çalıştır (gelecekte eklenecek)
npm test
```

## 📚 Kaynaklar

- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [Expo Docs](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)

## ❓ Sorular

Sorularınız için issue açabilir veya maintainer'lara ulaşabilirsiniz.
