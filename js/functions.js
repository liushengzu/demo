/**
 * 这是一个加载项自定义函数
 * @customfunction
 * @param {string} arg0 - 支持字符串参数
 * @param {number} arg1 - 支持数值参数
 * @param {boolean} arg2 - 支持bool参数
 * @returns {number} - 可以设置返回值类型
 */
function custom_function(arg0, arg1, arg2, arg3, arg4) {
  let argAndType = (arg) => `${arg}: ${typeof arg}`;
  let argAndTypeList = [arg0, arg1, arg2, arg3, arg4].map(argAndType);
  let message = `这是一个加载项自定义函数(${argAndTypeList.join(", ")})`;
  console.log(message);
  return message;
}
/**
 * 这是一个加载项自定义函数
 * @customfunction
 * * @param {string} a- 支持整数、小数
 * @param {number} b - 支持整数、小数
 */
function add_two_numbers(a, b) {
  return a + b;
}
/**
 * 这是一个加载项自定义函数
 * @customfunction
 * * @param {string} a- 支持整数、小数
 * @param {number} b - 支持整数、小数
 */

function jianFa(a, b) {
  return a - b;
}
/**
 * 这是一个加载项自定义函数
 * @customfunction
 * * @param {string} a- 支持整数、小数
 * @param {number} b - 支持整数、小数
 */
function substraction(a, b) {
  return a * b;
}
/**
 * 这是一个加载项自定义函数
 * @customfunction
 * * @param {string} a- 支持整数、小数
 * @param {number} b - 支持整数、小数
 */ function shengFa(a, b) {
  return a / b;
}
let res1 = add_two_numbers(1, 2);
let res = shengFa(1, 2);
console.log(res);

console.log(res1);

// 加 add
// 减法 Subtraction
// 数学乘法 multiplication
// 除法 division
// 余数 modulus
// 绝对值 absolute
// 平方 square
// 开方 square root
// 三角函数 trigonometric functions
// 指数函数 exponential functions
// 对数函数 logarithmic functions
// 随机数 random number
// 最大值 max
// 最小值 min
// 平均值 average
// 阶乘 factorial
// 阶乘函数 factorial function
// 阶乘函数的反函数 inverse factorial function
// 组合数 combination
// 排列数 permutation
// 组合数函数 combination function
// 排列数函数 permutation function
// 斐波那契数列 fibonacci sequence
// 黄金分割率 golden ratio
// 黄金比 golden section
// 勾股定理 pythagorean theorem
// 余弦 cosine
// 正弦 sine
// 余切 tangent
// 反正切 inverse tangent
// 三角函数的反函数 inverse trigonometric functions
// 双曲函数 hyperbolic functions
// 双曲正弦 hyperbolic sine
// 双曲余弦 hyperbolic cosine
// 双曲正切 hyperbolic tangent
// 双曲余切 hyperbolic cotangent
// 双曲函数的反函数 inverse hyperbolic functions
// 复数数学 complex number math
// 复数的加法 addition
// 复数的减法 subtraction
// 复数的乘法 multiplication
// 复数的除法 division
// 复数的平方 square
// 复数的共轭 conjugate
// 复数的模 modulus
// 复数的幂 power
// 复数的导数 derivative
// 复数的积分 integral
/**
 * 这是一个加载项自定义函数
 * @customfunction
 * * @param {string} a- 支持整数、小数
 * @param {number} b - 支持整数、小数
 */
function modulus(a, b) {
  return a % b;
}
/**
 * 这是一个加载项自定义函数
 * @customfunction
 * * @param {string} a- 支持整数、小数
 * @param {number} b - 支持整数、小数
 */
function square(a) {
  return a * a;
}
/**
 * 这是一个加载项自定义函数
 * @customfunction
 * * @param {string} a- 支持整数、小数
 * @param {number} b - 支持整数、小数
 */
function cube(a) {
  return a * a * a;
}
