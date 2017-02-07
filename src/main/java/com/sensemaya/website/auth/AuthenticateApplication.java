package com.sensemaya.website.auth;

public class AuthenticateApplication {

	private AuthenticatorInterface authenticator;
	
	public AuthenticateApplication(AuthenticatorInterface authenticator){
		this.authenticator = authenticator;
	}
	
	public boolean authenticate(String userName, String password){
		boolean authenticated;
		
		authenticated = this.authenticator.authenticationUser(userName, password);
		
		return authenticated;
	}
	
}
