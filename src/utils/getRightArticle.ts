export default function getRightArticle(word: string): string {
  // Check if the word starts with a vowel
  if (/^[aeiouAEIOU]/.test(word)) {
    return "An";
  } else {
    return "A";
  }
}
