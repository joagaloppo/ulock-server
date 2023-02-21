const app = require('./app');
const { db } = require('./database');

const userSeeder = require('./database/seeders/user');
const linkSeeder = require('./database/seeders/link');

app.listen(4000, async () => {
	try {
		await db.sync({ force: true });
		console.log('\x1b[36m%s\x1b[0m', '\nServer running on port 4000\n');
		userSeeder();
		linkSeeder();
	} catch (err) {
		if (err) throw new Error(err);
	}
});
