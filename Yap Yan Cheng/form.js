window.onload = setForm;

function setForm() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("The form is tested,click ok to submit data.");
      return true;   
   }
}