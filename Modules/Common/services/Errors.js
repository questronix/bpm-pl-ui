module.exports = {
	get: function (tag) {
		var errors = {
			MISSING_INVALID_PARAMS: {
				status: 400,
				error: {
					code: -1,
					message: 'Missing/invalid parameters.',
					params: []
				}
			},
			INTERNAL_SERVER_ERROR: {
				status: 500,
				error: {
					code: -2,
					message: 'Internal server error.'
				}
			},
			INVALID_CREDENTIALS: {
				status: 403,
				error: {
					code: -3,
					message: 'Username or Password is incorrect.'
				}
			},
			UNAUTHORIZED: {
				status: 401,
				error: {
					code: -5,
					message: 'Unauthorized'
				}
			},			
			NOT_FOUND: {
				status: 404,
				error: {
					code: -6,
					message: 'Not Found'
				}
			},
			CLOUDANT_ERROR: {
				status: 400,
				error: {
					code: -7,
					message: 'There is a problem with cloudant store.'
				}
			},
			NO_AFFECTED_ROWS: {
				status: 400,
				error: {
					code: -8,
					message: 'No affected rows.'
				}
			},
			NO_USER_SESSION: {
				status: 401,
				error: {
					code: -9,
					message: 'There is no session for this user.'
				}
			},
			DUPLICATE_RECORD: {
				status: 409,
				error: {
					code: -10,
					message: 'Data already exists.'
				}
			},
			JWT_TOKEN_ERROR: {
				status: 400,
				error:{
					code: -11,
					message: 'There is a problem with Token in creating the token.'
				}
			},
			JWT_TOKEN_VERIFY_ERROR: {
				status: 400,
				error:{
					code: -12,
					message: 'Token is malformed or already been used.'
				}
			},
			NO_ACCESS_TOKEN: {
				status: 404,
				error: {
					code: -13,
					message: 'Access token not found.'
				}
			}
		};
		return errors[tag];
	},
	raise: function (e, details) {
		var error = JSON.parse(JSON.stringify(this.get(e)));
		if(details) error.error.details = details;
		return error;
	}
};