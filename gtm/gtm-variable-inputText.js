function() {
  var returnValue = undefined;
  
  var inputTextItem = document.getElementById("sentimentAnalysisText");
  if (inputTextItem != undefined) {
  	if (inputTextItem.value.length > 0) {
    	returnValue = inputTextItem.value.trim();
    }
  }
  
  return returnValue;
}
