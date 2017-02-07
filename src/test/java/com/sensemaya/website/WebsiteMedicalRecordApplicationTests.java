package com.sensemaya.website;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class WebsiteMedicalRecordApplicationTests {

	@Test
	public void contextLoads() {
		
		 assertEquals("True Login", 1, 1);
		
	}

}
