//Trie data structure - for sake of autocomplete algorithm

class TrieNode {
	boolean children;
	boolean endOfWord;

	constructor (c, e) {
		this.children = c;
		this.endOfWord = e;
	}
}

