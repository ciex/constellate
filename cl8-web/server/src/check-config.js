'use strict'

module.exports = CheckConfig

function CheckConfig() {
  let firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG)
  let serviceAccount = require('../service-account.json')

  // console.log('firebaseConfig', firebaseConfig)
  // console.log('serviceAccount', serviceAccount)

  return firebaseConfig
}
