import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'vue-firebase',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '835726058845-sf30sohbm947p4u30j6pci2hgcf5oan7.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
      androidClientId: '835726058845-v5maaeujjhhk4vf8vp5etst04ia5o4aj.apps.googleusercontent.com'
    }
  }
};

export default config;
