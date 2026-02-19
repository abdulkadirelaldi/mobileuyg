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
import { fetchBloodSugarData } from '../data/mockData';
import { colors, shadows, borderRadius, spacing } from '../constants/colors';
import ErrorState from '../components/ErrorState';
import SkeletonLoader from '../components/SkeletonLoader';
import ModernButton from '../components/ModernButton';
import ScreenHeader from '../components/ScreenHeader';

const BloodSugarScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState('05-03-2023');
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (!loading && data.length > 0) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [loading, data]);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetchBloodSugarData();
      setData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ScreenHeader
          title="Kan Şekeri İzlemlerim"
          subtitle="Sağlık verileriniz"
          onBack={() => navigation.goBack()}
        />
        <SkeletonLoader />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <ScreenHeader
          title="Kan Şekeri İzlemlerim"
          subtitle="Sağlık verileriniz"
          onBack={() => navigation.goBack()}
        />
        <ErrorState message={error} onRetry={loadData} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScreenHeader
        title="Kan Şekeri İzlemlerim"
        subtitle="Sağlık verileriniz"
        onBack={() => navigation.goBack()}
      />

      {/* Date Bar */}
      <View style={styles.dateBar}>
        <View style={styles.dateContainer}>
          <View style={styles.dateIconContainer}>
            <Text style={styles.calendarIcon}>📅</Text>
          </View>
          <Text style={styles.dateText}>{selectedDate}</Text>
        </View>
        <ModernButton
          title="Ekle"
          onPress={() => navigation.navigate('AddBloodSugar', {
            onSave: (newRecord) => {
              setData((prev) => [newRecord, ...prev]);
            }
          })}
          variant="primary"
          style={styles.addButton}
        />
      </View>

      {/* Data Cards */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View
          style={[
            styles.cardsContainer,
            {
              opacity: fadeAnim,
            },
          ]}
        >
          {data.map((item, index) => (
            <View key={item.id} style={styles.dataCard}>
              <View style={styles.cardContent}>
                <View style={styles.cardLeft}>
                  <View style={styles.cardHeader}>
                    <View style={styles.iconContainer}>
                      <Text style={styles.mealEmoji}>🍽️</Text>
                    </View>
                    <View style={styles.headerText}>
                      <Text style={styles.mealType}>{item.meal}</Text>
                      <Text style={styles.mealStatus}>{item.fastingStatus}</Text>
                    </View>
                  </View>
                  
                  <View style={styles.bloodSugarValue}>
                    <Text style={styles.bloodSugarText}>{item.bloodSugarValue}</Text>
                    <Text style={styles.bloodSugarUnit}>mg/dl</Text>
                  </View>
                  
                  <View style={styles.detailsRow}>
                    <View style={styles.detailItem}>
                      <Text style={styles.detailLabel}>Tarih</Text>
                      <Text style={styles.detailValue}>{item.date}</Text>
                    </View>
                    <View style={styles.detailItem}>
                      <Text style={styles.detailLabel}>Saat</Text>
                      <Text style={styles.detailValue}>{item.time}</Text>
                    </View>
                    {item.insulinDose && (
                      <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>İnsülin</Text>
                        <Text style={styles.detailValue}>{item.insulinDose}</Text>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            </View>
          ))}
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
  dateBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.screenPadding,
    paddingVertical: spacing.md,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  dateIconContainer: {
    width: 36,
    height: 36,
    borderRadius: borderRadius.full,
    backgroundColor: colors.backgroundLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarIcon: {
    fontSize: 18,
  },
  dateText: {
    fontSize: 16,
    color: colors.textPrimary,
    fontWeight: '600',
  },
  addButton: {
    minWidth: 100,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.screenPadding,
    paddingBottom: spacing.xxl,
  },
  cardsContainer: {
    gap: spacing.md,
  },
  dataCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    padding: spacing.cardPadding,
    ...shadows.medium,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  cardContent: {
    flex: 1,
  },
  cardLeft: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.md,
    backgroundColor: colors.primary + '15',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  mealEmoji: {
    fontSize: 24,
  },
  headerText: {
    flex: 1,
  },
  mealType: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 2,
  },
  mealStatus: {
    fontSize: 13,
    color: colors.textSecondary,
    fontWeight: '400',
  },
  bloodSugarValue: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: spacing.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.success + '15',
    borderRadius: borderRadius.md,
    alignSelf: 'flex-start',
  },
  bloodSugarText: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.success,
    marginRight: spacing.xs,
  },
  bloodSugarUnit: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '600',
  },
  detailsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginTop: spacing.sm,
  },
  detailItem: {
    flex: 1,
    minWidth: '30%',
  },
  detailLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '500',
    marginBottom: 2,
  },
  detailValue: {
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: '600',
  },
});

export default BloodSugarScreen;
