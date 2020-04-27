class TrieNode {
	boolean children;
	boolean endOfWord;
	
	constructor(c, eOfWord) {
		children = c;
		endOfWord = eOfWord;
	}

	get children() {
		return this.children;
	}
	get endOfWord() {
		return this.endOfWord;
	}
	set children(c) {
		this.children = c;
	}
	set endOfWord(e) {
		this.endOfWord = e;
	}
	describe() {
		if (children && !endOfWord) {
			return "This node has children and is not the end of the word";
		}
		else if (endOfWord && !children) {
			return "This node does not have children and is the end of the word";
		}
		else {
			return "Incorrect data entry/processing"; //this just shouldn't happen
		}
	}
}
