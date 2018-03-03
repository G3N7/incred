set -e

echo "Navigate to /bot"
cd bot

echo "Build Bot"
npm run build

echo "Navigate to root"
cd ..