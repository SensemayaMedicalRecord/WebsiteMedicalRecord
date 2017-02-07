package com.sensemaya.website.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class UserController {

	@RequestMapping(path={"","/"}, method=RequestMethod.POST)
	public String login(){
		
		
		
		return "";
	}
	
}
