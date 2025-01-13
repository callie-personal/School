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
48
74
-6
EOF

if [ $? -eq 1 ] ; then
  eval "$passFormat"
  echo "Pass: Program exited with correct error code"
else
  eval "$failFormat"
  echo "Fail: Program did not exit with correct error code"
  returnStatus=1
fi

output_1=$(./a$fileExtension <<'EOF'
48
74
-6
EOF
)
expected_output_1="You cannot enter negative grades."

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_1" <<< "$output_1"; then
  eval "$passFormat"
  echo "Test #1 Negative Input - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #1 Negative Input - Expected '$expected_output_1' but got: $output_1"
  returnStatus=1
fi

echo

./a$fileExtension > /dev/null 2>&1 <<'EOF'
88
67
99
107
EOF

if [ $? -eq 1 ] ; then
  eval "$passFormat"
  echo "Pass: Program exited with correct error code"
else
  eval "$failFormat"
  echo "Fail: Program did not exit with correct error code"
  returnStatus=1
fi

output_2=$(./a$fileExtension <<'EOF'
88
67
99
107
EOF
)
expected_output_2="You cannot enter grades above 100."

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_2" <<< "$output_2"; then
  eval "$passFormat"
  echo "Test #2 High Input - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #2 High Input - Expected '$expected_output_2' but got: $output_2"
  returnStatus=1
fi

echo

./a$fileExtension > /dev/null 2>&1 <<'EOF'
92
75
88
79
84
99
5
EOF

if [ $? -eq 0 ] ; then
  eval "$passFormat"
  echo "Pass: Program exited zero"
else
  eval "$failFormat"
  echo "Fail: Program did not exit zero"
  returnStatus=1
fi

output_3=$(./a$fileExtension <<'EOF'
92
75
88
79
84
99
5
EOF
)

expected_output_3="Grade 5: 84"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_3" <<< "$output_3"; then
  eval "$passFormat"
  echo "Test #3 Grade 5 = 84 - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #3 Grade 5 = 84 - Expected '$expected_output_3' but got: $output_3"
  returnStatus=1
fi

output_4=$(./a$fileExtension <<'EOF'
92
75
88
79
84
99
1
EOF
)
expected_output_4="Grade 1: 92"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_4" <<< "$output_4"; then
  eval "$passFormat"
  echo "Test #4 Grade 1 = 92 - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #4 Grade 1 = 92 - Expected '$expected_output_4' but got: $output_4"
  returnStatus=1
fi

expected_output_5="Your average for the term is: 86.2"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_5" <<< "$output_4"; then
  eval "$passFormat"
  echo "Test #5 Term Average - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #5 Term Average - Expected '$expected_output_5' but got: $output_4"
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