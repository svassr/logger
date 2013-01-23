var logger = function(globalShortcut, active){

  function init(){
		this.active = active || true;
		globalShortcut = globalShortcut || true;

		if ( globalShortcut ) {
			window.log		= log;
			window.info		= info;
			window.warn		= warn;
			window.dump		= dump;
			window.group	= group;
			window.groupEnd	= groupEnd;
		}
	}
	function testconsole(){
		if (typeof window.console!='undefined'){return true;}
		else{return false;}
	}
	function log(args) {
		if (testconsole() && typeof window.console.log != 'undefined' && active) {
			switch(arguments.length ){
                case 1: console.log(arguments[0]); break;
                case 2: console.log(arguments[0], arguments[1] ); break;
                case 3: console.log(arguments[0], arguments[1], arguments[2] ); break;
                case 4: console.log(arguments[0], arguments[1], arguments[2], arguments[3] ); break;
				default: console.log(arguments); break;
			}
		}
	}
	function info(msg) {
		if (testconsole() && typeof window.console.info != 'undefined' && active) {
			switch(arguments.length){
                case 1: console.info(arguments[0]); break;
                case 2: console.info(arguments[0], arguments[1] ); break;
                case 3: console.info(arguments[0], arguments[1], arguments[2] ); break;
                case 4: console.info(arguments[0], arguments[1], arguments[2], arguments[3] ); break;
				default: console.info(arguments); break;
			}
		}else{this.log(msg);}
	}
	function warn(msg) {
		if (testconsole() && typeof window.console.warn != 'undefined' && active) {
			switch(arguments.length){
                case 1: console.warn(arguments[0]); break;
                case 2: console.warn(arguments[0], arguments[1] ); break;
                case 3: console.warn(arguments[0], arguments[1], arguments[2] ); break;
                case 4: console.warn(arguments[0], arguments[1], arguments[2], arguments[3] ); break;
				default: console.warn(arguments); break;
			}
		}else{this.log(msg);}
	}
	function dump(arr, str){
		if (this.active) {
			try{console.groupCollapsed('dump_var '+str+' :');}catch(e){}
			this.log(arr);
/*
//			for(var i in arr){
//				this.log('\t'+i+':'+arr[i]);
//				if(typeof arr[i] == 'array' ){
//					this.var_dump(arr[i])
//				}
//			}
*/
			try{console.groupEnd();}catch(e){}
		}
	}
	function group(title){
		if (active) {
			try{console.groupCollapsed(title+' : ');}catch(e){}
		}
	}
	function groupEnd(){
		if (active) {
			try{console.groupEnd();}catch(e) {}
		}
	}

	init();

	return {
		active: active,
		log : log,
		info : info,
		warn : warn,
		dump : dump,
		group : group,
		groupEnd : groupEnd
	};
}();
