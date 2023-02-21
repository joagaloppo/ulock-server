const { Link } = require('..');

module.exports = async () => {
	Link.create({
		slug: 'abcde',
		stepLink: 'https://www.instagram.com/leomessi',
		targetLink: 'https://www.mediafire.com/file/1j2k3l4m5n6o7p8/abcde.mp4/file',
		userId: 1,
	});
	Link.create({
		slug: 'qwerty',
		stepLink: 'https://www.facebook.com/photo.php?fbid=1234567890',
		targetLink: 'https://www.dropbox.com/s/abcdefg/qwerty.docx?dl=1',
		userId: 1,
	});

	Link.create({
		slug: 'xyz123',
		stepLink: 'https://twitter.com/username/status/9876543210',
		targetLink: 'https://www.example.com/files/xyz123.zip',
		userId: 1,
	});

	Link.create({
		slug: 'hello',
		stepLink: 'https://www.linkedin.com/in/john-doe-12345',
		targetLink: 'https://www.mediafire.com/file/hello.mp3/file',
		userId: 1,
	});

	Link.create({
		slug: 'world',
		stepLink: 'https://www.instagram.com/p/abc123/',
		targetLink: 'https://www.google.com/drive/folders/1234567890',
		userId: 2,
	});

	Link.create({
		slug: 'random',
		stepLink: 'https://www.tiktok.com/@username/video/1234567890123456789',
		targetLink: 'https://www.example.com/files/random.pdf',
		userId: 2,
	});

	Link.create({
		slug: 'testlink',
		stepLink: 'https://www.reddit.com/r/funny/comments/abcde/test_post/',
		targetLink: 'https://www.dropbox.com/s/1234567890/testlink.txt?dl=1',
		userId: 2,
	});

	Link.create({
		slug: 'example',
		stepLink: 'https://www.pinterest.com/pin/1234567890/',
		targetLink: 'https://www.mediafire.com/file/example.zip/file',
		userId: 3,
	});

	Link.create({
		slug: 'download',
		stepLink: 'https://www.facebook.com/username/posts/1234567890',
		targetLink: 'https://www.example.com/files/download.mp4',
		userId: 3,
	});

	Link.create({
		slug: 'link123',
		stepLink: 'https://www.instagram.com/stories/username/1234567890',
		targetLink: 'https://www.google.com/drive/folders/1234567890',
		userId: 3,
	});

	Link.create({
		slug: 'file123',
		stepLink: 'https://twitter.com/username/status/1234567890123456789',
		targetLink: 'https://www.mediafire.com/file/123456/file123.pdf/file',
		userId: 4,
	});
};
