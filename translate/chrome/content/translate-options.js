var PGTranslate_prefs;
function pg_prefs_load()
{
	PGTranslate_prefs = new PGTranslate_prefs();
	initListBox();
	document.getElementById("translate.prefs.language.selection").selectedIndex = PGTranslate_prefs.getIntPref(PGTranslate_prefs.PREF_LANGUAGE);
	document.getElementById("translate.prefs.contextMenu").checked = PGTranslate_prefs.getBoolPref(PGTranslate_prefs.PREF_CONTEXTMENU_ENABLED);     
	document.getElementById("translate.prefs.displayTools").checked = PGTranslate_prefs.getBoolPref(PGTranslate_prefs.PREF_TOOLMENU_ENABLED);
}

function initListBox()
{
	var listbox = document.getElementById("translate.prefs.language.selection");
	var menupopup = document.createElement("menupopup");
	var listitem ;
	for(var i = 0;i < PGTRANSLATE_LANGUAGEPAIRS.length ; i++)
	{	
		listitem = document.createElement("menuitem");
		listitem.setAttribute("label",PGTRANSLATE_LANGUAGEUNICODE[i]);
		listitem.setAttribute("value",i);
		menupopup.appendChild(listitem);
	}
	listbox.appendChild(menupopup);
}

function pg_prefs_accept()
{
	PGTranslate_prefs.setBoolPref(PGTranslate_prefs.PREF_CONTEXTMENU_ENABLED, document.getElementById("translate.prefs.contextMenu").checked)
	PGTranslate_prefs.setBoolPref(PGTranslate_prefs.PREF_TOOLMENU_ENABLED, document.getElementById("translate.prefs.displayTools").checked);
	PGTranslate_prefs.setIntPref(PGTranslate_prefs.PREF_LANGUAGE, document.getElementById("translate.prefs.language.selection").selectedIndex);

	if(window.opener.opener)
	{
		window.opener.opener.gPGTranslate.initMenus();
	}else
	{
		window.opener.gPGTranslate.initMenus();
	}

}