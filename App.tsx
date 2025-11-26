/**
 * Petit - A Simple Cardano Wallet
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const handleCreateWallet = () => {
    console.log('Create Wallet pressed');
    // TODO: Implement wallet creation
  };

  const handleImportWallet = () => {
    console.log('Import Wallet pressed');
    // TODO: Implement wallet import
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Petit</Text>
        <Text style={styles.subtitle}>Cardano Wallet</Text>
      </View>

      {/* Balance Section */}
      <View style={styles.balanceSection}>
        <Text style={styles.balanceLabel}>Balance</Text>
        <Text style={styles.balanceAmount}>0.00 ADA</Text>
        <Text style={styles.balanceUsd}>$0.00 USD</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.btnPrimary} onPress={handleCreateWallet}>
          <Text style={styles.btnPrimaryText}>Create Wallet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSecondary} onPress={handleImportWallet}>
          <Text style={styles.btnSecondaryText}>Import Wallet</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.networkBadge}>
          <Text style={styles.networkText}>Testnet (Preview)</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5f7',
    padding: 24,
  },
  header: {
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#ff6b9d',
  },
  subtitle: {
    fontSize: 16,
    color: '#b8859f',
    marginTop: 4,
  },
  balanceSection: {
    alignItems: 'center',
    backgroundColor: '#fff0f3',
    borderRadius: 16,
    padding: 32,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#ffccd9',
  },
  balanceLabel: {
    fontSize: 14,
    color: '#b8859f',
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: '700',
    color: '#ff6b9d',
  },
  balanceUsd: {
    fontSize: 16,
    color: '#ff99b8',
    marginTop: 4,
  },
  actions: {
    gap: 12,
  },
  btnPrimary: {
    backgroundColor: '#ff6b9d',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  btnPrimaryText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  btnSecondary: {
    borderWidth: 2,
    borderColor: '#ff6b9d',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  btnSecondaryText: {
    color: '#ff6b9d',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 16,
  },
  networkBadge: {
    backgroundColor: '#fff0f3',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ffccd9',
  },
  networkText: {
    color: '#ff99b8',
    fontSize: 12,
  },
});

export default App;
