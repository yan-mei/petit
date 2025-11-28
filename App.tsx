/**
 * Petit - A Simple Cardano Wallet
 */

import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const handleRestoreWallet = () => {
    console.log('Restore Wallet pressed');
    // TODO: Navigate to recovery phrase screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Petit</Text>
        <Text style={styles.subtitle}>Cardano Wallet</Text>
      </View>

      {/* Spacer */}
      <View style={styles.spacer} />

      {/* Action Button */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.btnPrimary} onPress={handleRestoreWallet}>
          <Text style={styles.btnPrimaryText}>Restore Wallet</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.networkBadge}>
          <Text style={styles.networkText}>Preprod Testnet</Text>
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
    marginTop: 80,
  },
  title: {
    fontSize: 48,
    fontWeight: '700',
    color: '#ff6b9d',
  },
  subtitle: {
    fontSize: 18,
    color: '#b8859f',
    marginTop: 8,
  },
  spacer: {
    flex: 1,
  },
  actions: {
    marginBottom: 32,
  },
  btnPrimary: {
    backgroundColor: '#ff6b9d',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
  },
  btnPrimaryText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 16,
  },
  networkBadge: {
    backgroundColor: '#fff0f3',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ffccd9',
  },
  networkText: {
    color: '#ff99b8',
    fontSize: 12,
  },
});
