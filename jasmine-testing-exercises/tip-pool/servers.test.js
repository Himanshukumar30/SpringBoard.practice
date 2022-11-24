describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  afterEach(() => {
    serverNameInput.value = "";
  });
});

describe("submitServerInfo tests", () => {
  it("should not return server name when input is empty", () => {
    serverNameInput.value = "";
    expect(submitPaymentInfo()).toEqual();
  });
});

describe("updateServerTable tests", () => {
  it("should update serverTable with serverInfo", () => {
    submitServerInfo();
    updateServerTable();

    let curTdList = document.querySelectorAll("#serverTable tbody tr td");

    expect(curTdList.length).toEqual(3);
    expect(curTdList[0].innerText).toEqual("Alice");
    expect(curTdList[1].innerText).toEqual("$0.00");
    expect(curTdList[2].innerText).toEqual("X");
  });
});
