import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

// These are placeholders. You must have your own images in the 'assets' folder.
const absaLogo = require('./assets/absa-logo.png'); 
const profilePic = require('./assets/profile-pic.png'); 

const QuickActionItem = ({ icon, title, subtitle }) => (
  <View style={styles.quickActionItem}>
    <View style={styles.quickActionIconContainer}>
      <MaterialCommunityIcons name={icon} size={28} color="#000" />
    </View>
    <Text style={styles.quickActionTitle}>{title}</Text>
    <Text style={styles.quickActionSubtitle}>{subtitle}</Text>
  </View>
);

const TransactionItem = ({ icon, direction, description, date, amount }) => (
  <View style={styles.transactionItem}>
    <View style={styles.transactionIconContainer}>
      <MaterialCommunityIcons 
        name={icon} 
        size={20} 
        color={direction === 'in' ? 'green' : 'red'} 
        style={{ transform: [{ rotate: direction === 'in' ? '45deg' : '-45deg' }] }}
      />
    </View>
    <View style={styles.transactionDetails}>
      <Text style={styles.transactionDescription}>{description}</Text>
      <Text style={styles.transactionDate}>{date}</Text>
    </View>
    <Text style={styles.transactionAmount}>GHC {amount}</Text>
  </View>
);

const TabBarItem = ({ icon, title, isFocused }) => (
  <TouchableOpacity style={styles.tabItem}>
    <MaterialCommunityIcons 
      name={icon} 
      size={24} 
      color={isFocused ? '#C20B2F' : '#888'} 
    />
    <Text style={[styles.tabTitle, { color: isFocused ? '#C20B2F' : '#888' }]}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <Image source={profilePic} style={styles.profilePic} />
            <Text style={styles.welcomeText}>Welcome Daniel</Text>
          </View>
          <Feather name="refresh-cw" size={24} color="#000" />
        </View>

        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <View style={styles.balanceHeader}>
            <Text style={styles.balanceText}>Available Balance</Text>
            <Feather name="eye" size={20} color="#fff" />
          </View>
          <View style={styles.balanceDetails}>
            <View>
              <Text style={styles.balanceAmount}>GHC 150,000.00</Text>
              <Text style={styles.accountText}>Ignition Student</Text>
              <Text style={styles.accountText}>xxxx xx71</Text>
            </View>
            <Image source={absaLogo} style={styles.absaLogo} />
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick actions</Text>
          <View style={styles.quickActionsGrid}>
            <QuickActionItem icon="credit-card-outline" title="Pay Bill" subtitle="DStv, Electricity etc" />
            <QuickActionItem icon="bank-outline" title="Bank Transfer" subtitle="ABSA, local banks" />
            <QuickActionItem icon="cellphone" title="Mobile Money" subtitle="MTN, Telecel, etc" />
            <QuickActionItem icon="qrcode-scan" title="Scan QR code" subtitle="instant transaction" />
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

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TabBarItem icon="home" title="Overview" isFocused={true} />
        <TabBarItem icon="account-multiple" title="Accounts" />
        <TabBarItem icon="swap-horizontal" title="Transact" />
        <TabBarItem icon="cog" title="Settings" />
      </View>

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
    paddingBottom: 100,
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
  absaLogo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    opacity: 0.8,
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
    marginLeft: 'auto',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 10,
    paddingBottom: 30,
  },
  tabItem: {
    alignItems: 'center',
  },
  tabTitle: {
    fontSize: 12,
    marginTop: 5,
  },
});