/**
Given a string containing digits from 2-9 inclusive,
return all possible letter combinations that the number could represent.
Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below.
Note that 1 does not map to any letters.

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Input: digits = ""
Output: []

Input: digits = "2"
Output: ["a","b","c"]

 * @param {*} digits
 * @returns
 * avg : 95ms
 */
const solution = (digits) => {
  function dfs(index, curStr) {
    if (curStr.length === digits.length) {
      return result.push(curStr.join(""));
    }

    //현재 위치한 자릿수를 기준으로
    for (let i = index; i < digits.length; i++) {
      //
      for (let char of phone[digits[i]]) {
        dfs(i + 1, [...curStr, char]);
      }
    }
  }

  const phone = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const result = [];
  if (!phone) return [];
  dfs(0, []);
};

solution("23");
