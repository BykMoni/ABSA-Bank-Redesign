import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const profilePic = require('../assets/UserProfile.jpg'); 

const QuickAction = ({ iconName, title, subtitle, onPress }) => (
  <TouchableOpacity style={styles.actionCard} onPress={onPress} activeOpacity={0.75}>
    <View style={styles.actionIconCircle}>
      <MaterialCommunityIcons name={iconName} size={20} color="#fff" />
    </View>
    <View style={styles.actionTextWrap}>
      <Text style={styles.actionTitle}>{title}</Text>
      <Text style={styles.actionSubtitle}>{subtitle}</Text>
    </View>
  </TouchableOpacity>
);

const TxRow = ({ incoming, title, subtitle, date, amount }) => (
  <View style={styles.txRow}>
    <View style={styles.txLeft}>
      <View style={styles.txBadge}>
        <Ionicons
          name={incoming ? 'arrow-down' : 'arrow-up'}
          size={16}
          color={incoming ? '#10b981' : '#ef4444'} 
          style={{ transform: [{ rotate: '305deg' }] }}
        />
      </View>
      <View>
        <Text style={styles.txTitle}>{title}</Text>
        <Text style={styles.txSubtitle}>{subtitle}</Text>
      </View>
    </View>

    <View style={styles.txRight}>
      <Text style={styles.txAmount}>{`GHC ${Math.abs(amount).toLocaleString()}.00`}</Text>
      <Text style={styles.txDate}>{date}</Text>
    </View>
  </View>
);

export default function OverviewScreen() {
  const transactions = [
    { id: '1', incoming: true, title: 'From 233 Cars', subtitle: 'Payout', date: '1 JUL, 2025', amount: 5000 },
    { id: '2', incoming: true, title: 'From ysavedep', subtitle: 'Payout', date: '15 March, 2025', amount: 15000 },
    { id: '3', incoming: false, title: 'To Marie', subtitle: 'MoMo Transfer', date: '12 March, 2025', amount: -2000 },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.wrap} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image source={profilePic} style={styles.avatar} />
            <Text style={styles.welcome}>Welcome Daniel</Text>
          </View>
          <TouchableOpacity style={styles.swapBtn} accessibilityLabel="Switch account">
            <Feather name="repeat" size={20} color="#111827" />
          </TouchableOpacity>
        </View>

        {/* Balance Card */}
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            {/* Label only */}
            <Text style={styles.cardLabel}>Available Balance</Text>

            {/* Balance row: amount + eye */}
            <View style={styles.balanceRow}>
              <Text style={styles.cardBalance}>GHC 150,000.00</Text>
              <TouchableOpacity style={styles.eyeBtn} accessibilityLabel="toggle balance">
                <Feather name="eye" size={18} color="#fff" />
              </TouchableOpacity>
            </View>

            {/* Bottom row: account + absa circle */}
            <View style={styles.cardBottomRow}>
              <View>
                <Text style={styles.cardAccount}>Ignition Student</Text>
                <Text style={styles.cardAccountSmall}>xxxx xx71</Text>
              </View>

              <View style={styles.cardLogoWrap} pointerEvents="none">
                <View style={styles.cardLogoDashed}>
                  <Text style={styles.cardLogoText}>absa</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Quick actions */}
        <Text style={styles.sectionTitle}>Quick actions</Text>
        <View style={styles.actionsGrid}>
          <QuickAction iconName="file-document-outline" title="Pay Bill" subtitle="DSTV, Electricity etc" />
          <QuickAction iconName="bank" title="Bank Transfer" subtitle="ABSA, local banks" />
          <QuickAction iconName="cellphone" title="Mobile Money" subtitle="MTN, Telecel, etc" />
          <QuickAction iconName="qrcode-scan" title="Scan QR code" subtitle="Instant transaction" />
        </View>

        {/* Recent transactions */}
        <Text style={[styles.sectionTitle, { marginTop: 18 }]}>Recent transactions</Text>
        <View style={styles.txList}>
          {transactions.map((t) => (
            <TxRow
              key={t.id}
              incoming={t.incoming}
              title={t.title}
              subtitle={t.subtitle}
              date={t.date}
              amount={t.amount}
            />
          ))}
        </View>

        <View style={{ height: 110 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

/* Styles */
const CARD_H = 140;
const ACTION_W = (width - 40 - 16) / 2;
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#ffffff', top: 40 },
  wrap: { paddingHorizontal: 20, paddingTop: 12 },

  /* Header */
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 44, height: 44, borderRadius: 22, marginRight: 12 },
  welcome: { fontSize: 20, fontWeight: '700', color: '#111827' },
  swapBtn: { padding: 6 },

  /* Card */
  cardContainer: { marginTop: 8, marginBottom: 16 },
  card: {
    height: CARD_H,
    borderRadius: 12,
    backgroundColor: '#C20B2F',
    padding: 18,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  cardLabel: { color: '#f8fafc', fontSize: 14, opacity: 0.95 },

  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
  },

  cardBalance: { color: '#fff', fontSize: 20, fontWeight: '800' },
  eyeBtn: { padding: 6, backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: 8, right: 95 },

  cardBottomRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', top:10 },
  cardAccount: { color: '#fee2e2', fontSize: 14, marginTop: 6 },
  cardAccountSmall: { color: '#fee2e2', fontSize: 13, marginTop: 4, opacity: 0.9 },

  /* dashed circle with text 'absa' */
  cardLogoWrap: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -25,
    bottom: -40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardLogoDashed: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.95)',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  cardLogoText: { color: '#fff', fontSize: 34, fontWeight: '700', letterSpacing: 0.5 },

  /* Quick actions */
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#111827', marginTop: 6, marginBottom: 8 },
  actionsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  actionCard: {
    width: ACTION_W,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    elevation: 1,
  },
  actionIconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#C20B2F',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    elevation: 2,
  },
  actionTextWrap: { flex: 1 },
  actionTitle: { fontSize: 15, fontWeight: '700', color: '#111827' },
  actionSubtitle: { fontSize: 12, color: '#6b7280', marginTop: 4 },

  /* Transactions */
  txList: { marginTop: 6 },
  txRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  txLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  txBadge: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    backgroundColor: '#f3f4f6', 
  },
  txTitle: { fontSize: 15, fontWeight: '700', color: '#111827' },
  txSubtitle: { fontSize: 12, color: '#6b7280', marginTop: 4 },

  txRight: { alignItems: 'flex-end', minWidth: 120 },
  txAmount: { fontSize: 15, fontWeight: '800', color: '#111827' },
  txDate: { fontSize: 12, color: '#6b7280', marginTop: 6 },
});
