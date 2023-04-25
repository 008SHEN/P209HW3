const origArray = [2, 3, 4];

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("square-value").value = origArray[0];
    document.getElementById("cube-value").value = origArray[1];
    document.getElementById("fourth-value").value = origArray[2];
  });

  function s() {
	const square = origArray.map(num => num * num);

    document.getElementById("square-value").value = square[0];
    document.getElementById("cube-value").value = square[1];
    document.getElementById("fourth-value").value = square[2];
}
document.getElementById("c").addEventListener("click", function() {
    const cube = origArray.map(function(num) {
        return num*num*num;
    });

    document.getElementById("square-value").value = cube[0];
    document.getElementById("cube-value").value = cube[1];
    document.getElementById("fourth-value").value = cube[2];
    });

    document.getElementById("f").addEventListener("click",ToTheFourth );
    function ToTheFourth() {
        const fourth = origArray.map(function(num) {
            return num*num*num*num;
        });
        document.getElementById("square-value").value = fourth[0];
        document.getElementById("cube-value").value = fourth[1];
        document.getElementById("fourth-value").value = fourth[2];
    }