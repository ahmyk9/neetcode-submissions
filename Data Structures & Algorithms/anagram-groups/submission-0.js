class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

  const map = new Map();

  for (const word of strs) {
    // Sort characters in the word to form the key
    const key = word.split('').sort().join('');

    // If key doesn't exist, initialize it with an empty array
    if (!map.has(key)) {
      map.set(key, []);
    }

    // Push the current word into the correct group
    map.get(key).push(word);
  }

  // Convert the map values into an array
  return Array.from(map.values());
    }
}
