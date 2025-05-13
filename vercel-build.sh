#!/bin/bash
# Create .npmrc file for GSAP
echo "always-auth=true" > .npmrc
echo "//npm.greensock.com/:_authToken=$GSAP_TOKEN" >> .npmrc
echo "@gsap:registry=https://npm.greensock.com" >> .npmrc

# Continue with normal build
bun install
bun run build