function groupAnagrams(words) {
    const anagramGroups = {};

    words.forEach(word => {
        const sortedWord = word.split('').sort().join('');
        if (anagramGroups[sortedWord]) {
            anagramGroups[sortedWord].push(word);
        } else {
            anagramGroups[sortedWord] = [word];
        }
    });

    const result = Object.values(anagramGroups);
    return result;
}


//input
const words = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];

//output
const anagramGroups = groupAnagrams(words);
console.log(anagramGroups);
