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
expected_output_1="The hitter's OBP is: 0.375"
expected_output_2="The hitter's SLG is: 0.570"
expected_output_3="The hitter's OPS is: 0.945"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_1" <<< "$output"; then
  eval "$passFormat"
  echo "Test #1 OBP - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #1 OBP - Expected '$expected_output_1' but got: $output"
  returnStatus=1
fi

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_2" <<< "$output"; then
  eval "$passFormat"
  echo "Test #2 SLG - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #2 SLG - Expected '$expected_output_2' but got: $output"
  returnStatus=1
fi

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_3" <<< "$output"; then
  eval "$passFormat"
  echo "Test #3 OPS - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #3 OPS - Expected '$expected_output_3' but got: $output"
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