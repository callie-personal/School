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

./a$fileExtension -a two three four five > /dev/null 2>&1

if [ $? -eq 1 ] ; then
  eval "$passFormat"
  echo "Pass: Program exited with correct error code"
else
  eval "$failFormat"
  echo "Fail: Program did not exit with correct error code"
  returnStatus=1
fi

output_1=$(./a$fileExtension -a two three four five 2>&1)

# don't worry about extra whitespace in the output
newOutput_1=""
while read line
do
  newOutput_1=$newOutput_1$(echo "$line" | xargs)
done <<< "$output_1"

expected_output_1="Invalid number of command line arguments."

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

./a$fileExtension -w > /dev/null 2>&1

if [ $? -eq 1 ] ; then
  eval "$passFormat"
  echo "Pass: Program exited with correct error code"
else
  eval "$failFormat"
  echo "Fail: Program did not exit with correct error code"
  returnStatus=1
fi

output_2=$(./a$fileExtension -w 2>&1)

# don't worry about extra whitespace in the output
newOutput_2=""
while read line
do
  newOutput_2=$newOutput_2$(echo "$line" | xargs)
done <<< "$output_2"

expected_output_2="Invalid number of command line arguments."

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

./a$fileExtension -g outFile.txt "I C, therefore I am" > /dev/null 2>&1

if [ $? -eq 1 ] ; then
  eval "$passFormat"
  echo "Pass: Program exited with correct error code"
else
  eval "$failFormat"
  echo "Fail: Program did not exit with correct error code"
  returnStatus=1
fi

output_3=$(./a$fileExtension -g outFile.txt "I C, therefore I am" 2>&1)

# don't worry about extra whitespace in the output
newOutput_3=""
while read line
do
  newOutput_3=$newOutput_3$(echo "$line" | xargs)
done <<< "$output_3"

expected_output_3="Invalid command line argument usage."

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

./a$fileExtension -w outFile.txt "I C, therefore I am" > /dev/null 2>&1

if [ $? -eq 0 ] ; then
  eval "$passFormat"
  echo "Pass: Program exited zero"
else
  eval "$failFormat"
  echo "Fail: Program did not exit zero"
  returnStatus=1
fi

output_4a=$(./a$fileExtension -w outFile.txt "I C, therefore I am" 2>&1)
output_4b=$(cat ./outFile.txt)

# don't worry about extra whitespace in the output
newOutput_4a=""
while read line
do
  newOutput_4a=$newOutput_4a$(echo "$line" | xargs)
done <<< "$output_4a"

newOutput_4b=""
while read line
do
  newOutput_4b=$newOutput_4b$(echo "$line" | xargs)
done <<< "$output_4b"

expected_output_4a="File written."
expected_output_4b="I C, therefore I am"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_4a" <<< "$newOutput_4a"; then
  if grep -q "$expected_output_4b" <<< "$newOutput_4b"; then
    eval "$passFormat"
    echo "Test #4: -w outFile.txt 'I C, therefore I am' - Pass: File/Console Output is correct"
  else
    eval "$failFormat"
    echo "Test #4: -w outFile.txt 'I C, therefore I am' - File Expected '$expected_output_4b' but got: $newOutput_4b"
  fi
else
  eval "$failFormat"
  echo "Test #4: -w outFile.txt 'I C, therefore I am' - Console Expected '$expected_output_4a' but got: $newOutput_4a"
  returnStatus=1
fi

echo

./a$fileExtension -a outFile.txt "If dolphins could code, they would program in C" > /dev/null 2>&1

if [ $? -eq 0 ] ; then
  eval "$passFormat"
  echo "Pass: Program exited zero"
else
  eval "$failFormat"
  echo "Fail: Program did not exit zero"
  returnStatus=1
fi

output_5a=$(./a$fileExtension -a outFile.txt "If dolphins could code, they would program in C" 2>&1)
output_5b=$(cat ./outFile.txt)

# don't worry about extra whitespace in the output
newOutput_5a=""
while read line
do
  newOutput_5a=$newOutput_5a$(echo "$line" | xargs)
done <<< "$output_5a"

newOutput_5b=""
while read line
do
  newOutput_5b=$newOutput_5b$(echo "$line" | xargs)
done <<< "$output_5b"

expected_output_5a="File written."
expected_output_5b="I C, therefore I am"
expected_output_5c="If dolphins could code, they would program in C"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_5a" <<< "$newOutput_5a"; then
  if grep -q "$expected_output_5b" <<< "$newOutput_5b"; then
    if grep -q "$expected_output_5c" <<< "$newOutput_5b"; then
      eval "$passFormat"
      echo "Test #5: -a outFile.txt 'If dolphins could code, they would program in C' - Pass: File/Console Output is correct"
    else
      eval "$failFormat"
      echo "Test #5: -a outFile.txt 'If dolphins could code, they would program in C' - File Expected '$expected_output_5c' but got: $newOutput_5b"
    fi
  else
    eval "$failFormat"
    echo "Test #5: -a outFile.txt 'If dolphins could code, they would program in C' - File Expected '$expected_output_5b' but got: $newOutput_5b"
  fi
else
  eval "$failFormat"
  echo "Test #5: -a outFile.txt 'If dolphins could code, they would program in C' - Console Expected '$expected_output_5a' but got: $newOutput_5a"
  returnStatus=1
fi

echo

./a$fileExtension -r outFile.txt > /dev/null 2>&1

if [ $? -eq 0 ] ; then
  eval "$passFormat"
  echo "Pass: Program exited zero"
else
  eval "$failFormat"
  echo "Fail: Program did not exit zero"
  returnStatus=1
fi

output_6=$(./a$fileExtension -r outFile.txt 2>&1)

# don't worry about extra whitespace in the output
newOutput_6=""
while read line
do
  newOutput_6=$newOutput_6$(echo "$line" | xargs)
done <<< "$output_6"

expected_output_6a="File read. Contents:"
expected_output_6b="I C, therefore I am"
expected_output_6c="If dolphins could code, they would program in C"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_6a" <<< "$newOutput_6"; then
  if grep -q "$expected_output_6b" <<< "$newOutput_6"; then
    if grep -q "$expected_output_6c" <<< "$newOutput_6"; then
      eval "$passFormat"
      echo "Test #6: -r outFile.txt - Pass: Console Output is correct"
    else
      eval "$failFormat"
      echo "Test #6: -r outFile.txt - Console Expected '$expected_output_6c' but got: $newOutput_6"
    fi
  else
    eval "$failFormat"
    echo "Test #6: -r outFile.txt - Console Expected '$expected_output_6b' but got: $newOutput_6"
  fi
else
  eval "$failFormat"
  echo "Test #6: -r outFile.txt - Console Expected '$expected_output_6a' but got: $newOutput_6"
  returnStatus=1
fi

echo

rm ./outFile.txt

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