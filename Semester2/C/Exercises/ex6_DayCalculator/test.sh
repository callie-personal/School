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
2022
1
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
2022
1
EOF
)

expected_output_1="That month has/had 31 days"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_1" <<< "$output_1"; then
  eval "$passFormat"
  echo "Test #1 Year 2022 Month 1 - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #1 Year 2022 Month 1 - Expected '$expected_output_1' but got: $output_1"
  returnStatus=1
fi

./a$fileExtension > /dev/null 2>&1 <<'EOF'
2019
11
EOF

echo

if [ $? -eq 0 ] ; then
  eval "$passFormat"
  echo "Pass: Program exited zero"
else
  eval "$failFormat"
  echo "Fail: Program did not exit zero"
  returnStatus=1
fi

output_2=$(./a$fileExtension <<'EOF'
2019
11
EOF
)
expected_output_2="That month has/had 30 days"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_2" <<< "$output_2"; then
  eval "$passFormat"
  echo "Test #2 Year 2019 Month 11 - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #2 Year 2019 Month 11 - Expected '$expected_output_2' but got: $output_2"
  returnStatus=1
fi

echo

./a$fileExtension > /dev/null 2>&1 <<'EOF'
2022
2
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
2022
2
EOF
)
expected_output_3="That month has/had 28 days"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_3" <<< "$output_3"; then
  eval "$passFormat"
  echo "Test #3 Year 2022 Month 2 - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #3 Year 2022 Month 2 - Expected '$expected_output_3' but got: $output_3"
  returnStatus=1
fi

echo

./a$fileExtension > /dev/null 2>&1 <<'EOF'
2020
2
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
2020
2
EOF
)
expected_output_4="That month has/had 29 days"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_4" <<< "$output_4"; then
  eval "$passFormat"
  echo "Test #4 Year 2020 Month 2 - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #4 Year 2020 Month 2 - Expected '$expected_output_4' but got: $output_4"
  returnStatus=1
fi

echo

./a$fileExtension > /dev/null 2>&1 <<'EOF'
10005
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

output_5=$(./a$fileExtension <<'EOF'
10005
8
EOF
)
expected_output_5="Bad year"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_5" <<< "$output_5"; then
  eval "$passFormat"
  echo "Test #5 Year 10005 Month 8 - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #5 Year 10005 Month 8 - Expected '$expected_output_5' but got: $output_5"
  returnStatus=1
fi

echo

./a$fileExtension > /dev/null 2>&1 <<'EOF'
2022
-5
EOF

if [ $? -eq 1 ] ; then
  eval "$passFormat"
  echo "Pass: Program exited with correct error code"
else
  eval "$failFormat"
  echo "Fail: Program did not exit with correct error code"
  returnStatus=1
fi

output_6=$(./a$fileExtension <<'EOF'
2022
-5
EOF
)
expected_output_6="Bad month"

# Use contains so we ignore additional output or input prompts
if grep -q "$expected_output_6" <<< "$output_6"; then
  eval "$passFormat"
  echo "Test #6 Year 2022 Month -5 - Pass: Output is correct"
else
  eval "$failFormat"
  echo "Test #6 Year 2022 Month -5 - Expected '$expected_output_6' but got: $output_6"
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