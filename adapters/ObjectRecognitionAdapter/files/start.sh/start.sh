Green='\033[0;32m'
NC='\033[0m'

echo -e "\n ---> ${Green}Running Object Detection Script${NC}\n\n"
python3 -u main.py > detection.log 2>&1 &