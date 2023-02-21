const { User } = require('..');

module.exports = async () => {
	User.create({
		username: 'guest',
		email: 'guest@gmail.com',
		password: '$2a$10$rHRlCrt0FOW08Gz/co.5JeTxDtXt2sVg481DeAjKAyW4vLD8Zdm3u', // guest
	});
	User.create({
		username: 'test',
		email: 'test@gmail.com',
		password: '$2a$10$aTrcVvzmJgfjvG1VnkmRmee9sl/WUcni6w7pM5bx4Iwymq0VDXRTO', // test
	});
	User.create({
		username: 'joaquin',
		email: 'joaquingaloppo@gmail.com',
		password: '$2a$10$QMJkJ8ySp4x9r3RdKwTeD.bO/9w6rCJWA5850OW9ITpHY51ASC1E6', // galoppo
	});
	User.create({
		username: 'admin',
		email: 'admin@gmail.com',
		password: '$2a$10$XfiAuULAKTxJUStk8eJjx.wXUh.H7SwZrEVt67SFEUPxFdJiejj1.', // admin
	});
	User.create({
		username: 'nolinks',
		email: 'nolinks@gmail.com',
		password: '$2a$10$XfiAuULAKTxJUStk8eJjx.wXUh.H7SwZrEVt67SFEUPxFdJiejj1.', // admin
	});
};
