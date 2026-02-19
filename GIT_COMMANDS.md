# 🚀 Git Komutları - Adım Adım Rehber

Bu dosya, Git repository'yi kurmak için terminal'de çalıştırmanız gereken komutları içerir.

## 📋 Adım Adım Komutlar

### 1️⃣ Git Repository Başlatma

```bash
cd /Users/abdulkadirelaldi/Desktop/mobileuyg
git init
```

### 2️⃣ Branch Adını Ayarlama

```bash
git branch -M main
```

### 3️⃣ Dosyaları Ekleme

```bash
git add .
```

### 4️⃣ İlk Commit

```bash
git commit -m "feat: initial commit - sağlık izleme mobil uygulaması

- React Native ve Expo ile geliştirildi
- 7 ana modül (Formlar, Eğitimler, Hedefler, SSS, Bildirimler, Anket, WhatsApp)
- Kan şekeri takibi, fiziksel aktivite ve beslenme modülleri
- Mock API ve validasyon sistemi
- Error handling ve loading states
- Görüntülere uygun tasarım
- Custom hooks (useApi, useForm)
- ErrorBoundary ve form validation
- Comprehensive documentation"
```

### 5️⃣ Durum Kontrolü

```bash
git status
git log --oneline
```

## 🌐 GitHub'a Yükleme

### 6️⃣ GitHub'da Repository Oluşturma

1. https://github.com adresine git
2. "New repository" butonuna tıkla
3. Repository adı: `mobileuyg` veya `health-tracking-app`
4. Public veya Private seç
5. **ÖNEMLİ:** "Initialize with README" seçeneğini işaretleme (zaten README var)
6. "Create repository" butonuna tıkla

### 7️⃣ Remote Repository Ekleme

```bash
# KULLANICI_ADI ve REPO_ADI kısımlarını kendi bilgilerinizle değiştirin
git remote add origin https://github.com/KULLANICI_ADI/REPO_ADI.git
```

### 8️⃣ İlk Push

```bash
git push -u origin main
```

## 🔀 Feature Branch Oluşturma (Opsiyonel)

```bash
# Yeni özellik için branch
git checkout -b feature/yeni-ozellik

# Değişiklikleri yap ve commit et
git add .
git commit -m "feat(feature-name): özellik açıklaması"

# Push et
git push origin feature/yeni-ozellik
```

## 📊 Commit Geçmişi Örnekleri

Eğer commit'leri daha detaylı yapmak isterseniz:

```bash
# Proje yapısı
git add src/ package.json app.json babel.config.js
git commit -m "chore: setup project structure and dependencies"

# Renk paleti
git add src/constants/colors.js
git commit -m "feat(constants): add color palette"

# Mock data
git add src/data/mockData.js
git commit -m "feat(data): add mock data for health tracking"

# Navigation
git add src/navigation/
git commit -m "feat(navigation): setup React Navigation"

# Screens
git add src/screens/
git commit -m "feat(screens): implement all screens"

# Components
git add src/components/
git commit -m "feat(components): add reusable components"

# Utils ve hooks
git add src/utils/ src/hooks/
git commit -m "feat(utils): add validation, error handling and custom hooks"

# Documentation
git add README.md CODE_REVIEW.md EVALUATION_REPORT.md .github/
git commit -m "docs: add comprehensive documentation"
```

## ✅ Kontrol Komutları

```bash
# Git durumunu kontrol et
git status

# Commit geçmişini görüntüle
git log --oneline --graph

# Remote repository'yi kontrol et
git remote -v

# Branch'leri görüntüle
git branch -a
```

## 🆘 Sorun Giderme

### Eğer "fatal: not a git repository" hatası alırsanız:
```bash
git init
```

### Eğer "remote origin already exists" hatası alırsanız:
```bash
git remote remove origin
git remote add origin https://github.com/KULLANICI_ADI/REPO_ADI.git
```

### Eğer push hatası alırsanız:
```bash
# Önce pull yap (eğer GitHub'da README oluşturduysanız)
git pull origin main --allow-unrelated-histories

# Sonra push yap
git push -u origin main
```

## 📝 Notlar

- Commit mesajları [Conventional Commits](https://www.conventionalcommits.org/) formatında
- Her commit mantıklı bir değişiklik grubunu içermeli
- Commit mesajları açıklayıcı olmalı
