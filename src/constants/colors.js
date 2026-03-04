// Renk Paleti - Pinterest pano ilhamına göre kırmızı tema
export const colors = {
  // Ana Renkler
  primary: '#EE3A4C',       // Kırmızı - header ve arka planlar
  primaryDark: '#C62A39',   // Koyu kırmızı
  primaryLight: '#FF6B6B',  // Açık kırmızı / mercan
  secondary: '#4169E1',     // Mavi - aksiyon butonları (Ekle, Kaydet, Giriş)
  secondaryLight: '#5B85F0',
  accent: '#FF9500',        // Turuncu
  success: '#34C759',       // Yeşil
  warning: '#FF9500',
  error: '#FF3B30',

  // Gradient Kombinasyonları
  gradients: {
    primary: ['#EE3A4C', '#FF6B6B'],     // Kırmızı gradient
    secondary: ['#4169E1', '#5B85F0'],   // Mavi gradient
    accent: ['#FF9500', '#FFB340'],      // Turuncu gradient
    success: ['#34C759', '#5AD27A'],     // Yeşil gradient
    purple: ['#AF52DE', '#D0A3FF'],      // Mor gradient
    blue: ['#4169E1', '#5B85F0'],        // Mavi gradient
  },

  // Arka Planlar
  background: '#FFFFFF',
  backgroundLight: '#F5F5F7',
  backgroundGray: '#F2F2F7',
  cardBackground: '#FFFFFF',
  cardBackgroundHover: '#FAFAFA',
  inputBackground: '#F2F2F7',
  chipBackground: '#F2F2F7',
  chipSelected: '#EE3A4C',

  // Metin Renkleri
  textPrimary: '#000000',
  textSecondary: '#8E8E93',
  textTertiary: '#C7C7CC',
  textWhite: '#FFFFFF',
  textLabel: '#8E8E93',
  textLink: '#4169E1',

  // Kenarlık
  borderLight: '#E5E5EA',
  borderMedium: '#D1D1D6',
  borderDark: '#C7C7CC',

  // Gölge
  shadow: '#000000',
  shadowLight: 'rgba(0, 0, 0, 0.04)',
  shadowMedium: 'rgba(0, 0, 0, 0.08)',
  shadowDark: 'rgba(0, 0, 0, 0.12)',

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
