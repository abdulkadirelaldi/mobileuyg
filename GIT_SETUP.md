# 🚀 Git Repository Kurulum Rehberi

Bu dosya, projeyi GitHub'a yüklemek için gerekli adımları içerir.

## 📋 Adımlar

### 1. Git Repository Başlatma

```bash
# Proje dizinine git
cd /Users/abdulkadirelaldi/Desktop/mobileuyg

# Git repository başlat
git init

# .gitignore dosyası zaten mevcut, kontrol et
cat .gitignore
```

### 2. İlk Commit

```bash
# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "feat: initial commit - sağlık izleme mobil uygulaması

- React Native ve Expo ile geliştirildi
- 7 ana modül (Formlar, Eğitimler, Hedefler, SSS, Bildirimler, Anket, WhatsApp)
- Kan şekeri takibi, fiziksel aktivite ve beslenme modülleri
- Mock API ve validasyon sistemi
- Error handling ve loading states
- Görüntülere uygun tasarım"
```

### 3. GitHub Repository Oluşturma

1. GitHub'da yeni bir repository oluştur
2. Repository adı: `mobileuyg` veya `health-tracking-app`
3. Public veya Private seç
4. README, .gitignore, license ekleme (bunlar zaten var)

### 4. Remote Ekleme ve Push

```bash
# Remote repository ekle (URL'i kendi repository'nizle değiştirin)
git remote add origin https://github.com/KULLANICI_ADI/REPO_ADI.git

# Branch adını main yap (veya master)
git branch -M main

# İlk push
git push -u origin main
```

### 5. Feature Branch'leri Oluşturma

```bash
# Yeni özellik için branch
git checkout -b feature/yeni-ozellik

# Değişiklikleri yap ve commit et
git add .
git commit -m "feat(feature-name): özellik açıklaması"

# Push et
git push origin feature/yeni-ozellik
```

### 6. Commit Mesaj Örnekleri

```bash
# Yeni özellik
git commit -m "feat(screens): add blood sugar tracking screen"

# Hata düzeltme
git commit -m "fix(validation): fix insulin dose validation logic"

# Dokümantasyon
git commit -m "docs(readme): update installation instructions"

# Stil değişikliği
git commit -m "style(components): format button component"

# Refactoring
git commit -m "refactor(hooks): extract API logic to custom hook"

# Test
git commit -m "test(utils): add validation tests"
```

## 📊 Commit Geçmişi Önerisi

Projenin gelişimini göstermek için şu commit sırası önerilir:

```bash
# 1. Initial commit
git commit -m "feat: initial commit"

# 2. Proje yapısı
git commit -m "chore: setup project structure and dependencies"

# 3. Renk paleti
git commit -m "feat(constants): add color palette"

# 4. Mock data
git commit -m "feat(data): add mock data for health tracking"

# 5. Navigation
git commit -m "feat(navigation): setup React Navigation"

# 6. Ana sayfa
git commit -m "feat(screens): implement home screen"

# 7. Formlar ekranı
git commit -m "feat(screens): add forms screen"

# 8. Kan şekeri ekranı
git commit -m "feat(screens): add blood sugar tracking screen"

# 9. Validasyon
git commit -m "feat(utils): add form validation utilities"

# 10. Error handling
git commit -m "feat(components): add ErrorBoundary and error handling"

# 11. Custom hooks
git commit -m "feat(hooks): add useApi and useForm hooks"

# 12. Dokümantasyon
git commit -m "docs: add README and evaluation report"
```

## 🔀 Branch Stratejisi

```
main (production)
├── develop (development)
    ├── feature/yeni-ozellik
    ├── feature/bug-fix
    └── feature/refactoring
```

## 📝 .gitignore Kontrolü

`.gitignore` dosyası şunları içermeli:
- `node_modules/`
- `.expo/`
- `dist/`
- `*.log`
- `.DS_Store`
- IDE dosyaları

## ✅ Checklist

- [ ] Git repository başlatıldı
- [ ] İlk commit yapıldı
- [ ] GitHub repository oluşturuldu
- [ ] Remote eklendi
- [ ] İlk push yapıldı
- [ ] Branch stratejisi belirlendi
- [ ] Commit mesaj formatı belirlendi

## 🎯 Sonraki Adımlar

1. GitHub repository'yi oluştur
2. Remote ekle ve push yap
3. Feature branch'leri kullan
4. Pull request'ler oluştur
5. Code review yap
