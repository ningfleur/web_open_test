function validateEmail(email) {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    return true
  }else if(email === ""){
    return undefined;
  }else{
   return false;
  }
}

function validatePhone(phone){
	if(/^[09]{2}\d{8}$/.test(phone)){
		return true;
	}else if(phone === ""){
    return undefined;
  }else{
		return false;	
	}
}

function toThousands(x) {
  let parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}