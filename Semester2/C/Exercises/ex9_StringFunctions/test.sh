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
That is not dead which can eternal lie
T
ETERNAL
EOF

if [ $? -eq 0 ] ; then
  eval "$passFormat"
  echo "Pass: Program exited zero"
else
  eval "$failFormat"
  echo "Fail: Program did not exit zero"
  returnStatus=1
fi

output_1=$(./a$fileExtension <<'EOF'
That is not dead which can eternal lie
T
ETERNAL
EOF
)

expected_output_1="There are 4 T letters in 'That is not dead which can eternal lie'"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_1" <<< "$output_1"; then
  eval "$passFormat"
  echo "Test #1 Lovecraft 1 Letters - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #1 Lovecraft 1 Letters - Expected '$expected_output_1' but got: $output_1"
  returnStatus=1
fi

expected_output_2="ETERNAL in 'That is not dead which can eternal lie': true"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_2" <<< "$output_1"; then
  eval "$passFormat"
  echo "Test #2 Lovecraft 1 Word - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #2 Lovecraft 1 Word - Expected '$expected_output_2' but got: $output_1"
  returnStatus=1
fi

echo

./a$fileExtension > /dev/null 2>&1 <<'EOF'
and with strange aeons even death may die
a
jasmine
EOF

if [ $? -eq 0 ] ; then
  eval "$passFormat"
  echo "Pass: Program exited zero"
else
  eval "$failFormat"
  echo "Fail: Program did not exit zero"
  returnStatus=1
fi

output_2=$(./a$fileExtension <<'EOF'
and with strange aeons even death may die
a
jasmine
EOF
)
expected_output_3="There are 5 A letters in 'and with strange aeons even death may die'"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_3" <<< "$output_2"; then
  eval "$passFormat"
  echo "Test #3 Lovecraft 2 Letters - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #3 Lovecraft 2 Letters - Expected '$expected_output_3' but got: $output_2"
  returnStatus=1
fi

expected_output_4="jasmine in 'and with strange aeons even death may die': false"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_4" <<< "$output_2"; then
  eval "$passFormat"
  echo "Test #4 Lovecraft 2 Word - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #4 Lovecraft 2 Word - Expected '$expected_output_4' but got: $output_2"
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