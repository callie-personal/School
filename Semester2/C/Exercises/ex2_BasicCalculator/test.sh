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

output=$(./a$fileExtension)
expected_output_1="The sum of 50 and 25 is 75"
expected_output_2="The difference of 50 and 25 is 25"
expected_output_3="The product of 50 and 25 is 1250"
expected_output_4="The result of dividing 50 by 25 is 2"
expected_output_5="The answer is 43"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_1" <<< "$output"; then
  eval "$passFormat"
  echo "Test #1 Addition - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #1 Addition - Expected '$expected_output_1' but got: $output"
  returnStatus=1
fi

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_2" <<< "$output"; then
  eval "$passFormat"
  echo "Test #2 Subtraction - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #2 Subtraction - Expected '$expected_output_2' but got: $output"
  returnStatus=1
fi

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_3" <<< "$output"; then
  eval "$passFormat"
  echo "Test #3 Multiplication - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #3 Multiplication - Expected '$expected_output_3' but got: $output"
  returnStatus=1
fi

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_4" <<< "$output"; then
  eval "$passFormat"
  echo "Test #4 Division - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #4 Division - Expected '$expected_output_4' but got: $output"
  returnStatus=1
fi

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_5" <<< "$output"; then
  eval "$passFormat"
  echo "Test #5 Debugging - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #5 Debugging - Expected '$expected_output_5' but got: $output"
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