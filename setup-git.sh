#!/bin/bash

# Git ve GitHub Kurulum Scripti
# Bu script'i çalıştırmak için: bash setup-git.sh

echo "🚀 Git Repository Kurulumu Başlatılıyor..."
echo ""

# Adım 1: Git init
echo "📦 Adım 1: Git repository başlatılıyor..."
git init
if [ $? -eq 0 ]; then
    echo "✅ Git repository başarıyla başlatıldı!"
else
    echo "❌ Git init başarısız oldu. Lütfen manuel olarak 'git init' komutunu çalıştırın."
    exit 1
fi
echo ""

# Adım 2: Branch'i main olarak ayarla
echo "🌿 Adım 2: Ana branch 'main' olarak ayarlanıyor..."
git branch -M main
echo "✅ Branch 'main' olarak ayarlandı!"
echo ""

# Adım 3: Dosyaları ekle
echo "📝 Adım 3: Dosyalar staging area'ya ekleniyor..."
git add .
if [ $? -eq 0 ]; then
    echo "✅ Dosyalar başarıyla eklendi!"
else
    echo "❌ Dosyalar eklenirken bir hata oluştu."
    exit 1
fi
echo ""

# Adım 4: İlk commit
echo "💾 Adım 4: İlk commit yapılıyor..."
git commit -m "Initial commit: Sağlık İzleme Mobil Uygulaması

- React Native ve Expo ile geliştirilmiş mobil uygulama
- Modern ve minimalist UI/UX tasarımı
- Sağlık takibi için modüller (Formlar, Eğitimler, Hedefler, vb.)
- Profesyonel kod yapısı ve best practices"
if [ $? -eq 0 ]; then
    echo "✅ İlk commit başarıyla yapıldı!"
else
    echo "❌ Commit yapılırken bir hata oluştu."
    exit 1
fi
echo ""

echo "🎉 Git kurulumu tamamlandı!"
echo ""
echo "📋 Sonraki Adımlar:"
echo "1. GitHub'da yeni bir repository oluşturun"
echo "2. Şu komutları çalıştırın:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git"
echo "   git push -u origin main"
echo ""
echo "💡 Detaylı talimatlar için SETUP_GIT.md dosyasına bakın."
