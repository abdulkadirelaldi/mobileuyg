# ⚡ Hızlı Başlangıç - Git Kurulumu

## 🎯 En Hızlı Yol (Script Kullanarak)

Terminal'de şu komutu çalıştırın:

```bash
cd /Users/abdulkadirelaldi/Desktop/mobileuyg
bash setup-git.sh
```

Bu script otomatik olarak:
1. ✅ Git repository'yi başlatır
2. ✅ Branch'i main yapar
3. ✅ Tüm dosyaları ekler
4. ✅ İlk commit'i yapar

## 📝 Manuel Yol (Adım Adım)

Eğer script çalışmazsa, terminal'de şu komutları sırayla çalıştırın:

```bash
# 1. Proje dizinine git
cd /Users/abdulkadirelaldi/Desktop/mobileuyg

# 2. Git başlat
git init

# 3. Branch adını ayarla
git branch -M main

# 4. Dosyaları ekle
git add .

# 5. İlk commit
git commit -m "feat: initial commit - sağlık izleme mobil uygulaması"
```

## 🌐 GitHub'a Yükleme

### 1. GitHub'da Repository Oluştur
- https://github.com → New repository
- İsim: `mobileuyg` veya `health-tracking-app`
- Public/Private seç
- **ÖNEMLİ:** README ekleme (zaten var)

### 2. Remote Ekle ve Push Yap

```bash
# KULLANICI_ADI ve REPO_ADI kısımlarını değiştirin
git remote add origin https://github.com/KULLANICI_ADI/REPO_ADI.git
git push -u origin main
```

## ✅ Kontrol

```bash
# Durumu kontrol et
git status

# Commit geçmişini gör
git log --oneline
```

## 📚 Detaylı Bilgi

- Tam rehber: `GIT_COMMANDS.md`
- Kurulum rehberi: `GIT_SETUP.md`
- Katkı rehberi: `.github/CONTRIBUTING.md`
