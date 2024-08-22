const { sum, generateError, fetchData } = require("./index.js");
test("Test 1: adds 1+2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Test 2: adds 2+2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});

test("Test 3: array add element", () => {
  const data = [1, 2, 3, 4];
  data.push(55);
  expect(data).toEqual([1, 2, 3, 4, 55]);
});

test("Test 4: object remove key test", () => {
  const data = {
    age: 24,
    dept: "Node JS",
  };
  delete data["dept"];
  expect(data).toEqual({ age: 24 });
});

test("Test 5: sum is not 3", () => {
  expect(sum(2, 2)).not.toBe(3);
});

test("Test 6: each element should be more than 4", () => {
  [1, 2, 3, 4].forEach((elem) => {
    expect(elem).not.toBeGreaterThan(4);
  });
});

test("Test 7: element should be null", () => {
  expect(null).toBeNull();
});

test("Test 8: element should be undefined", () => {
  expect(undefined).toBeUndefined();
});

test("Test 9: element should be true", () => {
  expect(true).toBeTruthy();
});

test("Test 10: element should be false", () => {
  expect(false).toBeFalsy();
});

test("Test 11: Two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeLessThanOrEqual(4);
  expect(value).toBeLessThan(5);
});

test("Test 12: 'Rahul' does not contain 'k'", () => {
  const inputString = "Rahul";
  expect(inputString).not.toMatch(/k/);
});

test("Test 13: 'Rahul' does contain 'Ra'", () => {
  const inputString = "Rahul";
  expect(inputString).toMatch(/Ra/);
});

test("Test 14: 'Rahul' does contain 'Ra'", () => {
  const inputString = "Rahul";
  expect(inputString).toMatch(/Ra/);
});

test("Test 15: Array containing target element = Node JS", () => {
  const techs = ["Angular JS", "Node JS", "React JS"];
  expect(techs).toContain("Node JS");
});

test("Test 16: Error occured", () => {
  expect(() => generateError()).toThrow();
});

test("Test 17: Error occured with specific error message", () => {
  expect(() => generateError()).toThrow("An error occurred"); //exact match
  expect(() => generateError()).toThrow(/An error occurred/); //regexp pattern match
});

test("Test 18: Promise test", () => {
  return fetchData().then((data) => {
    expect(data).toBe("Data received");
  });
});

test("Test 19: Async await test", async () => {
  const data = await fetchData();
  expect(data).toBe("Data received");
});

test("Test 20: Async await test with resolve reject", async () => {
  await expect(fetchData()).resolves.toBe("Data received");
  // await expect(fetchData()).rejects.toMatch(Error);
});

test("Test 21: Test array length", () => {
  const data = [1, 2, 3, 4, 5];
  expect(data).toHaveLength(5);
});

//create forEach function
const forEach = (items, callback) => {
  for (const item of items) {
    callback(item);
  }
};

//mock the callback function
const mockCallback = jest.fn((eachElem) => eachElem * 3);

test("Test 22: Test mock callback on forEach", () => {
  const inputArr = [2, 3]; //expected [6, 9]
  forEach(inputArr, mockCallback);

  //test whether the callback function is called same as input array length
  expect(mockCallback.mock.calls).toHaveLength(inputArr.length);

  //test whether the first callback is 2
  expect(mockCallback.mock.calls[0][0]).toBe(2);

  //test whether the second callback is 3
  expect(mockCallback.mock.calls[1][0]).toBe(3);

  //test whether the first callback result is 6
  expect(mockCallback.mock.results[0].value).toBe(6);

  //test whether the first callback result is 9
  expect(mockCallback.mock.results[1].value).toBe(9);

  //test whether the sum of first and second callback result is 15
  expect(
    mockCallback.mock.results[0].value + mockCallback.mock.results[1].value
  ).toBe(15);
});

const myMockFunc1 = jest.fn();
const myMockFunc2 = jest.fn();

test("Test 23: Test instances length of the each mock callback functions", () => {
  const mock1Instance1 = new myMockFunc1();
  const mock1Instance2 = new myMockFunc1();

  const mock2Instance1 = new myMockFunc2();
  const mock2Instance2 = new myMockFunc2();
  const mock2Instance3 = new myMockFunc2();

  expect(myMockFunc1.mock.instances.length).toBe(2);
  expect(myMockFunc2.mock.instances.length).toBe(3);
});

test("Test 24: Mock return value test", () => {
  myMockFunc2.mockReturnValueOnce(false).mockReturnValueOnce(false);
  const filteredArray = [1, 3].filter((elem) => myMockFunc2(elem));
  expect(filteredArray).toHaveLength(0);
});
