/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
    dest: 'public'
  })
  
  module.exports = withPWA({
    images: {
      domains: ["res.cloudinary.com","f8g8b9p5.rocketcdn.me", "ninetheme.com", "dummyimage.com", "aws.amazon.com","wop-files.s3.us-west-2.amazonaws.com"],
  },
    // next.js config
  })
