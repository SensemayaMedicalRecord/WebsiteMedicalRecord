package com.sensemaya.website;

import org.junit.Test;
import org.mockito.Mockito;

import static org.junit.Assert.assertFalse;
import static org.mockito.Mockito.*;

import com.sensemaya.website.auth.AuthenticateApplication;
import com.sensemaya.website.auth.AuthenticatorInterface;

public class AuthenticatorApplicationTest {

	@Test
	public void testAuthenticate(){
		AuthenticatorInterface autenthicatorMock;
		AuthenticateApplication authenticator;
		String userName = "mottaman";
		String password = "paupau123";
		
		autenthicatorMock = Mockito.mock(AuthenticatorInterface.class);
		authenticator = new AuthenticateApplication(autenthicatorMock);
		
		when(autenthicatorMock.authenticationUser(userName, password))
			.thenReturn(false);
		
		boolean actual = authenticator.authenticate(userName, password);
		verify(autenthicatorMock).authenticationUser(userName, password);
		//verify(autenthicatorMock).authenticationUser(userName, "not the original password");
		
		assertFalse(actual);
	}
	
}

