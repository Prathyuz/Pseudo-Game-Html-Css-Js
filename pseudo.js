function box01() {
  let cell = document.getElementById("cell01");
  let a1 = cell.value;

  if (a1 != "3") {
    cell.value = "";
  } else {
    cell.disabled = true;
  }
  checkwin();
}

function box04() {
  let cell = document.getElementById("cell04");
  let a1 = cell.value;

  if (a1 != "1") {
    cell.value = "";
  } else {
    cell.disabled = true;
  }
  checkwin();
}

function box06() {
  let cell = document.getElementById("cell06");
  let a1 = cell.value;

  if (a1 != "1") {
    cell.value = "";
  } else {
    cell.disabled = true;
  }
  checkwin();
}

function box07() {
  let cell = document.getElementById("cell07");
  let a1 = cell.value;

  if (a1 != "3") {
    cell.value = "";
  } else {
    cell.disabled = true;
  }
  checkwin();
}

function box08() {
  let cell = document.getElementById("cell08");
  let a1 = cell.value;

  if (a1 != "4") {
    cell.value = "";
  } else {
    cell.disabled = true;
  }
  checkwin();
}

function box09() {
  let cell = document.getElementById("cell09");
  let a1 = cell.value;

  if (a1 != "1") {
    cell.value = "";
  } else {
    cell.disabled = true;
  }
  checkwin();
}

function box11() {
  let cell = document.getElementById("cell11");
  let a1 = cell.value;

  if (a1 != "4") {
    cell.value = "";
  } else {
    cell.disabled = true;
  }
  checkwin();
}

function box13() {
  let cell = document.getElementById("cell13");
  let a1 = cell.value;

  if (a1 != "4") {
    cell.value = "";
  } else {
    cell.disabled = true;
  }
  checkwin();
}

function box14() {
  let cell = document.getElementById("cell14");
  let a1 = cell.value;

  if (a1 != "3") {
    cell.value = "";
  } else {
    cell.disabled = true;
  }
  checkwin();
}

function box16() {
  let cell = document.getElementById("cell16");
  let a1 = cell.value;

  if (a1 != "2") {
    cell.value = "";
  } else {
    cell.disabled = true;
  }
  checkwin();
}

function checkwin() {
  if (
    document.getElementById("cell01").value === "3" &&
    document.getElementById("cell04").value === "1" &&
    document.getElementById("cell06").value === "1" &&
    document.getElementById("cell07").value === "3" &&
    document.getElementById("cell08").value === "4" &&
    document.getElementById("cell09").value === "1" &&
    document.getElementById("cell11").value === "4" &&
    document.getElementById("cell13").value === "4" &&
    document.getElementById("cell14").value === "3" &&
    document.getElementById("cell16").value === "2"
  ) {
    alert();
  }
}

function alert() {
  document.getElementById("overpopup").style.display("block");
}

function restart() {
  document.getElementById("cell01").value = "";
  document.getElementById("cell04").value = "";
  document.getElementById("cell06").value = "";
  document.getElementById("cell07").value = "";
  document.getElementById("cell08").value = "";
  document.getElementById("cell09").value = "";
  document.getElementById("cell11").value = "";
  document.getElementById("cell13").value = "";
  document.getElementById("cell14").value = "";
  document.getElementById("cell16").value = "";

  document.getElementById("cell01").disabled = false;
  document.getElementById("cell04").disabled = false;
  document.getElementById("cell06").disabled = false;
  document.getElementById("cell07").disabled = false;
  document.getElementById("cell08").disabled = false;
  document.getElementById("cell09").disabled = false;
  document.getElementById("cell11").disabled = false;
  document.getElementById("cell13").disabled = false;
  document.getElementById("cell14").disabled = false;
  document.getElementById("cell16").disabled = false;
}
