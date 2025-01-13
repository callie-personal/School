returnStatus=0

# Only show colours on local "Git Bash" terminal
passFormat="if [ $TERM = "xterm" ]; then tput sgr0 && tput setaf 2; fi"
failFormat="if [ $TERM = "xterm" ]; then tput sgr0 && tput setaf 1; fi"
normalFormat="if [ $TERM = "xterm" ]; then tput sgr0; fi"

# If not on Linux set output to .exe
unameValue="$(uname -s)"
echo "Testing OS Platform: $unameValue"
fileExtension=".exe"
if [  $unameValue = "Linux" ] || [  $unameValue = "Darwin" ] ; then
    fileExtension=".out"
fi

echo "Running tests..."
echo

./a$fileExtension > /dev/null 2>&1

if [ $? -eq 0 ] ; then
  eval "$passFormat"
  echo "Pass: Program exited zero"
else
  eval "$failFormat"
  echo "Fail: Program did not exit zero"
  returnStatus=1
fi

output=$(./a$fileExtension | xargs)

expected_output_1="The final mark for APPD1001 is a A-."

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_1" <<< "$output"; then
  eval "$passFormat"
  echo "Test #1 APPD1001 - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #1 APPD1001 - Expected '$expected_output_1'"
  returnStatus=1
fi

expected_output_2="The final mark for COMM2700 is a 3.3."

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_2" <<< "$output"; then
  eval "$passFormat"
  echo "Test #2 COMM2700 - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #2 COMM2700 - Expected '$expected_output_2'"
  returnStatus=1
fi

expected_output_3="The final mark for DBAS4002 is a 73."

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_3" <<< "$output"; then
  eval "$passFormat"
  echo "Test #3 DBAS4002 - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #3 DBAS4002 - Expected '$expected_output_3'"
  returnStatus=1
fi

expected_output_4="The final mark for OSYS1000 is a 3.7"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_4" <<< "$output"; then
  eval "$passFormat"
  echo "Test #4 OSYS1000 - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #4 OSYS1000 - Expected '$expected_output_4'"
  returnStatus=1
fi

expected_output_5="The final mark for PROG1400 is a B."

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_5" <<< "$output"; then
  eval "$passFormat"
  echo "Test #5 PROG1400 - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #5 PROG1400 - Expected '$expected_output_5'"
  returnStatus=1
fi

expected_output_6="The final mark for PROG2007 is a 88."

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_6" <<< "$output"; then
  eval "$passFormat"
  echo "Test #6 PROG2007 - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #6 PROG2007 - Expected '$expected_output_6'"
  returnStatus=1
fi

expected_output_7="The final mark for SAAD1001 is a C-."

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_7" <<< "$output"; then
  eval "$passFormat"
  echo "Test #7 SAAD1001 - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #7 SAAD1001 - Expected '$expected_output_7'"
  returnStatus=1
fi

expected_output_8="Your Term GPA is: 3.2."

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_8" <<< "$output"; then
  eval "$passFormat"
  echo "Test #8 Term GPA - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #8 Term GPA - Expected '$expected_output_8'"
  returnStatus=1
fi

echo
if [ $returnStatus -eq 0 ] ; then
    eval "$passFormat"
    echo "All tests passed."
else
    eval "$failFormat"
    echo "One or more tests failed."
fi

eval "$normalFormat"

echo
exit $returnStatus