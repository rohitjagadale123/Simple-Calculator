let result = document.getElementById('result');

function insertNumber(num) {
    if (result.value == '0') {
        result.value = num;
      } else {
        result.value += num;
      }
    }
    
    function insertSymbol(sym) {
      result.value += sym;
    }
    
    function calculate() {
      try {
        result.value = eval(result.value);
      } catch (err) {
        result.value = 'Error';
      }
    }
    
    function clearResult() {
      result.value = '0';
    }
    
    function backspace() {
      result.value = result.value.slice(0, -1);
    }
    