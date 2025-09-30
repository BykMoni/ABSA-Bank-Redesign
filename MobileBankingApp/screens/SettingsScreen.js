import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const SettingItem = ({ icon, title, subtitle, rightComponent }) => (
  <TouchableOpacity style={styles.settingItem}>
    <View style={styles.settingIcon}>
      <MaterialCommunityIcons name={icon} size={24} color="#C20B2F" />
    </View>
    <View style={styles.settingDetails}>
      <Text style={styles.settingTitle}>{title}</Text>
      {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
    </View>
    <View style={styles.settingRight}>
      {rightComponent || <Feather name="chevron-right" size={20} color="#888" />}
    </View>
  </TouchableOpacity>
);

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Feather name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Settings</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Profile Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile</Text>
          <SettingItem
            icon="account"
            title="Personal Information"
            subtitle="Manage your personal details"
          />
          <SettingItem
            icon="security"
            title="Security & Privacy"
            subtitle="Password, PIN, biometrics"
          />
          <SettingItem
            icon="bell"
            title="Notifications"
            subtitle="Manage your notification preferences"
          />
        </View>

        {/* Account Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <SettingItem
            icon="bank"
            title="Linked Accounts"
            subtitle="Manage connected accounts"
          />
          <SettingItem
            icon="credit-card"
            title="Cards & Payments"
            subtitle="Manage your cards and payment methods"
          />
          <SettingItem
            icon="chart-line"
            title="Spending Limits"
            subtitle="Set daily and monthly limits"
          />
        </View>

        {/* Support */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          <SettingItem
            icon="help-circle"
            title="Help Center"
            subtitle="Get help and support"
          />
          <SettingItem
            icon="message-circle"
            title="Contact Us"
            subtitle="Get in touch with our support team"
          />
          <SettingItem
            icon="star"
            title="Rate App"
            subtitle="Rate us on the app store"
          />
        </View>

        {/* App Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App</Text>
          <SettingItem
            icon="palette"
            title="Theme"
            subtitle="Light mode"
          />
          <SettingItem
            icon="globe"
            title="Language"
            subtitle="English"
          />
          <SettingItem
            icon="information"
            title="About"
            subtitle="Version 1.0.0"
          />
        </View>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutButton}>
          <MaterialCommunityIcons name="logout" size={24} color="#C20B2F" />
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    top: 40,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  settingDetails: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 12,
    color: '#888',
  },
  settingRight: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#C20B2F',
    marginLeft: 10,
  },
});