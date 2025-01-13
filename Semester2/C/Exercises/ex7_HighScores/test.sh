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

./a$fileExtension > /dev/null 2>&1 <<'EOF'
User1
111
1
1
2011
User2
222
2
2
2012
User3
333
3
3
2013
Q
EOF

if [ $? -eq 0 ] ; then
  eval "$passFormat"
  echo "Pass: Program exited zero"
else
  eval "$failFormat"
  echo "Fail: Program did not exit zero"
  returnStatus=1
fi

output=$(./a$fileExtension <<'EOF'
User1
111
1
1
2011
User2
222
2
2
2012
User3
333
3
3
2013
Q
EOF
)

newOutput=""
while read line
do
  newOutput=$newOutput$(echo "$line" | xargs)
done <<< "$output"

expected_output_1="High Scores"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_1" <<< "$newOutput"; then
  eval "$passFormat"
  echo "Test #1 Banner Message - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #1 Banner Message - Expected '$expected_output_1'"
  returnStatus=1
fi

expected_output_2="User1 111 1/1/2011"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_2" <<< "$newOutput"; then
  eval "$passFormat"
  echo "Test #2 User1 - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #2 User1 - Expected '$expected_output_2'"
  returnStatus=1
fi

expected_output_3="User2 222 2/2/2012"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_3" <<< "$newOutput"; then
  eval "$passFormat"
  echo "Test #3 User2 - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #3 User2 - Expected '$expected_output_3'"
  returnStatus=1
fi

expected_output_4="User3 333 3/3/2013"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_4" <<< "$newOutput"; then
  eval "$passFormat"
  echo "Test #4 User3 - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #4 User3 - Expected '$expected_output_4'"
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