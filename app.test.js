const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {

	var db = {
		saveUser: expect.createSpy()
	};
	app.__set__('db', db);


	it('should call the spy correctly', () => {
		var spy = expect.createSpy();
		spy();
		expect(spy).toHaveBeenCalled();
	}); 
	
	it('should call the spy with the proper args', () => {
		var spy = expect.createSpy();
		spy('Scooby', 42, true);
		expect(spy).toHaveBeenCalledWith('Scooby', 42, true);
	}); 

	it('should call saveUser with user object', () => {
		var email = 'somemail@example.com';
		var password = '123456';

		app.handleSignup(email, password);
		expect(db.saveUser).toHaveBeenCalledWith({email, password});
	});


});