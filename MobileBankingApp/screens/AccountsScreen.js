import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const AccountItem = ({ icon, iconColor, title, subtitle, amount, status, rightButton }) => (
  <View style={styles.accountItem}>
    <View style={[styles.accountIcon, { backgroundColor: iconColor }]}>
      <MaterialCommunityIcons name={icon} size={24} color="#fff" />
    </View>
    <View style={styles.accountDetails}>
      <Text style={styles.accountTitle}>{title}</Text>
      <Text style={styles.accountSubtitle}>{subtitle}</Text>
    </View>
    <View style={styles.accountRight}>
      <Text style={styles.accountAmount}>GHC {amount}</Text>
      {status && <Text style={styles.accountStatus}>{status}</Text>}
      {rightButton && (
        <TouchableOpacity style={styles.manageButton}>
          <Text style={styles.manageButtonText}>{rightButton}</Text>
        </TouchableOpacity>
      )}
    </View>
  </View>
);

export default function AccountsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header with Total Balance */}
        <View style={styles.redHeader}>
          <View style={styles.headerTop}>
            <TouchableOpacity>
              <Feather name="arrow-left" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.addAccountButton}>
              <Feather name="plus" size={20} color="#fff" />
              <Text style={styles.addAccountText}>Add New Account</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.totalBalanceSection}>
            <Text style={styles.totalBalanceLabel}>Total Available Balance</Text>
            <Text style={styles.totalBalanceAmount}>GHC 150,000.00</Text>
            <View style={styles.growthSection}>
              <Feather name="trending-up" size={16} color="#fff" />
              <Text style={styles.growthText}>60% more than last month</Text>
            </View>
          </View>
        </View>

        {/* White Content Area */}
        <View style={styles.whiteContent}>
          {/* My Accounts Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>My Accounts</Text>
              <TouchableOpacity style={styles.expensesButton}>
                <Text style={styles.expensesButtonText}>Expenses</Text>
                <Feather name="chevron-right" size={16} color="#fff" />
              </TouchableOpacity>
            </View>
            
            <AccountItem
              icon="currency-usd"
              iconColor="#C20B2F"
              title="Savings"
              subtitle="DSTV, Electricity etc"
              amount="100,000.00"
              status="● ACTIVE"
            />
            
            <AccountItem
              icon="school"
              iconColor="#C20B2F"
              title="Ignition Student"
              subtitle="MTN, Telecel, etc"
              amount="7,000.00"
              status="● ACTIVE"
            />
          </View>

          {/* Investments Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Investments</Text>
            
            <AccountItem
              icon="trending-up"
              iconColor="#C20B2F"
              title="Education Fund"
              subtitle="150 days left"
              amount="2,000.00"
              status="● ACTIVE"
            />
            
            <AccountItem
              icon="chart-line"
              iconColor="#C20B2F"
              title="Treasury Bill"
              subtitle="2 years left"
              amount="75,000.00"
              status="● ACTIVE"
            />
          </View>

          {/* Subscriptions Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Subscriptions</Text>
            
            <AccountItem
              icon="spotify"
              iconColor="#1DB954"
              title="Apple Music"
              subtitle="Next payment due on 27 Aug."
              amount=""
              rightButton="Manage"
            />
            
            <AccountItem
              icon="netflix"
              iconColor="#E50914"
              title="Netflix"
              subtitle="Next payment due on 7 Aug."
              amount=""
              rightButton="Manage"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C20B2F',
  },
  scrollContent: {
    flexGrow: 1,
  },
  redHeader: {
    backgroundColor: '#C20B2F',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  addAccountButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addAccountText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 14,
  },
  totalBalanceSection: {
    alignItems: 'center',
  },
  totalBalanceLabel: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  totalBalanceAmount: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  growthSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  growthText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 14,
  },
  whiteContent: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 10,
    padding: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  expensesButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C20B2F',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  expensesButtonText: {
    color: '#fff',
    marginRight: 5,
    fontSize: 12,
  },
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  accountIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  accountDetails: {
    flex: 1,
  },
  accountTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  accountSubtitle: {
    fontSize: 12,
    color: '#888',
  },
  accountRight: {
    alignItems: 'flex-end',
  },
  accountAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  accountStatus: {
    fontSize: 12,
    color: '#4CAF50',
  },
  manageButton: {
    backgroundColor: '#C20B2F',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginTop: 4,
  },
  manageButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});