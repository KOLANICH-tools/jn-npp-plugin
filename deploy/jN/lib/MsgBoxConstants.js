MessageBoxConstants={
	//buttons
	MB_OK:0,
	MB_OKCANCEL:1,
	MB_ABORTRETRYIGNORE:2,
	MB_YESNOCANCEL:3,
	MB_YESNO:4,
	MB_RETRYCANCEL:5,
	MB_CANCELTRYCONTINUE:6,
	MB_HELP:0x4000,
	//icons
	MB_ICONERROR:0x10,
	MB_ICONQUESTION:0x20,
	MB_ICONEXCLAMATION:0x30,
	MB_ICONINFORMATION:0x40,
	//defaultButtons
	MB_DEFBUTTON:function(num){return (num-1)<<16;},
	//modality
	MB_APPLMODAL:0x0,
	MB_SYSTEMMODAL:0x1000,
	MB_TASKMODAL:0x2000,
	
	//other modifiers
	MB_SETFOREGROUND:0x10000,
	MB_DEFAULT_DESKTOP_ONLY:0x20000,

	MB_RIGHT:0x80000,
	MB_RTLREADING:0x100000,

	MB_TOPMOST:0x40000,
	MB_SERVICE_NOTIFICATION:0x200000,
	buttons:{
		IDOK:1,
		IDCANCEL:2,
		IDABORT:3,
		IDRETRY:4,
		IDIGNORE:5,
		IDYES:6,
		IDNO:7,
		IDTRYAGAIN:10,
		IDCONTINUE:11
	}
};