function printPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let line = "";

    for (let j = 0; j < i; j++) {
      line += (i + j) % 2 + " ";
    }

    console.log(line.trim());
  }
}

printPattern(6);