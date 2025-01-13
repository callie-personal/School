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

expected_output_1="Student One:"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_1" <<< "$output"; then
  eval "$passFormat"
  echo "Test #1 Header Message - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #1 Header Message - Expected '$expected_output_1'"
  returnStatus=1
fi

expected_output_2="ID: w5555555 NAME: Trudeau, Justin"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_2" <<< "$output"; then
  eval "$passFormat"
  echo "Test #2 Name/ID - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #2 Name/ID - Expected '$expected_output_2'"
  returnStatus=1
fi

expected_output_3="TERM: 2 GPA: 3.57 FULL-TIME: false"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_3" <<< "$output"; then
  eval "$passFormat"
  echo "Test #3 Term/GPA/Full-time - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #3 Term/GPA/Full-time - Expected '$expected_output_3'"
  returnStatus=1
fi

expected_output_4="First updated variable value: 20"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_4" <<< "$output"; then
  eval "$passFormat"
  echo "Test #4 Debug Code - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #4 Debug Code - Expected '$expected_output_4'"
  returnStatus=1
fi

expected_output_5="Second updated variable value: 30"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_5" <<< "$output"; then
  eval "$passFormat"
  echo "Test #5 Debug Code - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #5 Debug Code - Expected '$expected_output_5'"
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