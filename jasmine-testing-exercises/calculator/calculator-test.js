it("should calculate the monthly rate correctly", function () {
  values = {
    amount: 12000,
    years: 10,
    rate: 4.5,
  };
  expect(calculateMonthlyPayment(values)).toEqual("124.37");
});

it("should return a result with 2 decimal places", function () {
  values = {
    amount: 12000,
    years: 10,
    rate: 3.57,
  };
  expect(calculateMonthlyPayment(values)).toEqual("119.06");
});

it("should handle higher amounts", () => {
  values = {
    amount: 25000000,
    years: 10,
    rate: 5.67,
  };
  expect(calculateMonthlyPayment(values)).toEqual("273426.42");
});
