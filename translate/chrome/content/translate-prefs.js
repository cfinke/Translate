function PGTranslate_prefs(){
  this.prefBranch = null;
  
  // pref values
  this.PREF_CONTEXTMENU_ENABLED     = "translate.displayContextMenu"; // oops, sidebar?
  this.PREF_TOOLMENU_ENABLED        = "translate.displayToolMenu";
  this.PREF_LANGUAGE        = "translate.userlanguage";
}

PGTranslate_prefs.prototype.getPrefBranch = function(){
  if (!this.prefBranch){ 
    this.prefBranch = Components.classes['@mozilla.org/preferences-service;1'];
    this.prefBranch = this.prefBranch.getService();
    this.prefBranch = this.prefBranch.QueryInterface(Components.interfaces.nsIPrefBranch);
  }
  
  return this.prefBranch;
}

PGTranslate_prefs.prototype.setBoolPref = function(aName, aValue){
  var myPrefs = this.getPrefBranch();
  
  myPrefs.setBoolPref(aName, aValue);
}


PGTranslate_prefs.prototype.getBoolPref = function(aName){
  var myPrefs = this.getPrefBranch();
  var rv = null;

  try{
    rv = myPrefs.getBoolPref(aName);
  } catch (e){
  
  }
  
  return rv;
}

PGTranslate_prefs.prototype.setIntPref = function(aName, aValue){
  var myPrefs = this.getPrefBranch();
  
  myPrefs.setIntPref(aName, aValue);
}


PGTranslate_prefs.prototype.getIntPref = function(aName){
  var myPrefs = this.getPrefBranch();
  var rv = null;

  try{
    rv = myPrefs.getIntPref(aName);
  } catch (e){
  
  }
  
  return rv;
}

PGTranslate_prefs.prototype.setCharPref = function(aName, aValue){
  var myPrefs = this.getPrefBranch();
  
  myPrefs.setCharPref(aName, aValue);
}


PGTranslate_prefs.prototype.getCharPref = function(aName){
  var myPrefs = this.getPrefBranch();
  var rv = null;

  try{
    rv = myPrefs.getCharPref(aName);
  } catch (e){
  
  }
  
  return rv;
}