# Git ve GitHub Kurulum Rehberi

Bu rehber, projenizi Git ile yönetmek ve GitHub'a yüklemek için adım adım talimatlar içerir.

## Adım 1: Git Repository Başlatma

Terminal'de proje klasörüne gidin ve şu komutu çalıştırın:

```bash
cd /Users/abdulkadirelaldi/Desktop/mobileuyg
git init
```

## Adım 2: Git Kullanıcı Bilgilerini Ayarlama (İlk kez kullanıyorsanız)

Eğer daha önce Git kullanıcı bilgilerinizi ayarlamadıysanız:

```bash
git config --global user.name "Adınız Soyadınız"
git config --global user.email "email@example.com"
```

## Adım 3: Dosyaları Staging Area'ya Ekleme

Tüm dosyaları Git'e eklemek için:

```bash
git add .
```

Sadece belirli dosyaları eklemek için:

```bash
git add dosya1.js dosya2.js
```

## Adım 4: İlk Commit Yapma

```bash
git commit -m "Initial commit: Sağlık İzleme Mobil Uygulaması"
```

## Adım 5: Ana Branch'i Main Olarak Ayarlama

```bash
git branch -M main
```

## Adım 6: GitHub Repository Oluşturma

1. GitHub.com'a gidin ve giriş yapın
2. Sağ üst köşedeki "+" butonuna tıklayın
3. "New repository" seçeneğini seçin
4. Repository adını girin (örn: `mobileuyg` veya `saglik-izleme`)
5. Public veya Private seçin
6. **"Initialize this repository with a README" seçeneğini işaretlemeyin**
7. "Create repository" butonuna tıklayın

## Adım 7: GitHub'a Bağlama ve Push Etme

GitHub'da repository oluşturduktan sonra, GitHub size bir URL verecek. Şu komutları çalıştırın:

```bash
# Remote repository ekleme (YOUR_USERNAME ve REPO_NAME'i değiştirin)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Dosyaları GitHub'a gönderme
git push -u origin main
```

Eğer GitHub'da README oluşturduysanız, önce pull yapmanız gerekebilir:

```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

## Adım 8: Doğrulama

GitHub sayfanızı yenileyin ve dosyalarınızın yüklendiğini kontrol edin.

## Sonraki Adımlar

### Yeni Değişiklikleri Eklemek İçin:

```bash
# Değişiklikleri kontrol et
git status

# Değişiklikleri ekle
git add .

# Commit yap
git commit -m "Değişiklik açıklaması"

# GitHub'a gönder
git push
```

### Branch Oluşturma (İsteğe Bağlı):

```bash
# Yeni branch oluştur
git checkout -b feature/yeni-ozellik

# Değişiklikleri commit et
git add .
git commit -m "Yeni özellik eklendi"

# Branch'i GitHub'a gönder
git push -u origin feature/yeni-ozellik
```

## Önemli Notlar

- `.gitignore` dosyası zaten oluşturulmuş ve `node_modules`, `.expo` gibi klasörleri hariç tutuyor
- Her commit'te anlamlı mesajlar yazın
- Düzenli olarak commit yapın
- Önemli değişikliklerden önce branch oluşturmayı düşünün

## Yardım

Sorun yaşarsanız:
- `git status` - Mevcut durumu kontrol edin
- `git log` - Commit geçmişini görüntüleyin
- `git remote -v` - Remote repository'leri kontrol edin
