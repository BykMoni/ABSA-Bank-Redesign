import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

// Asset paths - these should be actual images in your assets folder
const absaLogo = require('../assets/icon.png'); // Using default icon for now
const profilePic = require('../assets/icon.png'); // Using default icon for now

const QuickActionItem = ({ icon, title, subtitle }) => (
  <TouchableOpacity style={styles.quickActionItem}>
    <View style={styles.quickActionIconContainer}>
      <MaterialCommunityIcons name={icon} size={28} color="#000" />
    </View>
    <Text style={styles.quickActionTitle}>{title}</Text>
    <Text style={styles.quickActionSubtitle}>{subtitle}</Text>
  </TouchableOpacity>
);

const TransactionItem = ({ icon, direction, description, date, amount }) => (
  <View style={styles.transactionItem}>
    <View style={styles.transactionIconContainer}>
      <MaterialCommunityIcons 
        name={icon} 
        size={20} 
        color={direction === 'in' ? 'green' : 'red'} 
      />
    </View>
    <View style={styles.transactionDetails}>
      <Text style={styles.transactionDescription}>{description}</Text>
      <Text style={styles.transactionDate}>{date}</Text>
    </View>
    <Text style={styles.transactionAmount}>GHC {amount}</Text>
  </View>
);

export default function OverviewScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <Image source={profilePic} style={styles.profilePic} />
            <Text style={styles.welcomeText}>Welcome Daniel</Text>
          </View>
          <TouchableOpacity>
            <Feather name="refresh-cw" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <View style={styles.balanceHeader}>
            <Text style={styles.balanceText}>Available Balance</Text>
            <TouchableOpacity>
              <Feather name="eye" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.balanceDetails}>
            <View>
              <Text style={styles.balanceAmount}>GHC 150,000.00</Text>
              <Text style={styles.accountText}>Ignition Student</Text>
              <Text style={styles.accountText}>xxxx xx71</Text>
            </View>
            <View style={styles.absaLogoContainer}>
              <Text style={styles.absaText}>absa</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick actions</Text>
          <View style={styles.quickActionsGrid}>
            <QuickActionItem icon="credit-card-outline" title="Pay Bill" subtitle="DSTV, Electricity etc" />
            <QuickActionItem icon="bank-outline" title="Bank Transfer" subtitle="ABSA, local banks" />
            <QuickActionItem icon="cellphone" title="Mobile Money" subtitle="MTN, Telecel, etc" />
            <QuickActionItem icon="qrcode-scan" title="Scan QR code" subtitle="Instant transaction" />
          </View>
        </View>

        {/* Recent Transactions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent transactions</Text>
          <TransactionItem 
            icon="arrow-bottom-left" 
            direction="in" 
            description="From 233 Cars" 
            date="1 JUL, 2025" 
            amount="5,000.00" 
          />
          <TransactionItem 
            icon="arrow-bottom-left" 
            direction="in" 
            description="From ysavedep" 
            date="15 March,2025" 
            amount="15,000.00" 
          />
          <TransactionItem 
            icon="arrow-top-right" 
            direction="out" 
            description="To Marie" 
            date="12 March, 2025" 
            amount="2,000.00" 
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  balanceCard: {
    backgroundColor: '#C20B2F',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  balanceText: {
    color: '#fff',
    fontSize: 16,
  },
  balanceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  accountText: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.8,
  },
  absaLogoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderStyle: 'dashed',
  },
  absaText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickActionItem: {
    width: '48%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  quickActionIconContainer: {
    marginBottom: 10,
  },
  quickActionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  quickActionSubtitle: {
    fontSize: 12,
    color: '#888',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  transactionIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionDescription: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionDate: {
    fontSize: 12,
    color: '#888',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});