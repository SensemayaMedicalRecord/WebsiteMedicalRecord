package com.sensemaya.website.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("token")
public class TokenController {
	
	@RequestMapping(path={"","/"}, method=RequestMethod.POST)
	public void createTokkenRequest(HttpServletResponse response){
		
		response.setStatus(400);
		
	}
	
	
}
