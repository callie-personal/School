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
24
16
Y
21
35
N
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
24
16
Y
21
35
N
EOF
)
expected_output_1a="The HCD of 24 and 16 is: 8"
expected_output_1b="The HCD of 21 and 35 is: 7"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_1a" <<< "$output_1"; then
  eval "$passFormat"
  echo "Test #1 - 24 & 16 - Continue: Yes - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #1 - 24 & 16 - Continue: Yes - Expected '$expected_output_1a' but got: $output_1"
  returnStatus=1
fi

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_1b" <<< "$output_1"; then
  eval "$passFormat"
  echo "Test #2 - 21 & 35 - Continue: No - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #2 - 21 & 35 - Continue: No - Expected '$expected_output_1b' but got: $output_1"
  returnStatus=1
fi

echo

./a$fileExtension > /dev/null 2>&1 <<'EOF'
14
0
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
14
0
EOF
)
expected_output_2="Sorry, you cannot enter 0"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_2" <<< "$output_2"; then
  eval "$passFormat"
  echo "Test #3 14 & 0 - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #3 14 & 0 - Expected '$expected_output_2' but got: $output_2"
  returnStatus=1
fi

echo

./a$fileExtension > /dev/null 2>&1 <<'EOF'
0
8
EOF

if [ $? -eq 1 ] ; then
  eval "$passFormat"
  echo "Pass: Program exited with correct error code"
else
  eval "$failFormat"
  echo "Fail: Program did not exit with correct error code"
  returnStatus=1
fi

output_3=$(./a$fileExtension <<'EOF'
0
8
EOF
)
expected_output_3="Sorry, you cannot enter 0"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_3" <<< "$output_3"; then
  eval "$passFormat"
  echo "Test #4 0 & 8 - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #4 0 & 8 - Expected '$expected_output_3' but got: $output_3"
  returnStatus=1
fi

echo

./a$fileExtension > /dev/null 2>&1 <<'EOF'
13
39
N
EOF

if [ $? -eq 0 ] ; then
  eval "$passFormat"
  echo "Pass: Program exited zero"
else
  eval "$failFormat"
  echo "Fail: Program did not exit zero"
  returnStatus=1
fi

output_4=$(./a$fileExtension <<'EOF'
13
39
N
EOF
)
expected_output_4="The HCD of 13 and 39 is: 13"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_4" <<< "$output_4"; then
  eval "$passFormat"
  echo "Test #5 13 & 39 - Continue: No - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #5 13 & 39 - - Continue: No - Expected '$expected_output_4' but got: $output_4"
  returnStatus=1
fi

echo

./a$fileExtension > /dev/null 2>&1 <<'EOF'
8
-1
EOF

if [ $? -eq 1 ] ; then
  eval "$passFormat"
  echo "Pass: Program exited with correct error code"
else
  eval "$failFormat"
  echo "Fail: Program did not exit with correct error code"
  returnStatus=1
fi

output_5=$(./a$fileExtension <<'EOF'
8
-1
EOF
)
expected_output_5="Sorry, you cannot enter a negative number"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_5" <<< "$output_5"; then
  eval "$passFormat"
  echo "Test #6 8 & -1 - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #6 8 & -1 - Expected '$expected_output_5' but got: $output_5"
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