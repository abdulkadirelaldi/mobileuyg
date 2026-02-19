// Profesyonel Modern Renk Paleti - Minimalist ve Temiz Tasarım
export const colors = {
  // Ana Renkler - Mavi Accent (Görseldeki gibi)
  primary: '#007AFF', // iOS Blue - Profesyonel mavi
  primaryDark: '#0051D5', // Koyu mavi
  primaryLight: '#5AC8FA', // Açık mavi
  secondary: '#5856D6', // Mor-mavi
  accent: '#FF9500', // Turuncu (vurgu için)
  success: '#34C759', // Yeşil
  warning: '#FF9500', // Turuncu
  error: '#FF3B30', // Kırmızı
  
  // Gradient Kombinasyonları - Daha Profesyonel
  gradients: {
    primary: ['#007AFF', '#5AC8FA'], // Mavi gradient
    secondary: ['#5856D6', '#AF52DE'], // Mor gradient
    accent: ['#FF9500', '#FFB340'], // Turuncu gradient
    success: ['#34C759', '#5AD27A'], // Yeşil gradient
    purple: ['#AF52DE', '#D0A3FF'], // Mor gradient
    blue: ['#007AFF', '#5AC8FA'], // Mavi gradient
  },
  
  // Arka Planlar - Minimalist Beyaz Teması
  background: '#FFFFFF', // Tam beyaz arka plan
  backgroundLight: '#F5F5F7', // Çok açık gri (iOS gibi)
  backgroundGray: '#F2F2F7', // Hafif gri
  cardBackground: '#FFFFFF', // Beyaz kartlar
  cardBackgroundHover: '#FAFAFA', // Hover durumu
  inputBackground: '#F2F2F7', // Input arka planı
  chipBackground: '#F2F2F7', // Chip arka planı
  chipSelected: '#007AFF', // Seçili chip
  
  // Metin Renkleri - Yüksek Kontrast
  textPrimary: '#000000', // Siyah başlıklar
  textSecondary: '#8E8E93', // Gri ikincil metin
  textTertiary: '#C7C7CC', // Açık gri
  textWhite: '#FFFFFF', // Beyaz metin
  textLabel: '#8E8E93', // Label rengi
  textLink: '#007AFF', // Link rengi
  
  // Kenarlık Renkleri
  borderLight: '#E5E5EA', // Açık border
  borderMedium: '#D1D1D6', // Orta border
  borderDark: '#C7C7CC', // Koyu border
  
  // Gölge ve Efektler - Yumuşak ve Profesyonel
  shadow: '#000000',
  shadowLight: 'rgba(0, 0, 0, 0.04)',
  shadowMedium: 'rgba(0, 0, 0, 0.08)',
  shadowDark: 'rgba(0, 0, 0, 0.12)',
  
  // Overlay
  overlay: 'rgba(0, 0, 0, 0.4)',
  overlayLight: 'rgba(0, 0, 0, 0.1)',
};

// Profesyonel Shadow Preset'leri - Yumuşak ve Minimalist
export const shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  small: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 2,
  },
  medium: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  large: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
  },
  xlarge: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.16,
    shadowRadius: 24,
    elevation: 12,
  },
};

// Profesyonel Border Radius Preset'leri - iOS tarzı
export const borderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  full: 9999,
};

// Spacing Preset'leri - Daha Geniş ve Düzenli
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
  // Özel spacing'ler
  screenPadding: 20, // Ekran kenar boşluğu
  cardPadding: 16, // Kart içi padding
  sectionSpacing: 24, // Bölümler arası boşluk
};

export default colors;
