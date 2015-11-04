export default class Album {
	constructor(id, artist, name, genre) {
		this.id = id;
		this.artist = artist;
		this.name = name || artist;
		this.genre = genre || "Metal";
	}

	get title() {
		return this.artist + " - " + this.name;
	}
}