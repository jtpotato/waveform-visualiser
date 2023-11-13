/** @type {import('next').NextConfig} */

let nextConfig = {}

if (process.env.BUILD === 'production') {
    console.log("PRODUCTION MODE ACTIVATED 😎")
    nextConfig = {
        output: 'export',
        basePath: '/waveform-visualiser'
    }
}

module.exports = nextConfig
