// plugins/amplify.js
import Amplify,{ Storage } from 'aws-amplify'
import '@aws-amplify/ui-vue';
import config from '../src/aws-exports';
Amplify.configure(config)