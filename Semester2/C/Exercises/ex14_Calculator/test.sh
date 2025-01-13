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

./a$fileExtension -a two three four > /dev/null 2>&1

if [ $? -eq 1 ] ; then
  eval "$passFormat"
  echo "Pass: Program exited with correct error code"
else
  eval "$failFormat"
  echo "Fail: Program did not exit with correct error code"
  returnStatus=1
fi

output_1=$(./a$fileExtension -a two three four 2>&1)

# don't worry about extra whitespace in the output
newOutput_1=""
while read line
do
  newOutput_1=$newOutput_1$(echo "$line" | xargs)
done <<< "$output_1"

expected_output_1="Sorry, bad number of command line arguments."

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_1" <<< "$newOutput_1"; then
  eval "$passFormat"
  echo "Test #1: Too Many Args - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #1: Too Many Args - Expected '$expected_output_1' but got: $newOutput_1"
  returnStatus=1
fi

echo

./a$fileExtension -s two > /dev/null 2>&1

if [ $? -eq 1 ] ; then
  eval "$passFormat"
  echo "Pass: Program exited with correct error code"
else
  eval "$failFormat"
  echo "Fail: Program did not exit with correct error code"
  returnStatus=1
fi

output_2=$(./a$fileExtension -s two 2>&1)

# don't worry about extra whitespace in the output
newOutput_2=""
while read line
do
  newOutput_2=$newOutput_2$(echo "$line" | xargs)
done <<< "$output_2"

expected_output_2="Sorry, bad number of command line arguments."

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_2" <<< "$newOutput_2"; then
  eval "$passFormat"
  echo "Test #2: Too Few Args - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #2: Too Few Args - Expected '$expected_output_2' but got: $newOutput_2"
  returnStatus=1
fi

echo

./a$fileExtension -g 23 12 > /dev/null 2>&1

if [ $? -eq 1 ] ; then
  eval "$passFormat"
  echo "Pass: Program exited with correct error code"
else
  eval "$failFormat"
  echo "Fail: Program did not exit with correct error code"
  returnStatus=1
fi

output_3=$(./a$fileExtension -g 23 12 2>&1)

# don't worry about extra whitespace in the output
newOutput_3=""
while read line
do
  newOutput_3=$newOutput_3$(echo "$line" | xargs)
done <<< "$output_3"

expected_output_3="Sorry, bad operator."

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_3" <<< "$newOutput_3"; then
  eval "$passFormat"
  echo "Test #3: Bad Operator - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #3: Bad Operator - Expected '$expected_output_3' but got: $newOutput_3"
  returnStatus=1
fi

echo

./a$fileExtension -a 34 22 > /dev/null 2>&1

if [ $? -eq 0 ] ; then
  eval "$passFormat"
  echo "Pass: Program exited zero"
else
  eval "$failFormat"
  echo "Fail: Program did not exit zero"
  returnStatus=1
fi

output_4=$(./a$fileExtension -a 34 22 2>&1)

# don't worry about extra whitespace in the output
newOutput_4=""
while read line
do
  newOutput_4=$newOutput_4$(echo "$line" | xargs)
done <<< "$output_4"

expected_output_4="The result is 56.000."

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_4" <<< "$newOutput_4"; then
  eval "$passFormat"
  echo "Test #4: -a 34 22 - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #4: -a 34 22 - Expected '$expected_output_4' but got: $newOutput_4"
  returnStatus=1
fi

echo

./a$fileExtension -s 123 16 > /dev/null 2>&1

if [ $? -eq 0 ] ; then
  eval "$passFormat"
  echo "Pass: Program exited zero"
else
  eval "$failFormat"
  echo "Fail: Program did not exit zero"
  returnStatus=1
fi

output_5=$(./a$fileExtension -s 123 16 2>&1)

# don't worry about extra whitespace in the output
newOutput_5=""
while read line
do
  newOutput_5=$newOutput_5$(echo "$line" | xargs)
done <<< "$output_5"

expected_output_5="The result is 107.000."

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_5" <<< "$newOutput_5"; then
  eval "$passFormat"
  echo "Test #5: -s 123 16 - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #5: -s 123 16 - Expected '$expected_output_5' but got: $newOutput_5"
  returnStatus=1
fi

echo

./a$fileExtension -m 13 7 > /dev/null 2>&1

if [ $? -eq 0 ] ; then
  eval "$passFormat"
  echo "Pass: Program exited zero"
else
  eval "$failFormat"
  echo "Fail: Program did not exit zero"
  returnStatus=1
fi

output_6=$(./a$fileExtension -m 13 7 2>&1)

# don't worry about extra whitespace in the output
newOutput_6=""
while read line
do
  newOutput_6=$newOutput_6$(echo "$line" | xargs)
done <<< "$output_6"

expected_output_6="The result is 91.000."

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_6" <<< "$newOutput_6"; then
  eval "$passFormat"
  echo "Test #6: -m 13 7 - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #6: -m 13 7 - Expected '$expected_output_6' but got: $newOutput_6"
  returnStatus=1
fi

echo

./a$fileExtension -d 96 9 > /dev/null 2>&1

if [ $? -eq 0 ] ; then
  eval "$passFormat"
  echo "Pass: Program exited zero"
else
  eval "$failFormat"
  echo "Fail: Program did not exit zero"
  returnStatus=1
fi

output_7=$(./a$fileExtension -d 96 9 2>&1)

# don't worry about extra whitespace in the output
newOutput_7=""
while read line
do
  newOutput_7=$newOutput_7$(echo "$line" | xargs)
done <<< "$output_7"

expected_output_7="The result is 10.667."

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_7" <<< "$newOutput_7"; then
  eval "$passFormat"
  echo "Test #7: -d 96 9 - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #7: -d 96 9 - Expected '$expected_output_7' but got: $newOutput_7"
  returnStatus=1
fi

echo

./a$fileExtension -p 12 3 > /dev/null 2>&1

if [ $? -eq 0 ] ; then
  eval "$passFormat"
  echo "Pass: Program exited zero"
else
  eval "$failFormat"
  echo "Fail: Program did not exit zero"
  returnStatus=1
fi

output_8=$(./a$fileExtension -p 12 3 2>&1)

# don't worry about extra whitespace in the output
newOutput_8=""
while read line
do
  newOutput_8=$newOutput_8$(echo "$line" | xargs)
done <<< "$output_8"

expected_output_8="The result is 1728.000."

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_8" <<< "$newOutput_8"; then
  eval "$passFormat"
  echo "Test #8: -p 12 3 - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #8: -p 12 3 - Expected '$expected_output_8' but got: $newOutput_8"
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