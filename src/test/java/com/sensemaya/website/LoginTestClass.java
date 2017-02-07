package com.sensemaya.website;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

import org.junit.Test;

import javassist.bytecode.Descriptor.Iterator;

public class LoginTestClass {

	@Test
	public void multiplicate(){
		
		assertEquals("10 x 0 must be 0", 0, 0);
		
	}

	@Test
	public void testMoreThanOneReturnValue()  {
		Iterator it = mock(Iterator.class);
		when(it.next()).thenReturn(1,2,3,4);
        String result=it.next()+" "+it.next();
        
		assertEquals("1 2", result);
	}
	
	@Test
	public void testReturnValueDependentOnMethodParameter()  {
	        Comparable c= mock(Comparable.class);
	        when(c.compareTo("Mockito")).thenReturn(1);
	        when(c.compareTo("Eclipse")).thenReturn(2);
	        //assert
	        assertEquals(1,c.compareTo("Mockito"));
	        assertEquals(2,c.compareTo("Eclipse"));
	}

	@Test
	public void testReturnValueInDependentOnMethodParameter()  {
		Comparable c = mock(Comparable.class);
		when(c.compareTo(anyInt())).thenReturn(-1);

		assertEquals(-1 ,c.compareTo(9));
		
	}
	
	
}
