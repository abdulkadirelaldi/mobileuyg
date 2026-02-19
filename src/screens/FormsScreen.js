import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchForms } from '../data/mockData';
import { colors, shadows, borderRadius, spacing } from '../constants/colors';
import ErrorState from '../components/ErrorState';
import AnimatedCard from '../components/AnimatedCard';
import ScreenHeader from '../components/ScreenHeader';

const FormsScreen = ({ navigation }) => {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    loadForms();
  }, []);

  useEffect(() => {
    if (!loading && forms.length > 0) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.spring(slideAnim, {
          toValue: 0,
          tension: 50,
          friction: 8,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [loading, forms]);

  const loadForms = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetchForms();
      setForms(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFormPress = (form) => {
    if (form.screen === 'BloodSugar') {
      navigation.navigate('BloodSugar');
    } else if (form.screen === 'PhysicalActivity') {
      navigation.navigate('PhysicalActivity');
    } else if (form.screen === 'Nutrition') {
      navigation.navigate('Nutrition');
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ScreenHeader
          title="Formlar"
          subtitle="Kayıt formları"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={styles.loadingText}>Yükleniyor...</Text>
        </View>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <ScreenHeader
          title="Formlar"
          subtitle="Kayıt formları"
          onBack={() => navigation.goBack()}
        />
        <ErrorState message={error} onRetry={loadForms} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScreenHeader
        title="Formlar"
        subtitle="Kayıt formları"
        onBack={() => navigation.goBack()}
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View
          style={[
            styles.animatedContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Kayıt Formları</Text>
            <Text style={styles.sectionSubtitle}>
              Sağlık verilerinizi kaydetmek için formları kullanın
            </Text>
          </View>

          <View style={styles.formsContainer}>
            {forms.map((form, index) => (
              <AnimatedCard
                key={form.id}
                icon={form.icon}
                title={form.title}
                onPress={() => handleFormPress(form)}
                wide={form.wide}
                index={index}
              />
            ))}
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.screenPadding,
    paddingBottom: spacing.xxl,
  },
  animatedContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.md,
  },
  loadingText: {
    color: colors.textSecondary,
    fontSize: 16,
    fontWeight: '500',
  },
  sectionHeader: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.textPrimary,
    letterSpacing: -0.5,
    marginBottom: spacing.xs,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '400',
    lineHeight: 20,
  },
  formsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
});

export default FormsScreen;
