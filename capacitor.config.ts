import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.cardume.ionic',
  appName: 'cardume',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
}

export default config
