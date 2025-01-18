{
    // 
    function countWordOccurrences(str: string, word: string):number{
        const convertWords = str.toLowerCase().split(' ')
        return convertWords.filter(w=>w===word.toLowerCase()).length;
    }
    const wordCount = countWordOccurrences("I love typescript","typescript");
    console.log(wordCount);


    // 
}