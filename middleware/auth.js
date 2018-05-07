export default function ({store, req, route}) {
	store.commit('update_route',route.path)
	if(req.headers.cookie){
		let carr = {};
	    req.headers.cookie && req.headers.cookie.split(';').forEach(function( Cookie ) {
	        let parts = Cookie.split('=');
	        carr[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
	    });		
	    if(carr['tuch_client_session_user']){
	    	store.commit('login',JSON.parse(unescape(carr['tuch_client_session_user'])));	
	    }
	}
}